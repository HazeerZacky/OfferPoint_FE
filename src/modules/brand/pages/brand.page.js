import React from "react";
import { BreadCrumb } from "../../../components/breadcrumb";
import { BrandCard } from "../components/brandCard";

export const BrandPage = ()=>{
    return (
        <div>
            <BreadCrumb childTitle="brand" moduleTitle="Our Brands"/>
            <div class="page-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <BrandCard ActivePromotion={10} ExpirePromotion={15} isVerified={true} BrandImage="https://mypromo.azureedge.net/profiles/small/promo.lk-promo-efa46adc40384718bb8e32a353125bb3.jpg" BrandName="Keells" Description="Keells Super is one of the three largest supermarket chain in Sri Lanka for its the best place for shopping groceries and household needs." ContactNo="0758963254"/>
                        </div>
                        <div class="col-lg-4">
                            <BrandCard ActivePromotion={0} ExpirePromotion={0} isVerified={false} BrandImage="https://mypromo.azureedge.net/profiles/small/promo.lk-promo-5e1a84e5bab14eeeb1ce2ba69d935659.jpg" BrandName="Pizza Hut" Description="Pizza Hut, a subsidiary of Yum! Brands, is the largest pizza company in the world and home to Pan Pizza that offers a unique and family dining experience, while effectively capturing the palate of Sri Lankan consumers with innovative additions to their menu." ContactNo="0775311426"/>
                        </div>
                        <div class="col-lg-4">
                            <BrandCard ActivePromotion={2} ExpirePromotion={5} isVerified={true}BrandImage="https://mypromo.azureedge.net/profiles/small/promo.lk-promo-5d4282f5c8e34d3893b94adea0156b12.jpg" BrandName="FriMi" Description="Experience complete freedom with the first Digital Bank in Sri Lanka! FriMi is a combination of a digital bank, wallet & a payment system wrapped up in one app with a seamless registration process that will create a savings account with up to 7% interest." ContactNo="0745365514"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}