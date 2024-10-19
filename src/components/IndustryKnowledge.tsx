import React from 'react';
import { Briefcase, Zap, Phone, ShoppingCart, Brain, Cpu } from 'lucide-react';

const industries = [
  { name: 'Banking', icon: Briefcase },
  { name: 'Utilities', icon: Zap },
  { name: 'Telco', icon: Phone },
  { name: 'Ecommerce', icon: ShoppingCart },
  { name: 'AI', icon: Brain },
  { name: 'Tech', icon: Cpu },
];

const IndustryKnowledge: React.FC = () => {
  return (
    <div className="card card-hover-effect p-4 h-full">
      <h2 className="text-xl font-semibold mb-3 flex items-center">
        <Brain className="w-5 h-5 mr-2 text-accent" />
        Industry Knowledge
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[calc(100%-2rem)]">
        {industries.map((industry, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm rounded-lg p-2 transition-all duration-300 hover:bg-black/40">
            <industry.icon className="w-10 h-10 text-accent mb-1" />
            <span className="text-xs text-text-primary font-medium text-center">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryKnowledge;