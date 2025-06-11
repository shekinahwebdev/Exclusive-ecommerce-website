import frame from "/assets/Frame 611.png";
import keyboard from "/assets/keyboard1.png";
import chair from "/assets/chair.png";
import ProductCard from "./ProductCard";

const MainItems = () => {
  return (
    <section className="flex flex-wrap gap-6 justify-center items-start px-5 py-5">
      <ProductCard
        imageSrc={frame}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <ProductCard
        imageSrc={keyboard}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <ProductCard
        imageSrc={chair}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <ProductCard
        imageSrc={chair}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <ProductCard
        imageSrc={chair}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <ProductCard
        imageSrc={chair}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
    </section>
  );
};

export default MainItems;
