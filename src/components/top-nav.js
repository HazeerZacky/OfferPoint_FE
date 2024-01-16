import React from "react";
import {NavLink, Link} from 'react-router-dom';
import AppLogo from '../assets/images/appLogoPng.png';

export const TopNavigation = (props)=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={AppLogo} className="w-auto" height={50}/>
                </Link>
    
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="navbar-collapse collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/offers" className="nav-link">Offers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/brands" className="nav-link">Brands</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>
                        {
                            /*
                            <li className="nav-item">
                            <button className="btn btn-primary ml-lg-2">Add Offer</button>
                        </li>
                            */
                        }
                        
                    </ul>
                </div>

            </div>
        </nav>
    );
}