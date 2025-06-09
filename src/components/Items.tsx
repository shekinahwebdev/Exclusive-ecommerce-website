import heart from "/assets/Fill Heart.png";
import eye from "/assets/Fill Eye.png";
import star from "/assets/star.png";

interface ItemCardProps {
  imageSrc: string;
  title: string;
  price: string;
  rate: string;
  initialPrice?: string;
}

const Items: React.FC<ItemCardProps> = ({
  imageSrc,
  title,
  price,
  initialPrice,
  rate,
}) => {
  return (
    <section className="border-2 border-blue-500">
      <div>
        <div className="border-1 w-[270px] h-[250px] rounded overflow-hidden relative bg-text1">
          <div className="flex justify-between">
            <div className="w-20 h-8 bg-secondary2  text-[16px]  rounded text-text">
              -40%
            </div>
            <div className="flex flex-col mt-4 mr-4 gap-3">
              <img src={heart} alt="Heart Icon" className="w-7 h-7" />
              <img src={eye} alt="Eye Icon" className="w-7 h-7" />
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src={imageSrc}
              alt="Product"
              className="max-h-[90%] object-contain absolute bottom-10 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>
        <div className="mt-2">
          <p>{title}</p>
          <p className="mt-3 flex gap-2 text-secondary2">
            ${price}
            <span className="text-text1">${initialPrice}</span>
          </p>
          <div className="flex mt-3 items-center gap-1.5">
            <img src={star} alt="Star Icon" className="w-5 h-5" />
            <img src={star} alt="Star Icon" className="w-5 h-5" />
            <img src={star} alt="Star Icon" className="w-5 h-5" />
            <img src={star} alt="Star Icon" className="w-5 h-5" />
            <img src={star} alt="Star Icon" className="w-5 h-5" />
            <p className="ml-3">({rate})</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
