import React,{useState} from 'react';
import { useSelector } from 'react-redux';

import Signup from './Signup';
import {Logout} from '../../Component/Logout/Logout';
import './Signup.css';
function WishList() {
  
  return (
    <div className="dropdown_content">
              <div className='new_cutomer'>
                <span className="new-customer">New Customer?</span>
               <span style={{marginLeft:"5px"}}> <Signup /></span>

               </div>
              <div className="myprofile">
                <h5 className="myprofile_content">
                  <i className="pi pi-shopping-cart" />
                  <span style={{marginLeft:"10px"}}>My Profile</span>
                  </h5>
                  </div>
              <div className="myprofile">
                <h6 className="myprofile_content">
                  <i className="pi pi-plus-circle Flipcartplus" />
                  <span style={{marginLeft:"10px"}}>Flipcart Plus Zone</span>
                </h6>
              </div>
              <div className="myprofile">
               
                <h6 className="myprofile_content">
                  <i className="pi pi-chevron-up" />
                 <span style={{marginLeft:"10px"}}> Orders</span>
                </h6>
              </div>
              <div className="myprofile">
                <h6 className="myprofile_content">
                  <i className="pi pi-heart" />
                  <span style={{marginLeft:"10px"}}>Wishlists</span>
                </h6>
              </div>
              <div className="myprofile">
                <h6 className="myprofile_content">
                  <i className="pi pi-credit-card" />
                  <span style={{marginLeft:"10px"}}>Rewards</span>
                </h6>
                
              </div>
              <Logout />
            </div>
  )
}

export default WishList;