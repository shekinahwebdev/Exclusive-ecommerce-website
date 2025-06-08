import FlashSales from "./components/FlashSales";
import MainItems from "./components/MainItems";
import NavBar from "./components/NavBar";
import ShopSection from "./components/ShopSection";
const App = () => {
  return (
    <div className="">
      <NavBar />
      <ShopSection />
      <FlashSales />
      <MainItems />
    </div>
  );
};

export default App;
