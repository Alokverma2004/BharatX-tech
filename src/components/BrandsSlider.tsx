
import React from 'react';
import { useInView } from 'react-intersection-observer';
import BrandsData from './brands/BrandsData';

const BrandsSlider = () => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white" ref={inViewRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Growth Lever for <span className="text-bharatx-blue">550+</span> Consumer Brands
        </h2>
        
        <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <BrandsData />
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;
