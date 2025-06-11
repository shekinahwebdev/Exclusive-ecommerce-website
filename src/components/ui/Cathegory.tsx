import rightArrow from "/assets/right-arrow-2.png";
import leftArrow from "/assets/arrow-left.png";
import Devices from "./Devices";

export const Cathegory = () => {
  return (
    <main className="pl-2">
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">Today's</p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold text-[20px]">Browse By Cathegory</p>
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

      <Devices />
    </main>
  );
};
