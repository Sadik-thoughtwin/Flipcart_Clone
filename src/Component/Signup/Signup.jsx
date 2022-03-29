import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import "./Signup.css";
function SignBox() {
  const [displayBasic, setDisplayBasic] = useState(true);
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <div className="Box_Div">
      <Dialog
        header="Header"
        visible={displayBasic}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic")}
      >
        <div className="inputField_div">
          <InputText
            className="loginField"
            placeholder="Enter Email/Mobile Number"
          />
          <br />
          <br />
          <Button className="userLogin">Continue</Button>
        </div>
      </Dialog>
    </div>
  );
}

export default SignBox;
