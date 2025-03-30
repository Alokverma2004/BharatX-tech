
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Slack } from 'lucide-react';

const Footer = () => {
  // Helper function to handle navigation outside of router context
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <footer className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
              <li><a href="/credit-as-feature" className="text-gray-500 hover:text-gray-700">Credit as a Feature</a></li>
              <li><a href="/developer" className="text-gray-500 hover:text-gray-700">Developer</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Use Cases</h3>
            <ul className="space-y-4">
              <li><a href="/khata" className="text-gray-500 hover:text-gray-700">Khata</a></li>
              <li><a href="/try-buy" className="text-gray-500 hover:text-gray-700">Try & Buy</a></li>
              <li><a href="/pay-in-3" className="text-gray-500 hover:text-gray-700">Pay in 3</a></li>
              <li><a href="/pay-later" className="text-gray-500 hover:text-gray-700">Pay Later</a></li>
              <li><a href="/postpaid" className="text-gray-500 hover:text-gray-700">Postpaid</a></li>
              <li><a href="/design-credit" className="text-gray-500 hover:text-gray-700">Design Your Own Credit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="/careers" className="text-gray-500 hover:text-gray-700">Careers</a></li>
              <li><a href="/contact" className="text-gray-500 hover:text-gray-700">Contact Us</a></li>
              <li><a href="/lending-partners" className="text-gray-500 hover:text-gray-700">Lending Partners</a></li>
              <li><a href="/terms" className="text-gray-500 hover:text-gray-700">Terms and Conditions</a></li>
              <li><a href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy Policy</a></li>
              <li><a href="/refund" className="text-gray-500 hover:text-gray-700">Cancellation and Refund Policy</a></li>
              <li><a href="/acceptable-use" className="text-gray-500 hover:text-gray-700">Acceptable Use</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <p className="text-gray-500 mb-4">
              Registered Address: Aurorax Private Limited, 107, 9th St., Dr Kalaignar Nagar, Tiruvottiyur, Chennai - 600019
            </p>
            <a href="mailto:contact@bharatx.tech" className="text-gray-500 hover:text-bharatx-blue">
              contact@bharatx.tech
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <div className="text-3xl font-bold">
                Bharat<span className="text-black">X</span>
              </div>
            </a>
          </div>
          
          <div className="text-gray-500 mb-6 md:mb-0">
            © 2021-22 AuroraX Private Limited. <span className="text-gray-400">All Rights Reserved.</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Twitter size={24} />
            </a>
            <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Slack size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
