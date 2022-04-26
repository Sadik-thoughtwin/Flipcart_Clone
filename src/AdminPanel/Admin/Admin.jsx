import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Dialog } from "primereact/dialog";
import { useSelector, useDispatch } from "react-redux";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router";
import "./AdminLogin.css";
import { AdminLoginAction } from "../../Redux/actions/AdminLoginAction";

export const Admin = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) =>state.AdminReducer.loading);
  useEffect(() => {
    if(localStorage.getItem("Admin-token")) {
      navigate("/sellerlist");
    } else {
      navigate("/admin");
    }
  }, [selector]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (formvalues) => {
      let errors = {};

      if (!formvalues.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formvalues.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!formvalues.password) {
        errors.password = "Password is required.";
      }

      return errors;
    },
    onSubmit: (formvalues) => {
      setFormData(formvalues);
      formik.resetForm();
      setShowMessage(true);
      dispatch(AdminLoginAction(formvalues));
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="dialog-footer">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div className="form-demo1">
      <AdminHeader />
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="admin-loginpopup">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>

          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is Logined under name <b>{formData.name}</b> ; it'll be
            <span>{selector?.message}</span>
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="admin-card">
        <div className="card">
          <form onSubmit={formik.handleSubmit} className="p-fluid">
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
          </form>
        </div>
      </div>
    </div>
  );
};
