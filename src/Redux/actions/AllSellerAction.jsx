import axios from "axios";
import {
  FETCH_SELLER_REQUEST,
  FETCH_SELLER_SUCCESS,
  FETCH_SELLER_FAILURE,
} from "../Constant/constant";

export const AllSellerAction = () => async (dispatch) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU1MjU0ZGYwOWYzYjBiNDg2ZDA5NjgiLCJpYXQiOjE2NDk3NDc1MTAsImV4cCI6MTY1MTA0MzUxMH0.iqBv-r_SGZ3dWrlj1sPysKdrPybyq7nWC7N4va_gZEU";

  const newResult = await axios.get(
    "https://friendly-liger-94.loca.lt/api/login/getall",
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({ type: FETCH_SELLER_SUCCESS, payload: newResult.data });
};
