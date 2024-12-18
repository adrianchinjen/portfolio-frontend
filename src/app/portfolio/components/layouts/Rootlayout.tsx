import { lazy, Suspense } from 'react';
import CopyrightNotice from './CopyrightNotice';

const NavBar = lazy(() => import('./Navbar'));
const HeroSection = lazy(() => import('../pages/HeroSection'));
const ExperienceSection = lazy(() => import('../pages/ExperienceSection'));
const SkillsSection = lazy(() => import('../pages/SkillsSection'));
const Footer = lazy(() => import('../pages/Footer'));

const RootLayout = () => {
  return (
    <div>
      {/* Lazy-loaded sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative z-50">
          <NavBar />
        </div>
        <div className="max-w-8xl mx-auto min-h-91 px-6 pt-10 3xl:min-h-93">
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
        </div>

        <div className="max-w-8xl mx-auto mt-20 bg-zinc-800 px-6 dark:bg-black">
          <Footer />
          <CopyrightNotice />
        </div>
      </Suspense>
    </div>
  );
};

export default RootLayout;
