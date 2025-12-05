
import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { LINKS, ASSETS } from '../constants';

export const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={ASSETS.HERO_BG}
          aria-label="Abstract AI Technology Background Video"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity" // Reduced opacity and luminosity for professional feel
        >
          <source src={ASSETS.HERO_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 to-transparent z-10"></div>
        
        {/* Subtle Accent Glows */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center pt-24">
        
        {/* Badge - Clean & Tech */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-md mb-10 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wider text-cyan-100 uppercase">Accepting New Clients</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-8 text-white">
          AI Business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-2xl">
            Studio
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-normal">
          We craft advanced AI video solutions that support scalable business growth.
        </p>

        {/* CTAs - Sharper, cleaner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#030712] font-bold text-base rounded-lg hover:bg-cyan-50 hover:-translate-y-1 transition-all shadow-[0_0_25px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
          >
            Start Project
            <ArrowRight size={18} />
          </a>
          <button 
            onClick={scrollToWork}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-base rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
          >
            <PlayCircle size={18} className="text-cyan-400 group-hover:text-white transition-colors" />
            Showcase
          </button>
        </div>

      </div>
    </section>
  );
};