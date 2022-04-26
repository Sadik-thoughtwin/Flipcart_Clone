import axios from "axios";
import { SELLER_REQUEST,SELLER_SUCCESS,SELLER_FAILURE } from "../Constant/constant"
import { API_BASE_URL } from "../../config/env.config";
export const signupsellerAction =(getData)=> async(dispatch) =>{

    dispatch({type:SELLER_REQUEST,payload:true})
    

     await axios.post(`${API_BASE_URL}/v1/seller/register`,getData).then((resp)=>{
        console.log("seller",resp)
        dispatch({type:SELLER_SUCCESS,payload:resp})
    }).catch((error)=>{
        console.log("sellerError",error)
        dispatch({type:SELLER_FAILURE,payload:error})
    })
}
