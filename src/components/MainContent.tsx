import React from 'react';
import ProfileCard from './ProfileCard';
import Education from './Education';
import InterestsAndPassions from './InterestsAndPassions';

const MainContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />
        <Education />
        <InterestsAndPassions />
      </div>
    </div>
  );
};

export default MainContent;