import jacket from "/assets/jacket.jpg";
import ItemCard from "./ItemCard";

const ProductCathegory = () => {
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
        <ItemCard
          imageSrc={jacket}
          title="HAVIT HV-G92 Gamepad"
          price="120"
          initialPrice="123"
          rate="88"
        />
        <ItemCard
          imageSrc={jacket}
          title="HAVIT HV-G92 Gamepad"
          price="120"
          initialPrice="123"
          rate="88"
        />
        <ItemCard
          imageSrc={jacket}
          title="HAVIT HV-G92 Gamepad"
          price="120"
          initialPrice="123"
          rate="88"
        />
        <ItemCard
          imageSrc={jacket}
          title="HAVIT HV-G92 Gamepad"
          price="120"
          initialPrice="123"
          rate="88"
        />
        <ItemCard
          imageSrc={jacket}
          title="HAVIT HV-G92 Gamepad"
          price="120"
          initialPrice="123"
          rate="88"
        />{" "}
        <ItemCard
          imageSrc={jacket}
          title="HAVIT HV-G92 Gamepad"
          price="120"
          initialPrice="123"
          rate="88"
        />{" "}
      </div>
    </main>
  );
};

export default ProductCathegory;
