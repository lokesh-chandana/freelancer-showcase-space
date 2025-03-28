
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${color}`}>
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
