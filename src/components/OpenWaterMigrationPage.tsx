import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Database, Target, Users, Zap, Briefcase, LineChart, Brain } from 'lucide-react';
import Sidebar from './Sidebar';

const OpenWaterMigrationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="absolute top-4 right-4 text-text-secondary hover:text-accent">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <Database className="w-10 h-10 mr-4 text-accent" />
          Data Migration to Open Water Compliance
        </h1>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Overview</h2>
            <p className="text-text-secondary">
              With the introduction of UK Open Water compliance, Wessex Water needed to transition to a new system to meet regulatory requirements. This transition aimed to enhance transparency and efficiency in the retail water market by moving to the Open Water system.
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
                <Database className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Business Analyst: Data Migration</p>
                  <p>Led Data Migration, orchestrating the migration from legacy systems, achieving 99% data integrity through meticulous data mapping strategies.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Cross-Functional Team Leadership</p>
                  <p>Guided teams using Agile and Scrum frameworks to identify critical data needs and optimize migration processes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Stakeholder Collaboration</p>
                  <p>Worked closely with stakeholders to understand requirements and ensure seamless transition.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Target className="w-8 h-8 mr-3 text-accent" />
              Results
            </h2>
            <ul className="space-y-4 text-text-secondary">
              <li className="flex items-start">
                <Database className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>High Data Integrity:</strong> Achieved 99% data integrity, ensuring reliable and accurate data transfer.</p>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Enhanced Data Quality:</strong> Optimized migration processes, leading to improved data quality.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Effective Solutions:</strong> Delivered robust solutions that met compliance standards and enhanced operational efficiency.</p>
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
                <Database className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Importance of Accurate Data Mapping:</strong> Meticulous data mapping was crucial for achieving high data integrity.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Agile Frameworks for Efficient Project Management:</strong> Utilizing Agile and Scrum methodologies significantly improved project efficiency.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Continuous Stakeholder Collaboration:</strong> Regular engagement with stakeholders was essential for project success.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default OpenWaterMigrationPage;