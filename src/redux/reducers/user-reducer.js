import { REDUX_ACTION } from "../../core/enums/reduxActionEnum";

export const userReducer = (state = {}, action)=>{
    switch(action.type){
        case REDUX_ACTION.SET_USER:
            return {...state, ...action.payload};
        case REDUX_ACTION.GET_USER:
            return state;
        default:
            return state
    }
}
 