import React,{useState} from "react";
import { Dashboard } from "../Dashboard";
import { InputText } from "primereact/inputtext";
export function AddProduct() {
  const [value1,setValue1] = useState("")
  const [value2,setValue2] = useState("")
  const [value3,setValue3] = useState("")
  const [value4,setValue4] = useState("")
  const [value5,setValue5] = useState("")
  const [value6,setValue6] = useState("")
  return (
    <>
      <Dashboard />
      <div style={{ position: "absolute", marginLeft: "720px",marginTop:"200px"}}>
      <h3 >
      Add New Products
      </h3>
     Product Name <InputText  placeholder=" Product Name" value={value1} onChange={(e) => setValue1(e.target.value)} /><br/><br/>
      Enter Product Details  <InputText placeholder=" ter Product Details" value={value1} onChange={(e) => setValue1(e.target.value)} /><br/><br/>
     Enter Category ID<InputText placeholder=" Enter Category ID" value={value1} onChange={(e) => setValue1(e.target.value)} /><br/><br/>
      Enter Brand ID<InputText placeholder="Enter Brand ID" value={value1} onChange={(e) => setValue1(e.target.value)} /><br/><br/>
      Enter Product Price<InputText placeholder=" Enter Product Price" value={value1} onChange={(e) => setValue1(e.target.value)} /><br/><br/>
     Product Image <InputText  value={value1} onChange={(e) => setValue1(e.target.value)} /><br/><br/>
      </div>
    </>
  );
}
