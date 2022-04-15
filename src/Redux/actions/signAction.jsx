import axios from "axios";
import { SIGN_REQUEST, SIGN_SUCCESS, SIGN_FAILURE } from "../Constant/constant";
import { API_BASE_URL } from "../../config/env.config";

export const signupdetail = (data) => async (dispatch) => {
  
  dispatch({ type: SIGN_REQUEST, payload: true });

  await axios
    .post(`${API_BASE_URL}/auth/user/register`, data)
    .then((responce) => {
      dispatch({ type: SIGN_SUCCESS, payload: responce.data });
    })
    .catch((error) => {
      dispatch({ type: SIGN_FAILURE, payload: error });
    });
};
