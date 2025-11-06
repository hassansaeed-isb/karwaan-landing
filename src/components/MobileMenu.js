import React, { useState, useEffect } from 'react';
import EmblemIcon from './EmblemIcon';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Premium Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-12 h-12 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 group"
        aria-label="Toggle menu"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <div className="w-5 h-3 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </div>
      </button>

      {/* Premium Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" 
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-0 z-50 flex justify-end">
            <div 
              className={`w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Header */}
              <div className="relative h-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-4 -right-4 w-24 h-24">
                    <EmblemIcon className="w-full h-full text-white" />
                  </div>
                  <div className="absolute top-16 left-4 w-8 h-8">
                    <EmblemIcon className="w-full h-full text-white" />
                  </div>
                </div>
                
                {/* Header Content */}
                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-white font-bold text-2xl font-poppins tracking-wide">KARVAAN</h2>
                      <p className="text-white/70 text-sm font-medium mt-1">Travel Platform</p>
                    </div>
                    <button
                      onClick={toggleMenu}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-6 py-8">
                {/* Menu Items */}
                <nav className="space-y-2">
                  {[
                    { href: "#features", label: "Features", icon: "⚡" },
                    { href: "#how-it-works", label: "How It Works", icon: "🎯" },
                    { href: "#benefits", label: "Benefits", icon: "✨" }
                  ].map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center p-4 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                      onClick={toggleMenu}
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <span className="text-gray-800 font-semibold text-lg group-hover:text-primary-600 transition-colors duration-200">
                        {item.label}
                      </span>
                      <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </nav>

                {/* CTA Section */}
                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/923335215568?text=Hi, I want to request a demo of Karvaan platform"
                    className="block w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-4 rounded-2xl font-bold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    onClick={toggleMenu}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Request Demo</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://wa.me/923335215568?text=Hi, I'd like to know more about Karvaan features"
                    className="block w-full border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-2xl font-semibold text-center hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    Get Started
                  </a>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <div className="text-center space-y-2">
                    <p className="text-gray-600 font-medium">Complete Travel Platform</p>
                    <div className="flex justify-center space-x-2 text-xs text-gray-400">
                      <span>Umrah</span>
                      <span>•</span>
                      <span>Tours</span>
                      <span>•</span>
                      <span>CRM</span>
                      <span>•</span>
                      <span>B2B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;