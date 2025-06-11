import CathegorySideBar from "./components/CathegorySidebar";
import FlashSales from "./components/FlashSales";
import MainItems from "./components/MainItems";
import NavBar from "./components/NavBar";
import ShopSection from "./components/ShopSection";
const App = () => {
  return (
    <div className="">
      <NavBar />
      <ShopSection />
      <CathegorySideBar />
      <FlashSales />
      <MainItems />
      <div className="flex justify-center">
        <button className="bg-secondary2 px-15 py-3 rounded-md text-white">
          View all Product
        </button>
      </div>
    </div>
  );
};

export default App;
