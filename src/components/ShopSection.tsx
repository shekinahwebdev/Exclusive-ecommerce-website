import CathegorySideBar from "./CathegorySidebar";
import HeroSection from "./HeroSection";

const ShopSection = () => {
  return (
    <main className="flex px-30 justify-between shop-main">
      <CathegorySideBar />
      <HeroSection />
    </main>
  );
};

export default ShopSection;
