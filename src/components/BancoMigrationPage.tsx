import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Building, Target, Users, Zap, Briefcase, LineChart, Brain } from 'lucide-react';
import Sidebar from './Sidebar';

const BancoMigrationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="absolute top-4 right-4 text-text-secondary hover:text-accent">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <Building className="w-10 h-10 mr-4 text-accent" />
          Banco Migration
        </h1>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Overview</h2>
            <p className="text-text-secondary">
              Bank of Colombia faced operational inefficiencies with their legacy banking system, entirely in Spanish and running on the AS400 mainframe. The reliance on translators for system updates proved ineffective, leading to delays. The bank decided to migrate to Finacle by Infosys.
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
                  <p className="font-semibold">Tester</p>
                  <p>Involved in thorough testing of the new Finacle system.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Language Adaptation</p>
                  <p>Took Spanish lessons for effective understanding.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Defect Management</p>
                  <p>Identified and reported over 500 defects.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <LineChart className="w-8 h-8 mr-3 text-accent" />
              Results
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Seamless Migration:</strong> Successfully transitioned to the Finacle system with minimal disruptions.</p>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Improved Efficiency:</strong> Enhanced banking operations and service offerings.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Positive Feedback:</strong> Stakeholders appreciated the thorough testing.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Brain className="w-8 h-8 mr-3 text-accent" />
              Key Takeaways
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Language skills were crucial for effective testing.</strong></p>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Close collaboration with developers ensured timely resolution.</strong></p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default BancoMigrationPage;