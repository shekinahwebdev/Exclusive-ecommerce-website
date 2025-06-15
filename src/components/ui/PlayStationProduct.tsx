import playstation from "/assets/playstation.png";
const PlayStationProduct = () => {
  return (
    <div className="bg-text2 py-30 text-text rounded-[4px] relative">
      <img src={playstation} alt="playstation-product" />
      <div className="flex flex-col items-start gap-4 w-[245px] absolute bottom-6 ml-5">
        <h3 className="text-2xl font-bold">PlayStation 5</h3>
        <p className="text-sm">
          Black and White version of the PS5 coming out on sale.
        </p>

        <a href="#" className="text-text">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default PlayStationProduct;
