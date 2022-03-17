import React, { useState } from "react";
import { Password } from "primereact/password";
import { button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import './Login.css';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const InsetData = () => {

    if(!email==="" && !password===""){
        console.log("email in not valid",email)
        console.log("password in not valid",password)
}
    const item = {email,password};
    console.log("item",item)
  };

  return (
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
          className="Image_login"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
          alt="loginpageImage"
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
        <Password
          className="loginField1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          feedback={false}
        />
        <div>
          <span> Forget?</span>
        </div>
        <br /> <br />
        <div>
          By continuing, you agree to Flipkart's
          <div>Terms of Use</div>
          and
          <div>
            Privacy Policy
          </div>
        </div>
        <button className="userLogin" onClick={()=>InsetData()}>
          Login
        </button>
        <h4>OR</h4>
        <h3>Request OTP</h3>
      </div>
    </div>
  );
}

export default Login;
