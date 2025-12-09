
import { Instagram, Cpu, Zap, BarChart3, Video, Globe } from 'lucide-react';

export const LINKS = {
  INSTAGRAM: "https://www.instagram.com/pixelmind.art_/",
};

export const ASSETS = {
  // A more sophisticated, deeper background for professional contrast
  HERO_BG: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
  HERO_VIDEO: "https://cdn.pixabay.com/video/2023/02/16/150993-800045265_large.mp4", 
  // Wireframe Cube Logo (Hexagon with Nodes) - Matches the attached branding image
  LOGO: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322d3ee' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' /%3E%3Cpath d='M3.27 6.96 12 12.01 20.73 6.96' /%3E%3Cline x1='12' y1='22.08' x2='12' y2='12' /%3E%3Ccircle cx='12' cy='12' r='2' fill='%2322d3ee' stroke='none' /%3E%3Ccircle cx='12' cy='2.5' r='1' fill='%2322d3ee' stroke='none' /%3E%3Ccircle cx='3.5' cy='7.5' r='1' fill='%2322d3ee' stroke='none' /%3E%3Ccircle cx='20.5' cy='7.5' r='1' fill='%2322d3ee' stroke='none' /%3E%3Ccircle cx='3.5' cy='16.5' r='1' fill='%2322d3ee' stroke='none' /%3E%3Ccircle cx='20.5' cy='16.5' r='1' fill='%2322d3ee' stroke='none' /%3E%3Ccircle cx='12' cy='21.5' r='1' fill='%2322d3ee' stroke='none' /%3E%3C/svg%3E",
};

export const SERVICES = [
  {
    title: "AI Video Generation",
    description: "State-of-the-art generative models (Sora, Runway, Veo) creating surreal, hyper-realistic visuals.",
    icon: Cpu,
  },
  {
    title: "Viral Short-Form",
    description: "Expertly crafted Reels/TikToks optimized for algorithm dominance and maximum engagement.",
    icon: Zap,
  },
  {
    title: "Performance Strategy",
    description: "Visual assets built on direct-response psychology to convert viewers into customers.",
    icon: BarChart3,
  },
];

export const DEALERSHIP_PACKAGES = [
  {
    name: "Basic",
    price: "$295",
    period: "/month",
    description: "Perfect for dealers who want consistent content without the stress.",
    features: [
      "12 carousel posts (3 per week)",
      "3 photos per carousel post",
      "8 videos (2 per week)",
      "Captions + Hashtags",
      "Posting included",
      "Captions and photo overlays aligned with CARFAX highlights",
      "Also posted on PixelMind page"
    ],
    recommended: false
  },
  {
    name: "Plus",
    price: "$449",
    period: "/month",
    description: "Ideal for dealerships ready to scale their visibility and boost sales.",
    features: [
      "16 carousel posts (4 per week)",
      "4 photos per carousel post",
      "12 videos (3 per week)",
      "Captions + Hashtags",
      "Paid ads optimization",
      "Posting included",
      "Captions and photo overlays aligned with CARFAX highlights",
      "Also posted on PixelMind page"
    ],
    recommended: true
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: '1',
    title: 'Car Dealership',
    category: 'Nova Autoland',
    instagramUrl: 'https://www.instagram.com/reel/DRlT1gdjaO-/',
    description: ''
  },
  {
    id: '2',
    title: 'Luxury Transportation',
    category: 'Dignity Pro Limousine',
    instagramUrl: 'https://www.instagram.com/reel/DRlbdZZjetx/',
    description: ''
  },
  {
    id: '3',
    title: 'Luxury Transportation',
    category: 'Dignity Pro Limousine',
    instagramUrl: 'https://www.instagram.com/reel/DRmt24-jX4a/',
    description: ''
  },
  {
    id: '4',
    title: 'Car Dealership',
    category: 'Nova Autoland',
    instagramUrl: 'https://www.instagram.com/p/DRnzLW2jZI9/',
    description: ''
  },
  {
    id: '41',
    title: 'Automotive Services',
    category: 'Pre Purchase Inspection',
    instagramUrl: 'https://www.instagram.com/p/DP-za1_jVJ9/',
    description: ''
  },
  {
    id: '5',
    title: 'Car Dealership',
    category: 'Nova Autoland',
    instagramUrl: 'https://www.instagram.com/p/DRXd0oXEnaZ/',
    description: ''
  },
  {
    id: '6',
    title: 'Car Dealership',
    category: 'Nova Autoland',
    instagramUrl: 'https://www.instagram.com/p/DP7_WnNDXVh/',
    description: ''
  },
  {
    id: '7',
    title: 'Luxury Transportation',
    category: 'Dignity Pro Limousine',
    instagramUrl: 'https://www.instagram.com/p/DRLg5RqEg3i/',
    description: ''
  },
  {
    id: '8',
    title: 'Ladies’ Fashion Accessories Store',
    category: 'Urban Femme',
    instagramUrl: 'https://www.instagram.com/p/DRpTSHsDXgA/',
    description: ''
  },
  {
    id: '9',
    title: 'Luxury Transportation',
    category: 'Dignity Pro Limousine',
    instagramUrl: 'https://www.instagram.com/p/DP5jszajZxx/',
    description: ''
  },
  {
    id: '10',
    title: 'Luxury Transportation',
    category: 'Dignity Pro Limousine',
    instagramUrl: 'https://www.instagram.com/reel/DP6cj0LjQJq/',
    description: ''
  },
  {
    id: '11',
    title: 'Luxury Transportation',
    category: 'Dignity Pro Limousine',
    instagramUrl: 'https://www.instagram.com/reel/DQ5l9MJjETc/',
    description: ''
  },
  {
    id: '12',
    title: 'Automotive Services',
    category: 'Pre Purchase Inspection',
    instagramUrl: 'https://www.instagram.com/p/DQZtY4Zjnfz/',
    description: ''
  },
  {
    id: '111',
    title: 'Car Dealership',
    category: 'Nova Autoland',
    instagramUrl: 'https://www.instagram.com/p/DR25inCEoex/',
    description: ''
  },
  {
    id: '21',
    title: 'Automotive Services',
    category: 'Pre Purchase Inspection',
    instagramUrl: 'https://www.instagram.com/p/DQieUhADvwF/',
    description: ''
  }
];
