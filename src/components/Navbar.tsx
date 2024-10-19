import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Award, BookOpen, Briefcase, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  const NavButton: React.FC<NavButtonProps> = ({ to, icon: Icon, isActive, label }) => {
    return (
      <Link 
        to={to}
        className={`p-2 sm:p-3 transition-all duration-300 ease-in-out flex items-center justify-center rounded-full ${
          isActive 
            ? 'bg-accent text-white shadow-glow'
            : 'hover:bg-white/10 text-text-primary hover:text-accent'
        }`}
        aria-label={label}
      >
        <Icon className={`w-6 h-6 ${isActive ? 'animate-pulse' : ''}`} />
        <span className={`ml-2 text-sm ${isActive ? 'inline' : 'hidden sm:inline'}`}>{label}</span>
      </Link>
    );
  };

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: User, label: "About" },
    { to: "/certification", icon: Award, label: "Certs" },
    { to: "/blog", icon: BookOpen, label: "Blog" },
    { to: "/projects", icon: Briefcase, label: "Projects" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="bg-card-primary/30 backdrop-blur-md rounded-full shadow-lg p-2 flex items-center space-x-1 sm:space-x-2 hover:shadow-glow transition-all duration-300">
        {navItems.map((item) => (
          <NavButton
            key={item.to}
            to={item.to}
            icon={item.icon}
            isActive={activeSection === item.to}
            label={item.label}
          />
        ))}
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

export default Navbar;