
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agency-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">DevCraft</h3>
            <p className="text-gray-300 mb-6">
              Crafting beautiful, functional websites and web applications that help businesses grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Backend Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">123 Web Dev Street, San Francisco, CA 94107</li>
              <li className="text-gray-300">+1 (123) 456-7890</li>
              <li className="text-gray-300">hello@devcraft.agency</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            &copy; {currentYear} DevCraft Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
