import React, {useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard } from "../Dashboard";
import { AllSellerAction } from "../../Redux/actions/AllSellerAction";
import { InputSwitch } from 'primereact/inputswitch';
import "./SellerList.css";
export function SellerList() {
  const [value,setValue] =useState(false)
  const allSeller = useSelector(
    state=> state?.AllSellerReducer?.sellerList
  );
  console.log("allSeller", allSeller);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllSellerAction());
  }, []);
  return (
    <div>
      <Dashboard />
      <table className="table">
       <thead>
       <tr className="coloumn-details">
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
          <th>Approved</th>
        </tr>
       </thead>

        {allSeller?.map((seller, index) => {
          return (
            <tbody key={index} className="coloumn-details">
              <tr className="list-tr">
                <td>{seller.fullName}</td>
                <td>{seller.phone}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td><InputSwitch checked={value} onChange={(e) => setValue(e.value)} /></td>
              
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
