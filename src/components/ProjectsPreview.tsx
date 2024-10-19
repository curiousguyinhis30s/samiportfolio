import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, DollarSign, Smartphone } from 'lucide-react';

const projects = [
  {
    title: "eCommerce Platform",
    company: "Yes",
    description: "Led the revamp of YTL Telecommunications' online platform, improving user experience and boosting conversion rates.",
    icon: ShoppingCart,
    link: "/projects/ecommerce"
  },
  {
    title: "Billing System",
    company: "Pelican Water Services",
    description: "Spearheaded a three-year project to build an in-house billing system, resulting in significant cost savings and improved efficiency.",
    icon: DollarSign,
    link: "/projects/billing-system"
  },
  {
    title: "Digital Transformation with Microsoft PowerApps",
    company: "Wessex Water",
    description: "Led the implementation of Microsoft PowerApps to streamline manual processes, resulting in a 60% reduction in operational costs.",
    icon: Smartphone,
    link: "/projects/digital-transformation"
  }
];

const ProjectsPreview: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Link to={project.link} key={index} className="card bg-card-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
              </div>
              <p className="text-accent font-medium mb-2">{project.company}</p>
              <p className="text-text-secondary text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/projects" className="btn hover-glow inline-block">View All Projects</Link>
      </div>
    </div>
  );
};

export default ProjectsPreview;