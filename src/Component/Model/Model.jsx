// // import { Dialog } from 'primereact/dialog';
// // import { Button } from 'primereact/button';
// // import {useSelector} from 'react-redux';
// // import {useState} from 'react';

// // // import './Model.css';
// // import React from 'react'

// // function Model({data}) {
 
// //     // console.log("openModel",selector)
// //     const [displayBasic, setDisplayBasic] = useState(false);
// //     const [position, setPosition] = useState('center');
// //     const selector = useSelector((state)=>state.userReducer.openModel)
// //     console.log("object",selector)

// //     const dialogFuncMap = {
// //     'displayBasic': setDisplayBasic
// // }
// // const onClick = (name, position) => {
// //     dialogFuncMap[`${name}`](true);

// //     if (position) {
// //         setPosition(position);
// //     }
// // }
// //     const onHide = (name) => {
// //     dialogFuncMap[`${name}`](false);
// // }

// //  return (
// //     <div className="dialog-demo">
// //     <div className="card">
// //         <h2>hhhh</h2>
// //     <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }}  onHide={() => onHide('displayBasic')}>
// //             <p>Lorem ipsum dolor sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// //     </Dialog>
        
        
// //     </div>
// // </div>
// //   )
// // }

// // export default Model


// import React, { useState } from 'react';
// import { Dialog } from 'primereact/dialog';
// import { Button} from 'primereact/button';
// import { InputText } from "primereact/inputtext";

// const Model = () => {

//     const [displayBasic2, setDisplayBasic2] = useState(false);
//    const [email,seEmail] =useState(false)
//    const [password,setPassword] =useState(false)
//     const [position, setPosition] = useState('center');

//     const dialogFuncMap = {
//         'displayBasic2': setDisplayBasic2,
        
//     }

//     const onClick = (name, position) => {
//         dialogFuncMap[`${name}`](true);

//         if (position) {
//             setPosition(position);
//         }
//     }

//     const onHide = (name) => {
//         dialogFuncMap[`${name}`](false);
//     }

//     const renderFooter = (name) => {
//         return (
//             <div>
//                 <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
//                 <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
//             </div>
//         );
//     }

//     return (
//         <div className="dialog-demo">
//             <div className="card">
              
//                 <Button label="Long Content"  onClick={() => onClick('displayBasic2')} />
//                 <Dialog header="Login" visible={displayBasic2} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
//                 <InputText
//               className="InputText"
//               onChange={(e) => setLogData(e.target.value)}
//               placeholder="Enter Email/Mobile Number"
//             />
//             <InputText
//               className="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter Password"
//             />
//                 </Dialog>
//             </div>
//         </div>
//     )
// }
                 
// export default Model


 {/* <Button
            onClick={() => dispatch(userAction(true))}
            className="p-button-raised pr-2 lgButton"
          >
            Login
          </Button> */}
          {/* <div className="card"> */}
                  {/* <i className="pi pi-search" />  */}