import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import React, { useEffect, useState } from "react";
import Notification from "../More/Notification";
import Seller from "../More/Seller";
import Signup from "../Signup/Signup";
import Details from "../Details/Details";
import { Header } from "../Header/Header";
import {SellerLogin} from '../More/SellerLogin'
import { SellerList } from "../../AdminPanel/AllSeller/SellerList";
import { UserList } from "../../AdminPanel/UserList/UserList";
import { ProductList } from "../../AdminPanel/ProductList/ProductList";
import {Dashboard} from '../../AdminPanel/Dashboard';
import { ChartLine } from "../../AdminPanel/Chart/ChartLine";
import {AddProduct} from '../../AdminPanel/AddProduct/AddProduct'

function GetRoutes() {

  const allRoutes = [
    { path: "/", Component: App },
    { path: "/notification", Component: Notification },
    { path: "/header", Component: Header },
    { path: "/seller", Component: Seller },
    { path: "/signup", Component: Signup },
    { path: "/details", Component: Details },
    { path: "/sellersign", Component: Seller },
    {path:"/sellerlogin",Component:SellerLogin},
    {path:"/sellerlist",Component:SellerList},
    {path:"/userlist",Component:UserList},
    {path:"/productlist",Component:ProductList},
    {path:"/dash",Component:Dashboard},
    {path:"/dashboard",Component:ChartLine},
    {path:"/add",Component:AddProduct}
    
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {allRoutes?.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={<item.Component />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default GetRoutes;
