import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, DollarSign, Target, Users, Zap, Briefcase, LineChart, Brain, Database } from 'lucide-react';
import Sidebar from './Sidebar';

const BillingSystemProjectPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="fixed top-4 right-4 z-50 bg-accent text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-300">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-8 flex items-center">
          <DollarSign className="w-10 h-10 mr-4 text-accent" />
          Billing System Project
        </h1>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent">It all started when...</h2>
            <p className="text-text-secondary">
              Pelican Water Services was facing challenges with their legacy billing system, which was both expensive and inadequate for their evolving needs. To address these issues, they embarked on a three-year project to build an in-house billing system tailored to their specific requirements.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Briefcase className="w-8 h-8 mr-3 text-accent" />
              Sami's Role
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Requirement Analysis</p>
                  <p className="text-text-secondary">Conducted thorough analysis to gather detailed business requirements from various departments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Database className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">System Design</p>
                  <p className="text-text-secondary">Collaborated with developers and IT specialists to design a customized billing system.</p>
                </div>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Project Coordination</p>
                  <p className="text-text-secondary">Managed the project timeline, ensuring milestones were met and resources were allocated effectively.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">User Training</p>
                  <p className="text-text-secondary">Facilitated user training sessions to ensure a smooth transition and high user adoption.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Stakeholder Engagement</p>
                  <p className="text-text-secondary">Maintained continuous communication with stakeholders to provide updates and incorporate feedback.</p>
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
                <DollarSign className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Cost Reduction:</strong> Significant savings by eliminating the reliance on an expensive legacy system.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Enhanced Capabilities:</strong> A billing system that catered to new and specific business needs.</p>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Operational Efficiency:</strong> Streamlined billing processes, improving accuracy and efficiency.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>User Satisfaction:</strong> Positive feedback from stakeholders and end-users, reflecting the system's effectiveness and usability.</p>
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
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Thorough Requirement Gathering:</strong> Understanding detailed requirements was crucial for system design.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Agile Approach:</strong> Adopting Agile methodologies allowed for flexibility and iterative improvements.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Stakeholder Involvement:</strong> Continuous engagement with stakeholders ensured the system met their needs and expectations.</p>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Long-term Planning:</strong> A structured, phased approach over three years was essential for managing a project of this scale.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default BillingSystemProjectPage;