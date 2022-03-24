import React, { useState, useEffect, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/actions/dataAction";
const Cart = () => {
  const colculation = useSelector((calc) => calc.dataReducer);
  console.log("calc",colculation)
  const [visibleRight, setVisibleRight] = useState(false);
  const [value, setValue] = useState(1);
  const allItem = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();
  useEffect(() => {

  }, []);

  const incrementData= ()=>{
       
    //  dispatch(increment(setValue(value+1)))
    
  }
  const decrementData= ()=>{
    
    // dispatch(decrement(setValue(value-1)))
 }
  return (
    <div>
      <div className="card">
        <Sidebar
          visible={visibleRight}
          className="show_data"
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <h3 >Cart</h3>
          {allItem == "" ? <div style={{margin:"40px"}}><h3>Missing Cart Items ?</h3><img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width="100" height="100"/><p>Login to see the items you added previously</p></div> : <h2>Item List</h2>}
          {allItem?.map((single, index) => {
            return (
              <div key={index} className="card_data">
                <img
                  src={single.imgUrl}
                  alt="imagee"
                  height="100"
                  width="100"
                />
                <h3>{single.category.type}</h3>
                <h3>{single.price}</h3>
                <h3>{single.quantity}</h3>
                <h3>{single.title}</h3>
                <button onClick={decrementData}> - </button>
                <span>{single.quantity}</span>
                <button onClick={incrementData}> + </button>
                <hr/>
              </div>
            );
          })
        
          }
        </Sidebar>

        <Button
          label="Cart"
          onClick={() => setVisibleRight(true)}
          className="mr-2"
        >
          <i
            className="pi pi-shopping-cart mr-2 p-text-secondary p-overlay-badge icon"
            style={{ fontSize: "1.2rem" }}
          >
            <Badge value={allItem.length} severity="danger"></Badge>
          </i>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
