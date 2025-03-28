
import React from 'react';
import ServiceCard from './ServiceCard';
import { Code, Layout, Database, Smartphone, Search, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with React, Next.js, and other modern frameworks to create fast, responsive, and interactive web experiences.",
      icon: Code,
      color: "bg-agency-primary"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that focuses on creating intuitive, visually appealing interfaces that enhance user experience and drive conversions.",
      icon: Layout,
      color: "bg-agency-secondary"
    },
    {
      title: "Backend Development",
      description: "Robust backend systems built with Node.js, Express, and modern databases to power your web applications and APIs.",
      icon: Database,
      color: "bg-agency-accent"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications developed with React Native that work seamlessly on both iOS and Android devices.",
      icon: Smartphone,
      color: "bg-agency-primary"
    },
    {
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engines with on-page and technical SEO to drive more organic traffic.",
      icon: Search,
      color: "bg-agency-secondary"
    },
    {
      title: "Analytics & Reporting",
      description: "Gain insights into your website's performance with custom analytics dashboards and regular reporting.",
      icon: BarChart,
      color: "bg-agency-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-agency-primary to-agency-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of services to help you build and grow your online presence.
            From design to development, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
