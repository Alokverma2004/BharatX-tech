
import React from 'react';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const openContactForm = () => {
    window.open('/contact', '_blank');
  };
  
  const learnMore = () => {
    window.open('/learn-more', '_blank');
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-bharatx-navy text-white" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={inView ? 'animate-fade-in' : 'opacity-0'}>
          <h2 className="text-4xl font-bold mb-6">Concerned About Team Bandwidth?</h2>
          <p className="text-xl mb-8">Integrate in just 2 hours!</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={openContactForm}
              className="bg-bharatx-blue hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get Started
            </button>
            
            <button 
              onClick={learnMore}
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              I want to learn more
            </button>
          </div>
        </div>
        
        <div className={inView ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.3s' }}>
          <div className="bg-bharatx-darknavy p-8 rounded-lg font-mono text-sm">
            <p className="text-gray-400 mb-2">1 <span className="text-yellow-300">const</span> bharatx = <span className="text-green-400">require</span>(<span className="text-orange-400">'bharatx'</span>)(<span className="text-orange-400">'sk_test_BQokijOBi2'</span></p>
            <p className="text-gray-400 mb-2">2</p>
            <p className="text-gray-400 mb-2">3 <span className="text-blue-300">await</span> bharatx.paymentIntents.<span className="text-green-400">create</span>({`{`}</p>
            <p className="text-gray-400 mb-2">4 &nbsp;&nbsp;amount: <span className="text-yellow-300">2000</span>,</p>
            <p className="text-gray-400 mb-2">5 &nbsp;&nbsp;currency: <span className="text-orange-400">'inr'</span></p>
            <p className="text-gray-400 mb-2">6 {`});`}</p>
            <p className="text-gray-400 mb-2">~</p>
            <p className="text-gray-400 mb-2">~</p>
            <p className="text-gray-400 mb-2">~</p>
            <p className="text-gray-400 mb-2">~</p>
            <p className="text-gray-400 mb-2">~</p>
            <p className="text-gray-400 mb-2">~</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
