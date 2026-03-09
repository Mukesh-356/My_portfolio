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
    "Software Developer",
    "Wedsite Developer",
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
      className="min-h-screen bg-transparent relative flex items-center overflow-hidden pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Content */}
          <div className="space-y-6 glass-panel p-8 lg:p-10 rounded-[2rem] relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-[2rem] blur-xl -z-10"></div>
            <div>
              <h1
                ref={nameRef}
                className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
              >
                Hi, I'm <br />
                <span className="text-gradient drop-shadow-lg drop-shadow-blue-500/20">Mukesh A</span>
              </h1>
              <div
                ref={titleRef}
                className="text-lg lg:text-xl text-gray-300 font-medium tracking-wide mt-4 h-8 overflow-hidden"
              >
                {titles[currentTitleIndex]}
              </div>
            </div>

            <p
              ref={descriptionRef}
              className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl font-light"
            >
              I’m an <span className="text-white font-medium">innovative developer</span> focused on building <span className="text-white font-medium">seamless, high-performance web experiences</span> using modern technologies.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="relative group px-8 py-3 rounded-full font-bold text-base transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(96,165,250,0.3)] hover:shadow-[0_0_40px_rgba(96,165,250,0.5)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative text-white tracking-wide">Explore My Work</span>
              </button>

              <button
                onClick={() => window.open('https://drive.google.com/file/d/1ZugLfPpdKJZpxFu9qb_INK8T5YHrbVPn/view?usp=drive_link', '_blank')}
                className="px-8 py-3 rounded-full font-bold text-base tracking-wide transition-all duration-300 border border-white/10 hover:border-white/30 hover:bg-white/5 text-white backdrop-blur-md"
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Solar System Profile Animation */}
          <div className="flex justify-center lg:justify-end perspective-1000 mt-20 lg:mt-0 w-full lg:w-auto">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center p-4">

              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="solar-system">

                {/* Ring 3 (Outer - Slow) */}
                <div className="orbit-ring orbit-ring-3">
                  <div className="planet"><span className="text-[#F05032]">Git</span></div>
                  <div className="planet pos-2"><span className="text-white">AWS</span></div>
                </div>

                {/* Ring 2 (Middle - Medium) */}
                <div className="orbit-ring orbit-ring-2">
                  <div className="planet pos-3"><span className="text-[#61DAFB]">React</span></div>
                  <div className="planet pos-4"><span className="text-[#47A248]">Node</span></div>
                </div>

                {/* Ring 1 (Inner - Fast) */}
                <div className="orbit-ring orbit-ring-1">
                  <div className="planet"><span className="text-[#F7DF1E]">JS</span></div>
                  <div className="planet pos-2"><span className="text-[#3178C6]">TS</span></div>
                </div>

                {/* Center "Sun" Profile */}
                <div className="sun-profile">
                  <img
                    src="/prof_mukesh.jpg"
                    alt="Mukesh A - Full Stack Developer"
                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;