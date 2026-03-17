import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-bg text-white flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-pulse [animation-delay:1000ms]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in [animation-delay:200ms]">
            Abel Zeru
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 opacity-90 animate-fade-in [animation-delay:400ms]">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-80 animate-fade-in [animation-delay:600ms]">
            I create beautiful and functional websites that help businesses grow 
            and succeed in the digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:800ms]">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="px-6 py-3 border-2 border-white text-white 
                                         rounded-full font-semibold transition-all duration-300 
                                         hover:bg-white hover:text-primary-500 hover:-translate-y-1">
              View Work
            </a>
          </div>
          
          <div className="flex gap-6 justify-center mt-12 animate-fade-in [animation-delay:1000ms]">
            {[
              { Icon: FaGithub, href: 'https://github.com' },
              { Icon: FaLinkedin, href: 'https://linkedin.com' },
              { Icon: FaTwitter, href: 'https://twitter.com' },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-200 transition-all duration-300 
                         hover:scale-110 hover:-translate-y-1"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;