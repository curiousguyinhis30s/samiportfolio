import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ExternalLink, Code, Cloud, BarChart, Figma, Shield, ShoppingBag, Target, Users, Zap, Briefcase, LineChart, Brain, Smartphone } from 'lucide-react';
import Sidebar from './Sidebar';

const DigitalTransformationProjectPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="absolute top-4 right-4 text-text-secondary hover:text-accent">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <Smartphone className="w-10 h-10 mr-4 text-accent" />
          Digital Transformation with Microsoft PowerApps
        </h1>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent">It all started when...</h2>
            <p className="text-text-secondary">
              Wessex Water was struggling with the inefficiencies of manual paperwork across multiple streams, such as Health and Safety apps and other internal applications. Recognising the urgent need for a digital transformation to streamline these processes and improve accuracy, the company decided to implement Microsoft PowerApp to automate and integrate these functions.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Briefcase className="w-8 h-8 mr-3 text-accent" />
              Sami's Role
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center text-center">
                <Target className="w-10 h-10 text-accent mb-2" />
                <p className="text-sm">Requirement Analysis</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="w-10 h-10 text-accent mb-2" />
                <p className="text-sm">Process Improvement</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Code className="w-10 h-10 text-accent mb-2" />
                <p className="text-sm">PowerApp Development</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-accent mb-2" />
                <p className="text-sm">User Training</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LineChart className="w-10 h-10 text-accent mb-2" />
                <p className="text-sm">Stakeholder Communication</p>
              </div>
            </div>
            <p className="mt-6 text-text-secondary">
              I played a crucial role in gathering and analyzing business requirements from various departments, identifying areas for improvement, and ensuring the new system met these needs effectively. I collaborated with developers and IT specialists to design and develop customized PowerApps, facilitated user training sessions, and maintained regular communication with stakeholders to continuously refine the solution.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <BarChart className="w-8 h-8 mr-3 text-accent" />
              Results
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <BarChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Cost Reduction:</strong> A dramatic 60% reduction in operational costs.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>High User Adoption:</strong> Due to intuitive design and user-friendly interface.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Seamless Integration:</strong> With existing systems, ensuring minimal disruption.</p>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Positive Feedback:</strong> Overwhelmingly positive feedback from stakeholders, highlighting the success of the project in transforming workflows and setting a new standard for digital efficiency within the organization.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Brain className="w-8 h-8 mr-3 text-accent" />
              Key Takeaways and Learnings
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>User Involvement:</strong> Ensuring end-users are part of the process from the beginning leads to higher adoption rates.</p>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Continuous Communication:</strong> Regular updates and feedback loops with stakeholders are crucial for the project's success.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Customization and Flexibility:</strong> Tailoring solutions to meet specific departmental needs enhances overall efficiency.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default DigitalTransformationProjectPage;