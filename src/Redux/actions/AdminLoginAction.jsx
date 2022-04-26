import axios from "axios";
import {
    LOGIN_ADMIN_REQUEST,
    LOGIN_ADMIN_FAILURE,
    LOGIN_ADMIN_SUCCESS
} from '../Constant/constant'
import { API_BASE_URL } from "../../config/env.config";


export const AdminLoginAction = (formValues) => async (dispatch) => {
   
  dispatch({ type: LOGIN_ADMIN_REQUEST, payload: true });

  await axios.post(`${API_BASE_URL}/v1/admin/login`, formValues)
  
    .then((results) => {
     localStorage.setItem("Admin-token",results.data.data)
      dispatch({ type: LOGIN_ADMIN_SUCCESS, payload: results.data });
     
    })
    .catch((error) => {
     dispatch({ type: LOGIN_ADMIN_FAILURE, payload: error });
    });
};
