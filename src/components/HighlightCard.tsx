import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HighlightCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center h-full hover:scale-105 hover:shadow-glow">
      <Icon className="w-16 h-16 text-accent mb-6" />
      <h3 className="text-5xl font-bold text-text-primary mb-4">{title}</h3>
      <p className="text-2xl text-text-secondary">{subtitle}</p>
    </div>
  );
};

export default HighlightCard;