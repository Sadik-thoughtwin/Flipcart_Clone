import React, { useState,useEffect } from "react";
import { Dashboard } from "../Dashboard";
import { FileUpload } from "primereact/fileupload";
import "./AddProduct.css";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { addproduct } from "../../Redux/actions/AddProductAction";
import { useDispatch } from "react-redux";
export function AddProduct() {
 const dispatch =useDispatch()
 
//  console.log("kkkkk>>>>>",localStorage.getItem("Admin-token"))
 useEffect(()=>{
  localStorage.getItem("Admin-token")
  
 },[])

  const initialValues = {
    categoryId: "",
    brandId: "",
    price: "",
    title:"",
    avatar: "",
  };
  const onSubmit = (values, submitProps) => {
    dispatch(addproduct(values))
    submitProps.resetForm()
    console.log("form values",values)
  };

  const validate = (values) => {
    let errors = {};
  
    if (!values.categoryId) {
      errors.categoryId = "categoty_Id is required";
    }
    if (!values.brandId) {
      errors.brandId = "brand_Id is required";
    }
    if (!values.price) {
      errors.price = "product_Price is required";
    }
    if (!values.avatar) {
      errors.avatar = "avatar is required";
    }
    
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  
  return (
    <>
      <Dashboard />
      <div
        style={{
         
          marginLeft: "720px",
          paddingTop:"90px"
         }}
      >
        <h3>Add New Products</h3>
        <div>
          <form onSubmit={formik.handleSubmit} className="form-details">
            
             <div className="form-control">
            <label htmlFor="categoryId"> Enter Category ID: </label>
            <br />
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              placeholder=" Enter Category ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryId}
            />
             { formik.touched.categoryId && formik.errors.categoryId? <div className="product-name">{formik.errors.categoryId}</div>:null}
             </div>
           
            <div className="form-control">
            <label htmlFor="brandId"> Enter Brand ID: </label>
           
            <input
              type="text"
              id="brandId"
              name="brandId"
              placeholder="Enter Brand ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brandId}
            />
             { formik.touched.brandId && formik.errors.brandId? <div className="product-name">{formik.errors.brandId}</div>:null}
             </div>
          
            <div className="form-control">
            <label htmlFor="price"> Enter Product Price: </label>
        
            <input
              type="number"
              id="price"
              name="price"
              placeholder=" Enter Product Price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
             {formik.touched.price &&  formik.errors.price? <div className="product-name">{formik.errors.price}</div>:null}
             </div>


             {/* title */}
             <div className="form-control">
            <label htmlFor="title"> Enter Product title: </label>
        
            <input
              type="text"
              id="title"
              name="title"
              placeholder=" Enter Product Price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
             {formik.touched.title &&  formik.errors.title? <div className="product-name">{formik.errors.title}</div>:null}
             </div>
          
            <div className="form-control">
            <label htmlFor="avatar"> Product Avatar: </label>
           
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={formik.handleChange}
               onBlur={formik.handleBlur}
              value={formik.values.avatar}
            />
             {formik.touched.avatar &&  formik.errors.avatar? <div className="product-name">{formik.errors.avatar}</div>:null}
             </div>
           
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
