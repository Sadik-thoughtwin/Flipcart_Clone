import { LOGIN_SELLER_FAILURE,LOGIN_SELLER_SUCCESS,LOGIN_SELLER_FAILURE } from "../Constant/constant"
const initialState= {
    getRequest:false,
    success:"",
    error:""
}

export const loginsellerReducer =(state=initialState,action)=>{

    switch(action.type){
        case LOGIN_SELLER_FAILURE : return {
           
            getRequest:action.payload
        }
        case LOGIN_SELLER_SUCCESS : return {
           
            getSuccess:action.payload
        }
        case LOGIN_SELLER_FAILURE : return {
          
            error:action.payload
        }
        default :return state
    }
}