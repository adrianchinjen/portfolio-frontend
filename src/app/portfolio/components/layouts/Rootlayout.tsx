import Navbar from './Navbar';
import HeroSection from '../pages/HeroSection';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-8xl mx-auto min-h-91 px-6 pt-10 3xl:min-h-91">
        <HeroSection />
      </div>
    </div>
  );
};

export default RootLayout;
