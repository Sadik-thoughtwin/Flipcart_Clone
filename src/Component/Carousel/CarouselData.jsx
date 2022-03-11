import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { ProductService } from "./ProductService";
import "./Carousel.css";

export const CarouselData = () => {
  const [products, setProducts] = useState([]);

  const productService = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then((data) => {
      setProducts(data);
    });

    productService
      .getProductsSmall()
      .then((data) => setProducts(data.slice(0, 9)));
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3">
            <img
              src={`image/${product.image}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={product.name}
              className="product-image"
            />
          </div>
          <div>
            <h4 className="mb-1">{product.name}</h4>
            <h6 className="mt-0 mb-3">${product.price}</h6>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      <div className="card">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          // responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
};
