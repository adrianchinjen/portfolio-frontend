import type React from 'react';

interface LogoProps {
  textType: string;
}

const NavLogo: React.FC<LogoProps> = ({ textType }) => {
  return <h1 className="font-roadrage text-5xl">{textType}</h1>;
};

export default NavLogo;
