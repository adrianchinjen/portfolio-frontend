import { useEffect, useState } from 'react';
import ExperienceSection from './ExperienceSection';
import HeroSection from './HeroSection';
import RepositorySection from './RepositorySection';
import SkillsSection from './SkillsSection';
import Loading from '../utils/Loading';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000); // 1-second delay
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isVisible ? (
        <>
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
          <RepositorySection />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
