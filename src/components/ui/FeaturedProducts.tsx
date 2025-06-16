import React from "react";
import PlayStationProduct from "./PlayStationProduct";
import WomenCollectionProduct from "./WomenCollectionProduct";
import SpeakerProduct from "./SpeakerProduct";
import { PerfumeProduct } from "./PerfumeProduct";

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-4 px-2">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">Featured</p>
      </div>
      <p className="font-bold text-[20px] px-2 mt-2">New Arrival</p>
      <PlayStationProduct />
      <WomenCollectionProduct />
      <SpeakerProduct />
      <PerfumeProduct />
    </section>
  );
};

export default FeaturedProducts;
