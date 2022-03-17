import React from 'react'
import axios from 'axios';
function Product() {

    axios.get("https://4a45-116-72-203-33.ngrok.io/api-docs/#/Products/get_products_product").then((res)=>{
            console.log("responce",res)
    }).catch((err)=>{
        console.log("Error",err)
    })
    
  return (
    <div>
        <h2>Product Item</h2>
    </div>
  )
}

export default Product