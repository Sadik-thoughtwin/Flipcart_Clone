import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../../App";
import React from "react";
import Notification from "../More/Notification";
import Seller from  '../More/Seller';
import Customer from '../More/Customer';
import Signup from "../Signup/Signup";
import Details from '../Details/Details';

function GetRoutes() {
 
  return (
    <>
     <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/notification" element={<Notification />} />
      <Route exact path="/seller" element={<Seller />} />
      <Route exact path="/customer" element={<Customer />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path ="/details" element={<Details />} />
    </Routes>
  </Router>
    </>

  );
}
export default GetRoutes;
