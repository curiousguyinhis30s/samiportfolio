import React from 'react';
import { Heart, Dumbbell, Music, Leaf, Brain, Plane, Users, Book, Coffee, Cpu } from 'lucide-react';

const interests = [
  { icon: Heart, text: 'Yoga' },
  { icon: Dumbbell, text: 'Calisthenics' },
  { icon: Music, text: 'Dancing' },
  { icon: Leaf, text: 'Plants' },
  { icon: Brain, text: 'Psychology' },
  { icon: Plane, text: 'Travel' },
  { icon: Users, text: 'People' },
  { icon: Book, text: 'Learning' },
  { icon: Coffee, text: 'Cooking' },
  { icon: Cpu, text: 'Prompt Engineering' },
];

const InterestsAndPassions: React.FC = () => {
  return (
    <div className="card bg-card-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full card-hover-effect">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <span className="icon-background mr-2">
          <Heart className="w-6 h-6 text-accent" />
        </span>
        Interests & Passions
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {interests.map((item, index) => (
          <div key={index} className="inner-card flex flex-col items-center text-center p-3 rounded-xl hover:shadow-glow transition-all duration-300">
            <item.icon className="w-8 h-8 text-accent mb-2" />
            <span className="text-sm font-medium text-text-primary">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsAndPassions;