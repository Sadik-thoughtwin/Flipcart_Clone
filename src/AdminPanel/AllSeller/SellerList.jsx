import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard } from "../Dashboard";
import { AllSellerAction } from "../../Redux/actions/AllSellerAction";
import { InputSwitch } from "primereact/inputswitch";
import "./SellerList.css";
export function SellerList() {
  const [value, setValue] = useState(false);
  const allSeller = useSelector((state) => state?.AllSellerReducer?.sellerList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(AllSellerAction(localStorage.getItem("Admin-token")));
  }, []);
  const test = (id, e) => {
    {
      allSeller.data.find((seller) => {
        if (seller.id !== id) {
          // e.value===true
          console.log("e", e);
        } else {
          setValue(false);
        }
      });
    }
  };
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

        {allSeller.data?.map((seller, index) => {
          return (
            <tbody key={index} className="coloumn-details">
              <tr className="list-tr">
                <td>{seller.fullName}</td>
                <td>{seller.number}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td>
                  <InputSwitch
                    checked={value}
                    onChange={(e) => test(seller.id, e)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
