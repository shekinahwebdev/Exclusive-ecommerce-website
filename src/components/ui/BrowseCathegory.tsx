import rightArrow from "/assets/right-arrow-3.png";
import leftArrow from "/assets/arrow-2.png";
import Devices from "./Devices";
import imac from "/assets/imac.png";
import phone from "/assets/smartphone-call.png";
import watch from "/assets/smart-watch.png";
import camera from "/assets/camera.png";
import headphone from "/assets/headphone.png";
import game from "/assets/games.png";

const devicesData = [
  {
    id: 1,
    imageSrc: phone,
    name: "Phones",
  },
  {
    id: 2,
    imageSrc: imac,
    name: "Computers",
  },
  {
    id: 3,
    imageSrc: watch,
    name: "SmartWatch",
  },
  {
    id: 4,
    imageSrc: camera,
    name: "Camera",
  },
  {
    id: 5,
    imageSrc: headphone,
    name: "HeadPhones",
  },
  {
    id: 6,
    imageSrc: game,
    name: "Gaming",
  },
];

export const BrowseCathegory = () => {
  return (
    <main className="px-2 py-10">
      <div className="flex items-center gap-4">
        <div className="h-[40px] w-[20px] bg-secondary2 rounded-[5px]"></div>
        <p className="text-secondary2 text-[16px]">Cathegories</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px] mt-5">Browse By Cathegory</p>
        <div className="flex gap-3">
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
      <section className="flex flex-wrap gap-4 mt-10 justify-center-safe">
        {devicesData.map((device) => (
          <Devices
            key={device.id}
            id={device.id}
            imageSrc={device.imageSrc}
            name={device.name}
          />
        ))}
      </section>
    </main>
  );
};
