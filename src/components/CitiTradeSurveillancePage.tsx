import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Shield, Target, Users, Zap, Briefcase, Brain, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import Sidebar from './Sidebar';

const CitiTradeSurveillancePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="absolute top-4 right-4 text-text-secondary hover:text-accent">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <Shield className="w-10 h-10 mr-4 text-accent" />
          Trade Surveillance
        </h1>

        {/* ... (keep the Overview section unchanged) */}

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
                  <p>Validated AML systems and conducted dashboard testing.</p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Defect Management</p>
                  <p>Identified and tracked defects.</p>
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
                <Shield className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Enhanced AML Systems:</strong> Improved detection of suspicious activities.</p>
              </li>
              <li className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Accurate Dashboards:</strong> Ensured reliability of Microstrategy dashboards.</p>
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
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Using automation tools enhanced testing efficiency.</strong></p>
              </li>
              <li className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Rigorous testing ensured accurate and reliable dashboards.</strong></p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default CitiTradeSurveillancePage;