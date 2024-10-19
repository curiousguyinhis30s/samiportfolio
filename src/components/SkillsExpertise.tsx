import React from 'react';
import { Briefcase, Cpu, Users, TrendingUp } from 'lucide-react';

const skillGroups = [
  {
    title: 'Leadership',
    skills: ['Product Management', 'Project Management', 'Stakeholder Management', 'Mentorship', 'Consulting'],
    icon: Briefcase,
  },
  {
    title: 'Technical',
    skills: ['Data Analysis', 'AI', 'Prompt Engineering', 'UI/UX', 'Quality Assurance'],
    icon: Cpu,
  },
  {
    title: 'Soft Skills',
    skills: ['Negotiation', 'Presentation', 'Strategy', 'Execution', 'Business Analysis', 'Agile'],
    icon: Users,
  },
  {
    title: 'Business',
    skills: ['Business Development', 'Market Research', 'Strategic Planning', 'Client Relations', 'Growth Strategies'],
    icon: TrendingUp,
  },
];

const SkillsExpertise: React.FC = () => {
  return (
    <div className="card card-hover-effect p-6 rounded-xl shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Cpu className="w-6 h-6 mr-2 text-accent" />
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm p-4 rounded-xl hover:shadow-glow transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <group.icon className="w-5 h-5 mr-2 text-accent" />
              {group.title}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span className="text-text-secondary">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsExpertise;