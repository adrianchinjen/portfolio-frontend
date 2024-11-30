// src/components/PageBackground.tsx
import { type ReactNode } from 'react';
import type React from 'react';

interface PageBackgroundProps {
  children: ReactNode;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default PageBackground;
// bg-gray-200 p-2 dark:bg-gray-800
// flex min-h-screen w-full flex-col bg-df-light dark:bg-df-dark
