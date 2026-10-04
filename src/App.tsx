/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CERTIFICATES, Certificate } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroTemplateSection } from './components/HeroTemplateSection';
import { CertificatesSection } from './components/CertificatesSection';
import { SchoolShowcase } from './components/SchoolShowcase';
import { CertificateModal } from './components/CertificateModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const handleOpenFirstCertificate = () => {
    // Open BEDEX certificate by default
    setSelectedCertificate(CERTIFICATES[0]);
  };

  const scrollToCertificates = () => {
    const el = document.getElementById('certificates');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSchool = () => {
    const el = document.getElementById('school');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF2] text-slate-800 antialiased">
      {/* Top Navigation */}
      <Navbar onOpenCertificates={handleOpenFirstCertificate} />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Section 1: The Template Homepage Hero (matching 10100747.jpg) */}
        <HeroTemplateSection
          onViewCertificates={scrollToCertificates}
          onExploreSchool={scrollToSchool}
          onSelectCertificate={setSelectedCertificate}
        />

        {/* Section 2: Certificates, Achievements & BEDEX Science Fair */}
        <CertificatesSection onSelectCertificate={setSelectedCertificate} />

        {/* School Feature: St. Bede's Anglo-Indian Higher Secondary School */}
        <SchoolShowcase />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Inspector for Certificates */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}
