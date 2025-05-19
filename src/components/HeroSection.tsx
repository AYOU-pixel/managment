import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white to-primary/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight"
              variants={itemVariants}
            >
              Boost Productivity with <span className="text-primary">SmartTask</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Simplify task management, enhance team collaboration, and track progress effortlessly. Transform how your team works with SmartTask.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="group relative bg-primary hover:bg-primary-hover text-white text-lg px-10 py-6 rounded-xl font-semibold overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
                onClick={scrollToSignup}
                aria-label="Start free trial with SmartTask"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Try SmartTask Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-hover/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-10 py-6 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
                onClick={() => window.open('/demo-video', '_blank')}
                aria-label="Watch SmartTask demo video"
              >
                See It in Action
              </Button>
            </motion.div>
            <motion.div
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {[
                  'https://randomuser.me/api/portraits/men/32.jpg',
                  'https://randomuser.me/api/portraits/women/44.jpg',
                  'https://randomuser.me/api/portraits/men/86.jpg',
                  'https://randomuser.me/api/portraits/women/68.jpg',
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Team member avatar ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    loading="lazy"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Trusted by <span className="font-bold text-primary">15,000+</span> teams
              </p>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div className="lg:w-1/2 mt-12 lg:mt-0 relative" variants={itemVariants}>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="pt-12 p-6">
                <img
                  src="https://remoters.net/wp-content/uploads/2022/01/smart-task.png"
                  alt="SmartTask Dashboard showing task management interface"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/15 rounded-2xl rotate-12 -z-10 animate-pulse-slow"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/15 rounded-2xl -rotate-12 -z-10 animate-pulse-slow"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
