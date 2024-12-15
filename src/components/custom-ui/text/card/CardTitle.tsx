import { type ReactNode } from 'react';
import type React from 'react';

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return <p className={`text-md font-semibold ${className}`}>{children}</p>;
};

export default CardTitle;
