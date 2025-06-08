import Items from "./Items";
import frame from "/assets/Frame 611.png";
import keyboard from "/assets/keyboard1.png";
import chair from "/assets/chair.png";
import tele from "/assets/tele1.png";

const MainItems = () => {
  return (
    <section className="border-2 border-red-500 flex justify-between pl-30 overflow-auto ">
      <Items
        imageSrc={frame}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <Items
        imageSrc={keyboard}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <Items
        imageSrc={tele}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <Items
        imageSrc={chair}
        title="HAVIT HV-G92 Gamepad"
        price="120"
        initialPrice="123"
        rate="88"
      />
      <Items
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
