import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="card bg-card-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full card-hover-effect">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <span className="icon-background mr-2">
          <GraduationCap className="w-6 h-6 text-accent" />
        </span>
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="inner-card p-6 rounded-lg bg-black/30 backdrop-blur-md hover:shadow-glow transition-all duration-300 transform hover:scale-102">
          <h3 className="font-semibold text-xl text-text-primary mb-2">MBA</h3>
          <p className="text-text-secondary">Systems Management</p>
          <p className="text-text-secondary">University of Madras</p>
          <p className="text-sm text-accent mt-2">2012-2024</p>
        </div>
        <div className="inner-card p-6 rounded-lg bg-black/30 backdrop-blur-md hover:shadow-glow transition-all duration-300 transform hover:scale-102">
          <h3 className="font-semibold text-xl text-text-primary mb-2">BCA</h3>
          <p className="text-text-secondary">University of Madras</p>
          <p className="text-sm text-accent mt-2">2007-2010</p>
        </div>
      </div>
    </div>
  );
};

export default Education;