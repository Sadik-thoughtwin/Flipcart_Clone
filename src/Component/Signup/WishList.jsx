import React from 'react';
import {Link} from 'react-router-dom';
function WishList() {
  return (
    <div className="dropdown_content">
              <div className='new_cutomer'>
                <h5>New Customer?</h5>
               <h5><Link to ="/signup" style={{textDecoration:"none"}}>SignUp</Link></h5>
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
            </div>
  )
}

export default WishList;