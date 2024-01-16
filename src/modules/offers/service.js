import axios from "axios";
import config from '../../core/config';
export default {
    createOffer,
    getAllFiltered,
    getOffer,
    updateOffer,
    removeOffer
};


function createOffer(offer){
    return axios.post(`${config.apiEndPoint}/api/OfferPoint/Offer/createOffer`, offer).then((res)=> res.data);
}

function updateOffer(offer){
    return axios.put(`${config.apiEndPoint}/api/OfferPoint/Offer/updateOffer`, offer).then((res)=> res.data);
}

function removeOffer(id){
    return axios.delete(`${config.apiEndPoint}/api/OfferPoint/Offer/removeOffer/${id}`).then((res)=> res.data);
}

function getAllFiltered(offerFilterModel){
    return axios.post(`${config.apiEndPoint}/api/OfferPoint/Offer/getAllFiltered`, offerFilterModel).then((res)=> res.data);
}

function getOffer(id){
    return axios.get(`${config.apiEndPoint}/api/OfferPoint/Offer/${id}`).then((res)=> res.data);
}