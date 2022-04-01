import React, { useState, useEffect } from "react";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";

import "./Login.css";

function Login() {
  const [formValues, setFormValues] = useState({email: "",password: ""});
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const LoginData= async (formValues)=>{
    await axios.post('https://terrible-chipmunk-41.loca.lt/login',formValues).then((result)=>{
      console.log("result",result)
    }).catch((error)=>{
      console.log("Error",error)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    LoginData(formValues)
    console.log("formValues",formValues)
    setIsSubmit(true);
  };

  useEffect(()=>{
    if(Object.keys(formError).length === 0 && isSubmit){
      
    }
  },[formError])
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!values.email) {
     errors.email = "Email is required";
    }
    else if(!regex.test(values.email)){
      errors.email = "This is not valid email format";
      console.log("email",values.email)
    }
    if (!values.password) {
      errors.password = "Pasword is required";
    }
    else if(values.password.length < 4){
      errors.password = "Password must be for than 4 charactors";
      console.log("password",values.password)
    }
    else if(values.password.length > 10){
      errors.password = "Password can't exceed more than 10 charactors";
      console.log("password",values.password)
    }
    return errors;
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
          <br />
           Recommendations
        </h4>
        <img
          className="Image_login"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
          alt="loginpageImage"
        />
      </div>
      {Object.keys(formError).length === 0 && isSubmit? (<div style={{color:"green",marginRight:"20px"}}>Logined Succussfully</div>): ""}
      <form onSubmit={handleSubmit}>
        <div className="inputField_div">
          <InputText
            className="loginField p-inputtext"
            name="email"
            value={formValues.email}
            onChange={handleInput}
            placeholder="Enter Email/Mobile Number"
            autoComplete="off"
          />
          <p style={{color:"red"}}>{formError.email}</p>
          <br />
          <br />
          <div className="password_input">
            <div>
              <Password
                className="loginField1"
                name="password"
                value={formValues.password}
                placeholder="Enter Password"
                onChange={handleInput}
                feedback={false}
              />
               <p style={{color:"red"}}>{formError.password}</p>
            </div>
            <div>
              <span style={{ marginLeft: "15px" }}> Forget?</span>
            </div>
          </div>
          <br /> <br />
          <div>
            <span className="font_set">By continuing, you agree to Flipkart's</span>
            <span className="font_set"><a href="#">Terms of Use</a></span>
            <span className="font_set" >and</span>
            <span className="font_set"><a href="#">Privacy Policy</a></span>
          </div><br/>
          <Button type="submit" className="userLogin p-button">
            Login
          </Button>
          <h4>OR</h4>
          <h3>Request OTP</h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
