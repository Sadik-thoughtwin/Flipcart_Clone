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

export const Header = () => {
  const loginModalStatus = useSelector((state) => state.userReducer.loginModal);
  const loginDetails = useSelector((state) => state.loginReducer);
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplay(loginModalStatus)
  }, [loginModalStatus]);

  const dialogFuncMap = {
    display: setDisplay,
  };

  const loginModal = (box, position) => {
    dispatch(openModel(!display));
    dialogFuncMap[`${box}`](true);
    localStorage.setItem("userData", loginDetails.success.token);
  };

  const onHide = (box, position) => {
    dialogFuncMap[`${box}`](false);
  };

  return (
    <div>
      <header className="header">
        <img
          className="logo"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="logo"
        />

        <InputText
          className="InputText p-inputtext"
          placeholder="Search for products,brands and more"
        />

        <div className="parent_LoginDiv button_margin">
          {loginDetails.success === "" ? (
            <Button
              className="header_Button p-button"
              label="Login"
              onClick={() => {
                dispatch((openModel(true)));
              }}
            />
          ) : (
            <h3 style={{ color: "white" }}>
              {loginDetails.success?.result?.name.charAt(0).toUpperCase() +
                loginDetails.success?.result?.name.slice(1)}
            </h3>
          )}

          <WishList />
        </div>

        <Dialog
          header="Login"
          visible={loginModalStatus}
          style={{ width: "50vw", height: "500px" }}
          onHide={() => dispatch(openModel(false))}
          dismissableMask={true}
        >
          <Login hide={onHide} />
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
