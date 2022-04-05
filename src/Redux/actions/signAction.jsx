import axios from "axios";
import { FETCH_REQUIEST } from "../Constant/constant";

export const signupdetail = (data) => async (dispatch) => {
  const api = "https://wise-lion-21.loca.lt/create";

  const getSign = await axios
    .post(api, data)
    .then((responce) => {
      console.log("getSign", responce.data.message);
    })
    .catch((error) => {
      console.log("error", error);
    });
  dispatch({ type: FETCH_REQUIEST, getSign });
};
