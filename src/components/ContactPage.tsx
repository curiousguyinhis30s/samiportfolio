import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-8 subtle-background">
      <h1 className="section-header mb-8">Let's Connect</h1>
      <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[400px]">
        <div>
          <p className="text-text-secondary mb-6">
            Please don't hesitate to reach out if you would like to chat about work or side project opportunities, share your feedback and input, or just connect. I am always open to new conversations and will do my best to respond to you.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-text-secondary mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full frosted-input" />
            </div>
            <div>
              <label htmlFor="email" className="block text-text-secondary mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full frosted-input" />
            </div>
            <div>
              <label htmlFor="message" className="block text-text-secondary mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full frosted-input"></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn hover-glow">Send Message</button>
            </div>
          </form>
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <a href="mailto:sami.attaulah@gmail.com" className="text-accent hover:text-white transition-colors duration-300">
            <Mail className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/samiattaullah/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors duration-300">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;