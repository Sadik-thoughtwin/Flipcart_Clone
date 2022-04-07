import React, { useEffect, useRef } from "react";
import { Card } from "primereact/card";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { addToCart } from "../../Redux/actions/itemsAction";
import "./Product.css";
import { fetchProducts } from "../../Redux/actions/GetProduct/productAction";
import { Link } from "react-router-dom";
import { oneItem } from "../../Redux/actions/dataAction";
function Product() {
  const allProduct = useSelector((state) => state?.productReducer?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
   }, []);

  return (
    <div className="img">
      {allProduct?.map((items, index) => (
        <Card className="cardData" key={index}>
          <Link to="/details" onClick={() => dispatch(oneItem(items.id))}>
            <img
              className="images"
              src={items.imgUrl}
              alt="images"
              height="200"
              width="200"
            />
          </Link>
          <p>{items.reviews.title}</p>
          <p>{items.category.type}</p>
          <p>${items.price}</p>

          <Button
            onClick={() => {
              dispatch(addToCart(items));
            }}
          >
            Add to card
          </Button>
          <div className="card toast-demo"></div>
        </Card>
      )
      )}
    </div>
  );
}

export default Product;
