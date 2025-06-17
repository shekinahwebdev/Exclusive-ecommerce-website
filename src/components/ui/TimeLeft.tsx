import rightArrow from "/assets/right-arrow-3.png";
import leftArrow from "/assets/arrow-2.png";

const TimeLeft = () => {
  return (
    <div className="mt-5 md:flex md:gap-5 md:justify-between">
      <div className="flex justify-between">
        <p className="font-bold text-[20px] md:text-3xl">Flash Sales</p>
        <div className="flex gap-3 md:hidden">
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
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <p className="text-[12px] md:text-[16px]">Days</p>
          <h3 className="font-bold text-xl md:text-2xl">03</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[12px] md:text-[16px]">Hours</p>
          <h3 className="font-bold text-xl  md:text-2xl">23</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[12px] md:text-[16px]">Medium</p>
          <h3 className="font-bold text-xl  md:text-2xl">19</h3>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[12px] md:text-[16px]">Seconds</p>
          <h3 className="font-bold text-xl  md:text-2xl">56</h3>
        </div>
      </div>
      <div className="flex gap-3 hidden md:flex">
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
  );
};

export default TimeLeft;
