import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BreadCrumb } from "../../../components/breadcrumb";
import { BrandRegisterModel} from '../../../core/models/brand-register.model';
import authService from '../auth-service';

export const RegisterPage = ()=>{
    const [brandAccount, setBrandAccount] = useState(new BrandRegisterModel());
    const navigate = useNavigate();

    const onChange = (value = {}) => {
        const constructValues = {...brandAccount, ...value};
        setBrandAccount(constructValues);
    } 

    const onSave = ()=>{
        authService.registerBrand(brandAccount).then((data)=>{
            navigate('/login');
        });
    }

    return (
        <div>
            <BreadCrumb childTitle="register" moduleTitle="Create a new brand account"/>

            <div class="page-section">
                <div class="container">
                    <div className="row align-items-center">
                        <div class="col-lg-12">
                            <div class="contact-form px-lg-5">

                                <div class="row form-group">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <label class="text-black" >User Name</label>
                                        <input type="text" class="form-control" value={brandAccount.UserName} onChange={(e)=> onChange({UserName : e.target.value})}/>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black">Brand Name</label>
                                        <input type="text"  class="form-control" value={brandAccount.BrandName} onChange={(e)=> onChange({BrandName : e.target.value})}/>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" >Email</label>
                                        <input type="email" class="form-control" value={brandAccount.Email} onChange={(e)=> onChange({Email : e.target.value})}/>
                                    </div>
                                </div>
                        
                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" >Password</label>
                                        <input type="email" class="form-control" value={brandAccount.Password} onChange={(e)=> onChange({Password : e.target.value})}/>
                                    </div>
                                </div>
                        
                                <div class="row form-group">                        
                                    <div class="col-md-12">
                                        <label class="text-black">Confirm Password</label>
                                        <input type="text" class="form-control" value={brandAccount.ConfirmPassword} onChange={(e)=> onChange({ConfirmPassword : e.target.value})}/>
                                    </div>
                                </div>
                        
                                <div class="row form-group mt-4">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary" onClick={onSave}>Register</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}