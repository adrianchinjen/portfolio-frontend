import Navbar from './Navbar';
import HeroSection from '../pages/HeroSection';
import ExperienceSection from '../pages/ExperienceSection';
import SkillsSection from '../pages/SkillsSection';
import CertificationSection from '../pages/CertificationSection';

const RootLayout = () => {
  return (
    <div>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="max-w-8xl mx-auto min-h-91 px-6 pt-10 3xl:min-h-93">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationSection />
      </div>
    </div>
  );
};

export default RootLayout;
