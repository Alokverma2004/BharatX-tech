
import React from 'react';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gray-100" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className={`text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <h3 className="text-6xl font-bold text-bharatx-blue mb-4">85%+</h3>
          <h4 className="text-2xl font-bold mb-2">Approval Rate</h4>
          <p className="text-gray-500">(Among Highest in the Industry)</p>
        </div>
        
        <div className={`text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <h3 className="text-6xl font-bold text-bharatx-blue mb-4">0</h3>
          <h4 className="text-2xl font-bold mb-2">Documentation</h4>
          <p className="text-gray-500">(No Documentation Needed)</p>
        </div>
        
        <div className={`text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h3 className="text-6xl font-bold text-bharatx-blue mb-4">100%</h3>
          <h4 className="text-2xl font-bold mb-2">White Labled</h4>
          <p className="text-gray-500">(thats a better fit for your product)</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
