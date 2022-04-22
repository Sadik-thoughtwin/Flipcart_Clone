import "./App.css";
import React from "react";
import { Header } from "./Component/Header/Header";
import NavbarImages from "../src/Component/Images/NavbarImages";
import { CarouselData } from "../src/Component/Carousel/CarouselData";
import SbiImages from "../src/Component/ImageSection/SbiImages";
import Product from "../src/Pages/Products/Product";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarImages />
      <CarouselData />
      <SbiImages />
      <Product />
      <Footer />
    </div>
  );
}
export default App;
