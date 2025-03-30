import React from 'react';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Your customers will love Credit-as-a-Feature. <span className="text-gray-400">Look at</span>
        </h2>
        <h3 className="text-4xl text-gray-400 mb-16">
          what some of our Existing Clients experience!
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div 
            className={`bg-gray-100 p-8 rounded-3xl ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-start mb-4">
              <img 
                src="/lovable-uploads/a1.webp" 
                alt="Avatar" 
                className="w-16 h-16 rounded-lg mr-4"
              />
              <p className="text-gray-500 text-lg">An active Pay Later user from Thane</p>
            </div>
            <p className="text-gray-800">
              "Thanks so much Ma'am..Pay later is a good option especially if you have month end crunch."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div 
            className={`bg-gray-100 p-8 rounded-3xl ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-start mb-4">
              <img 
                src="/lovable-uploads/a2.webp" 
                alt="Avatar" 
                className="w-16 h-16 rounded-lg mr-4"
              />
              <p className="text-gray-500 text-lg">A first time user</p>
            </div>
            <p className="text-gray-800">
              "Hello.. first experience was good.. I have no doubts regarding paylater.. once we ordered food from crisfood and while payment realised we don't have enough money so we tried for first time paylater.. and we were happy that for that moment we didn't had money then too our stomach was full ..And All thanks to your update.. this pay later is really handy during month end"
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div 
            className={`bg-gray-100 p-8 rounded-3xl ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-start mb-4">
              <img 
                src="/lovable-uploads/a3.webp" 
                alt="Avatar" 
                className="w-16 h-16 rounded-lg mr-4"
              />
              <p className="text-gray-500 text-lg">Customer after interaction with Support Staff</p>
            </div>
            <p className="text-gray-800">
              "Thank you so much for your help. Really appreciated for the fast response thank you once again"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;