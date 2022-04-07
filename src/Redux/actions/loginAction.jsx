import axios from "axios";
import {
  LOGIN_REQUIEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Constant/constant";

export const logindetails = (formValues) => async (dispatch) => {
  
  dispatch({ type: LOGIN_REQUIEST, payload: true });
  await axios
    .post("https://kind-dodo-44.loca.lt/login", formValues)
    .then((result) => {
      console.log("result", result.data);
      dispatch({ type: LOGIN_SUCCESS, payload: result.data });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE, payload: error });
      
    });
};
