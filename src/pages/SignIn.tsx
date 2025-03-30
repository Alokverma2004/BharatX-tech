
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bharatx-blue">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl flex overflow-hidden">
          <div className="w-0 md:w-1/2 hidden md:block p-8">
            <img 
              src="/lovable-uploads/sign.png" 
              alt="Login Illustration" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2">
                Bharat<span className="text-black">X</span>
              </h2>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Welcome Back!</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bharatx-blue"
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bharatx-blue"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-bharatx-blue hover:bg-blue-700 text-white py-3 rounded-md transition-colors"
              >
                Login
              </button>
            </form>
            
            <div className="text-center mt-6">
              <button 
                onClick={() => navigate('/signup')}
                className="text-bharatx-blue hover:underline"
              >
                Create an Account!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
