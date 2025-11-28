
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, BrainCircuit } from 'lucide-react';
import { LINKS } from '../constants';

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
            {/* Dynamic Icon Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-pulse"></div>
              
              {/* Icon Background */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:border-purple-500/50 transition-colors">
                 <BrainCircuit className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </div>
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
