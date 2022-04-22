import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Header.css";
import { Dialog } from "primereact/dialog";
import Cart from "../cart/Cart";
import More from "../More/More";
import Login from "../Login/Login";
import { openModel } from "../../Redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import WishList from "../Signup/WishList";

import { Link } from "react-router-dom";
import List from "../Signup/List";

export const Header = () => {
  const loginModalStatus = useSelector(
    (state) => state?.userReducer.loginModal
  );
  const loginDetails = useSelector((state) => state?.loginReducer);
  const token = loginDetails?.success?.accToken;
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.getItem("token");
  });
  const loginModal = (box) => {
    dispatch(openModel(false));
  };

  return (
    <div>
      <header className="header">
        <div>
          <img
            className="logo"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
          />
          <Link to="/" className="Explore">
            Explore Plus
          </Link>
        </div>

        <InputText
          className="InputText p-inputtext"
          placeholder="Search for products,brands and more"
        />

        <div className="parent_LoginDiv button_margin">
          {token ? (
            <h3 style={{ color: "white" }}>
              {loginDetails?.success?.name.charAt(0).toUpperCase() +
                loginDetails?.success?.name.slice(1)}
            </h3>
          ) : (
            <Button
              className="header-Button p-button"
              label="Login"
              onClick={() => {
                dispatch(openModel(true));
              }}
            />
          )}
             <WishList />
          {/* {localStorage.getItem("token") ? <List /> : <WishList />} */}
        </div>

        <Dialog
          header="Login"
          visible={loginModalStatus}
          style={{ width: "50vw", height: "500px" }}
          onHide={loginModal}
          dismissableMask={true}
        >
          <Login />
        </Dialog>
        <div className="button_margin">
          <More />
        </div>
        <div className="button_margin">
          <Cart />
        </div>
      </header>
    </div>
  );
};
