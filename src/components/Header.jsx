import { useEffect, useState } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed top-6 z-50 px-4 pointer-events-none">
      <header className={`w-full max-w-5xl transition-all duration-500 rounded-full pointer-events-auto ${isScrolled
          ? 'glass-pill py-3 px-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5 px-8'
        }`}>
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md shadow-inner">
              <span className="text-white font-bold text-sm tracking-wider">MA</span>
            </div>
            <span className="text-lg font-bold text-white tracking-[0.2em] uppercase">Mukesh A</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 py-2 ${activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                )}
              </button>
            ))}

            {/* Resume Button */}
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1Sx67kpOJG7dUgOTCzrwZbt4NA10qXgi3/view?usp=drive_link', '_blank')}
              className="relative group px-6 py-2.5 rounded-full font-semibold text-xs tracking-widest uppercase transition-all duration-300 overflow-hidden border border-white/20 hover:border-white/50"
            >
              <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative text-white drop-shadow-md">Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
              <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
              <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-4 glass-panel rounded-3xl overflow-hidden animate-fade-in shadow-2xl">
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-center py-4 font-medium text-sm tracking-widest uppercase transition-all duration-300 rounded-xl ${activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => window.open('https://drive.google.com/file/d/1Sx67kpOJG7dUgOTCzrwZbt4NA10qXgi3/view?usp=drive_link', '_blank')}
                className="w-full mt-4 bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold tracking-wider uppercase transition-all duration-300"
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;