import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Header.css";
import userAction from "../../Redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import NavbarImages from "../Images/NavbarImages";
import { Dialog } from "primereact/dialog";
import Cart from "../cart/Cart";
import More from "../More/More";
import { CarouselData } from "../Carousel/CarouselData";
import Imagee from "../image2/Imagee";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

export const Header = () => {
  const selector = useSelector((state) => state.userReducer.openModel);
  const [displayBasic, setDisplayBasic] = useState(false);

  const [position, setPosition] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setPosition(selector);
  }, [selector]);

  const dialogFuncMap = {
    position: setPosition,
  };

  const onClick = (selector) => {
    dialogFuncMap[`${position}`](false);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (selector) => {
    dispatch(userAction(!position));
    dialogFuncMap[`${position}`](false);
  };

  return (
    <div>
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

          <div className="parent_LoginDiv">
            <Button
              className="header_Button p-button"
              label="Login"
              onClick={() => dispatch(userAction(!position))}
            />
            <Signup />
          </div>

          <Dialog
            header="Login"
            visible={position}
            style={{ width: "50vw", height: "500px" }}
            onHide={() => onHide("position")}
            onClick={() => onClick("setPosition")}
          >
            <Login />
          </Dialog>
          <More />
          <Cart />
        </header>
        <NavbarImages />
        <CarouselData />
        <Imagee />
      </div>
    </div>
  );
};
