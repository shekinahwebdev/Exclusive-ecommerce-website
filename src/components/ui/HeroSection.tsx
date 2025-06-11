import React from "react";
import apple from "/assets/apple-2.png";
import arrow from "/assets/arrow.png";
import iphone from "/assets/iphone.png";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white flex flex-col w-full">
      <div className="flex flex-col flex-1 w-full  p-9 ">
        <div className="flex items-center gap-6">
          <img
            src={apple}
            alt="Apple"
            className="w-[40px] h-[49px] object-contain"
          />
          <h2 className="text-[16px] font-semibold">iPhone 14 Series</h2>
        </div>
        <p className="text-4xl tracking-wider leading-snug">
          Up to 10% off Voucher
        </p>
        <a href="#" className=" flex text-[16px] items-center gap-1 mt-4">
          Shop Now
          <img src={arrow} alt="Arrow" className="w-6 h-6" />
        </a>
      </div>
      <div className="image-containe">
        <img
          src={iphone}
          alt="Iphone"
          className="" // Image scales responsively, max height on larger screens
        />
      </div>

      <div className="flex my-4 justify-center gap-3">
        <div className="h-3 w-3 rounded-[50%] bg-text1"></div>
        <div className="h-3 w-3 rounded-2xl bg-text1"></div>
        <div className="h-3 w-3 rounded-2xl bg-text1"></div>
        <div className="h-3 w-3 rounded-2xl bg-text1"></div>
        <div className="h-3 w-3 rounded-2xl bg-text1"></div>
      </div>
    </section>
  );
};

export default HeroSection;
