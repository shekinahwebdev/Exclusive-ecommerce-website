import speaker from "/assets/speaker2.png";
const SpeakerProduct = () => {
  return (
    <div className="bg-text2 pt-30 pb-30 text-text rounded-[4px] relative flex  justify-start">
      <img src={speaker} alt="speaker-product" className="ml-25" />
      <div className="flex flex-col  gap-2 w-[245px] absolute bottom-16 ml-5">
        <h3 className="text-2xl font-bold">Speakers</h3>
        <p className="text-sm leading-5">Amazon wireless speakers</p>
        <a href="#" className="text-text">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default SpeakerProduct;
