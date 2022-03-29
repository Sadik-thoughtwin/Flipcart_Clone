import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";  
import {Header }from '../Header/Header'
function Details() {
  const [getId, setGetId] = useState("");
  const newData = useSelector((state) => state.productReducer.products);
  const id = useSelector((state) => state.dataReducer);
 const  customStyle = {
      textAlign:"center",
      backgroundColor:"white",
      
  }
  useEffect(() => {
    
    const newItem = newData.find((item) => {
      return item.id === id;
    });
    setGetId(newItem);
    console.log("newItem", newItem);
  },[]);

  return (
    <>
    <Header />
      <div style={customStyle}>
        
        <h3>
          <img src={getId.imgUrl} alt="img1" max-width="300" max-height="400" />
        </h3>
       <h6> {getId.title} </h6>
       <p> {getId.name} </p>
        Description:
        <p> {getId.description} </p>
        <p>${getId.price}.00</p>
       
      </div>
    </>
  );
}

export default Details;
