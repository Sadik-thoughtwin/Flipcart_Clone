import {
  LOGIN_ADMIN_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILURE,
} from "../Constant/constant";
const initialState = {
  getRequests: false,
  success: "",
  error: "",
  loading:false,
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_REQUEST:
      return {
          ...state,
        loading: action.payload,
      };
    case LOGIN_ADMIN_SUCCESS:
      return {
        success: action.payload,
      };
    case LOGIN_ADMIN_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
