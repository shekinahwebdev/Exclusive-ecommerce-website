import React from "react";
import type { LimitedTimeOfferProps } from "../../interface/index";

const LimitedTimeOffer: React.FC<LimitedTimeOfferProps> = ({
  heading,
  subtitle,
  countdown,
  buttonText,
  imageSrc,
}) => {
  return (
    <div className="bg-text2 text-text mt-20 py-2 md:mx-30 md:flex md:p-20">
      <div className="px-2">
        <p className="text-button1 text-[20px] font-extrabold md:text-3xl">
          {heading}
        </p>
        <p className="text-4xl pr-20 leading-15 md:text-5xl">{subtitle}</p>

        <div className="flex gap-5  py-10 text-text2 md:gap-10">
          <div className="w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center bg-text">
            <span className="text-[16px] font-extrabold">
              {countdown.hours}
            </span>
            <p className="text-[11px]">Hours</p>
          </div>
          <div className="w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center bg-text">
            <span className="text-[16px] font-extrabold">{countdown.days}</span>
            <p className="text-[11px]">Days</p>
          </div>
          <div className="w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center bg-text">
            <span className="text-[16px] font-extrabold">
              {countdown.minutes}
            </span>
            <p className="text-[11px]">Minutes</p>
          </div>
          <div className="w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center bg-text">
            <span className="text-[16px] font-extrabold">
              {countdown.seconds}
            </span>
            <p className="text-[11px]">Seconds</p>
          </div>
        </div>

        <button className="bg-button1 px-10 py-2 rounded-[4px] mt-7 md:py-4 md:px-12">
          {buttonText}
        </button>
      </div>

      <img
        src={imageSrc}
        alt="Offer Product"
        className="w-full h-auto mt-30 mb-5 md:w-[600px]"
      />
    </div>
  );
};

export default LimitedTimeOffer;
