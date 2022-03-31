import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, {  useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import {axios} from 'axios';

 const Signup = () => {
  
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
 
  // axios.get(`https://jsonplaceholder.typicode.com/users`)
  // .then(res => {
  //   const persons = res.data;
  //   this.setState({ persons });
  // })
 
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      accept: false
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    }
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
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  
  return (
    <div className="form-demo">
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
            Your account is registered under name <b>{formData.name}</b> ; it'll
            be valid next 30 days without activation. Please check
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center text-primary">SignUp</h5>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("name")
                  })}
                />
                <label
                  htmlFor="name"
                  className={classNames({
                    "p-error": isFormFieldValid("name")
                  })}
                >
                  Name*
                </label>
              </span>
              {getFormErrorMessage("name")}
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
                    "p-invalid": isFormFieldValid("email")
                  })}
                />
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email")
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
                />
                <label
                  htmlFor="password"
                  className={classNames({
                    "p-error": isFormFieldValid("password")
                  })}
                >
                  Password*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>

            <div className="field-checkbox">
              <Checkbox
                inputId="accept"
                name="accept"
                checked={formik.values.accept}
                onChange={formik.handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid("accept")
                })}
              />
              <label
                htmlFor="accept"
                className={classNames({
                  "p-error": isFormFieldValid("accept")
                })}
              >
                I agree to the terms and conditions*
              </label>
            </div>

            <Button type="submit" label="Submit" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<FormikFormDemo />, rootElement);

export default Signup;



// import React, { useState } from "react";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import { InputText } from "primereact/inputtext";
// import { Password } from "primereact/password";
// import {Header} from '../Header/Header';
// import "./Signup.css";
// function Signup() {
//   const [displayBasic, setDisplayBasic] = useState(true);
//   const [position, setPosition] = useState("center");

//   const dialogFuncMap = {
//     displayBasic: setDisplayBasic,
//   };

//   const onHide = (name) => {
//     dialogFuncMap[`${name}`](false);
//   };

//   return (
//    <>
//       <Header />
//     <div className="Box_Div">
//       <Dialog
//         header="Header"
//         visible={displayBasic}
//         className="dialogBox"
//         style={{ width: "50vw" }}
//         onHide={() => onHide("displayBasic")}
//       >
//         <div className="inputField_div">
//         <InputText
         
//          placeholder="Enter username"
//        /><br /><br />
//         <InputText
      
//       placeholder="Enter email"
//     /><br /><br />
//        <InputText
      
//       placeholder="Enter Password"
//     />
//           <br />
//           <br />
//           <Button className="userLogin">SignUp</Button>
//         </div>
//       </Dialog>
//     </div>
//    </>
//   );
// }

// export default Signup;
