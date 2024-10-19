import React from 'react';
import { Clock, Building, Briefcase, Share2, Mail, Linkedin } from 'lucide-react';

const Summary: React.FC = () => {
  const shareWebsite = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Sami\'s Portfolio',
        url: url
      }).catch(console.error);
    } else {
      const dummy = document.createElement('input');
      document.body.appendChild(dummy);
      dummy.value = url;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      alert('Website URL copied to clipboard!');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Photo Card */}
      <div className="card card-hover-effect rounded-2xl h-full">
        <div className="relative w-full h-full">
          <img 
            src="https://i.postimg.cc/vHR3J4zw/IMG-8260.jpg" 
            alt="Sami" 
            className="w-full h-full object-cover object-center"
          />
          <button 
            onClick={shareWebsite}
            className="absolute top-4 right-4 bg-accent text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Combined Introduction and Stats Card */}
      <div className="card card-hover-effect p-6 flex flex-col justify-between md:col-span-2 h-full">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient">Hi, I'm Sami</h1>
          <p className="text-xl sm:text-2xl text-text-secondary">Data-Driven, Human-Centric Problem Solver</p>
          <p className="text-base sm:text-lg text-text-secondary">
            Passionate about technology, understanding human psychology, figuring out challenges, and continuous learning.
          </p>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <StatItem icon={Clock} value="13+" label="Years Experience" />
            <StatItem icon={Building} value="6" label="Industries" />
            <StatItem icon={Briefcase} value="9+" label="Brands" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:sami.attaulah@gmail.com" 
              className="btn flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Email Me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/samiattaullah/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<{ icon: React.ElementType; value: string; label: string }> = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-1" />
    <span className="text-lg sm:text-xl font-bold text-accent">{value}</span>
    <span className="text-xs sm:text-sm text-text-secondary">{label}</span>
  </div>
);

export default Summary;