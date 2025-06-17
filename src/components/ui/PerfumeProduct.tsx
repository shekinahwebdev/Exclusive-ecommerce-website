import perfume from "/assets/perfume.png";
export const PerfumeProduct = () => {
  return (
    <div className="bg-text2 py-30 text-text rounded-[4px] relative flex flex-col justify-start md:p-10 md:flex-row">
      <img src={perfume} alt="speaker-product" className="ml-30" />
      <div className="flex flex-col  gap-2 w-[245px] absolute bottom-30 ml-5">
        <h3 className="text-2xl font-bold">Perfume</h3>
        <p className="text-sm leading-1">GUCCI INTENSE OUD EDP</p>
        <a href="#" className="text-text">
          Shop Now
        </a>
      </div>
    </div>
  );
};
