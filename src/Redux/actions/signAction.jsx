import axios from "axios";
import {
  SIGN_REQUEST,
  SIGN_SUCCESS,
  SIGN_FAILURE,
} from "../Constant/constant";

export const signupdetail = (data) => async (dispatch) => {
  dispatch({ type: SIGN_REQUEST, payload: true });
  await axios
    .post("https://tame-rabbit-25.loca.lt/create", data)
    .then((responce) => {
     
      dispatch({ type: SIGN_SUCCESS, payload: responce.data });
    })
    .catch((error) => {
      dispatch({ type: SIGN_FAILURE, payload: error });
    });
};
