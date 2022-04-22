import React from "react";
import { Header } from "../../Component/Header/Header";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import "./Checklist.css";
import { openModel } from "../../Redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { decrement, increment } from "../../Redux/actions/itemsAction";
import {Payment} from  '../Payment/Payment';


function Checkout() {
  const allItem = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate;

  const placeOrder = () => {
    if (localStorage.getItem("token")) {
      navigate("/payment");
    }
    dispatch(openModel(true));
  };
  const allCard = allItem.reduce((totalAll, element) => {
    return totalAll + element.price * element.quantity;
  }, 0);

  const decrementProduct = (id) => {
    dispatch(decrement(id));
  };
  const incrementProduct = (id) => {
    dispatch(increment(id));
  };

  return (
    <div className="checkout-main-div  payment-bill1">
      <Header />
      <h3 style={{ paddingTop: "80px", marginLeft: "20" }}>
        All Added Product{allItem.length}
      </h3>
      {allItem?.map((itemlist, index) => {
        return (
          <div className="checkout-item" key={index}>
            <img className="all-images" src={itemlist.imgUrl} alt="img" />

            <div className="descripes-details">
              <h4 style={{ color: "green" }}>Special Price</h4>
              <h1 className="check-details">₹{itemlist.price}</h1>
              <h2 className="check-details">{itemlist.title}</h2>
              <h3 style={{ fontSize: "15px", marginTop: "40px" }}>
                Available offers
              </h3>
              <div>
                <img
                  width="20"
                  height="20"
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="imagestag"
                />
                Special PriceGet at flat ₹ {itemlist.price}
              </div>
              <div>
                <img
                  width="20"
                  height="20"
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="imagestag"
                />
                Partner OfferSign up for Flipkart Pay Later and get Flipkart
                Gift Card worth ₹100*Know More
              </div>
              <div>
                <img
                  width="20"
                  height="20"
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="imagestag"
                />
                Bank Offer10% off on Slice Cards, up to ₹200. On orders of ₹1000
                and aboveT&C
              </div>
              <div>
                <img
                  width="20"
                  height="20"
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="imagestag"
                />
                Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
              </div>
              <div className="check-details">{itemlist.category.type}</div>
              <div>
                <Button onClick={() => decrementProduct(itemlist.id)}>-</Button>
                <span className="span-qualntity">{itemlist.quantity}</span>
                <Button onClick={() => incrementProduct(itemlist.id)}>+</Button>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <h3 className="payment-prices1">Product Bill</h3>
        {allItem?.map((list, index) => {
          return (
            <div className="payment-bill1" key={index}>
              <span className="payment-prices1">
                <span className="payment-pricess">
                  Price:({list.quantity} item){" "}
                </span>
                <span className="payment-prices">{list.price}</span>
              </span>
            </div>
          );
        })}
      </div>
      <div className="payment-bill">
        <div className="total-amount">
          Total Amount :<span className="payment-pri">{allCard}</span>
        </div>
        <br />
          <div >
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
