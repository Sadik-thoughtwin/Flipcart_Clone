import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
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
      .then((data) => setProducts(data.slice(0, 3)));
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3">
            <img
              src={`image/${product.image}`}
              alt={product.name}
              className="product-image"
            />
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
          numVisible={1}
          numScroll={1}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
};
