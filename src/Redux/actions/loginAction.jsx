import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Constant/constant";

export const logindetails = (formValues) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: true });
  await axios
    .post(`${API_BASE_URL}/auth/user/login`, formValues, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then( async(result) => {
      await dispatch({ type: LOGIN_SUCCESS, payload: result.data });

      localStorage.setItem("token",result.data.accToken)

    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE, payload: error });
    });
};
