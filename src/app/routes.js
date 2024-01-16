import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {AboutPage} from '../modules/about/pages/about.page';
import {ContactPage} from '../modules/contact/pages/contact.page';
import { HomePage } from "../modules/home/pages/home.page";
import { BrandPage } from "../modules/brand/pages/brand.page";
import { AppLayout } from "./app-layout";
import { OfferPage } from "../modules/offers/pages/offer.page";
import { LoginPage } from "../modules/auth/pages/login.page";
import { RegisterPage } from "../modules/auth/pages/register.page";

export const AppRoutes = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/brands" element={<BrandPage/>}/>
                    <Route path="/offers" element={<OfferPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}