import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModel } from "../../Redux/actions/userAction";

export const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  const dispatch  = useDispatch()
  
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/")
      dispatch(openModel(true));
    }
  })
  return (  <Component /> )
};
