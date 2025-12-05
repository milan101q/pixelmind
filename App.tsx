
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { PORTFOLIO_ITEMS } from './constants';

const App: React.FC = () => {
  // SEO: Generate Structured Data for Portfolio Items
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": PORTFOLIO_ITEMS.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SocialMediaPosting",
          "headline": `${item.title} | ${item.category}`,
          "url": item.instagramUrl,
          "author": {
            "@type": "Organization",
            "name": "PixelMind Agency"
          }
        }
      }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    // bg-transparent allows the body radial gradient to show through
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;