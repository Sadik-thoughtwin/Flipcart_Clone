import axios from "axios";
import {
  LOGIN_SELLER_REQUEST,
  LOGIN_SELLER_FAILURE,
  LOGIN_SELLER_SUCCESS,
} from "../Constant/constant";
import { API_BASE_URL } from "../../config/env.config";

export const loginsellerAction = (getData) => async (dispatch) => {
  dispatch({ type: LOGIN_SELLER_REQUEST, payload: true });

  await axios
    .post(`${API_BASE_URL}/v1/seller/login`, getData)
    .then((getResult) => {
      dispatch({ type: LOGIN_SELLER_SUCCESS, payload: getResult });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_SELLER_FAILURE, payload: error });
    });
};
