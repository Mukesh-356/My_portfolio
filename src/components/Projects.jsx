import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".project-card", {
      y: 100,
      opacity: 0,
      rotationY: 90
    }, {
      y: 0,
      opacity: 1,
      rotationY: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations and interactive elements built with React and GSAP",
      tech: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      category: "Full Stack",
      gradient: "from-blue-500 to-purple-600",
      liveDemo: "https://artin3d.fun",
      caseStudy: "#"
    },
    {
      title: "AI Task Management",
      description: "Intelligent project management with AI-powered insights and real-time collaboration features",
      tech: ["Vue.js", "Firebase", "AI/ML", "PWA"],
      category: "AI Integration",
      gradient: "from-green-500 to-cyan-500",
      liveDemo: "#",
      caseStudy: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, MongoDB and secure payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      gradient: "from-orange-500 to-red-500",
      liveDemo: "#",
      caseStudy: "#"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time data visualization platform for financial institutions with predictive analytics",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      category: "Data Science",
      gradient: "from-purple-500 to-pink-500",
      liveDemo: "#",
      caseStudy: "#"
    }
  ];

  const handleLiveDemo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCaseStudy = (url) => {
    // For demo purposes, you can implement case study navigation
    if (url === '#') {
      alert('Case study page would open here');
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      
      <div ref={projectsRef} className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Animated Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital solutions that push the boundaries of innovation and user experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:transform hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-6 right-6">
                  <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="text-white">
                    <div className="text-4xl font-bold mb-2">0{index + 1}</div>
                    <span className="text-white/80 text-sm tracking-widest">PROJECT SHOWCASE</span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <span className="text-2xl font-bold text-white">🚀</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gray-800/80 text-blue-300 px-4 py-2 rounded-xl text-sm font-medium border border-gray-700 group-hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6 border-t border-gray-700">
                  <button 
                    onClick={() => handleCaseStudy(project.caseStudy)}
                    className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 font-semibold transition-all duration-200 group/link px-4 py-2 rounded-lg hover:bg-blue-400/10"
                  >
                    <span className="text-lg">Case Study</span>
                    <span className="transform group-hover/link:translate-x-2 transition-transform duration-200 text-xl">→</span>
                  </button>
                  <button 
                    onClick={() => handleLiveDemo(project.liveDemo)}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white font-semibold transition-all duration-200 group/link px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="text-lg">Live Demo</span>
                    <span className="transform group-hover/link:translate-x-1 translate-y-1 transition-transform duration-200 text-xl">↗</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-0 rounded-3xl bg-black -m-0.5"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-20">
          <button className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative bg-black border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 group">
              <span className="flex items-center space-x-2">
                <span>Explore All Projects</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-200">→</span>
              </span>
            </button>
          </button>
        </div>
      </div>

      {/* Additional background elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Projects;                                       