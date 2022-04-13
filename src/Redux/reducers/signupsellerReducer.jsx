import {
  SELLER_REQUEST,
  SELLER_SUCCESS,
  SELLER_FAILURE,
} from "../Constant/constant";

const initialState = {
  getData: false,
  result: "",
  geterror: "",
};

export const signupsellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELLER_REQUEST:
      return {
         
          getData:true,
          request:action.payload
      }
    case SELLER_SUCCESS:
      return {
        result:action.payload
      }
    case SELLER_FAILURE:
      return {
       
          getData:false,
          error:action.payload
      }

    default:
      return state;
  }
};
