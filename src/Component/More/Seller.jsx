import React from 'react'
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
function Seller() {
  return (
    <div>
        <h2 className=''>Seller Account</h2>
      <form>
      <InputText
            className="InputText"
            placeholder="Enter your Email"
          /><br /><br />
      <InputNumber
        placeholder="Enter your number"
          />
      </form>
       </div>
  )
}

export default Seller

