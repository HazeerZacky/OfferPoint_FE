import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BreadCrumb } from "../../../components/breadcrumb";
import { PopUp } from "../../../components/popup";
import { OfferForm } from "../components/offer.form";
import {resolveImageURL} from '../../../core/utils/url';
import offerService from '../service';
import { CategorySelector } from "../../category/components/categorySelector";
import {useAuth} from '../../../core/hooks/useAuth';
import moment from "moment";

const initialQuery = {

}

export const OfferPage = ()=>{
    const [showPopup, setShowPopup] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState(initialQuery);
    const [selectedId, setSelectedId] = useState(null);
    const {user} = useAuth();

    useEffect(()=>{
        fetchOffers();
    },[]);

    const fetchOffers = ()=>{
        offerService.getAllFiltered(query).then((data)=>{
            setItems(data);
        })
    }

    const closePopUp = ()=>{
        setShowPopup(false);
        fetchOffers();
    }

    const openPopUp = (id)=>{
        setShowPopup(true);
        setSelectedId(id);
    }

    const onRemoveOffer = (id)=>{
        offerService.removeOffer(id).then(()=>{
            fetchOffers();
        })
    }

    const renderOfferCard = (v, i)=>{
        const dateFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        return (
            <div class="col-lg-4 py-3" key={i}>
                <div class="card-blog position-relative">
                    <div class="header">
                        <div class="post-thumb">
                            <img src={resolveImageURL(v.FileName)} className="w-100 h-100" alt=""/>
                        </div>
                    </div>
                    <div class="body">
                        <h5 class="post-title">
                            <a href="#">{v.Title}</a>
                        </h5>
                        <div>
                            <Link to="/brands" className="badge badge-light p-1 border mb-2">{v.BrandName}</Link>
                        </div>
                        <div class="post-date d-flex justify-content-between flex-wrap">
                            <span>{moment(v.CreatedOn).fromNow()}</span>
                            <span>
                                <i class="fa fa-eye mr-1" aria-hidden="true"></i>
                                {v.ViewsCount}
                            </span>
                        </div>

                        <div class="d-flex flex-wrap offer-status">
                            {moment(v.EndDate).isSameOrAfter(moment(), 'day') ? <span className="text-success">active</span> : <span className="text-danger">expired</span>}
                        </div>

                        <div className="d-flex flex-wrap mt-2">
                            <button className="btn btn-warning mr-2" onClick={()=> openPopUp(v.OfferID)}>
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-danger" onClick={()=> onRemoveOffer(v.OfferID)}>
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 

    console.log('user', user);
    return (
        <div>
            <BreadCrumb childTitle="offers" moduleTitle="Offers"/>
            <div className="container-fluid p-2">
                <div className="row m-0">
                    <div className="col-md-2">
                        <div className="d-flex justify-content-center">
                            <img src="https://www.healthyads.com/wp-content/uploads/2019/01/300x1050-portrait-ad.jpg" className="w-auto h-100"/>
                        </div>
                    </div>
                    <div className="col-md-8 p-5">

                        <div class="d-flex justify-content-center">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <CategorySelector className="rounded-0"/>
                                </div>
                                <input type="text" class="form-control rounded-0" placeholder="Search..."/>
                            </div>
                            <div class="ml-3">
                                <button class="btn btn-light p-0 d-flex justify-content-center align-items-center h-100 border" style={{width: 100}}>Filter <i class="fa fa-filter ml-2" aria-hidden="true"></i></button>
                            </div>
                        </div>

                        <div className="d-flex pt-3 flex-wrap align-items-center">
                            <div class="form-group form-check mb-0 mr-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Upcomming Offers</label>
                            </div>

                            <div class="form-group form-check mb-0 mr-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
                                <label class="form-check-label" for="exampleCheck2">Expired Offers</label>
                            </div>

                            <div class="form-group form-check mb-0 mr-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck3"/>
                                <label class="form-check-label" for="exampleCheck3">My Offers</label>
                            </div>

                            <div class="form-group  mb-0">
                                <button className="btn btn-primary" onClick={()=> openPopUp(null)}>Add New Offer</button>
                            </div>
                            
                        </div>

                        <div className="container">
                            <div class="row my-5">
                                {items.map(renderOfferCard)}
                            </div>

                            <nav aria-label="Page Navigation">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active" aria-current="page">
                                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <div className="d-flex flex-column justify-content-center">
                            <img src="https://static.vecteezy.com/system/resources/previews/015/315/097/original/sale-promotion-design-template-for-boxing-day-text-giftbox-and-red-background-simpel-minamal-and-modern-style-white-red-and-green-use-for-banner-advert-and-ads-vector.jpg" className="w-auto h-auto"/>
                            <img src="https://gourmetads.com/wp-content/uploads/2019/02/300x1050-sodastream.jpg" className="w-auto h-100 mt-3"/>
                        </div>
                    </div>
                </div>
            </div>

            <PopUp show={showPopup} onClose={closePopUp} title="Add Offer">
                <OfferForm onClose={()=> closePopUp()} selectedId={selectedId}/>
            </PopUp>
        </div>
    );
}