import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'Certifications', 'Contact'];

  return (
   
        <header className={`fixed w-full z-50 transition-all duration-300 ${
  isScrolled ? 'glass-effect shadow-lg py-4' : 'bg-transparent py-6'
}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="text-2xl font-bold text-white animate-float">
          Portfolio
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-primary-500 font-medium transition-all duration-300
                       relative after:content-[''] after:absolute after:bottom-0 after:left-0 
                       after:w-0 after:h-0.5 after:gradient-bg after:transition-all after:duration-300
                       hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg 
                    transition-all duration-300 overflow-hidden ${
                      isMobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
                    }`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;