import axios from "axios";
import { FETCH_REQUIEST, FETCH_SUCCESS } from "../../Constant/constant";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get(
    "http://localhost:5000/api/v1/products/product"
  );
 dispatch({ type: FETCH_REQUIEST, payload: response.data.data });

};

// export const fetchProduct  = (id) => async (dispatch) => {
//   const response = await axios.get(
//     "http://localhost:5000/api/v1/products/product${id}"
//   );
//   const result = dispatch({ type: FETCH_REQUIEST, payload: response.data });

//   console.log("response", result.payload.data);
// };


