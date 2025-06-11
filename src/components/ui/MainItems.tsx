import frame from "/assets/Frame 611.png";
import keyboard from "/assets/keyboard1.png";
import chair from "/assets/chair.png";
import tele from "/assets/tele1.png";
import ProductCard from "./ProductCard";

const MainItems = () => {
  return (
    <section className="flex flex-wrap gap-6 justify-center items-start px-5 py-5">
      <ProductCard
        imageSrc={frame}
        title="HAVIT HV-G92 Gamepad"
        price={120}
        initialPrice={123}
        rate={88}
      />
      <ProductCard
        imageSrc={keyboard}
        title="AK-900 Wired Keyboard"
        price={960}
        initialPrice={1160}
        rate={75}
      />
      <ProductCard
        imageSrc={tele}
        title="IPS LCD Gaming Monitor"
        price={370}
        initialPrice={400}
        rate={99}
      />
      <ProductCard
        imageSrc={chair}
        title="S-Series Comfort Chaird"
        price={375}
        initialPrice={400}
        rate={99}
      />
      <ProductCard
        imageSrc={chair}
        title="S-Series Comfort Chaird"
        price={375}
        initialPrice={400}
        rate={99}
      />
    </section>
  );
};

export default MainItems;
