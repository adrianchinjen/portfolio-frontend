import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import CopyrightNotice from './CopyrightNotice';

const NavBar = lazy(() => import('./Navbar'));
const HeroSection = lazy(() => import('../pages/HeroSection'));
const ExperienceSection = lazy(() => import('../pages/ExperienceSection'));
const SkillsSection = lazy(() => import('../pages/SkillsSection'));
const Footer = lazy(() => import('../pages/Footer'));
const RepositorySection = lazy(() => import('../pages/RepositorySection'));

const RootLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  // refs
  const sectionRefs = {
    heroRef: useRef(null),
    experienceRef: useRef(null),
    skillsRef: useRef(null),
    repoRef: useRef(null)
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const topPosition = ref.current.offsetTop - 80;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000); // 1-second delay
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative z-50">
          <NavBar onNavigate={scrollToSection} sectionRefs={sectionRefs} />
        </div>
        {isVisible ? (
          <>
            <div className="max-w-8xl mx-auto min-h-91 px-6 pt-10 3xl:min-h-93">
              <HeroSection ref={sectionRefs.heroRef} />
              <ExperienceSection ref={sectionRefs.experienceRef} />
              <SkillsSection ref={sectionRefs.skillsRef} />
              <RepositorySection ref={sectionRefs.repoRef} />
              {/* <CertificationSection /> */}
            </div>
            <div className="max-w-8xl mx-auto mt-20 bg-zinc-800 px-6 dark:bg-black">
              <Footer />
            </div>
            <CopyrightNotice />
          </>
        ) : (
          <>Loading</>
        )}
      </Suspense>
    </div>
  );
};

export default RootLayout;
