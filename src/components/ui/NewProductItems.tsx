import React from "react";
import heart from "/assets/Fill Heart.png";
import eye from "/assets/Fill Eye.png";
import star from "/assets/star.png";
import type { NewProductItem } from "../../interface";

const NewProductItems: React.FC<NewProductItem> = ({
  imageSrc,
  title,
  price,
  rate,
}) => {
  return (
    <div className="max-w-[270px] w-full rounded-md overflow-hidden bg-white shadow-md relative">
      <div className="relative bg-text p-4 h-[240px] flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="w-20 h-8 bg-button1 text-center text-[16px] rounded text-text flex items-center justify-center">
            NEW
          </div>
          <div className="flex flex-col gap-3">
            <img src={heart} alt="Heart Icon" className="w-6 h-6" />
            <img src={eye} alt="Eye Icon" className="w-6 h-6" />P{" "}
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <img
            src={imageSrc}
            alt="Product"
            className="max-h-[60%] w-full object-contain bottom-5 absolute"
          />
        </div>
      </div>
      <div className="p-4 text-[15px]">
        <p className="font-medium">{title}</p>
        <div className="flex mt-2 items-center gap-1.5">
          <p className="mt-2 flex gap-2 text-secondary2 font-semibold">
            ${price}
          </p>
          {[...Array(5)].map((_, i) => (
            <img key={i} src={star} alt="Star Icon" className="w-4 h-4" />
          ))}
          <p className="ml-2 text-sm text-gray-500">({rate})</p>
        </div>
      </div>
    </div>
  );
};

export default NewProductItems;
