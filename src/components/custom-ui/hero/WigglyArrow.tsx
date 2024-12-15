import line from '../../../assets/img/line.png';

const WigglyArrow = () => {
  return (
    <img
      src={line} // Replace with your image URL
      alt="Line"
      className="z-1 absolute hidden max-w-xs -translate-y-1/2 rotate-[10deg] transform object-contain dark:invert md:max-w-md xl:left-[8%] xl:top-[46%] xl:block xl:w-[32%] xl:rotate-[5deg] 2xl:left-[10%] 2xl:top-[42%] 2xl:w-[30%] 3xl:left-[10%] 3xl:top-[43%] 3xl:w-[30%] 3xl:rotate-[7deg]"
    />
  );
};

export default WigglyArrow;
