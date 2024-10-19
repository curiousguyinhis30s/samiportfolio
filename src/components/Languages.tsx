import React from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Tamil', level: 'Fluent' },
  { name: 'Urdu', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
  { name: 'Bahasa Malay', level: 'Beginner' },
];

const Languages: React.FC = () => {
  return (
    <div className="card bg-card-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full card-hover-effect">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <span className="icon-background mr-2">
          <Globe className="w-6 h-6 text-accent" />
        </span>
        Languages I Speak
      </h2>
      <div className="text-5xl font-bold text-accent mb-4">4.2</div>
      <ul className="space-y-2">
        {languages.map((lang, index) => (
          <li key={index} className="flex justify-between items-center hover:bg-black/20 transition-all duration-300 p-2 rounded-lg">
            <span className="text-text-primary">{lang.name}</span>
            <span className="text-text-secondary text-sm">{lang.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;