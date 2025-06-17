import rightArrow from "/assets/right-arrow-3.png";
import leftArrow from "/assets/arrow-2.png";
import camera1 from "/assets/camera1.png";
import snack from "/assets/snack.png";
import product from "/assets/product.png";
import gaminglaptop from "/assets/gaminglaptop.png";
import car from "/assets/New-Mercede.png";
import controller from "/assets/gameController.png";
import boots from "/assets/boots.png";
import jacket from "/assets/satin-jacket.png";
import MainProductItems from "./MainProductItems";
import NewProductItems from "./NewProductItems";

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

  const moreItems = [
    {
      imageSrc: car,
      title: "Kids Electric Car",
      price: 960,
      rate: 65,
    },
    {
      imageSrc: controller,
      title: "Jr. Zoom Soccer Cleats",
      price: 1160,
      rate: 35,
    },
    {
      imageSrc: boots,
      title: "GP11 Shooter USB Gamepad",
      price: 660,
      rate: 55,
    },
    {
      imageSrc: jacket,
      title: "Quilted Satin Jacket",
      price: 660,
      rate: 55,
    },
  ];
  return (
    <main className="px-2 py-10 md:pl-30">
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">Our Products</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] mt-5 md:text-3xl">
          Explore Our Products
        </p>
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
      <section className="flex flex-wrap gap-4 mt-10 justify-center-safe md:px-30">
        {/* <div className="flex flex-wrap gap-6 justify-center items-start mt-10 md:flex-nowrap"> */}
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
        {moreItems.map((item, index) => (
          <NewProductItems
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
            rate={item.rate}
          />
        ))}
        {/* </div> */}
      </section>
      <div className="flex justify-center">
        <button className="bg-secondary2 px-15 py-3 rounded-md text-white mt-10">
          View all Product
        </button>
      </div>
    </main>
  );
};

export default MainProducts;
