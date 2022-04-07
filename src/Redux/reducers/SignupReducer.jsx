import { SIGN_OPEN} from "../Constant/constant";

const initialState = {
  signUpModal: false,
};

export const signupReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_OPEN:
      return {
        signUpModal: action.payload,
      }
    default:
      return state;
  }
};


