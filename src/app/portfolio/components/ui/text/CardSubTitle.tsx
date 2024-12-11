import {type ReactNode} from 'react';
import type React from 'react';

interface CardSubtitleProps {
  children: ReactNode;
}

const CardSubTitle: React.FC<CardSubtitleProps> = ({ children }) => {
  return <p className="text-base text-neutral-600 antialiased dark:text-neutral-400">{children}</p>;
};

export default CardSubTitle;
