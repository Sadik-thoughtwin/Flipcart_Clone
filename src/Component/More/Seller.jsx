import React, { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import {useDispatch } from "react-redux";
import { signupsellerAction } from "../../Redux/actions/signupsellerAction";
import {Link} from 'react-router-dom';
import "./seller.css";
import Sellerheader from "./Sellerheader";
import { useNavigate } from "react-router-dom";

const Seller = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formgetData, setFormgetData] = useState({});
  const dispatch = useDispatch();
  const navigate =useNavigate()

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
       },

    validate: (getdata) => {
      let errors = {};

      if (!getdata.fullName) {
        errors.fullName = "Name is required.";
      }

      if (!getdata.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(getdata.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }
      if (!getdata.phone) {
        errors.phone = "phone phone is required";
      } else if (/^[0-9]d{10}$/.test(getdata.phone)) {
        errors.phone = " phone is required 10 digit";
      }
      else if (getdata.phone.length<10){
        errors.phone = " phone is required 10 digit";
      }
      if (!getdata.password) {
        errors.password = "Password is required.";
      }
      else if(getdata.password.length<5){
        errors.password = "Password is required minimum 6 digit.";
      }
      
      return errors;
    },
    onSubmit: (getdata) => {
      setFormgetData(getdata);
      setShowMessage(true);
      formik.resetForm();
      dispatch(signupsellerAction(getdata));
      navigate('/sellerlogin')
      console.log("getdata", getdata);
    },
  });

  const isFormFieldValid = (fullName) =>
    !!(formik.touched[fullName] && formik.errors[fullName]);
  const getFormErrorMessage = (fullName) => {
    return (
      isFormFieldValid(fullName) && (
        <small className="p-error">{formik.errors[fullName]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 6 characters</li>
      </ul>
    </>
  );

  return (
    <div className="form-demo">
      <Sellerheader />
      <h2 style={{color:"white"}}>Seller Registration</h2>
     <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered under name <b>{formgetData.name}</b> ;
            it'll be valid next 30 days without activation. Please check
            <b>{formgetData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div >
        <div className="card">
        <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="fullName"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("fullName"),
                  })}
                />
                <label
                  htmlFor="fullName"
                  className={classNames({
                    "p-error": isFormFieldValid("fullName"),
                  })}
                >
                  Name*
                </label>
              </span>
              {getFormErrorMessage("fullName")}
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("email"),
                  })}
                />
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email"),
                  })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div>
              <span className="field">
                <InputText
               
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                   onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("phone"),
                  })}
                />
                <label
                  htmlFor="phone"
                  className={classNames({
                    "p-error": isFormFieldValid("phone"),
                  })}
                >
                  phone*
                </label>
              </span>
              {getFormErrorMessage("phone")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <Password
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  toggleMask
                  className={classNames({
                    "p-invalid": isFormFieldValid("password"),
                  })}
                  header={passwordHeader}
                  footer={passwordFooter}
                />
                <label
                  htmlFor="password"
                  className={classNames({
                    "p-error": isFormFieldValid("password"),
                  })}
                >
                  Password*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>

          <Button type="submit" label="Submit" className="mt-2" />
         
          <Link to ="/sellerlogin" className="existing-seller" >existing user Login</Link>
          </form>
          <img src="image/seller.png" alt="seller"/>
        </div>
      </div>
     
    </div>
  );
};

export default Seller;
