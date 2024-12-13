import Navbar from './Navbar';
import HeroSection from '../pages/HeroSection';

const RootLayout = () => {
  return (
    <div>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="max-w-8xl mx-auto min-h-91 px-6 pt-10 3xl:min-h-93">
        <HeroSection />
      </div>
    </div>
  );
};

export default RootLayout;
