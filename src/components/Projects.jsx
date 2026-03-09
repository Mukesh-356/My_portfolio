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
      title: "3D product Website",
      description: "Modern, responsive portfolio website with smooth animations and interactive elements built with React and GSAP",
      tech: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      category: "Full Stack",
      gradient: "from-blue-500 to-purple-600",
      liveDemo: "https://artin3d.fun",
      caseStudy: "#"
    },
    {
      title: "Hosipital  Management",
      description: "Intelligent project management with AI-powered insights and real-time collaboration features",
      tech: ["java script ", "mongo db ", "mern stack", "node js"],
      category: "Full Stack",
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
      title: "WIFI Chat LAN Based ",
      description: "Real-time chat application for LAN based devices with predictive analytics",
      tech: ["React", "socket io", "IP address", "mongo db "],
      category: "Full Stack",
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
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>

      <div ref={projectsRef} className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Animated Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto font-light">
            Crafting digital solutions that push the boundaries of innovation and user experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative premium-card p-[1px] transform-style-3d hover:-translate-y-1 hover:rotate-x-1 transition-transform duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="bg-[#0f0f0f] rounded-[1.4rem] h-full flex flex-col overflow-hidden relative z-10">
                {/* Gradient Header */}
                <div className={`h-40 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/10 text-white px-3 py-1.5 rounded-full text-[10px] tracking-wider font-semibold border border-white/20 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white">
                      <div className="text-4xl font-black mb-1 opacity-90 tracking-tighter">0{index + 1}</div>
                      <span className="text-white/80 text-[9px] tracking-[0.2em] font-bold uppercase">PROJECT SHOWCASE</span>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span className="text-2xl font-bold text-white">🚀</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm font-light">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/5 text-gray-300 px-4 py-1.5 rounded-lg text-sm font-medium border border-white/10 group-hover:border-white/30 group-hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-6 mt-auto">
                    <button
                      onClick={() => handleCaseStudy(project.caseStudy)}
                      className="flex-1 flex justify-center items-center space-x-2 text-white font-semibold transition-all duration-300 px-4 py-3 rounded-xl border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 group/link"
                    >
                      <span>Case Study</span>
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    <button
                      onClick={() => handleLiveDemo(project.liveDemo)}
                      className="flex-1 flex justify-center items-center space-x-2 text-white font-semibold transition-all duration-300 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 group/link"
                    >
                      <span>Live Demo</span>
                      <span className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300">↗</span>
                    </button>
                  </div>
                </div>

                {/* Internal Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 border border-white/10">
              <span className="text-white tracking-wide">Explore All Projects</span>
              <span className="text-gray-400 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300">→</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;