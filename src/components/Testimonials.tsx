import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    content: 'SmartTask cut our sprint time by 30%! Task assignment and tracking revolutionized our workflow.',
    author: 'Sarah Johnson',
    role: 'CTO at Innovatech',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
  },
  {
    content: 'The analytics tools transformed our project management, helping us identify and fix bottlenecks instantly.',
    author: 'Michael Chen',
    role: 'Product Manager at DevFlow',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5,
  },
  {
    content: 'SmartTask’s intuitive interface and automation free up my time for strategy as a startup founder.',
    author: 'Lisa Rodriguez',
    role: 'Founder of LaunchPad',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
  },
  {
    content: 'Collaboration features keep our remote team aligned and connected across every project.',
    author: 'David Park',
    role: 'Team Lead at RemoteFirst',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      }, 4000); // Reduced to 4s for faster engagement
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Animation variants for carousel
  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.4, ease: 'easeIn' } },
  };

  // Animation for desktop cards
  const cardVariants = {
    active: { scale: 1.05, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    inactive: { scale: 0.95, opacity: 0.7, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
            Loved by Thousands of Teams
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
            Hear how SmartTask empowers teams to work smarter and achieve more.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Carousel */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={cn(
                  'relative bg-white rounded-2xl p-6 border shadow-sm overflow-hidden group',
                  'transition-all duration-500 hover:shadow-xl hover:border-primary/40'
                )}
                variants={cardVariants}
                animate={index === activeIndex ? 'active' : 'inactive'}
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                role="article"
                aria-labelledby={`testimonial-${index}`}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-hover/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <div className="relative flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author}, ${testimonial.role}`}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h4 id={`testimonial-${index}`} className="font-semibold text-gray-900 text-lg">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      )}
                    />
                  ))}
                </div>
                <p className="relative text-gray-700 italic text-base leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="bg-white rounded-2xl p-6 border border-primary shadow-lg"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                role="article"
                aria-labelledby={`testimonial-mobile-${activeIndex}`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={`${testimonials[activeIndex].author}, ${testimonials[activeIndex].role}`}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h4 id={`testimonial-mobile-${activeIndex}`} className="font-semibold text-gray-900 text-lg">{testimonials[activeIndex].author}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      )}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic text-base leading-relaxed">{testimonials[activeIndex].content}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'w-3 h-3 rounded-full transition-all duration-300',
                      index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="group relative bg-primary hover:bg-primary-hover text-white text-lg px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Try SmartTask for free"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Thousands of Teams
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-hover/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
