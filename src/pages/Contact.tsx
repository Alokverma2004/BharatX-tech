
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "We'll get back to you soon!",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-12">Get in touch with us by filling out the form below</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                id="name"
                type="text"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-md focus:outline-none"
                placeholder="Name"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                id="email"
                type="email"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-md focus:outline-none"
                placeholder="Email"
                required
              />
              
              <input
                id="phone"
                type="tel"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-md focus:outline-none"
                placeholder="Phone number"
              />
            </div>
            
            <div>
              <input
                id="subject"
                type="text"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-md focus:outline-none"
                placeholder="Subject"
                required
              />
            </div>
            
            <div>
              <textarea
                id="message"
                rows={6}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-md focus:outline-none"
                placeholder="Message"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <div className="mt-2">
                <p className="text-gray-500">Head of Business</p>
                <a href="mailto:Padam@bharatx.tech" className="text-2xl font-bold text-pink-600 hover:underline">
                  Padam@bharatx.tech
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-gray-500">For Customer Support</h2>
              <a href="mailto:support@bharatx.tech" className="text-2xl font-bold text-blue-600 hover:underline">
                support@bharatx.tech
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
