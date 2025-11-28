
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={ASSETS.HERO_BG}
          className="w-full h-full object-cover opacity-60"
        >
          <source src={ASSETS.HERO_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay that fades from top (dark) to bottom but keeps colors visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-brand-dark z-10"></div>
        
        {/* Floating color orbs for extra vibrance (Adjusted specifically for video background) */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen z-10" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center pt-24">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 animate-float shadow-[0_0_20px_rgba(139,92,246,0.3)]">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] animate-pulse"></span>
          <span className="text-sm font-semibold tracking-wide text-white uppercase">Accepting New Clients</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 text-white drop-shadow-xl">
          AI Video <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Solutions
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
          We craft advanced AI video solutions that support scalable business growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3"
          >
            Start Project
            <ArrowRight size={22} />
          </a>
          <button 
            onClick={scrollToWork}
            className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <PlayCircle size={22} />
            Showcase
          </button>
        </div>

      </div>
    </section>
  );
};
