import women from "/assets/attractive-woman-wearing-hat.png";

const WomenCollectionProduct = () => {
  return (
    <div className="bg-text2 text-text rounded-[4px] pt-4 px-3 flex flex-col md:flex-row md:p-20">
      <div className="flex flex-col items-start gap-4 w-[255px]">
        <h3 className="text-2xl font-bold md:mt-40">Women's Collections</h3>
        <p className="text-sm leading-5">
          Featured woman collections that give you another vibe.
        </p>
        <a href="#" className="text-text">
          Shop Now
        </a>
      </div>

      <img
        src={women}
        alt="women-collection-product"
        className="w-full h-auto md:w-[432px]"
      />
    </div>
  );
};

export default WomenCollectionProduct;
