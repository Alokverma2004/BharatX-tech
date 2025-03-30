
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const InvestorsSection = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 flex items-center justify-center">
          People who believe in us <span className="ml-2 text-4xl">😊</span>
        </h2>
        
        <div className="overflow-hidden">
          <div className={`flex items-center justify-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex space-x-16 whitespace-nowrap animate-slide-left">
              <div className="min-w-[200px]">
                <img src="/lovable-uploads/y.png.webp" alt="Y Combinator" className="h-16 object-contain" />
              </div>
              <div className="min-w-[200px]">
                <img src="/lovable-uploads/8I.webp" alt="8i Ventures" className="h-28 object-contain" />
              </div>
              <div className="min-w-[200px]">
                <span className="text-3xl font-bold">multiply<br />ventures</span>
              </div>
              <div className="min-w-[200px]">
                <span className="text-3xl font-serif text-purple-800">SOMA CAPITAL</span>
              </div>
              <div className="min-w-[200px]">
                <span className="text-3xl font-bold text-yellow-500">JAVA CAPITAL</span>
              </div>
              {/* <div className="min-w-[200px]">
                <img src="/lovable-uploads/JAVA.webp" alt="Java Ventures" className="h-52  object-contain" />
              </div> */}
              <div className="min-w-[200px]">
                <span className="text-3xl font-bold text-gray-600">WORLDQUANT</span>
              </div>
              {/* <div className="min-w-[200px]">
                <img src="/lovable-uploads/y.png,webp" alt="Y Combinator" className="h-12 object-contain" />
              </div>
              <div className="min-w-[200px]">
                <img src="/lovable-uploads/8I.webp" alt="8i Ventures" className="h-24 object-contain" />
              </div>
              <div className="min-w-[200px]">
                <span className="text-2xl font-bold">multiply<br />ventures</span>
              </div> */}
              {/* Duplicate for infinite loop */}
              {/* <div className="min-w-[200px]">
                <img src="/lovable-uploads/8be3ecc5-0791-4fbd-9f7e-7f7f710a4f9a.png" alt="Y Combinator" className="h-12 object-contain" />
              </div>
              <div className="min-w-[200px]">
                <img src="/lovable-uploads/de73a754-7b94-4677-b1fb-57e2ba082605.png" alt="8i Ventures" className="h-24 object-contain" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
