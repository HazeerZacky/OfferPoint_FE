import axios from "axios";
import config from '../../core/config';

export default {
    getAllCategoryAsKeyValue
};

function getAllCategoryAsKeyValue(){
    return axios.get(`${config.apiEndPoint}/api/OfferPoint/Category/getAllCategoryAsKeyValue`).then((res)=> res.data);
}

