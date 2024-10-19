import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LineChart, Target, Users, Zap, Briefcase, Brain, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import Sidebar from './Sidebar';

const ICICICoreBankingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="absolute top-4 right-4 text-text-secondary hover:text-accent">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <LineChart className="w-10 h-10 mr-4 text-accent" />
          Core Banking Testing
        </h1>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Overview</h2>
            <p className="text-text-secondary">
              ICICI Bank aimed to enhance core banking functionalities by upgrading their systems, focusing on interest calculation engines to handle increasing transaction volumes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Briefcase className="w-8 h-8 mr-3 text-accent" />
              Sami's Role
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Deployment Team Member</p>
                  <p>Conducted functionality and non-functional testing.</p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Defect Management</p>
                  <p>Identified and tracked over 300 defects.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-accent" />
              Results
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Accurate Calculations:</strong> Ensured the interest calculation engine worked flawlessly.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Smooth Deployment:</strong> Facilitated a seamless deployment process.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Stakeholder Satisfaction:</strong> Positive feedback for thorough testing.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-accent" />
              Key Takeaways
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Detail-oriented testing ensured accuracy.</strong></p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Effective collaboration with bank staff was essential.</strong></p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default ICICICoreBankingPage;