
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const PayIn3 = () => {
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:space-x-12 mb-20">
              <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-6xl font-bold mb-6">
                  <span className="text-bharatx-blue">Pay in 3</span> easy installments
                </h1>
                
                <h2 className="text-3xl font-medium mb-12">
                  Your product quality at user's affordability
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="text-orange-500 mr-4">
                      <Check size={24} className="bg-orange-100 p-1 rounded-full" />
                    </div>
                    <p className="text-xl">Split orders into 3 interest-free payments</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-orange-500 mr-4">
                      <Check size={24} className="bg-orange-100 p-1 rounded-full" />
                    </div>
                    <p className="text-xl">Payments are spread across 60 days</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-orange-500 mr-4">
                      <Check size={24} className="bg-orange-100 p-1 rounded-full" />
                    </div>
                    <p className="text-xl">Only 1/3rd of the payment is made at checkout</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/image.png" 
                  alt="Pay in 3 Mobile Interface" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Products Section */}
        <section className="w-full py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/product.png" 
                  alt="Product Display" 
                  className="w-70% h-70% rounded-lg"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-5xl font-bold mb-6">
                  <span className="text-gray-400">The product</span> customers have always loved
                </h2>
                
                <p className="text-gray-600 text-2xl leading-relaxed mb-6">
                  Your user will always stay in control of their finances by choosing to pay in 3. These
                  payments are interest free – the customer will be able to make decisions in seconds
                  resulting in greater conversion!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">
              <span className="text-gray-400">How</span> It Works <span className="text-gray-400">?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 text-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold">User Places Order</h3>
                  </div>
                  <p className="text-gray-500 ml-12">
                    The user places an order on your app using the Pay in 3 option on your checkout page. 
                    They pay only 1/3rd the amount while you get the full payment on T+1.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 text-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold">User Gets Notified</h3>
                  </div>
                  <p className="text-gray-500 ml-12">
                    The user gets notified every month to repay one-third of their payment using payment links 
                    where in he will be paying in installments separated by a gap of 30 days each.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 text-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold">User Pays Us</h3>
                  </div>
                  <p className="text-gray-500 ml-12">
                    The user gets notified every month to repay one-third of their payment using payment links 
                    where in he will be paying in installments separated by a gap of 30 days each.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/service.png" 
                  alt="Pay in 3 Process" 
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        
        
        {/* Features Section */}
        <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">
              <span className="text-gray-400">Features</span> You Will Love
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">White-Labelled!</h3>
                <p className="text-gray-500">
                  Why integrate someone else's brand when you can make your own Khata
                  product using our No-Code customisations?
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">2 Hour Integration</h3>
                <p className="text-gray-500">
                  No Compliance Setups, no operational changes. For you it's another
                  payment method, but for your users, it's a blessing.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Zero Risk</h3>
                <p className="text-gray-500">
                  You take zero financial risk when offering this option and get your revenue
                  just like you did before.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Like a Payment-Gateway</h3>
                <p className="text-gray-500">
                  Works like a payment gateway. Integrate it like a payment gateway.
                  Receive funds like a payment gateway on T+1.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recommendations Section */}
        <section className="w-full py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">
              <span className="text-gray-400">What we</span> recommend <span className="text-gray-400">for:</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/product2.png" 
                  alt="Cosmetics Products" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="text-bharatx-blue mr-2">-</span>
                    Fashion & Apparel App
                  </h3>
                  <p className="text-gray-600 ml-6">
                    Whether you are selling Glossy Lipsticks or Madras Saris, offering Pay
                    in 3 is definitely gonna make your products a lot more affordable.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="text-bharatx-blue mr-2">+</span>
                    Electronic Gadgets & Accessories
                  </h3>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="text-bharatx-blue mr-2">+</span>
                    E-Commerce Apps
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Developer Integration Section */}
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

export default PayIn3;
