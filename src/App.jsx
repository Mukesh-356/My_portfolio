import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AudioPlayer from './components/AudioPlayer';
function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const initScrollTrigger = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const gsap = await import('gsap');
      gsap.gsap.registerPlugin(ScrollTrigger);
    };
    initScrollTrigger();
  }, []);

  if (loading) {
    return <Loading setLoading={setLoading} />;
  }

  return (
    <div className="App relative bg-black text-white min-h-screen">
      {/* Aurora Ambient Background Component can be placed globally or per section, putting here globally */}
      <div className="aurora-bg"></div>

      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home />

      <Projects />
      <Experience />
      <Contact />
      <AudioPlayer />
    </div>
  );
}

export default App;