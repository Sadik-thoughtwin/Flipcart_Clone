import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Header } from "../Header/Header";
import './Details.css';
function Details() {
  const [getId, setGetId] = useState("");
  const newData = useSelector((state) => state.productReducer.products);
  const id = useSelector((state) => state.dataReducer);
 
  useEffect(() => {
    const newItem = newData.find((item) => {
      return item.id === id;
    });
    setGetId(newItem);
  }, []);

  return (
    <>
      <Header />
      <div className="custom-style">
        <h3>
          <img src={getId.imgUrl} alt="img1" max-width="300" max-height="400" />
        </h3>
        <h2> {getId.title} </h2>
        <h2> {getId.name} </h2>
        Description:
        <h4> {getId.description} </h4>
        <h4>${getId.price}.00</h4>
        {/* <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>Special PriceGet at flat ₹ {getId.price}</p>
              <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More</p>
              <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/> Bank Offer10% off on Slice Cards, up to ₹200. On orders of ₹1000 and aboveT&C</p>
              <p><img  width="50" height="20" src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p> */}
      </div>
    </>
  );
}

export default Details;
