import React from "react";
import type { ServiceType } from "../../interface";

const ServiceTypes: React.FC<ServiceType> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt="Service Icon" className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceTypes;
