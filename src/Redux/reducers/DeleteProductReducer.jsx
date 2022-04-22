import { DELETE_PRODUCT_SUCCESS } 
from "../Constant/constant";
const initialState = {
     AllProduct:[]
    
            }
export const DeleteProductReducer =(state=initialState,action)=>{
    switch(action.type){
        
        case DELETE_PRODUCT_SUCCESS : 
        const id = action.payload
        return id
         default : return state;
    }

}