import React, { useState, useEffect, useRef } from "react";
import { Card } from "primereact/card";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { addToCart, removeToCart } from "../../Redux/actions/itemsAction";
import "./Product.css";
import { Toast } from "primereact/toast";

import {
  fetchProduct,
  fetchProducts,
} from "../../Redux/actions/GetProduct/productAction";
function Product() {
  const allProduct = useSelector((state) => state.productReducer.products);
  const allItem = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();
  const toast = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "Add Item Successfully",
      life: 3000,
    });
  };

  return (
    <div className="img">
      {allProduct?.map((items, index) => (
        <Card className="cardData" key={index}>
          <img
            className="images"
            src={items.imgUrl}
            alt="images"
            height="200"
            width="200"
          />
          <p>{items.reviews.title}</p>
          <p>{items.category.type}</p>
          <p>${items.price}</p>
          <Toast ref={toast} />
          <button
            onClick={() => {
              dispatch(addToCart(items));
              showSuccess();
            }}
          >
            Add to card
          </button>
          <button onClick={() => dispatch(removeToCart(items))}>
            Remove to card
          </button>
          <div className="card toast-demo"></div>
        </Card>
      ))}
    </div>
  );
}

export default Product;
