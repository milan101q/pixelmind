import React from 'react';
import { Instagram } from 'lucide-react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Pixel<span className="text-blue-500">Mind</span></h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Redefining digital presence through artificial intelligence and creative strategy.
            </p>
          </div>

          <div className="flex gap-6">
            <a href={LINKS.INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} PixelMind Agency. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  );
};