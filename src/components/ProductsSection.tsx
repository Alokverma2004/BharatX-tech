
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProductsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-gray-400">Here's some</span> successful stores <span className="text-gray-400">who benefit from our</span>
          <span className="block">affordability products</span> <span className="text-gray-400">products</span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-white p-8 rounded-lg shadow-sm ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Pay in 3</h3>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-800">
                Fashion and Apparel Apps
              </div>
              <div className="bg-yellow-100 px-4 py-2 rounded-full text-yellow-800">
                Electronic Gadget & Accessories
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">
              Let your users pay only 1/3rd and complete the purchase while the remaining get's debited 30 & 60 days later in 2 parts via UPI @ Zero Interest!
            </p>
            
            <a href="#" className="text-bharatx-blue font-medium">Learn More</a>
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/26d647d9-f719-4537-84da-d6ff00164b36.png" 
              alt="Payment Platform Preview" 
              className={`w-full max-w-md ${inView ? 'animate-fade-in' : 'opacity-0'}`} 
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-4">Pay in X</h3>
            <p className="text-gray-600">
              Pay only 25% and rest in 3-18 EMIs
            </p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold mb-4">Postpaid</h3>
            <p className="text-gray-600">
              Pay for all your transactions in a Single Bill every month!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
