
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Join Us
                  <span className="block">Young <span className="text-bharatx-blue">Bold & Ambitious.</span></span>
                </h1>
                
                <p className="text-2xl md:text-3xl font-bold mt-8 mb-2">
                  110 millions families
                </p>
                <p className="text-lg mb-8">
                  <span className="text-bharatx-blue">changing their lives</span> with our work
                </p>
                
                <Button className="bg-bharatx-blue hover:bg-blue-600 text-white rounded-full px-8 py-6 h-auto text-lg">
                  <Search className="mr-2" size={20} />
                  Check open roles
                </Button>
              </div>
              
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/c43a50c0-8c10-4186-909b-74f3d04b0fd3.png" 
                  alt="Career Illustration" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Redefine Credit Section */}
        <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">
              <span className="text-gray-400">Redefine credit for</span>
              <span className="block">the <span className="text-black">Indian middle-class</span></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Business</h3>
                <p className="text-gray-500">
                  Our B2B2C approach by embedding SDK in other apps ensures extremely low CAC, better usage, and a better fit for a user's needs.
                </p>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Impact Led</h3>
                <p className="text-gray-500">
                  We are driven by impact. Our operations and business decisions always put the impact we create for our customers as the first priority.
                </p>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">The A-Team</h3>
                <p className="text-gray-500">
                  Ever wondered what it would be like to work with your college buddies? Well, here's your chance to work with friends, not colleagues.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Culture Section */}
        <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl text-bharatx-blue font-bold mb-4">
              Our Culture
            </h2>
            
            <div className="mt-8">
              <h3 className="text-4xl font-bold mb-12">
                <span className="text-gray-400">Put your</span> Life's Work <span className="text-gray-400">into something meaningful.</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-gray-600 mb-12 leading-relaxed">
                    At BharatX, we are driven by impact. We change the lives of people by giving them access 
                    to credit. Be it for meeting their emergency requirements, or uplifting their standard of 
                    living and fulfilling their dreams, we enable it all.
                  </p>
                  
                  <img 
                    src="/lovable-uploads/efbeafad-f2a3-47f8-bc26-680ee1f69997.png" 
                    alt="Team working together" 
                    className="w-60% h-30%" 
                  />
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-100 p-8 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                        ✓
                      </div>
                      <h4 className="text-3xl font-bold">Ownership Driven</h4>
                    </div>
                    <p className="text-gray-500 font-semibold ml-14">We have a high ownership culture.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-8 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                        ✓
                      </div>
                      <h4 className="text-3xl font-bold">We are in it Together</h4>
                    </div>
                    <p className="text-gray-500 font-semibold ml-12">If we win, it's your win. If you lose, we all lose.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-8 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                        ✓
                      </div>
                      <h4 className="text-3xl font-bold">Make Mistakes!</h4>
                    </div>
                    <p className="text-gray-500 font-semibold ml-12">Making mistakes is the fastest way to learn.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-8 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-4">
                        ✓
                      </div>
                      <h4 className="text-3xl font-bold">No Hierarchy</h4>
                    </div>
                    <p className="text-gray-500 font-semibold ml-12">We are all part of a family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">
              <span className="text-gray-400">Benefits</span> of working with us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Unlimited Paid-Time-Off</h3>
                <p className="text-gray-500">
                  Next time you need time for a loved one's birthday 🎂 or a trip to Goa with friends 🍹 - just go. 
                  PS: do invite us too.
                </p>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Choose Your Own Device</h3>
                <p className="text-gray-500">
                  We have no opinion on the device you choose. You choose the device 💻 you want to work with!
                </p>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Insurance for ALL!</h3>
                <p className="text-gray-500">
                  You and your family (Spouse, Parents/In-Laws and Children) are all covered 🏥 with the best insurance policy out there!
                </p>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Maternity & Paternity Leave</h3>
                <p className="text-gray-500">
                  Because Hey! You both deserve to spend time with the little one 👶
                </p>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Bi-Annual Appraisals</h3>
                <p className="text-gray-500">
                  When startups grow so fast, why should your financial growth be slow?
                </p>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Best-in-Class ESOP Policy</h3>
                <p className="text-gray-500">
                  You get either equal or better terms than founders for your ESOP Policy!
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Button className="bg-bharatx-blue hover:bg-blue-600 text-white rounded-full px-8 py-6 h-auto text-lg">
                <Search className="mr-2" size={20} />
                Check open roles
              </Button>
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

export default Careers;
