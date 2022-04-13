import { FETCH_SELLER_REQUEST,FETCH_SELLER_SUCCESS,FETCH_SELLER_FAILURE
} from "../Constant/constant";
const initialState= {
    sellerList:[{
        
    }]
}

export const AllSellerReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_SELLER_REQUEST :return {
            ...state,
            status:true
        }
        case FETCH_SELLER_SUCCESS :return {
            ...state,
            sellerList:action.payload
        }
        case FETCH_SELLER_FAILURE :return {
            ...state,
            status:false
        }
        default :return state
    }

}