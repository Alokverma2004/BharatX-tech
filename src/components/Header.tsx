
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openContactForm = () => {
    navigate('/contact');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-6 md:px-16 flex items-center justify-between">
      <a href="/" className="flex items-center">
        <div className="text-5xl font-thin">
          Bharat<span className="text-black font-bold">X</span>
        </div>
      </a>

      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
            <a href="/" className="block py-4 text-5xl text-gray-600 hover:text-black underline">Home</a>
            <div className="py-2">
              <button onClick={() => navigate('/pay-in-3')} className="w-full text-left text-gray-600 hover:text-black">
                Pay in 3
              </button>
            </div>
            <div className="py-2">
              <button onClick={() => navigate('/pay-in-x')} className="w-full text-left text-gray-600 hover:text-black">
                Pay in X
              </button>
            </div>
            <div className="py-2">
              <button onClick={() => navigate('/postpaid')} className="w-full text-left text-gray-600 hover:text-black">
                Postpaid
              </button>
            </div>
            <a href="/careers" className="block py-2 text-gray-600 hover:text-black">Careers</a>
            <a href="/contact" className="block py-2 text-gray-600 hover:text-black">Contact Us</a>
            <a href="/signin" className="block py-2 text-bharatx-blue font-medium">Sign In</a>
          </div>
        )}
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-black p-2 text-xl font-semibold hover:text-bharatx-blue hover:underline transition-colors">
          Home
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent p-2 text-xl font-semibold hover:bg-transparent text-gray-600 hover:text-bharatx-blue hover:underline transition-colors">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                        href="/pay-in-3"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Pay in 3
                        </div>
                        <p className="text-sm leading-tight text-gray-600">
                          Split payments into 3 interest-free installments over 60 days
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/pay-in-x"
                      >
                        <div className="text-sm font-medium leading-none">Pay in X</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                          Pay only 25% and rest in 3-18 EMIs
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/postpaid"
                      >
                        <div className="text-sm font-medium leading-none">Postpaid</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                          Pay for all your transactions in a Single Bill every month
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <a href="/careers" className="text-gray-600 p-2 text-xl font-semibold hover:text-bharatx-blue hover:underline transition-colors">
          Careers
        </a>
        <a href="/contact" className="text-gray-600 p-2 text-xl font-semibold hover:text-bharatx-blue hover:underline transition-colors">
          Contact Us
        </a>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <button 
          onClick={handleSignIn}
          className="text-bharatx-blue font-medium"
        >
          Sign In
        </button>
        <button 
          onClick={openContactForm}
          className="bg-bharatx-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
