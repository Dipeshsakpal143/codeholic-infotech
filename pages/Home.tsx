import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Gamepad, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CEO_PROFILE } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Codeholic Infotech</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-8 leading-tight">
              We Build <span className="text-primary">Immersive Games</span> <br/>
              & Scalable <span className="text-secondary">IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Led by <span className="text-white font-semibold">{CEO_PROFILE.name}</span> with 8+ years of expertise. 
              We transform visions into high-performance digital realities using cutting-edge tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-dark-900 font-bold rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                Get a Quote
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Providing end-to-end solutions from concept to deployment.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-dark-800 border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-dark-700 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Gamepad size={32}/> : idx === 1 ? <Code size={32}/> : <Zap size={32}/>}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About/CEO Teaser */}
      <section className="py-24 bg-dark-800 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 opacity-20 blur-lg" />
             <img 
               src={CEO_PROFILE.image} 
               alt={CEO_PROFILE.name} 
               className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Meet the Leader</span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Engineering Excellence with <br/> Creative Vision.
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              "We don't just write code; we craft experiences. At Codeholic, every pixel and every packet is optimized for performance."
            </p>
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">8+</div>
                <div>
                  <h4 className="text-white font-bold">Years Experience</h4>
                  <p className="text-sm text-gray-500">In Game Dev & Full Stack</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">50+</div>
                <div>
                  <h4 className="text-white font-bold">Projects Delivered</h4>
                  <p className="text-sm text-gray-500">Global Clientele</p>
                </div>
              </div>
            </div>
            <Link 
              to="/about"
              className="px-6 py-3 bg-white text-dark-900 font-bold rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Read Full Bio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
