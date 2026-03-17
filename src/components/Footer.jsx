import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-dark-950 text-white py-8 relative overflow-hidden border-t border-dark-800">
  {/* Animated gradient line */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 
                animate-[slideIn_2s_ease-in-out_infinite]"></div>
  
  <div className="container-custom text-center relative z-10">
    <p className="text-lg font-medium gradient-text inline-block mb-2">
      Abel Zeru
    </p>
    <p className="text-gray-500 mb-4">
      &copy; {currentYear} All rights reserved.
    </p>
    <p className="text-sm text-gray-600">
      Designed & Built with React, Tailwind CSS v4, and Vite
    </p>
  </div>
</footer>
  );
};

export default Footer;