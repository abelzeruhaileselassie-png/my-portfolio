// src/components/Projects.jsx

import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaClock } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const handleDemoClick = (e, project) => {
    // If demo is '#', block navigation and show message
    if (project.demo === '#') {
      e.preventDefault();
      alert('Demo not available yet. Check back soon!');
      return;
    }

    // For development projects with local demos
    if (project.status === 'development') {
      e.preventDefault(); // Prevent immediate navigation
      
      const command = project.startCommand || 'npm run dev';
      const confirmOpen = window.confirm(
        `This project runs locally at ${project.demo}\n\n` +
        `Make sure you have the server running with:\n` +
        `${command}\n\n` +
        `Click OK to open the demo, or Cancel to copy the command.`
      );
      
      if (confirmOpen) {
        // Open the demo in a new tab
        window.open(project.demo, '_blank', 'noopener,noreferrer');
      } else {
        // Copy the command
        navigator.clipboard.writeText(command);
        alert(`📋 Command copied: ${command}`);
      }
    }
    // If confirmOpen is false or not a dev project, let the default link behavior happen
    // (we don't need to do anything else here)
  };

  const getStatusBadge = (project) => {
    switch(project.status) {
      case 'development':
        return (
          <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-yellow-500/20 
                         text-yellow-400 rounded-full text-xs font-medium border 
                         border-yellow-500/30 flex items-center gap-1">
            <FaCode className="text-xs" /> In Development
          </span>
        );
      case 'planned':
        return (
          <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-gray-500/20 
                         text-gray-400 rounded-full text-xs font-medium border 
                         border-gray-500/30 flex items-center gap-1">
            <FaClock className="text-xs" /> Planned
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover 
                       animate-fade-in group border border-gray-700 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {getStatusBadge(project)}
              
              <div className="h-56 gradient-bg flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl transform group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </span>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.demo}
                    onClick={(e) => handleDemoClick(e, project)}
                    target={project.demo === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full 
                             hover:scale-110 transition-transform border border-white/20"
                    title={project.demo === '#' ? 'Demo coming soon' : 'View demo'}
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full 
                              hover:scale-110 transition-transform border border-white/20"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Progress bar for development projects */}
                {project.status === 'development' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-bg rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demo}
                    onClick={(e) => handleDemoClick(e, project)}
                    target={project.demo === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`font-medium flex items-center gap-1 transition-colors
                              ${project.status === 'development' 
                                ? 'text-yellow-400 hover:text-yellow-300' 
                                : project.demo === '#'
                                  ? 'text-gray-500 cursor-not-allowed'
                                  : 'text-primary-400 hover:text-primary-300'}`}
                  >
                    {project.demo === '#' ? (
                      <>Demo Soon</>
                    ) : project.status === 'development' ? (
                      <>Local Demo <FaCode className="text-sm" /></>
                    ) : (
                      <>Live Demo <FaExternalLinkAlt className="text-sm" /></>
                    )}
                  </a>
                  
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 font-medium hover:text-primary-300 
                              transition-colors flex items-center gap-1"
                  >
                    Code <FaGithub className="text-sm" />
                  </a>
                </div>

                {/* Helpful note for dev projects */}
                {project.status === 'development' && project.demo !== '#' && (
                  <div className="mt-3 text-xs text-gray-500 border-t border-gray-700 pt-2 space-y-1">
                    <p>💻 Run: <code className="bg-gray-900 px-2 py-1 rounded">{project.startCommand || 'npm run dev'}</code></p>
                    <p>🔗 Demo: {project.demo}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;