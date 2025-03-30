
import React from 'react';
import { ArrowUp } from 'lucide-react';

const HeroSection = () => {
  const openContactForm = () => {
    window.open('/contact', '_blank');
  };

  return (
    <section className="w-full py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">
          BNPL Which Just Works.
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Get new <span className="text-bharatx-blue">orders</span> & bump sales by <ArrowUp className="inline" /> 15%
          <span className="block w-32 h-2 bg-bharatx-blue rounded-full mx-auto mt-2"></span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-2 my-12">
          <p className="text-lg md:text-xl">Enable</p>
          <div className="px-4 py-2 bg-black text-green-400 rounded">
            &lt;Your_Brand_name&gt;
          </div>
          <p className="text-lg md:text-xl">Pay In 3 or 6 or 12 using our simple to install Shopify Plugin/APIs.</p>
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={openContactForm}
            className="bg-bharatx-blue hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
          >
            Talk to Us
          </button>
        </div>
      </div>
      
      <div className="md:mt-2 w-full mx-auto">
        <img 
          src="/lovable-uploads/ban1.jpg" 
          alt="BNPL Platform Illustration" 
          className="w-full h-auto object-contain max-w-6xl mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
