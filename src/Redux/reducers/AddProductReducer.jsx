import { ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE } 
from "../Constant/constant";
const initialState = {
    loadData:false,
    success:"",
    error:""
            }
export const AddProductReducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCT_REQUEST : 
        return {
            loadData:true
        }
        case ADD_PRODUCT_SUCCESS : 
        return {
            success
        }
        case ADD_PRODUCT_FAILURE : 
        return {
            error
        }

        default : return state;
    }

}