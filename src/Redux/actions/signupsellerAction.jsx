import axios from "axios";
import { SELLER_REQUEST,SELLER_SUCCESS,SELLER_FAILURE } from "../Constant/constant"

export const signupsellerAction =(getData)=> async(dispatch) =>{

    // const url = process.env.BASH_URL
    // console.log("URL",url)
    dispatch({type:SELLER_REQUEST,payload:true})
    
    await axios.post("https://strange-goat-74.loca.lt/auth/seller/register",getData).then((resp)=>{
        console.log("seller",resp)
        dispatch({type:SELLER_SUCCESS,payload:resp})
    }).catch((error)=>{
        console.log("sellerError",error)
        dispatch({type:SELLER_FAILURE,payload:error})
    })
}
