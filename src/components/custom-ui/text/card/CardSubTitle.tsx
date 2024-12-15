import { type ReactNode } from 'react';
import type React from 'react';

interface CardSubtitleProps {
  children: ReactNode;
  className?: string;
}

const CardSubTitle: React.FC<CardSubtitleProps> = ({ children, className }) => {
  return <p className={`text-base antialiased ${className}`}>{children}</p>;
};

export default CardSubTitle;
