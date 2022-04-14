import axios from "axios";
import {
  LOGIN_SELLER_FAILURE,
  LOGIN_SELLER_REQUEST,
  LOGIN_SELLER_SUCCESS,
} from "../Constant/constant";

export const loginsellerAction = (getData) => async (dispatch) => {
  dispatch({ type: LOGIN_SELLER_REQUEST, payload: true });
  await axios
    .post("https://strange-goat-74.loca.lt/auth/seller/login", getData)
    .then((getResult) => {
     console.log("responce",getResult)
     localStorage.setItem("Admin-token",getResult.data.token)
      dispatch({ type: LOGIN_SELLER_SUCCESS, payload: getResult });
    })
    .catch((error) => {
     
      dispatch({ type: LOGIN_SELLER_FAILURE, payload: error });
    });
};
