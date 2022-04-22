import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
export const LogoutButton = () => {

  const [logButton, setLogButton] = useState(true);
  useEffect(() => {
    setLogButton(logButton);
  }, []);
  const Logout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Button style={{ border: "none" }} onClick={() => Logout()}>
        Logout
      </Button>
    </div>
  );
};
