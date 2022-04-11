import axios from "axios"
import { LOGIN_SELLER_FAILURE,LOGIN_SELLER_SUCCESS} from "../Constant/constant"

export const loginsellerAction = (getData) =>async(dispatch)=>{
    dispatch({type:LOGIN_SELLER_FAILURE,payload:true})
    await axios.post("https://fluffy-goose-59.loca.lt/api/login",getData)
    .then((getResult)=>{
            dispatch({tyep:LOGIN_SELLER_SUCCESS,payload:getResult})
    }).catch((error)=>{
        dispatch({tyep:LOGIN_SELLER_SUCCESS,payload:error})
    })
}