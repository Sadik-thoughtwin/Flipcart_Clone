import React from 'react'
import { useSelector } from 'react-redux'
import {Dashboard}  from '../Dashboard'
import './ProductList.css';
export function ProductList() {
  const getProduct= useSelector(state=>state.productReducer?.products)
  console.log("getProduct",getProduct)
  return (
    <div>
        <Dashboard />
        <table className="product-table">
          <thead >
            <tr className='tr-field'>
              <th>Price</th>
              <th>Id</th>
              <th>Category</th>
              <th>Description</th>
              <th>Quantity</th>
              
            </tr>
          </thead>
       
        {getProduct?.map((alldata,index)=>{
          return (
            <tbody key={index}>
              <tr>
                <td >{alldata.price}</td>
                <td >{alldata._id}</td>
                <td >{alldata.category.type}</td>
                <td >{alldata.description}</td>
                <td >{alldata.stockQuantity}</td>
              </tr>
            </tbody>
        
          )

        })}
      
        </table>
    </div>
  )
}

 