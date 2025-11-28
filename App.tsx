
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

const App: React.FC = () => {
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
