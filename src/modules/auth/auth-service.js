import axios from "axios";
import config from '../../core/config';
export default {
    registerBrand,
    loginUser,
    getBrandIdByUserId
};

function registerBrand(brandUser){
    return axios.post(`${config.apiEndPoint}/api/OfferPoint/User/registerBrandUser`, brandUser).then((res)=> res.data);
}

function loginUser(loginModel){
    return axios.post(`${config.apiEndPoint}/api/OfferPoint/User/loginUser`, loginModel).then((res)=> res.data);
}

function getBrandIdByUserId(id){
    return axios.get(`${config.apiEndPoint}/api/OfferPoint/Brand/getBrandIdByUserId/${id}`).then((res)=> res.data);
}