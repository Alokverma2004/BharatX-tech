
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandsSlider from '@/components/BrandsSlider';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import InvestorsSection from '@/components/InvestorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { HelpCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <BrandsSlider />
        <StatsSection />
        <FeaturesSection />
        <ProductsSection />
        <InvestorsSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      
      <Footer />
      
      {/* Help Button */}
      <div className="fixed bottom-5 right-5">
        <button 
          className="bg-bharatx-blue hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all"
          onClick={() => window.open('/contact', '_blank')}
        >
          <HelpCircle />
        </button>
      </div>
    </div>
  );
};

export default Index;
