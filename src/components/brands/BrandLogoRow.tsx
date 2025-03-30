
import React from 'react';

interface BrandLogoRowProps {
  children: React.ReactNode;
  className?: string;
}

const BrandLogoRow: React.FC<BrandLogoRowProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 ${className}`}>
      {children}
    </div>
  );
};

export default BrandLogoRow;
