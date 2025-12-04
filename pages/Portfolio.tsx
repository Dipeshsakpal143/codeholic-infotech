import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { Project } from '../types';
import { Filter, X } from 'lucide-react';

const CATEGORIES = ['All', 'Game Dev', 'Web Dev', 'Mobile App', 'AR/VR'];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  return (
    <div className="pt-10 pb-24 px-6 container mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
          Our <span className="text-secondary">Work</span>
        </h1>
        <p className="text-gray-400">Showcasing our best digital craftsmanship.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-white text-dark-900' 
                : 'bg-dark-800 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/5 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded text-white backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
         <div className="text-center py-20 text-gray-500">
           No projects found in this category.
         </div>
      )}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
             {/* Backdrop */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
             />

             {/* Modal Content */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-dark-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl custom-scrollbar"
             >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-primary hover:text-dark-900 transition-colors backdrop-blur-sm"
                >
                  <X size={24} />
                </button>

                {/* Main Image Header */}
                <div className="w-full h-64 md:h-96 relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                    <div className="absolute bottom-6 left-6 md:left-10 right-6">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{selectedProject.category}</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">{selectedProject.title}</h2>
                    </div>
                </div>

                <div className="p-6 md:p-10 bg-dark-900">
                   <p className="text-gray-300 text-lg leading-relaxed mb-8">{selectedProject.description}</p>

                   <div className="mb-10">
                      <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                           <span key={t} className="px-4 py-2 bg-dark-800 border border-white/10 rounded-lg text-sm text-primary">
                             {t}
                           </span>
                        ))}
                      </div>
                   </div>

                   {/* Gallery Grid */}
                   {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                      <div>
                        <h4 className="text-white font-bold mb-6 text-xl">Project Gallery</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {selectedProject.gallery.map((img, idx) => (
                              <div key={idx} className="rounded-xl overflow-hidden border border-white/5 group">
                                <img
                                  src={img}
                                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                           ))}
                        </div>
                      </div>
                   )}
                   
                   {!selectedProject.gallery && (
                     <div className="text-center py-10 text-gray-500 border-t border-white/5 mt-8">
                       More project visuals coming soon.
                     </div>
                   )}
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};