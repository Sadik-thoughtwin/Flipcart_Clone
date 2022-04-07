import {
  LOGIN_REQUIEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Constant/constant";
const initialState = {
  loading: false,
  error: "",
  success:"",
};

export const loginReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case LOGIN_REQUIEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
        console.log('action.payload',action.payload)
      return  { ...state,
            success: action.payload,
      }
    case LOGIN_FAILURE:
      console.log("action", action.payload);
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
