import rightArrow from "/assets/right-arrow-2.png";
import leftArrow from "/assets/arrow-left.png";

const TimeLife = () => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex justify-center gap-10 items-center">
        <p className="font-bold text-3xl">Flash Sales</p>
        <div className="flex flex-col items-center">
          <p className="text-sm">Days</p>
          <h3 className="font-bold text-2xl">03</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">Hours</p>
          <h3 className="font-bold text-2xl">03</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">Medium</p>
          <h3 className="font-bold text-2xl">03</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">Seconds</p>
          <h3 className="font-bold text-2xl">03</h3>
        </div>
      </div>

      <div className="flex gap-3">
        <img
          src={leftArrow}
          alt="left-icon"
          className="bg-text1 w-[30px] h-[30px] p-1.5 rounded-full  cursor-pointer hover:bg-secondary2 transition-all duration-300"
        />
        <img
          src={rightArrow}
          alt="right-icon"
          className="bg-text1 w-[30px] h-[30px] p-1.5 rounded-full  cursor-pointer hover:bg-secondary2 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default TimeLife;
