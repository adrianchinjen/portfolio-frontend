import { type ReactNode } from 'react';
import type React from 'react';

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return (
    <div className="mt-3">
      <p className={`text-sm antialiased ${className}`}>{children}</p>
    </div>
  );
};

export default CardBody;
