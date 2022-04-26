import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import {
 FETCH_SELLER_SUCCESS,
 } from "../Constant/constant";

export const AllSellerAction = (token) => async (dispatch) => {
  const newResult = await axios.get(`${API_BASE_URL}/v1/admin/getAllSeller`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  dispatch({ type: FETCH_SELLER_SUCCESS, payload: newResult.data });
};
