
import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS, LINKS } from '../constants';
import { ArrowUpRight, Instagram, Loader2 } from 'lucide-react';

const getEmbedUrl = (url: string) => {
  const cleanUrl = url.split('?')[0];
  const baseUrl = cleanUrl.endsWith('/') ? cleanUrl : `${cleanUrl}/`;
  // Switch to captioned embed which serves a more robust player for mobile touch events
  return `${baseUrl}embed/captioned/?utm_source=ig_embed&utm_campaign=loading`;
};

// Optimized Lazy Load Component
const LazyIframe = ({ url, title }: { url: string, title: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay ensures we don't load heavy iframes if user is just fast-scrolling past
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 150);
          
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { 
        rootMargin: '50px', // Reduced margin to save mobile resources
        threshold: 0.01
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-[4/5] bg-[#0B0F19] flex items-center justify-center">
      {isVisible ? (
        <iframe 
          className="w-full h-full opacity-0 animate-fade-in transition-opacity duration-700 ease-in" 
          src={url} 
          style={{ 
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 1
          }}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
          // Removed loading="lazy" to ensure IntersectionObserver logic takes precedence without mobile conflicts
        ></iframe>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 absolute inset-0 z-10">
          <div className="w-full h-full absolute inset-0 bg-gradient-to-tr from-cyan-900/10 to-blue-900/10 animate-pulse-slow"></div>
          <Loader2 className="w-8 h-8 text-cyan-500/50 animate-spin relative z-20" />
        </div>
      )}
    </div>
  );
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
              {/* Iframe Container - Aspect Ratio fixed to 4:5 for Compact Look */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19] shadow-2xl transition-all duration-300 group-hover:border-cyan-500/30">
                <LazyIframe 
                  url={getEmbedUrl(item.instagramUrl)} 
                  title={`${item.title} - ${item.category} AI Video`} 
                />
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
