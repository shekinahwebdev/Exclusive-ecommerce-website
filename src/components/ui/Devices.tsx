interface DevicesProps {
  imageSrc: string;
  name: string;
  id: number;
}

const Devices: React.FC<DevicesProps> = ({ imageSrc, name, id }) => {
  return (
    <div
      key={id}
      className="border-2 flex items-center justify-center flex-col w-[170px] h-[145px]"
    >
      <img src={imageSrc} alt="device" className="w-[56px] h-[56px]" />
      <p className="mt-2">{name}</p>
    </div>
  );
};

export default Devices;
