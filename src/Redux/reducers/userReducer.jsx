import { OPEN_MODEL } from "../Constant/constant";

const initialState = {
loginModal : false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODEL:
      return {
        loginModal: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
