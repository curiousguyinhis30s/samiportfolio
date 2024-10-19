import React, { useState } from 'react';
import { Award, Brain, BarChart, Code, Database, Layout, Lightbulb, LineChart, MessageSquare, Rocket, Shield, Users, X, ExternalLink, Search } from 'lucide-react';

interface Certification {
  id: number;
  year: string;
  name: string;
  institution: string;
  icon: React.ElementType;
  image?: string;
  link?: string;
}

const certifications: Certification[] = [
  { id: 1, year: '2024', name: 'AI Product Manager Specilization', institution: 'Duke University', icon: Brain, image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TMASHSL9ZZG4/CERTIFICATE_LANDING_PAGE~TMASHSL9ZZG4.jpeg", link: "https://www.coursera.org/account/accomplishments/specialization/TMASHSL9ZZG4" },
  { id: 2, year: '2023', name: 'Emotional Intelligence: Cultivating Immensely Human Interactions', institution: 'University of Michigan', icon: Users, image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VLG7GWNR4ULW/CERTIFICATE_LANDING_PAGE~VLG7GWNR4ULW.jpeg", link: "https://www.coursera.org/account/accomplishments/verify/VLG7GWNR4ULW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
  { id: 3, year: '2023', name: 'Digital Product Management Specialization', institution: 'University of Virginia', icon: Rocket, image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Y4BLWTMMFPQE/CERTIFICATE_LANDING_PAGE~Y4BLWTMMFPQE.jpeg", link: "https://www.coursera.org/account/accomplishments/specialization/Y4BLWTMMFPQE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n" },
  { id: 4, year: '2023', name: 'Product-led Certification', institution: 'Pendo.io', icon: Lightbulb, image: "https://images.credly.com/size/340x340/images/ab346726-94b6-49d6-8110-b2463664c40d/image.png", link: "https://www.credly.com/badges/c73fa972-3648-4364-acff-b5b9c1421c4d/linked_in_profile" },
  { id: 5, year: '2022', name: 'Google Analytics for Beginners Certificate', institution: 'Google', icon: BarChart },
  { id: 6, year: '2021', name: 'Agile Project Management', institution: 'Google', icon: Rocket, image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~C936PJX52ES3/CERTIFICATE_LANDING_PAGE~C936PJX52ES3.jpeg", link: "https://www.coursera.org/account/accomplishments/verify/C936PJX52ES3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
  { id: 7, year: '2021', name: 'Microsoft Certified: Azure Data Fundamentals', institution: 'Microsoft', icon: Database, image: "https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png", link: "https://www.credly.com/badges/05a04171-ccaf-4b7e-92ac-b20ded1de301?source=linked_in_profile" },
  { id: 8, year: '2020', name: 'SQL and Relational Databases', institution: 'IBM', icon: Database, link: "https://courses.cognitiveclass.ai/certificates/ba6a3b4f303f45278795cf2b0c0e1daa" },
  { id: 9, year: '2020', name: 'User Experience(UX) Fundamentals', institution: 'Future Learn', icon: Layout, link: "https://www.futurelearn.com/certificates/8iiwib3" },
  { id: 10, year: '2020', name: 'Neuro-Linguistic Programming Practitioner', institution: 'The Academy of Modern Applied Phsychology', icon: MessageSquare },
  { id: 11, year: '2017', name: 'Lean Six Sigma White Belt', institution: 'Xchanging Malaysia', icon: LineChart },
  { id: 12, year: '2015', name: 'Certified Tester', institution: 'ISTQB', icon: Shield },
];

const CertificationPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCertifications = certifications.filter(cert =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.year.includes(searchTerm)
  );

  return (
    <div className="space-y-12 subtle-background">
      <h1 className="section-header mb-8">Certifications</h1>
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search certifications..."
          className="w-full p-3 pl-10 rounded-lg bg-black/30 backdrop-blur-md text-text-primary border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer card-hover-effect flex flex-col relative"
          >
            <div className="flex items-center mb-4">
              <cert.icon className="w-8 h-8 text-accent mr-4 flex-shrink-0" />
              <h3 className="text-lg font-semibold">{cert.name}</h3>
            </div>
            <div className="mt-auto">
              <p className="text-text-secondary mb-2 text-sm">{cert.institution}</p>
              <p className="text-base text-accent font-medium">{cert.year}</p>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 text-accent hover:text-white transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        ))}
      </div>
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-card-primary p-8 rounded-xl max-w-2xl w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedCert.name}</h2>
              <button onClick={() => setSelectedCert(null)} className="text-text-secondary hover:text-accent">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-text-secondary mb-2">{selectedCert.institution}</p>
            <p className="text-accent mb-4">{selectedCert.year}</p>
            {selectedCert.image ? (
              <div className="relative">
                <img src={selectedCert.image} alt={selectedCert.name} className="w-full rounded-lg mb-4" style={{ maxWidth: '80%', margin: '0 auto' }} />
                {selectedCert.link && (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-accent text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            ) : (
              selectedCert.link && (
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center justify-center"
                  >
                    <ExternalLink className="w-6 h-6 mr-2" />
                    View Certificate
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationPage;