import HeroSection from "./HeroSection";
import CathegorySideBar from "./CathegorySideBar";

const ShopSection = () => {
  return (
    <main className="flex  px-30 justify-between">
      <CathegorySideBar />
      <HeroSection />
    </main>
  );
};

export default ShopSection;
