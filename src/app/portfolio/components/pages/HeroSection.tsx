const HeroSection = () => {
  const width = window.innerWidth;
  return (
    <div className="mt-6 flex flex-col items-center bg-blue-500 lg:mt-10">
      <h1 className="text-4xl">Welcome to home {width}</h1>
    </div>
  );
};

export default HeroSection;
