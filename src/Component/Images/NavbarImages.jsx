import React from 'react'
import './Images.css';

function NavbarImages() {
  return (
    <div className="Navbar_images">
            {/* <a className="NavbarImg" href="#" ><figure className='figure_Images'><img className="Top_offers" src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' alt='Top offers'/><figcaption className='figcaption_offer'>Top offers</figcaption></figure></a> */}
           
              <div className='child_div'> <img className="ItemsImg" src="image/Mobile.jpg" alt="mobile" /><span className='spanitem'>Mobiles</span></div>
              <div className='child_div'> <img  className="ItemsImg"  src="image/fashion.jpg" alt="Fashion" /><span className='spanitem'>Fashion</span></div>
              <div className='child_div'> <img className="ItemsImg"  src="image/electronics.jpg" alt="electronics" /><span className='spanitem'>Electronics</span></div>
              <div className='child_div'> <img className="ItemsImg"  src="image/home.jpg" alt="home" /><span className='spanitem'>Home</span></div>
              <div className='child_div'> <img className="ItemsImg" src="image/travel.jpg" alt="travel" /><span className='spanitem'>Travel</span></div>
              <div className='child_div'> <img className="ItemsImg" src="image/applinces.jpg" alt="aplliences" /><span className='spanitem'>Aplliences</span></div>
              <div className='child_div'> <img className="ItemsImg" src="image/furniture.jpg" alt="furniture" /><span className='spanitem'>Furniture</span></div>
              <div className='child_div'> <img className="ItemsImg" src="image/beaty.jpg" alt="Bueaty,Toys& more" /><span className='spanitem'>Bueaty,Toys& more</span></div>
              <div className='child_div'> <img className="ItemsImg" src="image/glocery.jpg" alt="glocery" /><span className='spanitem'>Glocery</span></div>
          
            </div>
  )
}

export default NavbarImages;