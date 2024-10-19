import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const jobs = [
  {
    company: 'YTL Power International',
    position: 'Product Manager',
    duration: 'Aug 2021 - Present',
    location: 'Kuala Lumpur, Malaysia',
    link: 'https://www.ytlpowerinternational.com'
  },
  {
    company: 'Wessex Water',
    position: 'QA Business Analyst',
    duration: 'Apr 2016 - Aug 2021',
    location: 'Kuala Lumpur, Malaysia',
    link: 'https://www.wessexwater.co.uk'
  },
  {
    company: 'Infosys',
    position: 'Senior Test Analyst',
    duration: 'Nov 2010 - Mar 2016',
    location: 'Chennai, India',
    link: 'https://www.infosys.com'
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className="card card-hover-effect p-6 h-full">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Briefcase className="w-6 h-6 mr-3 text-accent" />
        Work Experience
      </h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 hover:bg-black/40">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-text-primary mb-1">
                  {job.company}
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
                    <ExternalLink className="w-4 h-4 inline" />
                  </a>
                </h3>
                <p className="text-accent text-sm">{job.position}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-secondary mb-1">{job.duration}</p>
                <p className="text-xs text-text-secondary">{job.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;