
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Postpaid = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="w-full py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Postpaid</h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Offer your customers the convenience of paying for all their transactions in a single bill every month.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-lg mt-12">
              <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-600">
                Our Postpaid feature is currently in development. Contact us to learn more and get early access.
              </p>
            </div>
            
            <div className="mt-12">
              <button className="bg-bharatx-blue hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
                Contact Us for Early Access
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Help Button */}
      <div className="fixed bottom-5 right-5">
        <button 
          className="bg-bharatx-blue hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all"
          onClick={() => window.open('/contact', '_blank')}
        >
          <span className="sr-only">Help</span>
          <span className="text-lg font-bold">Help</span>
        </button>
      </div>
    </div>
  );
};

export default Postpaid;
