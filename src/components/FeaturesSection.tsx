
import React from 'react';
import { Clock, Settings, Shield, ShoppingBag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-bharatx-navy text-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-20">Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="bg-bharatx-darknavy p-6 rounded-xl inline-block mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">T+1 Settlements</h3>
            <p className="text-gray-300 leading-relaxed">
              Get the payments upfront on T+1, No waiting for 2,3,7 or any other amount of CRAZY days.
            </p>
          </div>
          
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-bharatx-darknavy p-6 rounded-xl inline-block mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Instant Integration with major Payment Gateways</h3>
            <p className="text-gray-300 leading-relaxed">
              D2Cs can easily integrate within shopify using our Simple Plugin. Apps & Custom Websites can also integrate directly via easy APIs.
            </p>
          </div>
          
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="bg-bharatx-darknavy p-6 rounded-xl inline-block mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Zero Credit Risk to you!</h3>
            <p className="text-gray-300 leading-relaxed">
              We take the full Credit-Risk; you do not need to worry about Defaults or Delinquencies. Plus, our Sign-up Journey is a Single OTP & No uploads!
            </p>
          </div>
          
          <div className={`${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <div className="bg-bharatx-darknavy p-6 rounded-xl inline-block mb-6">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">White Labelled, Boost Retention</h3>
            <p className="text-gray-300 leading-relaxed">
              Leverage the power of Sticky Credit, by changing the BharatX PayLater name to "Your_Brand" PayLater and boost Retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
