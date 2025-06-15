import NavBar from "../components/ui/NavBar";
import ShopSection from "../components/ui/ShopSection";
import CathegorySideBar from "../components/ui/CathegorySidebar";
import MainItems from "../components/ui/MainItems";
import FlashSales from "../components/ui/FlashSales";
import { BrowseCathegory } from "../components/ui/BrowseCathegory";
import ProductCathegory from "../components/ui/ProductCathegory";
import { ProductContext } from "../context/homepagecontext";
import { useState } from "react";
import LimitedTimeOffer from "../components/ui/LimitedTimeOffer";
import speaker from "/assets/speaker.png";
import MainProducts from "../components/ui/MainProducts";
import FeaturedProducts from "../components/ui/FeaturedProducts";

const HomePage = () => {
  const [products] = useState([
    {
      id: 1,
      imageSrc: "/assets/Frame 611.png",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      initialPrice: 123,
      rate: 88,
    },
    {
      id: 2,
      imageSrc: "/assets/keyboard1.png",
      title: "AK-900 Wired Keyboard",
      price: 960,
      initialPrice: 1160,
      rate: 75,
    },
    {
      id: 3,
      imageSrc: "/assets/tele1.png",
      title: "IPS LCD Gaming Monitor",
      price: 370,
      initialPrice: 400,
      rate: 99,
    },
    {
      id: 4,
      imageSrc: "/assets/chair.png",
      title: "S-Series Comfort Chaird",
      price: 375,
      initialPrice: 400,
      rate: 99,
    },
    {
      id: 5,
      imageSrc: "/assets/chair.png",
      title: "S-Series Comfort Chaird",
      price: 375,
      initialPrice: 400,
      rate: 99,
    },
  ]);

  return (
    <ProductContext.Provider value={products}>
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
        <LimitedTimeOffer
          heading="Categories"
          subtitle="Enhance Your Music Experience"
          countdown={{ hours: 23, days: 5, minutes: 59, seconds: 35 }}
          buttonText="Buy Now!"
          imageSrc={speaker}
        />
        <MainProducts />
        <FeaturedProducts />
      </div>
    </ProductContext.Provider>
  );
};

export default HomePage;
