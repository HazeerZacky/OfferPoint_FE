import React,{ useState }  from "react";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { BreadCrumb } from "../../../components/breadcrumb";
import authService from '../auth-service';
import {isUndefinedNullOrEmpty} from '../../../core/utils/checking';
import { REDUX_ACTION } from "../../../core/enums/reduxActionEnum";

export const LoginPage = ()=>{
    const [login, setLogin] = useState({UserName: '', Password: ''});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChange = (value = {}) => {
        const constructValues = {...login, ...value};
        setLogin(constructValues);
    } 

    const onSave = ()=>{
        authService.loginUser(login).then((data)=>{
            if(isUndefinedNullOrEmpty(data)){
                console.log('userName or  password error');
            }
            else{
                saveUserToRedux(data);
                navigate('/');
            }
        });
    }

    const saveUserToRedux = (user)=>{
        dispatch({
            type: REDUX_ACTION.SET_USER,
            payload: {...user}
        });
    }

    return (
        <div>
            <BreadCrumb childTitle="login" moduleTitle="Login"/>

            <div class="page-section">
                <div class="container">
                    <div className="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="contact-form px-lg-5">

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" >User Name</label>
                                        <input type="email" value={login.UserName} onChange={(e)=> onChange({UserName: e.target.value})} class="form-control"/>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black">Password</label>
                                        <input type="text" value={login.Password} onChange={(e)=> onChange({Password: e.target.value})} class="form-control"/>
                                    </div>
                                </div>

                                <div class="row form-group mt-4">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary" onClick={onSave}>Login</button>
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