const HeroSection = () => {
  const width = window.innerWidth;
  return (
    <div className="flex flex-col items-center bg-blue-500 lg:mt-4">
      <h1 className="text-4xl">Welcome to here sections {width}</h1>
    </div>
  );
};

export default HeroSection;
