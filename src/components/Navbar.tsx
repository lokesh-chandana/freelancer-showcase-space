
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">DevCraft</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-agency-dark hover:text-agency-primary font-medium transition-colors">About</a>
          <a href="#services" className="text-agency-dark hover:text-agency-primary font-medium transition-colors">Services</a>
          <a href="#portfolio" className="text-agency-dark hover:text-agency-primary font-medium transition-colors">Portfolio</a>
          <a href="#contact" className="btn-primary">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-agency-dark" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-agency-dark hover:text-agency-primary font-medium py-2 transition-colors" onClick={toggleMobileMenu}>About</a>
            <a href="#services" className="text-agency-dark hover:text-agency-primary font-medium py-2 transition-colors" onClick={toggleMobileMenu}>Services</a>
            <a href="#portfolio" className="text-agency-dark hover:text-agency-primary font-medium py-2 transition-colors" onClick={toggleMobileMenu}>Portfolio</a>
            <a href="#contact" className="btn-primary text-center" onClick={toggleMobileMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
