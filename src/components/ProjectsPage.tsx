import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, DollarSign, Smartphone, Database, Building, LineChart, Shield, Search, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "eCommerce Platform",
    company: "Yes",
    description: "Led the revamp of YTL Telecommunications' online platform, improving user experience and boosting conversion rates.",
    icon: ShoppingCart,
    technologies: ["WordPress", "Laravel", "HTML5", "CSS3", "JavaScript"],
    link: "/projects/ecommerce"
  },
  {
    title: "Billing System",
    company: "Pelican Water Services",
    description: "Spearheaded a three-year project to build an in-house billing system, resulting in significant cost savings and improved efficiency.",
    icon: DollarSign,
    technologies: ["Custom Software", "Database Design", "Agile Methodologies"],
    link: "/projects/billing-system"
  },
  {
    title: "Digital Transformation with Microsoft PowerApps",
    company: "Wessex Water",
    description: "Led the implementation of Microsoft PowerApps to streamline manual processes, resulting in a 60% reduction in operational costs.",
    icon: Smartphone,
    technologies: ["Microsoft PowerApps", "Process Automation", "User Training"],
    link: "/projects/digital-transformation"
  },
  {
    title: "Data Migration to Open Water Compliance",
    company: "Wessex Water",
    description: "Led data migration for UK Open Water compliance, achieving 99% data integrity.",
    icon: Database,
    technologies: ["Data Mapping", "Agile", "Scrum"],
    link: "/projects/open-water-migration"
  },
  {
    title: "Banco Migration",
    company: "Bank of Colombia",
    description: "Involved in migrating legacy banking system to Finacle, improving efficiency and operations.",
    icon: Building,
    technologies: ["Finacle", "AS400", "Banking Systems"],
    link: "/projects/banco-migration"
  },
  {
    title: "Core Banking Testing for ICICI Bank",
    company: "ICICI Bank",
    description: "Conducted thorough testing of core banking functionalities, focusing on interest calculation engines.",
    icon: LineChart,
    technologies: ["Core Banking", "Functional Testing", "Non-Functional Testing"],
    link: "/projects/icici-core-banking"
  },
  {
    title: "Retail E-Banking for ICICI Bank",
    company: "ICICI Bank",
    description: "Enhanced e-banking platform to improve user experience and service efficiency.",
    icon: Smartphone,
    technologies: ["E-Banking", "User Experience", "UAT"],
    link: "/projects/icici-ebanking"
  },
  {
    title: "UAT for Societe Generale Bank",
    company: "Societe Generale Bank",
    description: "Conducted UAT for corporate liquidity functionalities, ensuring robustness and efficiency.",
    icon: Building,
    technologies: ["UAT", "Corporate Banking", "Liquidity Management"],
    link: "/projects/societe-generale-uat"
  },
  {
    title: "Trade Surveillance for Citi Bank",
    company: "Citi Bank",
    description: "Enhanced trade surveillance and anti-money laundering (AML) systems.",
    icon: Shield,
    technologies: ["AML", "Trade Surveillance", "Dashboard Testing"],
    link: "/projects/citi-trade-surveillance"
  }
];

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8 subtle-background">
      <h1 className="section-header mb-4">Projects</h1>
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full p-3 pl-10 rounded-lg bg-black/30 backdrop-blur-md text-text-primary border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Link to={project.link} key={index} className="card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 card-hover-effect bg-black/30 backdrop-blur-md p-6 relative">
            <div className="flex items-start mb-4">
              <project.icon className="w-8 h-8 text-accent mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-text-primary">{project.title}</h2>
                <p className="text-accent font-medium">{project.company}</p>
              </div>
            </div>
            <p className="text-text-secondary mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-card-highlight text-text-secondary text-sm px-3 py-1 rounded-full transition-all duration-300 hover:shadow-glow hover:bg-accent hover:text-white">
                  {tech}
                </span>
              ))}
            </div>
            <ExternalLink className="absolute bottom-4 right-4 w-5 h-5 text-accent" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;