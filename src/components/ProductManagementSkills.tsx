import React from 'react';
import { Briefcase, Target, Users, LineChart, Zap, MessageSquare } from 'lucide-react';

const skills = [
  { name: 'Strategic Planning', icon: Target },
  { name: 'User Research', icon: Users },
  { name: 'Data Analysis', icon: LineChart },
  { name: 'Agile Methodologies', icon: Zap },
  { name: 'Stakeholder Management', icon: MessageSquare },
  { name: 'Product Roadmapping', icon: Briefcase },
];

const ProductManagementSkills: React.FC = () => {
  return (
    <div className="card bg-card-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-icon" />
        Key PM Skills
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center bg-card-highlight rounded-lg p-3 hover:shadow-glow transition-all duration-300">
            <skill.icon className="w-6 h-6 text-accent mr-3" />
            <span className="text-sm text-text-primary font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagementSkills;