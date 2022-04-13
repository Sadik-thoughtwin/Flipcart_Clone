import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
export const Panel = () => {
  return (
    <div className="card">
      <div className="sidebar">
        <h2 style={{ color: "white", marginTop: "50px", marginLeft: "25px" }}>
        <Link to="/dashboard" className="dashboard">Dashboard </Link>
        </h2>
        <ul className="ul-div">
        <li className="li-div">
            <Link to="/dashboard" className="list">Dashboard </Link>
          </li>
          <li className="li-div">
            <Link to="/sellerlist" className="list">Seller List </Link>
          </li>
          <li className="li-div">
            <Link to="/productlist" className="list">Product List </Link>
          </li>
          <li className="li-div">
            <Link to="/userlist" className="list">User List </Link>
          </li>
          <li className="li-div">
            <Link to="/add" className="list">Add Product </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
