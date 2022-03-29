import { DATADETAILS } from "../Constant/constant";
const isState = {
  productsDetails: [],
};
export const dataReducer = (state = isState, action) => {
  switch (action.type) {
    case DATADETAILS:
      const id = action.payload;
      return id;


    default:
      return state;
  }
};
