import React from "react";
import { Header } from "../../Component/Header/Header";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";

import "./Checklist.css";
import { openModel } from "../../Redux/actions/userAction";

function Checkout() {
  const allItem = useSelector((state) => state.itemReducer);
  const dispatch =useDispatch()

const placeOrder= ()=>{
    dispatch(openModel(true));
}


  return (
    <div>
      <Header />
      {allItem?.map((itemlist, index) => {
        return (
          <div className="checkout-item" key={index}>
            <img className="all-images" src={itemlist.imgUrl} alt="img" />
            <div className="descripes-details">
              <h4 style={{ color: "green" }}>Special Price</h4>
              <h3 className="check-details">₹{itemlist.price}</h3>
              <p className="check-details">{itemlist.title}</p>
            <h3 style={{fontSize:"15px",marginTop:"40px"}}>Available offers</h3>
              <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>Special PriceGet at flat ₹ {itemlist.price}</p>
              <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More</p>
              <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/> Bank Offer10% off on Slice Cards, up to ₹200. On orders of ₹1000 and aboveT&C</p>
              <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
              <p className="check-details">{itemlist.category.type}</p>
              <Button onClick={()=>placeOrder()} className="place-order">Place order</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Checkout;
