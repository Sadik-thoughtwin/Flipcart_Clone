import React, { useEffect, useRef } from "react";
import { Card } from "primereact/card";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { addToCart } from "../../Redux/actions/itemsAction";
import "./Product.css";
import { Toast } from "primereact/toast";
import { fetchProducts } from "../../Redux/actions/GetProduct/productAction";
function Product() {
  const allProduct = useSelector((state) => state.productReducer.products);
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
      life: 300,
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
          <Button
            onClick={() => {
              dispatch(addToCart(items));
              showSuccess();
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