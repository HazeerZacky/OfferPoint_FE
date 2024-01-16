import config from '../config';

export const resolveImageURL = (fileName)=>{
    return `${config.staticFileEndPoint}/${fileName}`;
}