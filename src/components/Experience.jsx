import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experience = () => {
  const experienceRef = useRef(null);
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(".experience-item", {
      x: -50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .fromTo(".skill-item", {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1
    }, "-=0.4");

    // Animate skill bars on scroll
    skillBarsRef.current.forEach((skillBar, index) => {
      if (skillBar) {
        gsap.to(skillBar, {
          width: skillBar.dataset.level + '%',
          duration: 1.5,
          delay: 0.5 + index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillBar.parentElement,
            start: "top 80%",
          }
        });
      }
    });
  }, []);

  const addToSkillBarsRef = (el) => {
    if (el && !skillBarsRef.current.includes(el)) {
      skillBarsRef.current.push(el);
    }
  };

  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies.",
      achievements: ["Improved app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipelines"],
      tech: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      period: "2020 - 2022",
      role: "Full Stack Developer",
      company: "Digital Innovations Inc",
      description: "Developed web applications for various clients with modern technologies.",
      achievements: ["Delivered 15+ projects", "Reduced load times by 60%", "Implemented agile methodologies"],
      tech: ["Vue.js", "Firebase", "Python", "PostgreSQL"]
    },
    {
      period: "2018 - 2020",
      role: "Frontend Developer",
      company: "WebCraft Studios",
      description: "Built responsive websites and applications with JavaScript frameworks.",
      achievements: ["Built 20+ websites", "Improved SEO by 50%", "Implemented accessibility standards"],
      tech: ["JavaScript", "CSS3", "WordPress", "PHP"]
    }
  ];

  const skills = [
    { 
      category: "Frontend", 
      items: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ] 
    },
    { 
      category: "Tools & Cloud", 
      items: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 80 }
      ] 
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
      
      <div ref={experienceRef} className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent glow-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey through the tech industry and the skills I've mastered along the way
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold">💼</span>
              </span>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="experience-item bg-gray-800 rounded-2xl border border-gray-700 p-6 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.role}
                      </h4>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 glow-text"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-lg text-sm font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">⚡</span>
                </span>
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-item">
                    <h4 className="font-semibold text-cyan-400 mb-3">{skillGroup.category}</h4>
                    <div className="space-y-3">
                      {skillGroup.items.map((skill, i) => (
                        <div key={i} className="group">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden border border-gray-600">
                            <div 
                              ref={addToSkillBarsRef}
                              data-level={skill.level}
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out relative"
                              style={{ width: '0%' }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">🎓</span>
                </span>
                Education
              </h3>
              <div className="space-y-4">
                <div className="group">
                  <h4 className="font-semibold text-white">Bachelor of Computer Science</h4>
                  <p className="text-cyan-400">University of Technology</p>
                  <p className="text-gray-400 text-sm">2014 - 2018</p>
                </div>
                <div className="group">
                  <h4 className="font-semibold text-white">AWS Certified Developer</h4>
                  <p className="text-gray-400 text-sm">2021 - Present</p>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            {/* <button 
              onClick={() => window.open('https://drive.google.com/your-resume-link', '_blank')}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
            >
              Download Resume PDF
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;