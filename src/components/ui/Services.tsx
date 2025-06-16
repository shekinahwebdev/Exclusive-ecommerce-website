import truckservice from "/assets/Services.png";
import customerservice from "/assets/Services1.png";
import deliveryservice from "/assets/Services3.png";
import ServiceTypes from "./ServiceTypes";

const Services = () => {
  const services = [
    {
      image: truckservice,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      image: customerservice,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      image: deliveryservice,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-5 my-30">
      {services.map((service, index) => (
        <ServiceTypes
          key={index}
          imageSrc={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </main>
  );
};

export default Services;
