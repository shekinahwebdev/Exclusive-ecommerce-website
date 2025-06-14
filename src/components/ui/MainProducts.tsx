import rightArrow from "/assets/right-arrow-3.png";
import leftArrow from "/assets/arrow-2.png";
import camera1 from "/assets/camera1.png";
import snack from "/assets/snack.png";
import product from "/assets/product.png";
import gaminglaptop from "/assets/gaminglaptop.png";
import MainProductItems from "./MainProductItems";

const MainProducts = () => {
  const items = [
    {
      imageSrc: snack,
      title: "Breed Dry Dog Food",
      price: 100,
      initialPrice: 360,
      rate: 35,
    },
    {
      imageSrc: camera1,
      title: "CANON EOS DSLR Camera",
      price: 360,
      initialPrice: 1160,
      rate: 95,
    },
    {
      imageSrc: gaminglaptop,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      initialPrice: 170,
      rate: 325,
    },
    {
      imageSrc: product,
      title: "Curology Product Set ",
      price: 500,
      initialPrice: 300,
      rate: 145,
    },
  ];
  return (
    <main className="px-2 py-10">
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">Our Products</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] mt-5">Explore Our Products</p>
        <div className="flex gap-3">
          <img
            src={leftArrow}
            alt="left-icon"
            className="bg-text w-8 h-8 p-2.5 rounded-full  cursor-pointer hover:bg-secondary2 transition-all duration-300 "
          />
          <img
            src={rightArrow}
            alt="right-icon"
            className="bg-text w-8 h-8 p-2.5 rounded-full  cursor-pointer hover:bg-secondary2 transition-all duration-300 "
          />
        </div>
      </div>
      <section className="flex flex-wrap gap-4 mt-10 justify-center-safe">
        <div className="flex flex-wrap gap-6 justify-center items-start mt-10">
          {items.map((item, index) => (
            <MainProductItems
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              price={item.price}
              initialPrice={item.initialPrice}
              rate={item.rate}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainProducts;
