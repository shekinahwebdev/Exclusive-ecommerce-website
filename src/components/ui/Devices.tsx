import React from "react";
import phone from "/assets/mic.png";

const categories = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "iPhone" },
  { id: 3, name: "iPhone" },
  { id: 4, name: "iPhone" },
  { id: 5, name: "iPhone" },
  { id: 6, name: "iPhone" },
];

const Devices = () => {
  return (
    <section className="flex flex-wrap gap-4">
      {categories.map((item) => (
        <div
          key={item.id}
          className="border-2 flex items-center justify-center flex-col w-[170px] h-[145px]"
        >
          <img src={phone} alt="device" className="w-[56px] h-[56px]" />
          <p>{item.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Devices;
