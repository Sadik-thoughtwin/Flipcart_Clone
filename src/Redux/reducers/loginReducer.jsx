import  {LOGIN_REQUIEST,LOGIN_SUCCESS,LOGIN_FAILURE} from '../Constant/constant';
const initialState = {
   loading:false,
   error:'',
   success:false
}

export const loginReducer = (state=initialState,action) =>{
    switch(action.type){
        case LOGIN_REQUIEST: 
            return {
                ...state,
                loading:true,
                }
        case LOGIN_SUCCESS :
            return {
                ...state,
                loading:false,
                success:action.payload

            }
        case LOGIN_FAILURE :
            return {
                ...state,
                loading:true,
                error:action.payload
                
            }

        default : return  state
    }

}
