import React, { useState } from "react";
import { Dashboard } from "../Dashboard";
import { FileUpload } from "primereact/fileupload";
import "./AddProduct.css";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from 'yup';
export function AddProduct() {
 

  const initialValues = {
    productName: "",
    productDetails: "",
    categotyId: "",
    brandId: "",
    productPrice: "",
    image: "",
  };
  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    submitProps.resetForm()
  };

  const validate = (values) => {
    let errors = {};
    if (!values.productName) {
      errors.productName = "Product Name is required";
    }
    if (!values.productDetails) {
      errors.productDetails = "product_Details is required";
    }
    if (!values.categotyId) {
      errors.categotyId = "categoty_Id is required";
    }
    if (!values.brandId) {
      errors.brandId = "brand_Id is required";
    }
    if (!values.productPrice) {
      errors.productPrice = "product_Price is required";
    }
    if (!values.image) {
      errors.image = "image is required";
    }
    
    return errors;
  };
  // const validationSchema = Yup.object({
  //   productName:Yup.string().required('Requred'),
  //   productDetails:Yup.string().required('Required'),
  //   categotyId:Yup.string().required('Required'),
  //   brandId:Yup.string().required('Required'),
  //   productPrice:Yup.string().required('Required'),
  //   image:Yup.string().required('Required'),
  // })
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("Visited ",formik.touched)
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
            <label htmlFor="productName">Product Name:</label>
          
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder=" Product Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
            />
            {formik.touched.productName && formik.errors.productName? <div className="product-name">{formik.errors.productName}</div>:null}
            </div>
           
              <div className="form-control">
            <label htmlFor="productDetails"> Enter Product Details: </label>
            <br />
            <input
              type="text"
              id="productDetails"
              name="productDetails"
              placeholder=" Enter Product Details"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productDetails}
            />
             {formik.touched.productDetails && formik.errors.productDetails? <div className="product-name">{formik.errors.productDetails}</div>:null}
             </div>
            
            <div className="form-control">
            <label htmlFor="categotyId"> Enter Category ID: </label>
            <br />
            <input
              type="number"
              id="categotyId"
              name="categotyId"
              placeholder=" Enter Category ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productcategotyIdName}
            />
             { formik.touched.categotyId && formik.errors.categotyId? <div className="product-name">{formik.errors.categotyId}</div>:null}
             </div>
           
            <div className="form-control">
            <label htmlFor="brandId"> Enter Brand ID: </label>
           
            <input
              type="number"
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
            <label htmlFor="productPrice"> Enter Product Price: </label>
        
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              placeholder=" Enter Product Price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productPrice}
            />
             {formik.touched.productPrice &&  formik.errors.productPrice? <div className="product-name">{formik.errors.productPrice}</div>:null}
             </div>
          
            <div className="form-control">
            <label htmlFor="image"> Product Image: </label>
           
            <input
              type="file"
              id="image"
              name="image"
              onChange={formik.handleChange}
               onBlur={formik.handleBlur}
              value={formik.values.image}
            />
             {formik.touched.image &&  formik.errors.image? <div className="product-name">{formik.errors.image}</div>:null}
             </div>
           
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
