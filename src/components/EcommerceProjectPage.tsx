import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ExternalLink, Code, Cloud, BarChart, Figma, Shield, ShoppingBag, ShoppingCart, Target, Users, Zap, Briefcase, LineChart, Brain, Database } from 'lucide-react';
import Sidebar from './Sidebar';

const EcommerceProjectPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="fixed top-4 right-4 z-50 bg-accent text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-300">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-8 flex items-center">
          <ShoppingCart className="w-10 h-10 mr-4 text-accent" />
          eCommerce Platform
        </h1>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent">It all started when...</h2>
            <p className="text-text-secondary">
              YTL Telecommunications (Yes.my) faced challenges with their online platform, where customers encountered difficulties in navigating and completing their purchasing processes, leading to a drop in sales. These issues resulted in a subpar user experience, impacting overall satisfaction and conversion rates. Recognising the need for improvement, an initiative was launched to revamp the digital experience, focusing on creating a more seamless, intuitive, and efficient shopping journey. This effort aimed to enhance customer satisfaction, drive higher engagement, and ultimately support the company's growth by aligning the platform with user needs and expectations.
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
                  <p className="font-semibold">Created Product Vision, Mission, and Strategy</p>
                  <p className="text-text-secondary">Defined the direction and goals for the product, aligning it with company objectives</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Guided the Team in Agile Methodologies</p>
                  <p className="text-text-secondary">Implemented agile processes to enhance team efficiency and adaptability</p>
                </div>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Developed Product Roadmap</p>
                  <p className="text-text-secondary">Outlined a clear plan for product development and prioritized features</p>
                </div>
              </li>
              <li className="flex items-start">
                <ShoppingBag className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Revamped the Entire eCommerce Journey</p>
                  <p className="text-text-secondary">Redesigned the customer experience to improve navigation and satisfaction</p>
                </div>
              </li>
              <li className="flex items-start">
                <Code className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Created a Custom Content Management System (CMS)</p>
                  <p className="text-text-secondary">Developed a tailored CMS to streamline content updates and management</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Collaborated with Cross-Functional Teams</p>
                  <p className="text-text-secondary">Coordinated efforts between Brand, Marketing, IT, and other teams to solve user issues</p>
                </div>
              </li>
              <li className="flex items-start">
                <BarChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Setup Analytics</p>
                  <p className="text-text-secondary">Implemented analytics to track performance and gather insights for continuous improvement</p>
                </div>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Managed Vendor Relationships</p>
                  <p className="text-text-secondary">Coordinated with vendors like Apple, Samsung, and iPay88 to integrate products and services seamlessly</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent flex items-center">
              <Zap className="w-8 h-8 mr-3 text-accent" />
              Technologies and Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Code className="w-6 h-6 text-accent mr-2" />
                <span>WordPress, Laravel</span>
              </div>
              <div className="flex items-center">
                <Code className="w-6 h-6 text-accent mr-2" />
                <span>HTML5, CSS3, JavaScript</span>
              </div>
              <div className="flex items-center">
                <Database className="w-6 h-6 text-accent mr-2" />
                <span>MySQL</span>
              </div>
              <div className="flex items-center">
                <Cloud className="w-6 h-6 text-accent mr-2" />
                <span>Azure Cloud</span>
              </div>
              <div className="flex items-center">
                <Code className="w-6 h-6 text-accent mr-2" />
                <span>GitHub</span>
              </div>
              <div className="flex items-center">
                <BarChart className="w-6 h-6 text-accent mr-2" />
                <span>Google Analytics, CleverTap</span>
              </div>
              <div className="flex items-center">
                <LineChart className="w-6 h-6 text-accent mr-2" />
                <span>Oh Dear, Looker Studio</span>
              </div>
              <div className="flex items-center">
                <Figma className="w-6 h-6 text-accent mr-2" />
                <span>Figma</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-accent mr-2" />
                <span>Microsoft Teams, Jira, Trello</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-accent mr-2" />
                <span>PCI-DSS Scans</span>
              </div>
            </div>
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
                <Target className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Strategic Clarity:</strong> The clear vision and strategy led to a cohesive product direction and better team alignment, contributing to a 40% increase in project delivery speed.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Increased Efficiency:</strong> Agile processes reduced time-to-market by 35%, improving responsiveness to changes.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Enhanced User Experience:</strong> The revamped eCommerce journey resulted in a 35% increase in user engagement and a 25% improvement in customer satisfaction.</p>
              </li>
              <li className="flex items-start">
                <LineChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Operational Efficiency:</strong> The custom CMS reduced content update times by 50%, streamlining operations.</p>
              </li>
              <li className="flex items-start">
                <BarChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Improved Performance Tracking:</strong> Google Analytics setup provided actionable insights, leading to a 20% boost in conversion rates through data-driven decisions.</p>
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
                <p><strong>Importance of Clear Vision and Strategy:</strong> A well-defined product vision and strategy are crucial for aligning teams and driving successful outcomes.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Agile Methodologies Drive Efficiency:</strong> Implementing agile practices significantly improved team collaboration and reduced time-to-market, proving the value of adaptability in project management.</p>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>User-Centric Design is Essential:</strong> Revamping the eCommerce journey with a focus on user needs directly boosted engagement and satisfaction, highlighting the importance of prioritizing user experience.</p>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Cross-Functional Collaboration is Key:</strong> Coordinating between diverse teams ensures that all aspects of the product are aligned, resulting in a cohesive and effective solution.</p>
              </li>
              <li className="flex items-start">
                <BarChart className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <p><strong>Data-Driven Decision Making:</strong> Setting up robust analytics was vital for tracking performance and making informed decisions, demonstrating the power of leveraging data insights.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default EcommerceProjectPage;