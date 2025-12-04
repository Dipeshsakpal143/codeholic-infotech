export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Game Dev' | 'Web Dev' | 'Mobile App' | 'AR/VR';
  image: string;
  description: string;
  tech: string[];
  link?: string;
  gallery?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}