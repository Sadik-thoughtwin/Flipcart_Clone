import React, { useState, useEffect } from "react";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { logindetails } from "../../Redux/actions/loginAction";
import { signmodelopen } from "../../Redux/actions/signupAction";
import { openModel } from "../../Redux/actions/userAction";
function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const dispatch = useDispatch();
  const loginDetails = useSelector((state) => state.loginReducer);
useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const SignUpModalOpen = () => {
    dispatch(openModel(false));
    dispatch(signmodelopen(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormError(validate(formValues));
    dispatch(logindetails(formValues));
    dispatch(openModel(false));
     setShowMessages(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not valid email format";
      }
    if (!values.password) {
      errors.password = "Pasword is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be for than 4 charactors";
      console.log("password", values.password);
    } else if (values.password.length > 10) {
      errors.password = "Password can't exceed more than 10 charactors";
      console.log("password", values.password);
    }
    return errors;
  };
  const dialogFooters = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessages(false)}
      />
    </div>
  );

  return (
    <div className="Login_div">
      <div>
        <Dialog
          visible={showMessages}
          onHide={() => setShowMessages(false)}
          position="top"
          footer={dialogFooters}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "30vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <h5>Registration!</h5>
            <h3>{logindetails.message}</h3>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Your account is registered under fullName
              <b>{formValues.fullName}</b>
              <br /> Your Email is:<b>{formValues.email}</b>
            </p>
          </div>
        </Dialog>
      </div>
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
      {/* {Object.keys(formError).length === 0 && isSubmit ? (
        <div style={{ color: "red", marginRight: "50px" }}>
          {loginDetails.message}
        </div>
      ) : (
        ""
      )} */}
      <form onSubmit={handleSubmit}>
        <div className="inputField_div">
          <InputText
            className="loginField p-inputtext"
            name="email"
            value={formValues.email.trim().toLowerCase()}
            onChange={handleInput}
            placeholder="Enter Email/Mobile Number"
            autoComplete="off"
          />
          <p style={{ color: "red" }}>{formError.email}</p>
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
              <p style={{ color: "red" }}>{formError.password}</p>
            </div>
            <div>
              <span style={{ marginLeft: "15px" }}> Forget?</span>
            </div>
          </div>
          <br /> <br />
          <div>
            <span className="font_set">
              By continuing, you agree to Flipkart's
            </span>
            <span className="font_set">
              <a href="#">Terms of Use</a>
            </span>
            <span className="font_set">and</span>
            <span className="font_set">
              <a href="#">Privacy Policy</a>
            </span>
          </div>
          <br />
          <Button type="submit" className="userLogin p-button">
            Login
          </Button>
          <h4>OR</h4>
          <Link to="#">Request OTP</Link>
          <br />
          <br />
          <div>
            <a
              href="#"
              onClick={() => dispatch(SignUpModalOpen())}
              className="createUser"
            >
              New to Flipcart? Create an account
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
