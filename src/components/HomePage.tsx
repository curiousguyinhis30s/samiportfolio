import React from 'react';
import Summary from './Summary';
import WorkExperience from './WorkExperience';
import IndustryKnowledge from './IndustryKnowledge';
import ToolsUsed from './ToolsUsed';
import Recommendations from './Recommendations';
import SkillsExpertise from './SkillsExpertise';
import ConnectSection from './ConnectSection';
import BrandsWorkedWith from './BrandsWorkedWith';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-6 subtle-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-3">
          <Summary />
        </div>
        <div className="md:col-span-2">
          <WorkExperience />
        </div>
        <div>
          <IndustryKnowledge />
        </div>
      </div>
      <SkillsExpertise />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BrandsWorkedWith />
        <ToolsUsed />
      </div>
      <Recommendations />
      <ConnectSection />
    </div>
  );
};

export default HomePage;