
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative bg-[#030712]">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
            <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Intelligence Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Imagination</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};
