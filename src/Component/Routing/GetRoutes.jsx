import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import React from "react";
import Notification from "../More/Notification";
import Seller from "../More/Seller";
import Customer from "../More/Customer";
import Signup from "../Signup/Signup";
import Details from "../Details/Details";
import{ Header} from '../Header/Header'

function GetRoutes() {
  const allRoutes = [
    { path: "/", Component: App },
    { path: "/notification", Component: Notification },
    { path: "/header", Component: Header },
    { path: "/seller", Component: Seller },
    { path: "/signup", Component: Signup },
    { path: "/details", Component: Details },
    ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {allRoutes?.map((item,index) => {
            return <Route  key={index} path={item.path} element={<item.Component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default GetRoutes;
