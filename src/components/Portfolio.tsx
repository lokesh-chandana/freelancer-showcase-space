
import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform built with React and Node.js.",
      imageSrc: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Real Estate Website",
      category: "UI/UX Design",
      description: "Modern design for a real estate agency with property listings and search.",
      imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Health & Fitness App",
      category: "Mobile Development",
      description: "Cross-platform mobile app for tracking workouts and nutrition.",
      imageSrc: "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Business Analytics Dashboard",
      category: "Web Development",
      description: "Interactive dashboard for visualizing business metrics and KPIs.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Educational Platform",
      category: "UI/UX Design",
      description: "Learning management system with course creation and student tracking.",
      imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Restaurant Booking System",
      category: "Web Development",
      description: "Online reservation system for restaurants with table management.",
      imageSrc: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  const filters = ["all", "Web Development", "UI/UX Design", "Mobile Development"];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-agency-primary to-agency-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Check out some of our recent projects. We're proud of the work we've done for our clients.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? "bg-agency-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "all" ? "All" : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              category={item.category}
              description={item.description}
              imageSrc={item.imageSrc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
