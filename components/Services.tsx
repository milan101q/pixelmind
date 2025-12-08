
import React from 'react';
import { SERVICES, DEALERSHIP_PACKAGES, LINKS } from '../constants';
import { Check, ArrowRight, Instagram, Mail } from 'lucide-react';

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 relative bg-[#030712]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Services Header */}
        <div className="text-center mb-24">
            <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Intelligence Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Imagination</span>
            </h2>
        </div>

        {/* Abstract Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1 shadow-2xl hover:shadow-cyan-900/20"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                <service.icon size={28} className="text-cyan-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-base font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specialized Packages Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              Automotive Industry Special
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Instagram Packages for <span className="text-cyan-400">Dealerships</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We create clean, consistent, and conversion-focused content designed to showcase your inventory and drive real engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEALERSHIP_PACKAGES.map((pkg, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border flex flex-col transition-all duration-300 ${
                  pkg.recommended 
                    ? 'bg-gradient-to-b from-cyan-950/10 to-[#030712] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]' 
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-[#030712] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    RECOMMENDED
                  </div>
                )}

                <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                  <span className="text-slate-500 font-medium">{pkg.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-8 h-10">{pkg.description}</p>

                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2 transition-all ${
                      pkg.recommended
                        ? 'bg-cyan-500 text-[#030712] hover:bg-cyan-400 shadow-lg shadow-cyan-900/20'
                        : 'bg-white text-[#030712] hover:bg-slate-200'
                    }`}
                  >
                    <Mail size={18} />
                    Contact Us
                  </button>
                  
                  <a 
                    href={LINKS.INSTAGRAM} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2 transition-all border ${
                      pkg.recommended
                        ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                        : 'border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Instagram size={18} />
                    DM on IG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
