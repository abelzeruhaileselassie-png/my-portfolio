import React from 'react';
import { FaCertificate, FaAward, FaMedal, FaTrophy, FaCloud, FaCode } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: <FaCertificate />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      icon: <FaAward />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2022",
      icon: <FaCode />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      icon: <FaMedal />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
 <section id="certifications" className="py-20 bg-dark-950">
  <div className="container-custom">
    <h2 className="section-title">Certifications</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <div
          key={cert.id}
          className="glass-card rounded-xl p-6 shadow-lg card-hover group
                   animate-fade-in relative overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Decorative top bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>
          
          <div className={`w-16 h-16 rounded-lg mb-4 bg-gradient-to-r ${cert.color} 
                        flex items-center justify-center text-white text-3xl 
                        group-hover:scale-110 transition-transform duration-300`}>
            {cert.icon}
          </div>
          
          <h3 className="text-lg font-bold mb-2 text-white">{cert.title}</h3>
          <p className="text-gray-400 mb-2">{cert.issuer}</p>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">{cert.date}</span>
            <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white 
                           rounded-full text-xs font-medium`}>
              Certified
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Certifications;