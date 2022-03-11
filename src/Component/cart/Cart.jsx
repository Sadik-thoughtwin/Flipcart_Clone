import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import './cart.css';

const Cart = () => {
  const [visibleRight, setVisibleRight] = useState(false);

  return (
    <div>
      <div className="card">
        <Sidebar
          visible={visibleRight}
          className="show_data"
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <h3>Cart Item1</h3>
          <h3>Cart Item2</h3>
          <h3>Cart Item3</h3>
        </Sidebar>

        <Button
          icon="pi-shopping-cart" label="Cart"
          onClick={() => setVisibleRight(true)}
          className="mr-2"
        />
      </div>
    </div>
  );
};

export default Cart;
