
import { Service, Project, TeamMember, TimelineEvent } from './types';

export const COMPANY_NAME = "Codeholic Infotech";
export const CEO_NAME = "Dipesh Sakpal";
export const COMPANY_LOGO = "/codelogo.jpeg";

export const SERVICES: Service[] = [
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Immersive 2D/3D games built with Unity & Unreal Engine. Multiplayer, optimization, and cross-platform publishing.',
    icon: 'Gamepad2',
    techStack: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Photon']
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web',
    description: 'High-performance web applications using React, Next.js, and modern cloud infrastructure.',
    icon: 'Globe',
    techStack: ['React', 'Next.js', 'Node.js', 'Tailwind', 'AWS']
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android tailored for scale.',
    icon: 'Smartphone',
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin']
  },
  {
    id: 'ar-vr',
    title: 'AR/VR & XR',
    description: 'Cutting-edge Augmented and Virtual Reality solutions for enterprise and entertainment.',
    icon: 'Glasses',
    techStack: ['ARKit', 'ARCore', 'Oculus SDK', 'WebXR']
  },
  {
    id: 'backend',
    title: 'Cloud & Backend',
    description: 'Scalable microservices, API development, and DevOps automation.',
    icon: 'Server',
    techStack: ['Docker', 'Kubernetes', 'AWS Lambda', 'GraphQL']
  },
  {
    id: 'qa',
    title: 'QA & Testing',
    description: 'Rigorous automated and manual testing to ensure bug-free releases.',
    icon: 'ShieldCheck',
    techStack: ['Selenium', 'Jest', 'Cypress', 'Performance']
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 'aviator',
    title: 'Aviator',
    category: 'Game Dev',
    image: '/aviatorlogo.jpeg',
    description: 'A real-time multiplayer crash game with provably fair RNG algorithms and high-concurrency backend. Players bet on an increasing multiplier that can crash at any time.',
    tech: ['Unity', 'Node.js', 'Socket.io', 'WebGL'],
    gallery: [
       '/claimed.jpeg',
       '/flew.jpeg',
       '/waiting.jpeg'
    ]
  },

  {
    id: 'casino',
    title: 'Casino',
    category: 'Game Dev',
    image: '/casinologo.jpeg',
    description: 'Step into a world of luxury, adventure, and nonstop casino excitement! This all-in-one game brings together stunning graphics, immersive themes, and a wide variety of classic casino experiences—all designed to deliver endless fun and big-win thrills.',
    tech: ['Unity', 'Node.js', 'Socket.io', 'WebGL'],
    gallery: [
       '/c1.jpeg',
       '/c2.jpeg',
       '/c3.jpeg',
       '/c4.jpeg'
    ]
  },

  {
    id: 'fortune',
    title: 'Fortune Wheel Game',
    category: 'Game Dev',
    image: '/fortunelogo.jpeg',
    description: 'Step into a world of luxury, adventure, and nonstop casino excitement! This all-in-one game brings together stunning graphics, immersive themes, and a wide variety of classic casino experiences—all designed to deliver endless fun and big-win thrills.',
    tech: ['Unity', 'Node.js', 'Socket.io', 'WebGL'],
    gallery: [
       '/f1.jpeg',
       '/f2.jpeg',
    ]
  },


  {
    id: 'chicken-road',
    title: 'Chicken Road',
    category: 'Game Dev',
    image: '/chicken.jpeg',
    description: 'A strategic probability-based betting game. Players guide a chicken through various difficulty levels (Easy to Hardcore), managing collision risks to multiply rewards. Features a clean UI with real-time wallet and difficulty configurations.',
    tech: ['Unity', 'WebGL', 'Socket.io', 'Node.js'],
    gallery: [
       '/chick.jpeg'
    ]
  },
  {
    id: 'bubble-shooter',
    title: 'Bubble Shooter',
    category: 'Game Dev',
    image: '/bubblelogo.jpeg',
    description: 'A classic and addictive arcade-style puzzle game. Players aim and match colored bubbles to clear the board. Features smooth physics, vibrant animations, and hundreds of challenging levels with special power-ups.',
    tech: ['Unity', 'C#', 'Android', 'iOS'],
    gallery: [
       '/bu1.jpeg',
       '/bub2.jpeg',
       '/bub3.jpeg'
    ]
  },
  {
    id: 'car-bike-racing',
    title: 'Car and Bike Racing Game 3D',
    category: 'Game Dev',
    image: '/carlogo.jpeg',
    description: 'A high-octane 3D racing simulator featuring both cars and bikes. Players can customize vehicles, race on diverse tracks, and compete in career mode or multiplayer challenges. Features realistic physics and stunning 3D environments.',
    tech: ['Unity', 'C#', 'Photon', 'Android'],
    gallery: [
       '/car1.jpeg',
       '/car32.jpeg'
    ]
  },

  {
    id: 'horse run',
    title: 'Horse run and Win ',
    category: 'Game Dev',
    image: '/horselogo.jpeg',
    description: 'Place your bets, cheer for your horse, and feel the rush of real-time racing excitement!',
    tech: ['Unity', 'C#', 'Photon', 'Android'],
    gallery: [
       '/h1.jpeg',
       '/h2.jpeg',
       '/h3.jpeg',
       '/h4.jpeg'
    ]
  },

  {
    id: 'crazy_wheel',
    title: 'Crazy Wheel Casino Game',
    category: 'Game Dev',
    image: '/crazylogo.jpeg',
    description: 'A striking green-haired enchantress stands beside the wheel, adding a magical and mythological feel to the game, suggesting bonuses or special features tied to her character.',
    tech: ['Unity', 'C#', 'Photon', 'Android'],
    gallery: [
       '/cr1.jpeg',
       '/cr2.jpeg'
    ]
  },

  {
    id: 'rouleate Game',
    title: 'Casino Rouleate Game',
    category: 'Game Dev',
    image: '/roullogo.jpeg',
    description: 'Step into the excitement of a classic casino with this beautifully designed Roulette Game. Featuring a realistic wooden roulette wheel and a vibrant betting table, the game offers an authentic casino experience right at your fingertips.',
    tech: ['Unity', 'C#', 'Photon', 'Android'],
  },

  {
    id: 'satisflow',
    title: 'Satisflow Game',
    category: 'Game Dev',
    image: '/satislogo.jpeg',
    description: 'Get ready for a collection of simple, satisfying, and addictive mini-games! Each level challenges your creativity, accuracy, and quick thinking with easy touch-based controls.',
    tech: ['Unity', 'C#', 'Photon', 'Android'],
    gallery: [
      '/s1.jpeg',
      '/s2.jpeg',
      '/s3.jpeg'
   ]
  },

];

export const CEO_PROFILE: TeamMember = {
  name: "Dipesh Sakpal",
  role: "CEO & Lead Architect",
  image: "/ceo.jpeg",
  bio: "Visionary tech leader with 8+ years of expertise in Game Development and Full-Stack Engineering. Dipesh specializes in bridging the gap between creative gaming experiences and robust enterprise software.",
  socials: {
    linkedin: "#",
    twitter: "#",
    github: "#"
  }
};

export const TIMELINE: TimelineEvent[] = [
  { year: "2016", title: "Career Beginnings", description: "Started as a Junior Unity Developer, shipping first indie titles." },
  { year: "2018", title: "Senior Game Engineer", description: "Led development of multiplayer systems for a major studio." },
  { year: "2020", title: "Full Stack Expansion", description: "Mastered React & Node.js, delivering enterprise web solutions." },
  { year: "2022", title: "Founded Codeholic Infotech", description: "Established the agency to deliver premium IT & Game services." },
  { year: "2024", title: "Global Expansion", description: "Serving clients across 10+ countries with a team of 20+ experts." }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];
