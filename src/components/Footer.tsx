import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary mb-4 md:mb-0">© 2024 Samiullah. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/samiattaullah/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-text-secondary">Let's connect and create something amazing together!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;