import { useRef } from 'react';
import CopyrightNotice from './CopyrightNotice';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../pages/Footer';

// const NavBar = lazy(() => import('./Navbar'));
// const Footer = lazy(() => import('../pages/Footer'));

const RootLayout = () => {
  // const [isVisible, setIsVisible] = useState(false);

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

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsVisible(true), 2000); // 1-second delay
  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []);

  return (
    <div>
      <>
        <div className="relative z-50">
          <Navbar onNavigate={scrollToSection} sectionRefs={sectionRefs} />
        </div>
        <div className="max-w-8xl mx-auto min-h-91 px-6 pt-10 3xl:min-h-93">
          <Outlet />
        </div>
        <div className="max-w-8xl mx-auto mt-20 bg-zinc-800 px-6 dark:bg-black">
          <Footer />
        </div>
        <CopyrightNotice />
      </>
    </div>
  );
};

export default RootLayout;
