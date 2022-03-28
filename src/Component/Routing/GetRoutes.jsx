import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../../App";
import React from "react";
import Notification from "../More/Notification";
import Seller from  '../More/Seller';
import Customer from '../More/Customer';
import Signup from '../Signup/Signup';
import SignBox from "../Signup/SignBox";
import Details from '../Details/Details';

function GetRoutes() {
 
  return (
    <>
     <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/signup" element={<SignBox />} />
      <Route path ="/details" element={<Details />} />
    </Routes>
  </Router>
    </>

  );
}
export default GetRoutes;
