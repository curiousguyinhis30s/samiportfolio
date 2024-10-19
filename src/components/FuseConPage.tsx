import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Star, Users, Zap, Briefcase, Brain, ExternalLink } from 'lucide-react';
import Sidebar from './Sidebar';

const FuseConPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-text-primary relative bg-gradient-linear">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button onClick={() => navigate(-1)} className="fixed top-4 right-4 z-50 bg-accent text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-300">
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="text-4xl font-bold mb-8 flex items-center">
          <Star className="w-10 h-10 mr-4 text-accent" />
          Reflecting on FuseCon 2024
        </h1>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <p className="text-text-secondary mb-4">
              I met Johnny Woo by chance at an Agile Malaysia event, and I didn't know at the time that he was one of the event organisers for FuseCon. He introduced me to the product community, and that connection opened so many doors for me. Over time, I became more involved, and this year, I had the opportunity to attend FuseCon 2024.
            </p>
            <p className="text-text-secondary mb-4">
              Seeing the event grow from 300 to 800 participants was inspiring. I decided to bring my team along to learn from the sessions, and it was incredible to watch them experience their own ah-ha moments. The enthusiasm and energy were infectious, and it was clear that everyone was eager to grow and learn.
            </p>
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
                <Star className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Future of Product Management in SEA</p>
                  <p>Navigating an AI-driven future in Southeast Asia, reshaping industries, and redefining roles. Emphasised adopting flexible mindsets, fostering innovation, and addressing regional challenges.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Balancing Leadership</p>
                  <p>Insights on managing the yin and yang of leadership and finding harmony between different leadership styles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Recognising Biases</p>
                  <p>Understanding the biases inherent in our systems and learning how to build more inclusive and unbiased products.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Creating Compelling Value</p>
                  <p>How to ensure product success by delivering value that truly resonates with users.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="card bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover-effect">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Final Thoughts</h2>
            <p className="text-text-secondary mb-4">
              The energy throughout the event was fantastic, and it was a true privilege to be part of it. I am incredibly grateful to Johnny for introducing me to this community, and to the entire FuseCon team for making this experience possible. Thank you for all your hard work and dedication!
            </p>
            <a 
              href="https://www.fusecon.asia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-accent hover:underline"
            >
              More about FuseCon
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </section>
      </div>
      <Sidebar />
    </div>
  );
};

export default FuseConPage;