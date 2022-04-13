import axios from "axios";
import { SELLER_REQUEST,SELLER_SUCCESS,SELLER_FAILURE } from "../Constant/constant"

export const signupsellerAction =(getData)=> async(dispatch) =>{

    dispatch({type:SELLER_REQUEST,payload:true})
    
    await axios.post("https://friendly-liger-94.loca.lt/api/users",getData).then((resp)=>{
        console.log("seller",resp)
        dispatch({type:SELLER_SUCCESS,payload:resp})
    }).catch((error)=>{
        console.log("sellerError",error)
        dispatch({type:SELLER_FAILURE,payload:error})
    })
}
