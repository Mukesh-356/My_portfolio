import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const Home = () => {
  const homeRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const particlesRef = useRef([]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    "Full Stack Developer",
    "React Specialist", 
    "Hands On Expert in development",
    ""
  ];

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    // Background particles animation
    particlesRef.current.forEach((particle, index) => {
      gsap.to(particle, {
        x: 'random(-200, 200)',
        y: 'random(-200, 200)',
        rotation: 'random(-360, 360)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    // Main content animation
    const tl = gsap.timeline();
    
    tl.fromTo(nameRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.5
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "back.out(1.7)"
    })
    .fromTo(titleRef.current, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      onComplete: startTitleRotation
    }, "-=0.5")
    .fromTo(descriptionRef.current, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1
    }, "-=0.3")
    .fromTo(buttonsRef.current, {
      y: 30,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2
    }, "-=0.2");

    // Sequential text animation
    function startTitleRotation() {
      let titleIndex = 0;
      
      const changeTitle = () => {
        gsap.to(titleRef.current, {
          duration: 0.5,
          opacity: 0,
          y: -20,
          onComplete: () => {
            titleIndex = (titleIndex + 1) % titles.length;
            setCurrentTitleIndex(titleIndex);
            gsap.to(titleRef.current, {
              duration: 0.5,
              opacity: 1,
              y: 0
            });
          }
        });
      };

      // Change title every 3 seconds
      setInterval(changeTitle, 3000);
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={homeRef}
      className="min-h-screen bg-black relative overflow-hidden flex items-center"
    >
      {/* Animated Background Particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          className={`absolute rounded-full floating ${
            i % 4 === 0 ? 'bg-cyan-400' : 
            i % 4 === 1 ? 'bg-purple-500' : 
            i % 4 === 2 ? 'bg-pink-500' : 'bg-blue-400'
          } ${i === 0 ? 'w-3 h-3 top-20 left-10' :
            i === 1 ? 'w-4 h-4 top-40 right-20' :
            i === 2 ? 'w-2 h-2 bottom-32 left-20' :
            i === 3 ? 'w-5 h-5 top-1/4 right-1/4' :
            'w-1 h-1'
          } opacity-30`}
        ></div>
      ))}

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 
                ref={nameRef}
                className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight"
              >
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent glow-text">Mukesh A</span>
              </h1>
              <div 
                ref={titleRef}
                className="text-2xl lg:text-3xl text-cyan-300 font-light mt-6 h-12 overflow-hidden"
              >
                {titles[currentTitleIndex]}
              </div>
            </div>
            
            <p 
  ref={descriptionRef}
  className="text-xl text-gray-300 leading-relaxed max-w-2xl"
>
  I’m an <span className="text-cyan-400 font-semibold">innovative developer </span> 
  focused on building <span className="text-purple-400 font-semibold">seamless, high-performance digital experiences</span> 
   using React, Node.js, and cloud technologies.
</p>


            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => window.open('https://drive.google.com/file/d/1ZugLfPpdKJZpxFu9qb_INK8T5YHrbVPn/view?usp=drive_link', '_blank')}
                className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 neon-border overflow-hidden"
              >
                <span className="relative z-10">View Resume</span>
                <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              {[
                { number: "10+", label: "Projects" },
                { number: "5+", label: "Years Experience" },
                { number: "3+", label: "Clients" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-cyan-400 group-hover:glow-text transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.label}
                  </div> 
                </div>
              ))}
            </div>
          </div>

          {/* 3D Profile Card with Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-96 h-96 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl transform group-hover:rotate-3 group-hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                  {/* Hologram Effect */}
                  <div className="absolute inset-0 hologram-effect"></div>
                  
                  {/* Profile Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img 
                      src="/prof_mukesh.jpg" 
                      alt="Mukesh A - Full Stack Developer"
                      className="w-64 h-64 object-cover rounded-full border-4 border-cyan-400 shadow-2xl neon-border"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-black rounded-2xl shadow-2xl flex items-center justify-center border border-cyan-400 neon-border floating">
                <span className="text-2xl text-cyan-400">🚀</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-black rounded-2xl shadow-2xl flex items-center justify-center border border-purple-400 neon-border floating" style={{animationDelay: '2s'}}>
                <span className="text-2xl text-purple-400">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;