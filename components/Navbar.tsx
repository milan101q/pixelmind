
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#030712]/80 backdrop-blur-xl border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Logo Image */}
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={ASSETS.LOGO} 
                  alt="PixelMind Agency - AI Business Studio Logo" 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]" 
                />
            </div>

            {/* Text Logo - Clean & Professional */}
            <span className="text-xl font-bold tracking-tight text-white transition-all">
              Pixel<span className="text-cyan-400">Mind</span>
            </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide">Services</button>
          <button onClick={() => scrollToSection('work')} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide">Work</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors tracking-wide">About</button>
          
          <a 
            href={LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg font-bold text-sm hover:bg-cyan-50 transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <Instagram size={18} />
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-cyan-400 transition-colors"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030712] border-b border-white/5 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 shadow-2xl">
          <button onClick={() => scrollToSection('services')} className="text-lg text-slate-300 text-left font-medium">Services</button>
          <button onClick={() => scrollToSection('work')} className="text-lg text-slate-300 text-left font-medium">Work</button>
          <button onClick={() => scrollToSection('about')} className="text-lg text-slate-300 text-left font-medium">About</button>
          <a 
            href={LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-white shadow-lg"
          >
            <Instagram size={20} />
            DM us on Instagram
          </a>
        </div>
      )}
    </nav>
  );
};
