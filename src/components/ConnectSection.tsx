import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ConnectSection: React.FC = () => {
  return (
    <div className="bg-card-primary text-text-primary py-12 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gradient">Let's Connect</h2>
        <div className="flex justify-center space-x-8 mb-6">
          <a href="mailto:your.email@example.com" className="text-accent hover:text-white transition-colors duration-300">
            <Mail className="w-12 h-12" />
          </a>
          <a href="https://www.linkedin.com/in/samiattaullah/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors duration-300">
            <Linkedin className="w-12 h-12" />
          </a>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-text-secondary">
          Please don't hesitate to reach out if you would like to chat about
          work or side project opportunities, share your feedback and
          input, or just connect. I am always open to new conversations
          and will do my best to respond to you
        </p>
      </div>
    </div>
  );
};

export default ConnectSection;