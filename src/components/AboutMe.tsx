import React from 'react';
import { UserCircle, GraduationCap, Heart, Globe } from 'lucide-react';
import Education from './Education';
import PersonalTraits from './PersonalTraits';
import InterestsAndPassions from './InterestsAndPassions';
import Languages from './Languages';
import JourneyPictures from './JourneyPictures';

const AboutMe: React.FC = () => {
  return (
    <div className="space-y-6 subtle-background">
      <h1 className="section-header mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-7 card p-6 rounded-xl shadow-lg transition-all duration-300 bg-black/30 backdrop-blur-md card-hover-effect">
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            <span className="icon-background mr-2">
              <UserCircle className="w-6 h-6 text-accent" />
            </span>
            My Journey
          </h2>
          <p className="text-text-secondary">
            Born and raised in India, I embarked on a journey of personal and professional growth that led me to Malaysia in 2016. Driven by a desire for better opportunities and a passion for technology, I've consistently pushed myself to learn and adapt. My disciplined approach and unwavering consistency have been key to navigating the challenges of a new environment and excelling in my career. This journey has not only shaped my professional skills but also instilled in me a deep appreciation for diverse perspectives and a relentless pursuit of excellence.
          </p>
          <p className="text-text-secondary mt-4">
            Currently, I'm in the process of finding my life's purpose and trying out new things to figure it out. While I may not have all the answers, I possess the grit to fail, learn from my experiences, and keep moving forward. This journey of self-discovery and growth is an integral part of who I am and continues to shape my personal and professional development.
          </p>
        </div>
        <div className="md:col-span-3">
          <JourneyPictures />
        </div>
        <div className="md:col-span-10">
          <Education />
        </div>
        <div className="md:col-span-4">
          <InterestsAndPassions />
        </div>
        <div className="md:col-span-3">
          <PersonalTraits />
        </div>
        <div className="md:col-span-3">
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;