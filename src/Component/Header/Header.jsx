import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Header.css";
import Model from "../Model/Model";
import userAction from "../../Redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import NavbarImages from "../Images/NavbarImages";
import { Dialog } from "primereact/dialog";
import More from "../More/More";
import Cart from "../cart/Cart";
// import CarouselData from "../Carousel/CarouselData";
import { Password } from 'primereact/password';

export const Header = () => {
  const [value, setValue] = useState("");
  const selector = useSelector((state) => state.userReducer.openModel);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // setPosition(selector);
    // document.addEventListener("mousedown", () => {
    //   setDisplayBasic(false);
    // });
  }, []);

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const InsetData = () => {
    // setEmail(email)
    // setPassword(password)
    let item = {
      email,
      password,
    };
    console.log("email", email);
    console.log("password", password);
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

          <InputText
            className="InputText p-inputtext"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for products,brands and more"
          />

          {/* <div className="parent_LoginDiv"> */}
          <Button
            className="header_Button p-button"
            label="Login"
            onClick={() => onClick("displayBasic")}
          />
          {/*          
              <div className="dropdown_content">
                <p>New Customer?<a>Signup</a></p>
                <p>My Profile</p> 
                <p>Flipcart Plus Zone</p> 
                <p>Orders</p> 
                <p>Wishlists</p> 
                <p>Rewards</p> 
                <p>My Profile</p> 
              </div>
              </div> */}
          <Dialog
            header="Login"
            visible={displayBasic}
            style={{ width: "50vw", height: "500px" }}
            onHide={() => onHide("displayBasic")}
          >
            <div className="Login_div">
              <div className="Image_div">
                <h4 className="textItem">
                  Get access to your
                  <br />
                  <br />
                  Orders, Wishlist and
                  <br />
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email/Mobile Number"
                />
                <br />
                <br />
                {/* <InputText
                  className="loginField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                /> */}
                 <Password value={password} onChange={(e) => setPassword(e.target.value)}  feedback={false}/>
                <a href="https://www.primefaces.org/primereact/setup/">
                  Forget?
                </a>
                <br /> <br />
                <p>
                  By continuing, you agree to Flipkart's <a href="https://www.flipkart.com/pages/terms">Terms of Use</a> and
                  <a href="https://www.flipkart.com/pages/privacypolicy">Privacy Policy</a>
                </p>
                <Button
                  onClick={InsetData}
                  className="userLogin p-button p-component"
                >
                  Login
                </Button>
              </div>
            </div>
          </Dialog>

          <More />
          <Cart />
        </header>
        {position && <Model data={position} />}
        <NavbarImages />
        {/* <CarouselData /> */}
      </div>
    </div>
  );
};
