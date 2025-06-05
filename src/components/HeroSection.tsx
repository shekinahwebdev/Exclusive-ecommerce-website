import React from "react";
import apple from "/public/assets/apple-2.png";
import arrow from "/public/assets/arrow.png";
import iphone from "/public/assets/iphone.png";

const HeroSection = () => {
  return (
    <section className="border-2 bg-black text-white flex p-20 w-7xl justify-between mt-20">
      <div className="flex flex-col pt-2.5">
        <div className="flex items-center gap-2">
          <img
            src={apple}
            alt="Apple"
            className="w-[50px] h-[59px] object-cover"
          />
          <h2>iPhone 14 Series</h2>
        </div>
        <p className="text-6xl mt-3 font-bold leading-17">
          Up to 10%
          <br className="hidden sm:inline" /> off Voucher
        </p>
        <a
          href="#"
          className=" flex gap-1.5 w-fit mx-auto lg:mx-0 mt-10 underline"
        >
          Shop Now
          <img src={arrow} alt="Arrow" className="w-[30px] h-[30px]" />
        </a>
      </div>
      <div className="">
        <img
          src={iphone}
          alt="Iphone"
          className="w-xl h-[360px]  object-cover ml-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
