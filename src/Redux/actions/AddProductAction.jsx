import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../Constant/constant";
export const addproduct = (values) => async(dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST,payload:true });
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTA0NDcxOTQsImV4cCI6MTY1MDQ1MDc5NCwiYXVkIjoiNjI1ZmI3MjAxNTZmNTE3ODkzZDcwNzAzIiwiaXNzIjoic291cmFiaEBnbWFpbC5jb20ifQ.83Pr_GkHoFZckc8EEQwQFO3CtQVSb42cmqd-cvt4Bfc"
await  axios.post(`${API_BASE_URL}/v1/product`,values,{
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
}).then((productResult) => {

    dispatch({ type: ADD_PRODUCT_SUCCESS,payload:values.productResult });

  }).catch((errors)=>{
      console.log("err1",errors)
      dispatch({ type: ADD_PRODUCT_FAILURE,payload:errors });
  })
};
