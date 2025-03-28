
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  link?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  category, 
  description, 
  imageSrc,
  link 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
      <div className="h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium bg-agency-primary/80 px-3 py-1 rounded-full">
                {category}
              </span>
              {link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-agency-dark p-2 rounded-full hover:bg-agency-primary hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
