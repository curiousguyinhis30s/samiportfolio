import React, { useMemo, useEffect, useState } from 'react';
import { Wrench } from 'lucide-react';

const tools = [
  'Microsoft Teams', 'Slack', 'Jira', 'Trello', 'GitHub', 'Notion', 'Figma', 'VS Code', 
  'WordPress', 'Google Analytics', 'Looker Studio', 'SQL', 'CleverTap', 'ChatGPT', 
  'Azure', 'PostMan', 'Notebook LLM', 'Audacity', 'Final Cut Pro/Cap Cut'
];

const ToolsUsed: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * tools.length));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-glow">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Wrench className="w-6 h-6 mr-2 text-accent" />
        Tools I've Used
      </h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span 
            key={index} 
            className={`bg-black/30 backdrop-blur-sm text-text-primary text-sm px-3 py-1 rounded-full transition-all duration-300 hover:shadow-glow hover:bg-accent hover:text-white cursor-default border border-white/10 ${
              index === activeIndex ? 'animate-pulse shadow-glow bg-accent text-white' : ''
            }`}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToolsUsed;