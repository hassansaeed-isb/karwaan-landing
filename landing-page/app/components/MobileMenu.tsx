'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#features" 
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300">
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </div>
  );
}