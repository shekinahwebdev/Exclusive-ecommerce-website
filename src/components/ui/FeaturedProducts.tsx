import PlayStationProduct from "./PlayStationProduct";
import WomenCollectionProduct from "./WomenCollectionProduct";
import SpeakerProduct from "./SpeakerProduct";
import { PerfumeProduct } from "./PerfumeProduct";

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col gap-4 md:mx-30">
      <div className="flex items-center gap-4 px-2">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">Featured</p>
      </div>
      <p className="font-bold text-[20px] px-2 mt-2">New Arrival</p>
      <div className="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:grid-rows-2">
        <PlayStationProduct />
        <WomenCollectionProduct />
        <SpeakerProduct />
        <PerfumeProduct />
      </div>
    </section>
  );
};

export default FeaturedProducts;
