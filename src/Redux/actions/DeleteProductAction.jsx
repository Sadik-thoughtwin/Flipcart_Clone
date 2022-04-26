
// import axios from "axios";
// import { API_BASE_URL } from "../../config/env.config";
// import {

//   DELETE_PRODUCT_SUCCESS,
// } from "../Constant/constant";

// export const deleteProduct = (id) => async (dispatch) => {
//   console.log("deleted123>>>>",id)
//   console.log("123",localStorage.getItem("Admin-token"))
  
//   const token = localStorage.getItem("Admin-token")
  
//   await axios
//     .delete(`${API_BASE_URL}/v1/product/${id}`, {
//       headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${token}`,
//         },
//     })
   
//     .then((productResult1) => {
//       console.log(">>>>>>>>>>>>>>>>>>>>>pp",productResult1)
//       dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productResult1.id});
//     })
//     .catch((deleteErr) => {
//       console.log("err1", deleteErr);
      
//     });
// };
