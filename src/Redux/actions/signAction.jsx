import axios from "axios";
import { SIGN_REQUIEST,SIGN_SUCCESS,SIGN_FAILURE 
} from "../Constant/constant";


export const signupdetail = (data) => async (dispatch) => {
  dispatch({ type: SIGN_REQUIEST, payload: true });
  const api = "https://tame-rabbit-25.loca.lt/create";

  await axios.post(api, data)
    .then((responce) => {
      console.log("getSign", responce.data.message);
      dispatch({ type: SIGN_SUCCESS, payload: responce.data});
    })
    .catch((error) => {
      console.log("error", error);
      dispatch({ type: SIGN_FAILURE, payload: error });
    });
 };
