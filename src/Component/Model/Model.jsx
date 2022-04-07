// import React, { useEffect, useState } from "react";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import "./Header.css";
// import { Dialog } from "primereact/dialog";
// import Login from  '../Login/Login';
// import { userAction } from "../../Redux/actions/userAction";
// import { useSelector, useDispatch } from "react-redux";

// export const Model = () => {
//   const selector = useSelector((state) => state.userReducer.openModel);
//   const [position, setPosition] = useState(false);
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     setPosition(position);
//   }, [position]);

//   const dialogFuncMap = {
//     position: setPosition,
//   };

//   const onClick = (box) => {
//     dispatch(userAction(!position));
//     dialogFuncMap[`${box}`](true);
//   };

//   const onHide = (box) => {
//     dispatch(userAction(position));
//     dialogFuncMap[`${box}`](false);
//   };

//   return (
//     <div>
//       <header className="header">
//         <img
//           className="logo"
//           src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
//           alt="logo"
//         />

//         <InputText
//           className="InputText p-inputtext"
//           placeholder="Search for products,brands and more"
//         />

//         <div className="parent_LoginDiv button_margin">
//           <Button
//             className="header_Button p-button"
//             label="Login"
//             onClick={() => {
//               onClick("position");
//             }}
//           />
//            </div>

//         <Dialog
//           header="Login"
//           visible={position}
//           style={{ width: "50vw", height: "500px" }}
//           onHide={() => onHide("position")}
//           dismissableMask={true}
//         >
//           <Login />
//         </Dialog>
//      </header>
//     </div>
//   );
// };
