import React from "react";
import apple from "/assets/apple-2.png";
import arrow from "/assets/arrow.png";
import iphone from "/assets/iphone.png";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-20 max-w-7xl mx-auto justify-between my-8 md:my-20 rounded-lg overflow-hidden">
      <div className="flex flex-col flex-1 text-center md:text-left mb-8 md:mb-0 pt-2.5">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <img
            src={apple}
            alt="Apple"
            className="w-[30px] h-[30px] object-contain"
          />
          <h2 className="text-base sm:text-lg font-semibold">
            iPhone 14 Series
          </h2>
        </div>
        <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl mt-3 font-bold leading-none">
          Up to 10%
          <br className="sm:hidden" /> off Voucher
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 w-fit mx-auto md:mx-0 mt-6 md:mt-10 underline text-lg font-medium hover:text-gray-300 transition-colors duration-200"
        >
          Shop Now
          <img src={arrow} alt="Arrow" className="w-5 h-5" />{" "}
        </a>
      </div>
      <div className="flex-1 w-full flex justify-center">
        <img
          src={iphone}
          alt="Iphone"
          className="max-w-full h-auto object-contain md:h-[360px] lg:h-[450px]" // Image scales responsively, max height on larger screens
        />
      </div>
    </section>
  );
};

export default HeroSection;
