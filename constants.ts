
import { Instagram, Cpu, Zap, BarChart3, Video, Globe } from 'lucide-react';

export const LINKS = {
  INSTAGRAM: "https://www.instagram.com/pixelmind.agency_/",
};

export const ASSETS = {
  // A more vibrant, abstract, high-quality 3D render background
  HERO_BG: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
  HERO_VIDEO: "https://cdn.pixabay.com/video/2023/02/16/150993-800045265_large.mp4", // Abstract Purple/Blue Digital Flow
  // Professional "Pixel Play" Logo: Play button fragmenting into pixels (Video + AI)
  LOGO: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%234f46e5'/%3E%3Cstop offset='1' stop-color='%23db2777'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='128' height='128' rx='32' fill='url(%23g)'/%3E%3Cpath d='M42 38 V90 L82 64 Z' fill='white'/%3E%3Crect x='86' y='58' width='12' height='12' rx='3' fill='white'/%3E%3Crect x='102' y='50' width='10' height='10' rx='2' fill='white' opacity='0.8'/%3E%3Crect x='102' y='68' width='10' height='10' rx='2' fill='white' opacity='0.8'/%3E%3C/svg%3E",
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
  }
];
