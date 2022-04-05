import axios from 'axios';
import  {LOGIN_REQUIEST,LOGIN_SUCCESS,LOGIN_FAILURE} from '../Constant/constant';

export const logindetails = (formValues) =>async(dispatch)=>{
   
    dispatch({type:LOGIN_REQUIEST,payload:formValues})
   await axios.post("https://plastic-liger-55.loca.lt//login",formValues)
   .then((result)=>{

        console.log("result",result)
        dispatch({type:LOGIN_SUCCESS,payload:result})
        localStorage.getItem("user");
       
    }).catch((error)=>{
        dispatch({type:LOGIN_FAILURE,payload:formValues})  
        console.log("error",error)
    })
  
   
    
   
}
    