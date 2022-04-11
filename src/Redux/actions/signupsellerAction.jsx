import axios from "axios";
import { SELLER_REQUIEST,SELLER_SUCCESS,SELLER_FAILURE } from "../Constant/constant"

export const signupsellerAction =(getData)=> async(dispatch) =>{

    dispatch({type:SELLER_REQUIEST,payload:true})
    
    await axios.post("https://fluffy-goose-59.loca.lt/api/register",getData).then((resp)=>{
        console.log("seller",resp)
        dispatch({type:SELLER_SUCCESS,payload:resp})
    }).catch((error)=>{
        console.log("sellerError",error)
        dispatch({type:SELLER_FAILURE,payload:error})
    })
}