
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { PORTFOLIO_ITEMS, SERVICES, ASSETS } from './constants';

const App: React.FC = () => {
  // SEO: Generate Structured Data for Portfolio Items and Services
  useEffect(() => {
    // 1. Portfolio Schema (ItemList)
    const portfolioSchema = {
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

    // 2. Services Schema (OfferCatalog)
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PixelMind Agency",
      "url": "https://milan101q.github.io/pixelmind/",
      "logo": ASSETS.LOGO,
      "description": "Premier AI Business Studio specializing in generative visuals and performance video strategy.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Video Marketing Services",
        "itemListElement": SERVICES.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description
          }
        }))
      }
    };
    
    // Inject Scripts
    const scriptPortfolio = document.createElement('script');
    scriptPortfolio.type = 'application/ld+json';
    scriptPortfolio.text = JSON.stringify(portfolioSchema);
    document.head.appendChild(scriptPortfolio);

    const scriptServices = document.createElement('script');
    scriptServices.type = 'application/ld+json';
    scriptServices.text = JSON.stringify(servicesSchema);
    document.head.appendChild(scriptServices);
    
    return () => {
      document.head.removeChild(scriptPortfolio);
      document.head.removeChild(scriptServices);
    };
  }, []);

  return (
    // bg-transparent allows the body radial gradient to show through
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
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
