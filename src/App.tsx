import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import CertificationPage from './components/CertificationPage';
import BlogPostsPage from './components/BlogPostsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import EcommerceProjectPage from './components/EcommerceProjectPage';
import BillingSystemProjectPage from './components/BillingSystemProjectPage';
import DigitalTransformationProjectPage from './components/DigitalTransformationProjectPage';
import OpenWaterMigrationPage from './components/OpenWaterMigrationPage';
import BancoMigrationPage from './components/BancoMigrationPage';
import ICICICoreBankingPage from './components/ICICICoreBankingPage';
import ICICIEBankingPage from './components/ICICIEBankingPage';
import SocieteGeneraleUATPage from './components/SocieteGeneraleUATPage';
import CitiTradeSurveillancePage from './components/CitiTradeSurveillancePage';
import AbstractBackground from './components/AbstractBackground';
import Navbar from './components/Navbar';
import FuseConPage from './components/FuseConPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-text-primary relative bg-gradient-linear">
        <AbstractBackground />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/certification" element={<CertificationPage />} />
            <Route path="/blog" element={<BlogPostsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/ecommerce" element={<EcommerceProjectPage />} />
            <Route path="/projects/billing-system" element={<BillingSystemProjectPage />} />
            <Route path="/projects/digital-transformation" element={<DigitalTransformationProjectPage />} />
            <Route path="/projects/open-water-migration" element={<OpenWaterMigrationPage />} />
            <Route path="/projects/banco-migration" element={<BancoMigrationPage />} />
            <Route path="/projects/icici-core-banking" element={<ICICICoreBankingPage />} />
            <Route path="/projects/icici-ebanking" element={<ICICIEBankingPage />} />
            <Route path="/projects/societe-generale-uat" element={<SocieteGeneraleUATPage />} />
            <Route path="/projects/citi-trade-surveillance" element={<CitiTradeSurveillancePage />} />
            <Route path="/blog/fusecon-2024" element={<FuseConPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;