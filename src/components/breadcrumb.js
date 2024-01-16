import React from "react";
import {NavLink} from 'react-router-dom';

export const BreadCrumb = (props)=>{
    return (
        <div class="container">
            <div class="page-banner">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-md-6">
                        <nav aria-label="Breadcrumb">
                            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
                                <li class="breadcrumb-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li class="breadcrumb-item active">{props.childTitle}</li>
                            </ul>
                        </nav>
                        <h1 class="text-center">{props.moduleTitle}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}