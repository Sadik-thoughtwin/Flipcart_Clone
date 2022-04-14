import React from "react";
import { InputText } from "primereact/inputtext";
import { Panel } from "./Sidebar/Panel";
import "./admin.css";


export function Dashboard() {
  return (
    <div>
      <header className="admin-header">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search" />
        </span>
        <span className="admin-dash">Admin Dashboard</span>
        <div className="header-div">
          <Panel />
        </div>
        <button >Logout</button>
      </header>
     
    </div>
  );
}
