import rightArrow from "/assets/right-arrow-2.png";
import leftArrow from "/assets/arrow-left.png";

const TimeLife = () => {
  return (
    <div className="mt-3 pr-2">
      <div className="flex justify-between">
        <p className="font-bold text-[20px]">Flash Sales</p>
        <div className="flex gap-2">
          <img
            src={leftArrow}
            alt="left-icon"
            className="bg-text w-6 h-6  rounded-full  cursor-pointer hover:bg-secondary2 transition-all duration-300 p-2"
          />
          <img
            src={rightArrow}
            alt="right-icon"
            className="bg-text w-6 h-6 rounded-full  cursor-pointer hover:bg-secondary2 transition-all duration-300 p-2"
          />
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center">
          <p className="text-[12px]">Days</p>
          <h3 className="font-bold text-xl">03</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[12px]">Hours</p>
          <h3 className="font-bold text-xl">23</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[12px]">Medium</p>
          <h3 className="font-bold text-xl">19</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[12px]">Seconds</p>
          <h3 className="font-bold text-xl">56</h3>
        </div>
      </div>
    </div>
  );
};

export default TimeLife;
