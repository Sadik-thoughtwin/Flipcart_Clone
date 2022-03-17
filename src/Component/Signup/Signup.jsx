import React from 'react'

function Signup() {
  return (
    <div className="dropdown_content">
              <p>
                New Customer?
               <p  className="SignUp" > Signup</p>
               </p>
              <div className="myprofile">
                <h6 className="myprofile_content">
                  <i className="pi pi-user" />
                  My Profile
                </h6>
              </div>
              <div className="myprofile">
                <h6 className="myprofile_content">
                  <i className="pi pi-plus-circle" />
                  Flipcart Plus Zone
                </h6>
              </div>
              <div className="myprofile">
               
                <h6 className="myprofile_content">
                  <i className="pi pi-chevron-up" />
                  Orders
                </h6>
              </div>
              <div className="myprofile">
                <h6 className="myprofile_content">
                  <i className="pi pi-heart" />
                  Wishlists
                </h6>
              </div>
              <div className="myprofile">
                <h6 className="myprofile_content">
                  <i className="pi pi-credit-card" />
                  Rewards
                </h6>
              </div>
            </div>
  )
}

export default Signup