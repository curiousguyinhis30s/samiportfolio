import React from 'react';
import { MessageCircle } from 'lucide-react';

const recommendations = [
  {
    name: "John Moraes",
    position: "Project Manager - Wessex Water, UK",
    text: "Sami is joy to work with. Sami is well experienced on Testing front and can be trusted and relied upon to get the job done in time and to the quality expected. He is a great team player and I will be happy to work with him on any other projects without any hesitation. Keep up the good work Sami.",
  },
  {
    name: "Hosni Zafrullah",
    position: "Director, Winston Capital - Hong Kong",
    text: "Sami is dedicated and responsible, with a unique background driving his success. His curiosity, growth mindset and ability to learn from mistakes lead to significant achievements. Independent and innovative, he fosters positive connections and remains resilient in challenges. Sami's skills make him a valuable asset poised for significant contributions.",
  },
  {
    name: "Prashant Raizada",
    position: "Associate Director - PWC India",
    text: "Have known Sami since the beginning of his career and have seen him growing from a fresher to the leader. Sami is always full of energy, ideas and has much required leadership skills when it comes to owning and completing a task. Would certainly recommend him for project management position as he will be a value add to the team as always",
  },
  {
    name: "Syed Arslan Haider",
    position: "Senior Consultant - Deloitte Consulting, Malaysia",
    text: "I have known Sami for last 6 years. I have worked with him directly as a part of PowerApps delivery team. His attention to the details on business analysis and UI/UX and technical functionality of the application in-hand has helped us to deliver award winning applications. He has proven to be an asset for the team. Collaboration and teamwork are at the root of his workplace ethics.",
  },
  {
    name: "Nadeem Hussain",
    position: "Global HRIS Manager & Project Specialist",
    text: "I worked with Sami on many different projects from mobile app development projects to other systems. Sami was a great team member of team and always full of energy helping to foster a great team environment. He always communicated effectively and was very diligent in his work. Sami will be a great addition to any team or organisation, and would happily recommend him for any future work.",
  },
  {
    name: "Mahesh Kumar",
    position: "Agile Coach and HOD - TM R&D, Malaysia",
    text: "Sami's multitasking ability was unlike I've seen before and made an applause-worthy.\" \"I was impressed by Sami's ability to handle any situation calmly and patiently, even with the toughest clients. This natural skill of his has helped the company a lot.",
  }
];

const Recommendations: React.FC = () => {
  return (
    <div className="card card-hover-effect p-8 rounded-xl shadow-lg transition-all duration-300 bg-black/30 backdrop-blur-md">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center">
        <MessageCircle className="w-8 h-8 mr-3 text-accent" />
        Recommendations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-white/10 card-hover-effect">
            <p className="text-text-secondary mb-4 italic text-sm">
              "<span className="font-semibold text-accent">{rec.text}</span>"
            </p>
            <div>
              <p className="font-semibold text-text-primary text-base">{rec.name}</p>
              <p className="text-sm text-accent">{rec.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;