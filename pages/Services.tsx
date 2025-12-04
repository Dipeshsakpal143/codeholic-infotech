import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CheckCircle2, Gamepad2, Globe, Smartphone, Glasses, Server, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  'Gamepad2': <Gamepad2 size={32} />,
  'Globe': <Globe size={32} />,
  'Smartphone': <Smartphone size={32} />,
  'Glasses': <Glasses size={32} />,
  'Server': <Server size={32} />,
  'ShieldCheck': <ShieldCheck size={32} />,
};

export const Services: React.FC = () => {
  return (
    <div className="pt-10 pb-24 px-6 container mx-auto">
       <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical solutions tailored for modern businesses and gaming studios.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800 rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-dark-900 rounded-2xl text-primary group-hover:bg-primary group-hover:text-dark-900 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <div className="text-right">
                  <span className="text-4xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed h-20">
                {service.description}
              </p>

              <div className="border-t border-white/5 pt-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-dark-700 text-xs text-gray-300 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
       </div>

       <div className="mt-24 p-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border border-white/10 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Whether it's a AAA game or a corporate dashboard, we have the expertise to deliver.</p>
            <Link to="/contact" className="px-8 py-4 bg-white text-dark-900 font-bold rounded-xl hover:scale-105 transition-transform inline-block">
              Let's Discuss
            </Link>
          </div>
       </div>
    </div>
  );
};
