import NavBar from "../components/ui/NavBar";
import ShopSection from "../components/ui/ShopSection";
import CathegorySideBar from "../components/ui/CathegorySidebar";
import MainItems from "../components/ui/MainItems";
import FlashSales from "../components/ui/FlashSales";
import { BrowseCathegory } from "../components/ui/BrowseCathegory";
import ProductCathegory from "../components/ui/ProductCathegory";

const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <ShopSection />
      <CathegorySideBar />
      <FlashSales />
      <MainItems />
      <div className="flex justify-center">
        <button className="bg-secondary2 px-15 py-3 rounded-md text-white mt-10">
          View all Product
        </button>
      </div>
      <BrowseCathegory />
      <ProductCathegory />
    </div>
  );
};

export default HomePage;
