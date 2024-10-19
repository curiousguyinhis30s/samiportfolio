import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="card">
      <div className="flex items-center space-x-4">
        <img src="https://samiullah.info/uploads/images/user/1721824581.415_profile-pic.png" alt="Profile" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Samiullah</h2>
          <p className="text-text-secondary">Product Manager</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-text-secondary">
          Passionate about technology, personal growth, and human psychology. From India, living in Malaysia since 2016.
        </p>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-2xl font-bold text-primary">13+</p>
          <p className="text-text-secondary">Years Experience</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-primary">5</p>
          <p className="text-text-secondary">Companies</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;