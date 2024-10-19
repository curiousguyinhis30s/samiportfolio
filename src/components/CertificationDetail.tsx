import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CertificationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-accent hover:underline mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Main Page
      </Link>
      <h1 className="text-3xl font-bold mb-4">Certification Details</h1>
      <p>Certification ID: {id}</p>
      <p>Verification details will be added here.</p>
    </div>
  );
};

export default CertificationDetail;