
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Crafting <span className="gradient-text">Digital Experiences</span> That Convert
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We build beautiful, functional websites and web applications that help businesses grow. Let's turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="btn-primary flex items-center justify-center">
                See Our Work <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-agency-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-agency-secondary/10 rounded-full"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-2xl">
                <svg 
                  className="w-full h-auto" 
                  viewBox="0 0 400 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="300" rx="8" fill="#F8FAFC" />
                  <rect x="20" y="20" width="360" height="40" rx="4" fill="#E2E8F0" />
                  <rect x="40" y="32" width="120" height="16" rx="4" fill="#3B82F6" />
                  <rect x="280" y="32" width="80" height="16" rx="4" fill="#94A3B8" />
                  <rect x="20" y="80" width="180" height="180" rx="8" fill="#E2E8F0" />
                  <rect x="220" y="80" width="160" height="80" rx="8" fill="#3B82F6" />
                  <rect x="220" y="180" width="160" height="80" rx="8" fill="#8B5CF6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
