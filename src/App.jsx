import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialtiesBento from './components/SpecialtiesBento';
import IntakeDiagnostic from './components/IntakeDiagnostic';
import ProcessVisualLaw from './components/ProcessVisualLaw';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import DigitalCardModal from './components/DigitalCardModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [cardModalOpen, setCardModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3B3732] flex flex-col font-sans selection:bg-[#FDBA74] selection:text-[#3B3732]">
      {/* Navigation Header */}
      <Header onOpenCardModal={() => setCardModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCardModal={() => setCardModalOpen(true)} />

        {/* Specialties Bento Grid */}
        <SpecialtiesBento />

        {/* Interactive Intake & Eligibility Simulator */}
        <IntakeDiagnostic />

        {/* Visual Law 3-Step Process */}
        <ProcessVisualLaw />

        {/* About Dra. Taís Freitas */}
        <AboutSection onOpenCardModal={() => setCardModalOpen(true)} />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Ethical Footer & Pre-Footer Banner */}
      <Footer onOpenCardModal={() => setCardModalOpen(true)} />

      {/* Digital Business Card Modal */}
      <DigitalCardModal 
        isOpen={cardModalOpen} 
        onClose={() => setCardModalOpen(false)} 
      />

      {/* Floating Consultative WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
