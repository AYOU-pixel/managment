import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (isMobileMenuOpen && event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-extrabold text-primary flex items-center space-x-1">
            <span>SmartTask</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {['Features', 'Testimonials', 'FAQ', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 text-base font-medium hover:text-primary transition-colors duration-300 group"
              aria-current={window.location.hash === `#${item.toLowerCase()}` ? 'page' : undefined}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-6 py-2 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
              onClick={() => window.location.href = '/login'}
              aria-label="Log in to SmartTask"
            >
              Log in
            </Button>
            <Button
              size="sm"
              className="group relative bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-xl font-semibold overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
              onClick={() => window.location.href = '/signup'}
              aria-label="Sign up for SmartTask"
            >
              <span className="relative z-10 flex items-center gap-2">
                Sign up
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-hover/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg py-6 px-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-labelledby="mobile-menu"
          >
            <div className="container mx-auto flex flex-col space-y-4">
              {['Features', 'Testimonials', 'FAQ', 'Pricing'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 text-lg font-medium hover:text-primary hover:bg-primary/5 py-3 px-4 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                className="pt-2 flex flex-col space-y-3"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary/10 py-3 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '/login';
                  }}
                  aria-label="Log in to SmartTask"
                >
                  Log in
                </Button>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '/signup';
                  }}
                  aria-label="Sign up for SmartTask"
                >
                  Sign up
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
