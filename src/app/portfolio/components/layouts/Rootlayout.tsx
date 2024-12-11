import Navbar from './Navbar';
import HeroSection from '../pages/HeroSection';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-8xl mx-auto min-h-91 bg-green-500 px-6 pt-20 3xl:min-h-93">
        <HeroSection />
      </div>
    </div>
  );
};

export default RootLayout;
