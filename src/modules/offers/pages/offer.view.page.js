import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../../components/breadcrumb";
import { Link, useParams } from "react-router-dom";
import offerService from '../service';
import {OfferFilterModel} from '../../../core/models/offer-filter-model';
import { resolveImageURL } from "../../../core/utils/url";
import moment from "moment";
import { isURL, isUndefinedNullOrEmpty } from "../../../core/utils/checking";

export const OfferViewPage = (props)=>{
    const {id} = useParams();
    const [offer, setOffer] = useState(null);
  
    useEffect(()=>{
        fetchOffer();
        offerService.updateOfferViews(atob(id));
    }, []);

    const fetchOffer = ()=>{
        offerService.getAllFiltered({...new OfferFilterModel(), OfferID: atob(id)}).then((data)=>{
            setOffer(data.Items.length ? data.Items[0] : {});
        })
    }

    return (
        <div>
            <BreadCrumb childTitle="offer view" parentTitle="offers" parentPath="/"/>
            {!isUndefinedNullOrEmpty(offer) &&
                <div class="page-section pt-2 offer-view-page">
                    <div class="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex flex-wrap">
                                <div className="row m-0 w-100 border p-3">
                                    <div className="col-md-4">
                                        <div class="post-thumb">
                                            <img src={resolveImageURL(offer.FileName)} className="max-height-100 max-width-100" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="p-3">
                                            <div className="mb-2"><span className="offer-title">{offer.Title}</span></div>
                                            <p className="text-justify mb-4">
                                                {offer.Description}
                                            </p>
                                            <div className="d-flex justify-content-end mb-2">
                                                <span className="text-dark">
                                                    <i class="fa fa-eye mr-2" aria-hidden="true"></i>
                                                    {offer.ViewsCount}
                                                </span>
                                            </div>

                                            <div className="d-flex flex-wrap mb-3" style={{fontSize:'1.3rem'}}>
                                                <span className="badge badge-light p-2 border mb-2 mr-3 text-secondary">
                                                    <i class="fa fa-building mr-2 text-danger" aria-hidden="true"></i>
                                                    {offer.BrandName}
                                                </span>
                                                <span className="badge badge-light p-2 border mb-2 mr-3 text-secondary">
                                                    <i class="fa fa-tag  mr-2 text-primary" aria-hidden="true"></i>
                                                    {offer.CategoryName}
                                                </span>
                                                <span class="badge badge-light p-2 border mb-2 mr-3 text-secondary"> 
                                                    <i class="fa fa-calendar mr-2 text-warning" aria-hidden="true"></i>
                                                    START :- {moment(offer.StartDate).format('ll')}
                                                </span>
                                                <span class="badge badge-light p-2 border mb-2 mr-3 text-secondary">
                                                    <i class="fa fa-calendar mr-2 text-warning" aria-hidden="true"></i>
                                                    END :- {moment(offer.EndDate).format('ll')}
                                                </span>
                                                <span class="badge badge-light p-2 border mb-2 mr-3 text-white bg-success d-flex flex-wrap w-auto text-wrap mt-2">
                                                    <i class="fa fa-bullhorn text-white m-2" aria-hidden="true"></i>
                                                    <span className="m-2">PROMO CODE :-</span> 
                                                    {isURL(offer.PromoCode) ? <a href={offer.PromoCode} target="_blank" className="text-white m-2">{offer.PromoCode}</a> : <span className="m-2">{offer.PromoCode}</span> }
                                                </span>
                                            </div>

                                            <div className="d-flex flex-wrap">
                                                {(offer.Tags ? offer.Tags.split(',') : []).map((v,i)=>{
                                                    return (
                                                        <Link key={i} to={`/?tag=${v}`} className="mr-2">#{v}</Link>
                                                    )
                                                })}
                                            </div>

                                            <div className="d-flex justify-content-end">
                                                <span className="text-dark">
                                                    posted on : {moment(offer.CreatedOn).format('ll')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}