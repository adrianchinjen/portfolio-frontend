import Navbar from './Navbar';
import HeroSection from '../pages/HeroSection';
import ExperienceSection from '../pages/ExperienceSection';
import SkillsSection from '../pages/SkillsSection';
// import CertificationSection from '../pages/CertificationSection';
import Footer from '../pages/Footer';

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
        {/* <CertificationSection /> */}
      </div>
      <div className="max-w-8xl mx-auto mt-20 bg-zinc-800 px-6 dark:bg-black">
        <Footer />
      </div>
      <footer className="flex w-full flex-row justify-center gap-10 border-t border-zinc-700 bg-zinc-800 px-5 py-1 text-gray-400 dark:bg-black">
        <p className="text-sm text-df-light">
          © {2023} – {new Date().getFullYear()}
        </p>
        <p className="text-sm text-df-light">A | Chinjen.</p>
        <p className="text-sm text-df-light">All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
