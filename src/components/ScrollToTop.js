import React, { useState, useEffect } from 'react';
import EmblemIcon from './EmblemIcon';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-3 rounded-full shadow-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <EmblemIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;