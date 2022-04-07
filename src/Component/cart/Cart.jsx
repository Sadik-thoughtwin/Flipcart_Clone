import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,removeToCart } from "../../Redux/actions/itemsAction";
const Cart = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  const allItem = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();

  const incrementData = (id) => {
    dispatch(increment(id));
  };

  const decrementData = (id) => {
    dispatch(decrement(id));
  };
  const removeData = (id) => {
    dispatch(removeToCart(id));
  };
  const total = allItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <div className="card">
        <Sidebar
          visible={visibleRight}
          className="show_data"
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <h3>Cart List {allItem.length}</h3>
          {allItem == ""? (
            <div style={{ margin: "40px" }}>
              <h3>Missing Cart Items ?</h3>
              <img
                src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                width="100"
                height="100"
                alt="items_img"
              />
              <p>Login to see the items you added previously</p>
            </div>
          ) : (
            ""
          )}

          {allItem?.map((single, index) => {
            return (
              <div key={index} className="card_data">
                <hr />
                <img src={single.imgUrl} alt="imagee" />
                <h3>{single.category.type}</h3>
                <h3>Rs:{single.price}.00</h3>
                <h3>{single.title}</h3>
                <button className="DecrementButton" onClick={() => decrementData(single.id)}> - </button>
                <span>{single.quantity}</span>
                <button className="IncrementButton" onClick={() => incrementData(single.id)}> + </button>
                <button className="removeData" onClick={() => removeData(single.id)}> Remove </button>
                <hr />
              </div>
            );
          })}
          {allItem.length > 0 && <h3>Total:{total}.00 </h3>}
        </Sidebar>

        <Button
          label="Cart"
          onClick={() => setVisibleRight(true)}
          className="mr-2"
        >
          <i
            className="pi pi-shopping-cart mr-2 p-text-secondary p-overlay-badge icon"
            style={{ fontSize: "1.2rem"}}
          >
            <Badge value={allItem.length} severity="danger"></Badge>
          </i>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
