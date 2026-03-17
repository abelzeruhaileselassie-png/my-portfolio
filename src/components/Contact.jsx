import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
  <div className="container-custom">
    <h2 className="section-title">Get In Touch</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="animate-fade-in">
        <h3 className="text-2xl font-bold gradient-text mb-4">Let's work together</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out! Whether you have a question or just want to say hi, 
          I'll do my best to get back to you.
        </p>
        
        <div className="space-y-4 mb-8">
          {[
            { icon: FaEnvelope, text: 'abelzeruhaileselassie@gmail.com', href: 'mailto:abelzeruhaileselassie@gmail.com' },
            { icon: FaPhone, text: '+251913555289', href: 'tel:+251913555289' },
            { icon: FaMapMarkerAlt, text: 'Addis Ababa, Ethiopia', href: '#' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-4 text-gray-300 hover:text-primary-400 
                       transition-colors group"
            >
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center 
                            justify-center text-white group-hover:scale-110 
                            transition-transform duration-300">
                <item.icon />
              </div>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
        
        <div className="flex gap-4">
          {[
            { icon: FaGithub, href: 'https://github.com/abelzeruhaileselassie-png' },
            { icon: FaLinkedin, href: 'www.linkedin.com/in/abel-zeru-haileselassie-4453733b8' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center 
                       text-white hover:scale-110 transition-transform duration-300"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 shadow-lg animate-fade-in [animation-delay:300ms]">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-all duration-300 text-white
                       placeholder-gray-500"
              placeholder="full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-all duration-300 text-white
                       placeholder-gray-500"
              placeholder="****@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-all duration-300 text-white
                       placeholder-gray-500 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed
                     relative overflow-hidden group"
          >
            <span className="relative z-10">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <div className="absolute inset-0 bg-white/10 transform -translate-x-full 
                          group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
  );
};

export default Contact;