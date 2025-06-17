import React, { useState } from "react";
import apple from "/assets/apple-2.png";
import iphone from "/assets/iphone.png";
import samsung from "/assets/samsung.jpg";
import samsungIcon from "/assets/google-2.png";
import tecno from "/assets/tecno.jpg";
import tecnoIcon from "/assets/tecno-logo.png";
import microwave from "/assets/microwave.jpg";
import speaker from "/assets/speaker.jpg";
import arrow from "/assets/arrow.png";
import CathegorySideBar from "./CathegorySidebar";

const slides = [
  {
    image: iphone,
    logo: apple,
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    bgColor: "bg-black",
  },
  {
    image: samsung,
    logo: samsungIcon,
    title: "Samsung Galaxy S23",
    description: "Save ₵200 Today",
    bgColor: "bg-black",
  },
  {
    image: tecno,
    logo: tecnoIcon,
    title: "Tecno Spark 10",
    description: "Buy One, Get Airtime",
    bgColor: "bg-black",
  },
  {
    image: microwave,
    logo: apple,
    title: "Microwave Oven",
    description: "Limited-Time Offer: Get It Now",
    bgColor: "bg-black",
  },
  {
    image: speaker,
    logo: apple,
    title: "Speaker",
    description: "Perfect for Every Mood, Every Room",
    bgColor: "bg-black",
  },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  return (
    <div className="md:flex md:flex-row-reverse md:mb-5  w-full md:px-20">
      <section
        className={`text-white flex flex-col w-full transition-all duration-500 ease-in-out bg-text2 md:w-[1180px] md:ml-30 md:mt-12 md:px-10 md:pt-20 md:pb-5`}
      >
        <div className="md:flex md:flex-row">
          <div className="flex flex-col flex-1 w-full  p-9 ">
            <div className="flex items-center gap-6">
              <img
                src={currentSlide.logo}
                alt="Apple"
                className="w-[40px] h-[49px] object-contain"
              />
              <h2 className="text-[16px] font-semibold">
                {currentSlide.title}
              </h2>
            </div>
            <p className="text-4xl tracking-wider leading-snug">
              {currentSlide.description}
            </p>
            <a href="#" className=" flex text-[16px] items-center gap-1 mt-4">
              Shop Now
              <img src={arrow} alt="Arrow" className="w-6 h-6" />
            </a>
          </div>
          <div className="">
            <img
              src={currentSlide.image}
              alt="images"
              className=" w-[496px] h-[352px]"
            />
          </div>
        </div>

        <div className="flex mt-4 justify-center gap-3 md:mt-20">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
                index === currentIndex
                  ? "bg-secondary2 scale-110 border-2 border-text"
                  : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </section>
      <CathegorySideBar />
    </div>
  );
};

export default HeroSection;
