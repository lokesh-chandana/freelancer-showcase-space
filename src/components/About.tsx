
import React from 'react';
import { Code, Palette, Cpu, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-agency-primary to-agency-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate developers and designers creating exceptional digital experiences
            that help businesses grow in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="bg-agency-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Code size={32} className="text-agency-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Clean Code</h3>
            <p className="text-gray-600">
              We write maintainable, scalable code that follows best practices and industry standards.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="bg-agency-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Palette size={32} className="text-agency-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Beautiful Design</h3>
            <p className="text-gray-600">
              Our designs are not just beautiful, but also functional and optimized for conversions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="bg-agency-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Cpu size={32} className="text-agency-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Tech</h3>
            <p className="text-gray-600">
              We use the latest technologies like React, Node.js, and modern frameworks to build robust applications.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="bg-agency-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Rocket size={32} className="text-agency-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              We deliver projects on time without compromising on quality or attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
