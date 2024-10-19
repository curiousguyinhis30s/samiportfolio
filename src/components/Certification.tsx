import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  { year: '2024', name: 'AI Product Manager Specilization', institution: 'Duke University' },
  { year: '2023', name: 'Emotional Intelligence: Cultivating Immensely Human Interactions', institution: 'University of Michigan' },
  { year: '2023', name: 'Digital Product Managment Specialization', institution: 'University of Virginia' },
  { year: '2023', name: 'Product-led Certification', institution: 'Pendo.io' },
  { year: '2022', name: 'Google Analytics for Beginners Certificate', institution: 'Google' },
  { year: '2021', name: 'Agile Project Management', institution: 'Google' },
  { year: '2021', name: 'Microsoft Certified: Azure Data Fundamentals', institution: 'Microsoft' },
  { year: '2020', name: 'SQL and Relational Databases', institution: 'IBM' },
  { year: '2020', name: 'User Experience(UX) Fundamentals', institution: 'Future Learn' },
  { year: '2020', name: 'Neuro-Linguistic Programming Practitioner', institution: 'The Academy of Modern Applied Phsychology' },
  { year: '2017', name: 'Lean Six Sigma White Belt', institution: '' },
  { year: '2015', name: 'Certified Tester', institution: 'ISTQB' },
];

const Certification: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Award className="w-5 h-5 mr-2" />
        Certifications
      </h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
            <h3 className="font-semibold">{cert.name}</h3>
            <p className="text-sm text-gray-600">{cert.institution}</p>
            <p className="text-xs text-gray-500">{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;