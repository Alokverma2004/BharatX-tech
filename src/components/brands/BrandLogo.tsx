
import React from 'react';

interface BrandLogoProps {
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ 
  src, 
  alt = "Brand Logo", 
  className = "", 
  style = {}, 
  children 
}) => {
  return (
    <div className={`w-32 md:w-40 flex items-center justify-center ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-auto object-contain" style={style} />
      ) : (
        children
      )}
    </div>
  );
};

export default BrandLogo;
