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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-cyan-500/20 shadow-2xl py-4' 
        : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl neon-border">
              <span className="text-white font-bold text-lg">MA</span>
            </div>
            <span className="text-xl font-bold text-white glow-text">Mukesh A</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-semibold text-sm tracking-wider transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-cyan-400 glow-text' 
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400 rounded-full glow-text"></span>
                )}
              </button>
            ))}
            
            {/* Resume Button */}
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1Sx67kpOJG7dUgOTCzrwZbt4NA10qXgi3/view?usp=drive_link', '_blank')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 neon-border"
            >
              View Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyan-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-cyan-500/20">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 font-semibold transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-cyan-400 glow-text' 
                      : 'text-gray-300 hover:text-cyan-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://drive.google.com/file/d/1Sx67kpOJG7dUgOTCzrwZbt4NA10qXgi3/view?usp=drive_link', '_blank')}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                View Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;