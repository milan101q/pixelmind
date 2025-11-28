
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { LINKS, ASSETS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#0f0518]/80 backdrop-blur-lg border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Logo Image */}
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <img 
                  src={ASSETS.LOGO} 
                  alt="PixelMind Agency" 
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
                />
            </div>

            {/* Text Logo */}
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">
              Pixel<span className="text-purple-500 group-hover:text-purple-300 transition-colors">Mind</span>
            </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Services</button>
          <button onClick={() => scrollToSection('work')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">Work</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">About</button>
          
          <a 
            href={LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Instagram size={18} />
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-purple-400 transition-colors"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f0518] border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 shadow-2xl">
          <button onClick={() => scrollToSection('services')} className="text-lg text-gray-300 text-left">Services</button>
          <button onClick={() => scrollToSection('work')} className="text-lg text-gray-300 text-left">Work</button>
          <button onClick={() => scrollToSection('about')} className="text-lg text-gray-300 text-left">About</button>
          <a 
            href={LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white shadow-lg"
          >
            <Instagram size={20} />
            DM us on Instagram
          </a>
        </div>
      )}
    </nav>
  );
};
