import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            SmartTask
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors duration-300">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors duration-300">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors duration-300">FAQ</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors duration-300">Pricing</a>
        </div>
        
        <div className="hidden md:block">
          <Button size="sm" variant="outline" className="mr-2">Log in</Button>
          <Button size="sm" className="bg-primary text-white hover:bg-primary-hover">Sign up</Button>
        </div>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 py-2 hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#testimonials" className="text-gray-700 py-2 hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-gray-700 py-2 hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <a href="#pricing" className="text-gray-700 py-2 hover:text-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="w-full">Log in</Button>
              <Button size="sm" className="w-full bg-primary text-white hover:bg-primary-hover">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
