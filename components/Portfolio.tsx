
import React from 'react';
import { PORTFOLIO_ITEMS, LINKS } from '../constants';
import { ArrowUpRight, Instagram } from 'lucide-react';

// Helper to convert standard IG URL to Embed URL
const getEmbedUrl = (url: string) => {
  // Remove any query parameters
  const cleanUrl = url.split('?')[0];
  // Ensure it ends with slash before appending embed
  const baseUrl = cleanUrl.endsWith('/') ? cleanUrl : `${cleanUrl}/`;
  return `${baseUrl}embed`;
};

export const Portfolio: React.FC = () => {
  // Limit to first 6 items for performance (embedding 20+ iframes is heavy)
  const displayItems = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section id="work" className="py-32 relative">
      {/* Background glow for this section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
             <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Sample <br/><span className="text-purple-400">Creations</span></h2>
             <p className="text-xl text-gray-400 max-w-lg">
               Discover our portfolio of AI-generated videos, designed to captivate audiences and drive engagement.
             </p>
          </div>
          <a 
             href={LINKS.INSTAGRAM}
             target="_blank"
             rel="noopener noreferrer"
             className="hidden md:flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
          >
            See all on Instagram <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Responsive Grid for Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayItems.map((item) => (
            <div 
              key={item.id}
              className="group relative flex flex-col gap-4"
            >
              {/* Iframe Container */}
              {/* Instagram embeds are typically tall. We force a reasonable height */}
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-[#0f0518]">
                <iframe 
                  className="w-full aspect-[9/13] md:aspect-[9/14]"
                  src={getEmbedUrl(item.instagramUrl)} 
                  allowTransparency={true}
                  allowFullScreen={true}
                  frameBorder="0"
                  scrolling="no"
                  title={item.title}
                  style={{
                    backgroundColor: 'white', // Fallback while loading
                  }}
                ></iframe>
              </div>

              {/* Text Info (Outside Iframe to ensure visibility) */}
              <div className="px-2">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">
                    {item.category}
                    </span>
                    <a href={item.instagramUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Instagram size={16} />
                    </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/10 rounded-full font-bold text-white hover:bg-white/20 transition-all"
          >
            <Instagram size={20} />
            View More on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};
