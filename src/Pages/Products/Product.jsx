import React, { useEffect, useRef } from "react";
import { Card } from "primereact/card";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { addToCart } from "../../Redux/actions/itemsAction";
import "./Product.css";
import { fetchProducts } from "../../Redux/actions/GetProduct/productAction";
import { Link } from "react-router-dom";
import { oneItem } from "../../Redux/actions/dataAction";
import { openModel } from "../../Redux/actions/userAction";
function Product() {
  const allProduct = useSelector((state) => state?.productReducer?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // localStorage.setItem("token",)
  }, []);

  return (
    <div className="img">
      {allProduct?.map((items, index) => (
        <Card className="cardData" key={index}>
          <Link to="/details" onClick={() => dispatch(oneItem(items.id))}>
            <img src={items.imgUrl} alt="images" height="200" width="200" />
          </Link>
          <p>{items.reviews.title}</p>
          <p>{items.category.type}</p>
          <p>${items.price}</p>

          <Button
            onClick={() => {
              // dispatch(addToCart(items));
              if (localStorage.getItem("token")) {
                dispatch(addToCart(items));
              } else {
                dispatch(openModel(true));
              }
            }}
          >
            Add to card
          </Button>
          <div className="card toast-demo"></div>
        </Card>
      ))}
    </div>
  );
}

export default Product;
