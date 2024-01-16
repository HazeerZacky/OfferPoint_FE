import React,{useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import { FileUpload } from "../../../components/file-upload";
import { OfferModel } from "../../../core/models/offer.model";
import { isUndefinedNullOrEmpty } from "../../../core/utils/checking";
import { FileAsBase64 } from "../../../core/utils/file";
import { MODULE_TYPE } from "../../../core/enums/ModuleTypeEnum";
import { FILE_USAGE_TYPE } from '../../../core/enums/FIleUsageTypeEnum';
import offerService from '../service';
import fileService from '../../../core/service/fileService';
import { CategorySelector } from "../../category/components/categorySelector";
import authService from '../../auth/auth-service';
import {useAuth} from '../../../core/hooks/useAuth';

export const OfferForm = (props)=>{
    const [offer, setOffer] = useState(new OfferModel());
    const [offerPictureFile, setOfferPictureFile] = useState(null);
    const [offerPicturePreview, setOfferPicturePreview] = useState();
    const isEdit = !isUndefinedNullOrEmpty(props.selectedId);
    const {user} = useAuth();
    
    useEffect(()=>{
        isEdit && fetchOffer();
    }, []);

    const onChange = (value = {}) => {
        const constructValues = {...offer, ...value};
        setOffer(constructValues);
    } 

    const onChangeFile = (file)=>{
        if(file){
            let fileModel = new FormData();
            fileModel.append('ModuleID', MODULE_TYPE.Offer);
            fileModel.append('FileUsageType', FILE_USAGE_TYPE.OfferPostImage);
            fileModel.append('File', file);
            setOfferPictureFile(fileModel);

            FileAsBase64(file).then((data)=> {
                setOfferPicturePreview(data);
            });
        }
    }

    const onRemoveSelectedPic = ()=>{
        setOfferPicturePreview(null);
        setOfferPictureFile(null);
    };

    const onSave = ()=>{

        (isEdit ? offerService.updateOffer(offer) : authService.getBrandIdByUserId(user.UserID).then((data)=> offerService.createOffer({...offer, BrandID: data.BrandID}))).then((data)=>{

            if(offerPictureFile){
                const fileToInsert = offerPictureFile;
                fileToInsert.append('ReferenceID', isEdit ? offer.OfferID : data.id);

                (isEdit ? fileService.removeFilesByModuleAndRefAndFileUsage(MODULE_TYPE.Offer, offer.OfferID, FILE_USAGE_TYPE.OfferPostImage) : Promise.resolve()).then(()=>{
                    fileService.createFile(fileToInsert).then((data)=>{
                        props.onClose();
                    });
                })
                
            }
            else{
                props.onClose();
            }

        });
        
    }

    const fetchOffer = ()=>{
        offerService.getOffer(props.selectedId).then((data)=>{
            data.StartDate = new Date(data.StartDate);
            data.EndDate = new Date(data.EndDate);
            onChange(data);
        })
    }

    return (
            <div className="container">
                <div class="row form-group">
                    <div class="col-md-6">
                        <label class="text-black" >Title</label>
                        <input type="text" class="form-control" value={offer.Title} onChange={(e)=> onChange({Title: e.target.value})}/>
                    </div>
                    <div class="col-md-6">
                        <label class="text-black" >PromoCode</label>
                        <input type="text" class="form-control" value={offer.PromoCode} onChange={(e)=> onChange({PromoCode: e.target.value})}/>
                    </div>
                </div>

                <div class="row form-group">
                    <div class="col-md-6 d-flex flex-column">
                        <label class="text-black" >Start Date</label>
                        <DatePicker selected={offer.StartDate} className="form-control" onChange={(date) => onChange({StartDate: date})}/>
                    </div>
                    <div class="col-md-6 d-flex flex-column">
                        <label class="text-black" >Expired Date</label>
                        <DatePicker selected={offer.EndDate} className="form-control" onChange={(date) => onChange({EndDate: date})}/>
                    </div>
                </div>

                <div class="row form-group">
                    <div class="col-md-6">
                        <label class="text-black" >Category</label>
                        <CategorySelector CategoryID={offer.CategoryID} onChange={(e) => onChange({CategoryID: e.target.value})}/>
                    </div>
                    <div class="col-md-6">
                        <label class="text-black" >Tags Eg - (newyear, ramazan)</label>
                        <input type="text" class="form-control" value={offer.Tags} onChange={(e)=> onChange({Tags: e.target.value})}/>
                    </div>
                </div>

                <div class="row form-group">
                    <div class="col-md-12">
                        <label class="text-black">Description</label>
                        <textarea type="text" class="form-control" rows={5} value={offer.Description} onChange={(e)=> onChange({Description: e.target.value})}></textarea>
                    </div>
                </div>

                <div class="row form-group">
                    <div class="col-md-6">
                        <label class="text-black">Select Offer Picture</label>
                        <FileUpload accept="image/*" onChange={(e)=> onChangeFile(e.target.files[0])}/>
                    </div>
                    {!isUndefinedNullOrEmpty(offerPicturePreview) &&
                        <div className="col-md-6">
                            <div>
                                <img className="w-100 h-auto mt-4" src={offerPicturePreview}/>
                            </div>
                            <button className="btn btn-danger mt-2" onClick={()=> onRemoveSelectedPic()}> <i class="fa fa-times" aria-hidden="true"></i> </button>
                        </div>
                    }
                </div>

                <div class="row form-group mt-4">
                    <div class="col-md-12 d-flex justify-content-end">
                        <button class="btn btn-secondary mr-2" onClick={props.onClose}>Cancel</button>
                        <button class="btn btn-primary" onClick={onSave}>Save</button>
                    </div>
                </div>
            </div>
    );
}