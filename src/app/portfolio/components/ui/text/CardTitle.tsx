import {type ReactNode} from 'react';
import type React from 'react';

interface CardTitleProps {
  children: ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <p className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">{children}</p>;
};

export default CardTitle;
