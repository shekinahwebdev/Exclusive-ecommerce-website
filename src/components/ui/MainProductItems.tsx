import heart from "/assets/Fill Heart.png";
import eye from "/assets/Fill Eye.png";
import star from "/assets/star.png";
import type { MainProductItem } from "../../interface";

const MainProductItems: React.FC<MainProductItem> = ({
  imageSrc,
  title,
  price,
  initialPrice,
  rate,
}) => {
  return (
    <div className="max-w-[270px] w-full  rounded-md overflow-hidden bg-white shadow-md relative">
      <div className="relative  bg-text p-4 w-[100%] h-[240px] flex flex-col">
        <div className="flex flex-col gap-2 items-end-safe">
          <img src={heart} alt="Heart Icon" className="w-6 h-6" />
          <img src={eye} alt="Eye Icon" className="w-6 h-6" />
        </div>

        {/* Product Image */}
        <div className="flex justify-center items-center ">
          <img
            src={imageSrc}
            alt="Product"
            className="absolute w-[140px] h-[146px] bottom-[50px] object-center"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4 text-[15px]">
        <p className="font-medium">{title}</p>
        <p className="mt-2 flex gap-2 text-secondary2 font-semibold">
          ${price}
          <span className="text-text1 line-through">${initialPrice}</span>
        </p>

        <div className="flex mt-2 items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={star} alt="Star Icon" className="w-4 h-4" />
          ))}
          <p className="ml-2 text-sm text-gray-500">({rate})</p>
        </div>
      </div>
    </div>
  );
};

export default MainProductItems;
