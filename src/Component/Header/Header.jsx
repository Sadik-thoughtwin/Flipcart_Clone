import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Header.css";
import Model from "../Model/Model";
import userAction from "../../Redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import NavbarImages from "../Images/NavbarImages";
import { Dialog } from "primereact/dialog";
export const Header = () => {
  const [value, setValue] = useState(false);
  const selector = useSelector((state) => state.userReducer.openModel);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [position, setPosition] = useState(false);
  // const dispatch = useDispatch();

  useEffect(() => {
    setValue(selector);
    document.addEventListener("mousedown", () => {
      setDisplayBasic(false);
    });
  }, [selector]);

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
    displayBasic(true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <div>
      <div>
        <header className="header">
          <img
            className="logo"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt=""
          />
          <span className="p-input-icon-left pt-5">
            <i className="pi pi-search" />
            <InputText
              className="InputText"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search"
            />
          </span>

          <Button
            className="header_Button p-button"
            label="Login"
            onClick={() => onClick("displayBasic")}
          />
          <Dialog
            header="Login"
            visible={displayBasic}
            style={{ width: "50vw" }}
            onHide={() => onHide("displayBasic")}
          >
            <div className="Login_div">
              <div className="Image_div">
                <h1>Login</h1>
                <h4>
                  Get access to your
                  <br /> Orders, Wishlist and
                  <br /> Recommendations
                </h4>
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                  alt=""
                />
              </div>
              <div className="inputField_div">
                <InputText
                  className="loginField"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email/Mobile Number"
                />
                <br />
                <br />
                <InputText
                  className="loginField"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </Dialog>
          <Button className="header_Button lgButton">More</Button>
          <Button className="header_Button lgButton">Cart</Button>
        </header>

        {value && <Model data={value} />}
        <NavbarImages />
      </div>
    </div>
  );
};
