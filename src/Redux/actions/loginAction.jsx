import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Constant/constant";

export const logindetails = (formValues) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: true });
  await axios
    .post("https://strange-goat-74.loca.lt/auth/user/login", formValues)
    .then((result) => {
      dispatch({ type: LOGIN_SUCCESS, payload: result.data });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE, payload: error });
    });
};
