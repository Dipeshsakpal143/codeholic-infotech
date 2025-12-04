import React from 'react';
import { motion } from 'framer-motion';
import { CEO_PROFILE, TIMELINE } from '../constants';
import { Download, Linkedin, Github, Twitter } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-10 pb-24 container mx-auto px-6">
      
      {/* Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-30 blur-xl"></div>
          <img 
            src={"/ceo.jpg"} 
            alt={CEO_PROFILE.name} 
            className="relative rounded-3xl w-full object-cover shadow-2xl border border-white/10"
          />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
        >
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">The Visionary</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Hi, I'm {CEO_PROFILE.name}.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Founder & CEO of Codeholic Infotech. With over 8 years of hands-on experience in the trenches of <span className="text-white font-semibold">Game Development</span> and <span className="text-white font-semibold">Full-Stack Engineering</span>.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            My journey began with a passion for creating immersive worlds in Unity and Unreal. Over the years, I've expanded my skillset to master cloud architecture and scalable web solutions, believing that the future of tech lies in the convergence of interactive media and robust data systems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-4 px-4">
              <a href={CEO_PROFILE.socials.linkedin} className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24}/></a>
              <a href={CEO_PROFILE.socials.github} className="text-gray-400 hover:text-white transition-colors"><Github size={24}/></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Banner */}
      <div className="mb-24">
        <h3 className="text-center text-white font-bold text-xl mb-10">Core Technologies</h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['Unity', 'Unreal Engine', 'React', 'Node.js', 'AWS', 'Flutter', 'C#', 'C++'].map(tech => (
              <span key={tech} className="text-2xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                {tech}
              </span>
            ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Journey So Far</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {TIMELINE.map((event, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-dark-900 group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-dark-800 border border-white/5 hover:border-primary/50 transition-colors shadow-lg">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white text-lg">{event.title}</div>
                  <time className="font-mono text-xs text-primary">{event.year}</time>
                </div>
                <div className="text-gray-400 text-sm">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
