import { type ReactNode } from 'react';
import type React from 'react';

interface CardBodyProps {
  children: ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return (
    <div className="mt-3">
      <p className="text-sm text-neutral-600 antialiased dark:text-neutral-400">{children}</p>
    </div>
  );
};

export default CardBody;
