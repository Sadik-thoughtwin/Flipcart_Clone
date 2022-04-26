import React, { useRef } from "react"
import Checkout from "react-stripe-checkout"
import { CLIENT_SECRET_KEY } from "../../config/env.config"


export const Payment = ({length,amount})=> {
  const time = useRef(0)
  const timer = useRef(null)

 

  return (
    <div className="Payment">
      <Checkout
        name="Flipcart"
        description={`Place your Order,${length},Items`}
        label="Place Order"
        panelLabel="Pay"
        email="already-know-flipcart@email.com"
        amount={amount}
        currency="USD"
        shippingAddress
        billingAddress
        stripeKey={`${CLIENT_SECRET_KEY}`}
       
      />
    </div>
  )
}

























// // // import React from 'react'
// // import {Elements} from '@stripe/react-stripe-js';
// // import {loadStripe} from '@stripe/stripe-js';
// // import {CheckoutForm } from './CheckoutForm'
// //   const stripePromise = loadStripe('pk_live_51KqxrjSEcpVqx6Kdyu3BZz9GnFzjd8GR6iYSFDmUzw6b3xCKHHspxbSNpfiuAb4a8yFFaHHDN8J8DFbUFAMAZK2K009ap1nWXI');
// // export function Payment() {
// //     const options = {
// //       clientSecret: '{{CLIENT_SECRET}}',
// //     }
// //         return (
// //             <Elements stripe={stripePromise} options={options}>
// //               <CheckoutForm />
// //             </Elements>
// //           );
        
// // }


// import React, { useState, useEffect } from "react";


// export const Payment = () => (
//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//       <h3>Stubborn Attachments</h3>
//       <h5>$20.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <Payment />
//   );
// }