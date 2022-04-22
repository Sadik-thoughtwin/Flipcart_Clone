import React from "react";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard } from "../Dashboard";
import "./ProductList.css";
import { deleteProduct } from "../../Redux/actions/DeleteProductAction";
export function ProductList() {
  const getProduct = useSelector((state) => state.productReducer?.products);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    console.log("deleted_llll", id);
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <Dashboard />
      <table className="product-table">
        <thead>
          <tr className="tr-field">
            <th>Price</th>
            <th>Id</th>
            <th>Category</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>

        {getProduct?.map((alldata, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{alldata.price}</td>
                <td>{alldata._id}</td>
                <td>{alldata.category.type}</td>
                <td>{alldata.description}</td>
                <td>{alldata.stockQuantity}</td>
                <td>
                  <Button onClick={() => deleteItem(alldata._id)}>
                    Delete
                  </Button>
                </td>
                <td>
                  <Button>Edit</Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
