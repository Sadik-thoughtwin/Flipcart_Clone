import axios from "axios";

import { FETCH_REQUIEST } from "../../Constant/constant";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get(
    "http://localhost:5000/api/v1/products/product"
  );
  dispatch({ type: FETCH_REQUIEST, payload: response.data.data });
};
