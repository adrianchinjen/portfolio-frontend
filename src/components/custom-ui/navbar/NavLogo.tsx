import type React from 'react';

interface LogoProps {
  children: React.ReactNode;
}

const NavLogo: React.FC<LogoProps> = ({ children }) => {
  return (
    <div className="flex content-center justify-items-center">
      <h1 className="font-roadrage text-4xl">{children}</h1>
    </div>
  );
};

export default NavLogo;
