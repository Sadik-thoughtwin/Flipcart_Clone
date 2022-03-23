import { OPEN_MODEL } from "../Constant/constant";

const initialState = {
  openModel: false,
};

const userReducer=(state = initialState, action)=> {
  switch (action.type) {
    case OPEN_MODEL:
      return {
        ...state,
        openModel: action.payload,
        };
    default:
      return state;
  }
 }

export default userReducer;
