// src/components/PageBackground.tsx
import { type ReactNode } from 'react';
import type React from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ children }) => {
  return (
    <div
      className="flex min-h-screen w-full flex-col bg-df-light dark:bg-df-dark"
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {children}
    </div>
  );
};

export default PageBackground;
