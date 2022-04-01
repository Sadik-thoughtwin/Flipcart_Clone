import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import React from "react";
import Notification from "../More/Notification";
import Seller from  '../More/Seller';
import Customer from '../More/Customer';
import Signup from "../Signup/Signup";
import Details from '../Details/Details';

function GetRoutes() {

 const allRoutes = [
        { path:"/" , Component:App},
        { path:"/notification",Component:Notification},
        { path:"/seller" ,Component:Seller},
        { path:"/customer",Component:Signup},
        { path:"/details" , Component:Details}
 ] 
 
  return (
    <>
     <BrowserRouter>
    <Routes>
      {allRoutes?.map((item)=>{
          return <Route path={item.path} element={<item.Component />} />
      })}
      
      {/* <Route exact path="/notification" element={<Notification />} />
      <Route exact path="/seller" element={<Seller />} />
      <Route exact path="/customer" element={<Customer />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path ="/details" element={<Details />} /> */}
    </Routes>
  </BrowserRouter>
    </>

  );
}
export default GetRoutes;
