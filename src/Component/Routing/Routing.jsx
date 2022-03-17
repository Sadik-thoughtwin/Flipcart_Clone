import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../../App";
import React from "react";
import Notification from "../More/Notification";
import Seller from  '../More/Seller';
import Customer from '../More/Customer';
function Routing() {
 
  return (
    <>
     <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  </Router>
    </>

  );
}
export default Routing;
