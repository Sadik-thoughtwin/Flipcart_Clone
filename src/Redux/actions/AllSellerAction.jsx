import axios from "axios";
import {
  FETCH_SELLER_REQUEST,
  FETCH_SELLER_SUCCESS,
  FETCH_SELLER_FAILURE,
} from "../Constant/constant";

export const AllSellerAction = (token) => async (dispatch) => {
  

  const newResult = await axios.get(
    "https://hard-moose-45.loca.lt/api/getAllSellers",
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({ type: FETCH_SELLER_SUCCESS, payload: newResult.data });
};
