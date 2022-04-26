import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Constant/constant";
const initialState = {
  loading: false,
  error: "",
  success: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return { ...state, loading: true, success: action.payload };
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case "logout":
      return {
        ...state,
        success: "",
      };
    default:
      return state;
  }
};
