import mi from '../../../assets/img/yo-miii.png';

const HeroImage = () => {
  return (
    <div className="inset-0 top-1/3 z-10 m-auto aspect-square -translate-y-10 transform rounded-full sm:w-[45%] md:w-[25%] xl:absolute xl:w-[40%] xl:scale-x-[-1] 2xl:w-[45%]">
      <img
        src={mi} // Replace with your image URL
        alt="My Portrait"
        className="h-full w-full object-cover drop-shadow-[0_6px_1px_rgba(72,60,51,1)] filter dark:drop-shadow-[0_6px_1px_rgba(237,179,60,1)]"
      />
    </div>
  );
};

export default HeroImage;
