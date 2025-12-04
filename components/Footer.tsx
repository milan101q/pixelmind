
import React from 'react';
import { Instagram } from 'lucide-react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-[#02040a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-10 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-white">Pixel<span className="text-cyan-500">Mind</span></h2>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Redefining digital presence through artificial intelligence and data-driven creative strategy.
            </p>
          </div>

          <div className="flex gap-4">
            <a href={LINKS.INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/20 transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} PixelMind Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
             <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
