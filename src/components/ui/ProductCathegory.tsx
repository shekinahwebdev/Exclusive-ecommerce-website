import jacket from "/assets/jacket1.png";
import bag from "/assets/bag.png";
import cooler from "/assets/cpu-cooler.png";
import bookshelf from "/assets/bookshelf.png";
import ItemCard from "./ItemCard";

const ProductCathegory = () => {
  const items = [
    {
      imageSrc: jacket,
      title: "The north coat",
      price: 260,
      initialPrice: 360,
      rate: 65,
    },
    {
      imageSrc: bag,
      title: "Gucci duffle bag",
      price: 960,
      initialPrice: 1160,
      rate: 65,
    },
    {
      imageSrc: cooler,
      title: "RGB liquid CPU Cooler",
      price: 160,
      initialPrice: 170,
      rate: 65,
    },
    {
      imageSrc: bookshelf,
      title: "Small BookSelf",
      price: 360,
      initialPrice: 300,
      rate: 65,
    },
  ];
  return (
    <main className="px-2 py-10">
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">This month</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] mt-5">Best Selling Product</p>
        <button className="bg-secondary2 text-white px-8 py-2 rounded hover:bg-secondary1 transition-all duration-300">
          View All
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-start mt-10">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
            initialPrice={item.initialPrice}
            rate={item.rate}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductCathegory;
