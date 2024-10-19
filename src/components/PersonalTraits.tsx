import React from 'react';
import { Smile, Zap, Lightbulb, UserCircle, Book, Coffee, Compass, Puzzle, Star, Feather, Users, Scale, Heart } from 'lucide-react';

const PersonalTraits: React.FC = () => {
  return (
    <div className="card bg-card-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full card-hover-effect">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <span className="icon-background mr-2">
          <UserCircle className="w-6 h-6 text-accent" />
        </span>
        Personal Traits
      </h2>
      <div className="flex flex-wrap gap-4">
        {[
          { icon: Smile, text: 'Friendly' },
          { icon: Zap, text: 'Tech Nerd' },
          { icon: Lightbulb, text: 'Growth Mindset' },
          { icon: Book, text: 'Lifelong Learner' },
          { icon: Coffee, text: 'Adaptable' },
          { icon: Compass, text: 'Adventurous' },
          { icon: Puzzle, text: 'Problem Solver' },
          { icon: Star, text: 'Ambitious' },
          { icon: Feather, text: 'Consistent' },
          { icon: Users, text: 'Fearless Communicator' },
          { icon: Heart, text: 'Spiritual' },
          { icon: Scale, text: 'Emotionally Balanced' },
        ].map((trait, index) => (
          <div key={index} className="inner-card flex items-center rounded-full px-4 py-2 shadow-md hover:shadow-glow transition-all duration-300">
            <trait.icon className="w-5 h-5 mr-2 text-accent" />
            <span className="text-sm text-text-primary font-medium">{trait.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalTraits;