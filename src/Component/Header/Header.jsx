import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Header.css";
import { Dialog } from "primereact/dialog";
import Cart from "../cart/Cart";
import More from "../More/More";
import Login from "../Login/Login";
import { openModel,closeModel } from "../../Redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import WishList from "../Signup/WishList";

export const Header = () => {
  const selector = useSelector((state) => state.userReducer);
  const loginDetails = useSelector((state) => console.log("state",state.loginReducer));
  // console.log("loginDetails",loginDetails)
  const [display, setDisplay] = useState(false);
  const [position, setPosition] = useState('center');
  const dispatch = useDispatch();
  
  useEffect(() => {
    setPosition(!selector);
  }, [selector]);

  const dialogFuncMap = {
    display: setDisplay,
  };

  const onClick = (box,position) => {
    dispatch(openModel(!display));
    dialogFuncMap[`${box}`](true);
  localStorage.setItem("userData",loginDetails)
  };

  const onHide = (box,position) => {
    dispatch(closeModel(false));
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
         
          
         
          <Button
            className="header_Button p-button"
            label="Login"
            onClick={() => {
              onClick("display");
            }}
          />
          
          <WishList />
        </div>

        <Dialog
          header="Login"
          visible={display}
          style={{ width: "50vw", height: "500px" }}
          onHide={() => onHide("display")}
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
