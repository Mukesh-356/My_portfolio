import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = ({ setLoading }) => {
  const loadingRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Particle animation
    particlesRef.current.forEach((particle, index) => {
      gsap.to(particle, {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        rotation: 'random(-360, 360)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      });
    });

    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 1,
      delay: 2.5,
      onComplete: () => setLoading(false)
    });
  }, [setLoading]);

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center cyber-grid"
    >
      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'bg-cyan-400' : 
            i % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'
          } ${i === 0 ? 'w-2 h-2 top-10 left-10' :
            i === 1 ? 'w-3 h-3 top-20 right-20' :
            i === 2 ? 'w-4 h-4 bottom-32 left-20' :
            'w-1 h-1'
          } opacity-60`}
        ></div>
      ))}
      
      <div className="text-center relative z-10">
        <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl neon-border">
          <span className="text-white font-bold text-4xl glow-text">MA</span>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4 glow-text">
          Mukesh A
        </h1>
        <div className="typewriter text-cyan-300 text-lg">
           Full Stack Developer
        </div>
      </div>
    </div>
  );
};

export default Loading;     