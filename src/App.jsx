import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 gradient-bg text-white 
                   rounded-full shadow-lg transition-all duration-300 z-50
                   hover:scale-110 hover:shadow-xl
                   ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="mx-auto" />
      </button>
    </div>
  );
}

export default App;