import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./Model.css";

const Model = ({showData}) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");
 
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


  return (
    <div className="dialog-demo">
      {showData && onClick(displayBasic)}
      <div className="card">
        <Button label="Login" />
        <Dialog
          header="Header" 
          visible={displayBasic}
          style={{ width: "50vw" }}
          onHide={() => onHide("displayBasic")}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Dialog>
      </div>
    </div>
  );
};

export default Model;