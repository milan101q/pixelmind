
import React from 'react';
import { PORTFOLIO_ITEMS, LINKS } from '../constants';
import { ArrowUpRight, Instagram } from 'lucide-react';

const getEmbedUrl = (url: string) => {
  const cleanUrl = url.split('?')[0];
  const baseUrl = cleanUrl.endsWith('/') ? cleanUrl : `${cleanUrl}/`;
  // MOBILE FIX: Use 'embed/captioned/' as it provides a more robust player wrapper 
  // that handles mobile touch events and autoplay policies better than the raw embed.
  return `${baseUrl}embed/captioned/`;
};

export const Portfolio: React.FC = () => {
  const displayItems = PORTFOLIO_ITEMS;

  return (
    <section id="work" className="py-32 relative bg-[#030712]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
             <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Selected <br/><span className="text-cyan-400">Projects</span></h2>
             <p className="text-lg text-slate-400 max-w-lg font-light">
               Discover our portfolio of AI-generated business solutions, designed to captivate and convert.
             </p>
          </div>
          <a 
             href={LINKS.INSTAGRAM}
             target="_blank"
             rel="noopener noreferrer"
             className="hidden md:flex items-center gap-2 text-slate-300 border-b border-slate-700 pb-1 hover:text-white hover:border-white transition-all text-sm font-medium"
          >
            See all on Instagram <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div 
              key={item.id}
              className="group relative flex flex-col gap-5"
            >
              {/* Iframe Container - Aspect Ratio fixed to 9:16 for Reels */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19] shadow-2xl transition-all duration-300 group-hover:border-cyan-500/30">
                <iframe 
                  className="w-full aspect-[9/16]" 
                  src={getEmbedUrl(item.instagramUrl)} 
                  allowTransparency={true}
                  allowFullScreen={true}
                  frameBorder="0"
                  scrolling="no"
                  title={`${item.title} - ${item.category} AI Video`}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; playsinline" 
                  // touchAction: manipulation removes double-tap-zoom delay, making play button responsive
                  style={{ backgroundColor: '#0B0F19', pointerEvents: 'auto', touchAction: 'manipulation' }}
                ></iframe>
              </div>

              <div className="px-1">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                    {item.category}
                    </span>
                    <a href={item.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors">
                        <Instagram size={14} />
                    </a>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1">
                    {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <a 
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all text-sm"
          >
            <Instagram size={18} />
            View More on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};
