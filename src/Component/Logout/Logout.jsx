import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/actions/loginAction";
export const LogoutButton = () => {

  const [logButton, setLogButton] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setLogButton(logButton);
  }, []);
  const Logout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Button style={{ border: "none" }} onClick={() => Logout()}>
        Logout
      </Button>
    </div>
  );
};
