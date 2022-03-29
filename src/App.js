import "./App.css";
import React from 'react';
import { Header } from "./Component/Header/Header";
import NavbarImages from '../src/Component/Images/NavbarImages';
import {CarouselData } from '../src/Component/Carousel/CarouselData';
import SbiImages from '../src/Component/ImageSection/SbiImages';
import Product from '../src/Pages/Products/Product'

function App() {
  return (
    <div className="App">
      <Header />
       <NavbarImages />
        <CarouselData />
        <SbiImages />
        <Product />
   </div>
  );
}
export default App;
