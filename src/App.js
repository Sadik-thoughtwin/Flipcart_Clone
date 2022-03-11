import "./App.css";
import { Header } from "./Component/Header/Header";
import Model from "./Component/Model/Model";
import { CarouselData } from  './Component/Carousel/CarouselData';
function App() {
  return (
    <div className="App">
      <Header />
      <CarouselData />
    </div>
  );
}
export default App;
