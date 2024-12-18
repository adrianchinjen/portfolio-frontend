import { lazy, Suspense, useEffect, useState } from 'react';
import CopyrightNotice from './CopyrightNotice';

const NavBar = lazy(() => import('./Navbar'));
const HeroSection = lazy(() => import('../pages/HeroSection'));
const ExperienceSection = lazy(() => import('../pages/ExperienceSection'));
const SkillsSection = lazy(() => import('../pages/SkillsSection'));
const Footer = lazy(() => import('../pages/Footer'));

const RootLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000); // 1-second delay
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative z-50">
          <NavBar />
        </div>
        {isVisible ? (
          <>
            <div className="max-w-8xl mx-auto min-h-91 px-6 pt-10 3xl:min-h-93">
              <HeroSection />
              <ExperienceSection />
              <SkillsSection />
              {/* <CertificationSection /> */}
            </div>
            <div className="max-w-8xl mx-auto mt-20 bg-zinc-800 px-6 dark:bg-black">
              <Footer />
            </div>
            <CopyrightNotice />
            {/* <footer className="flex w-full flex-row justify-center gap-10 border-t border-zinc-700 bg-zinc-800 px-5 py-1 text-gray-400 dark:bg-black">
              <p className="text-sm text-df-light">
                © {2023} – {new Date().getFullYear()}
              </p>
              <p className="text-sm text-df-light">A | Chinjen.</p>
              <p className="text-sm text-df-light">All rights reserved.</p>
            </footer> */}
          </>
        ) : (
          <>Loading</>
        )}
      </Suspense>
    </div>
  );
};

export default RootLayout;
