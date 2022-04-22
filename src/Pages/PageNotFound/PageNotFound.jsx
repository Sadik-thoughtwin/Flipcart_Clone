import React from "react";
import { Header } from "../../Component/Header/Header";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
export function PageNotFound() {
  return (
    <>  
     <div className="header-container">
     <Header  />
     </div>

      <div>
        <div className="error-page">
          <img
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
            alt="error-image"
          />
        </div>
        <h2 className="pagenot-found"> Page not Found 404</h2>
        <Link className="pagenot-found1" to="/">
          Back to home page
        </Link>
      </div>
    </>
  );
}
