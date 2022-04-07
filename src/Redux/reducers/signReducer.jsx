import { SIGN_REQUIEST,SIGN_SUCCESS,SIGN_FAILURE } from "../Constant/constant";
const initialState= {
   load:false,
   success:"",
   error:""
}
export const signReducer = (state=initialState,action) =>{
    switch (action.type) {
        case SIGN_REQUIEST:
          return {
            ...state,
            loading: true,
          };
        case SIGN_SUCCESS:
           return  { ...state,
                loading:true,
                success: action.payload,
          }
        case SIGN_FAILURE:
          console.log("action", action.payload);
          return {
            loading: false,
            error: action.payload,
          };
    
        default:
          return state;
      }

    
}