import React from 'react'
import { Button } from "primereact/button";

export function Logout() {
    // localStorage.clear()
  return (
    <div>
      <Button onClick={()=>Logout()}>Logout</Button>
    </div>
  )
}




