
import { Instagram, Cpu, Zap, BarChart3, Video, Globe } from 'lucide-react';

export const LINKS = {
  INSTAGRAM: "https://www.instagram.com/pixelmind.agency_/",
};

export const ASSETS = {
  // A more vibrant, abstract, high-quality 3D render background
  HERO_BG: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
  HERO_VIDEO: "https://cdn.pixabay.com/video/2023/02/16/150993-800045265_large.mp4", // Abstract Purple/Blue Digital Flow
  // Professional "PixelMind Orb" SVG Logo (Neural Network Hub in Gradient Sphere)
  LOGO: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%238b5cf6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3Cfilter id='glow'%3E%3CfeGaussianBlur stdDeviation='10' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Ccircle cx='256' cy='256' r='256' fill='url(%23grad)'/%3E%3Cg filter='url(%23glow)'%3E%3C!-- Central Hub --%3E%3Ccircle cx='256' cy='256' r='50' fill='white'/%3E%3C!-- Connecting Lines --%3E%3Cpath d='M256 256 L256 110 M256 256 L380 330 M256 256 L130 330' stroke='white' stroke-width='32' stroke-linecap='round'/%3E%3C!-- Outer Nodes --%3E%3Ccircle cx='256' cy='110' r='35' fill='white'/%3E%3Ccircle cx='380' cy='330' r='35' fill='white'/%3E%3Ccircle cx='130' cy='330' r='35' fill='white'/%3E%3C/g%3E%3C/svg%3E",
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
