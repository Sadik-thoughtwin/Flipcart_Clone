import React from "react";
import { InputText } from "primereact/inputtext";
import { Panel } from "./Sidebar/Panel";
import "./admin.css";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
export function Dashboard() {

  const navigate= useNavigate()

  const AdminLogout = ()=>{
    localStorage.clear();
    navigate("/admin")
  }
  return (
    <div>
      <header className="admin-header">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search" />
        </span>
        <span className="admin-dash">Admin Dashboard</span>
        <Button className="admin-logout" onClick={AdminLogout}>Logout</Button>
        <div className="header-div">
          <Panel />
        </div>
       
      </header>
     
    </div>
  );
}
