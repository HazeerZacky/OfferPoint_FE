import axios from "axios";
import config from '../config';

export default {
    createFile,
    removeFilesByModuleAndRefAndFileUsage
};

function createFile(fileModelFormData){
    return axios.post(`${config.apiEndPoint}/api/OfferPoint/File/createFile`, fileModelFormData, {headers: {'Content-Type': 'multipart/form-data'}}).then((res)=> res.data);
}

function removeFilesByModuleAndRefAndFileUsage(ModuleID, ReferenceID, FileUsageType){
    return axios.delete(`${config.apiEndPoint}/api/OfferPoint/File/removeFile/${ModuleID}/${ReferenceID}/${FileUsageType}`).then((res)=> res.data);
}