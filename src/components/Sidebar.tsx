import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Award, BookOpen, Briefcase, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  const NavButton: React.FC<NavButtonProps> = ({ to, icon: Icon, isActive, label }) => {
    return (
      <Link 
        to={to}
        className={`p-2 rounded-full transition-all duration-300 ease-in-out flex items-center ${
          isActive 
            ? 'bg-accent text-white shadow-glow'
            : 'hover:bg-white/10 text-text-primary hover:shadow-glow'
        }`}
        aria-label={label}
      >
        <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
        <span className={`ml-2 ${isActive ? 'block' : 'hidden'} sm:block`}>{label}</span>
      </Link>
    );
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card-primary/30 backdrop-blur-md rounded-full shadow-lg p-2 flex items-center space-x-4 hover:shadow-glow transition-all duration-300">
        <NavButton
          to="/"
          icon={Home}
          isActive={activeSection === '/'}
          label="Home"
        />
        <NavButton
          to="/about"
          icon={User}
          isActive={activeSection === '/about'}
          label="About"
        />
        <NavButton
          to="/certification"
          icon={Award}
          isActive={activeSection === '/certification'}
          label="Certifications"
        />
        <NavButton
          to="/blog"
          icon={BookOpen}
          isActive={activeSection === '/blog'}
          label="Blog"
        />
        <NavButton
          to="/projects"
          icon={Briefcase}
          isActive={activeSection === '/projects'}
          label="Projects"
        />
        <NavButton
          to="/contact"
          icon={Mail}
          isActive={activeSection === '/contact'}
          label="Contact"
        />
      </div>
    </div>
  );
};

interface NavButtonProps {
  to: string;
  icon: React.ElementType;
  isActive: boolean;
  label: string;
}

export default Sidebar;