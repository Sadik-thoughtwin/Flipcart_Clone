import React, { useState,useEffect,useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import {increment} from '../../Redux/actions/dataAction';
const Cart = () => {
  const colculation =useSelector((calcu)=>console.log("state1",calcu))
  const [visibleRight, setVisibleRight] = useState(false);
  const allProduct = useSelector((state) => state.productReducer.products);
  const allItem = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();
  useEffect(()=>{

  },[])
  return (
    <div>
      <div className="card">
        <Sidebar
          visible={visibleRight}
          className="show_data"
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          {allItem?.map((single,index) => 
           {
            return <div  key={index} className="card_data">
            <img src={single.imgUrl} alt="imagee" height="100" width="100"/>
            <h3>{single.category.type}</h3>
            <h3>{single.price}</h3>
            <h3>{single.title}</h3>
            <button onClick={dispatch(increment({count:5}))}>-</button> {allItem.length} <button>+</button>
              </div>
           }
          )
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
