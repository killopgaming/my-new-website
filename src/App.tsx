import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ResumeSection } from './components/ResumeSection';
import { InquireSection } from './components/InquireSection';
import { Footer } from './components/Footer';
import { TerminalBootAnimation } from './components/TerminalBootAnimation';
import { CommandPalette } from './components/CommandPalette';
import { CertificateModal } from './components/CertificateModal';
import { Certificate } from './data/certificates';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Handle active section tracking via IntersectionObserver with instant fallback
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'resume', 'inquire'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] flex flex-col font-sans selection:bg-[#00f5ff]/20 selection:text-[#00f5ff] relative">
      {/* Boot Animation on First Load */}
      {booting && (
        <TerminalBootAnimation onComplete={() => setBooting(false)} />
      )}

      {/* Main Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* One Scrolling Page Layout */}
      <main className="flex-1">
        <Hero onNavigate={scrollToSection} />
        
        {/* 01. About Me */}
        <AboutSection />

        {/* 02. Tech Stack & Skills */}
        <SkillsSection onNavigateToCertificates={() => scrollToSection('certificates')} />

        {/* 03. Featured Projects (BHUJHA 6-DOF Arm & Portfolio) */}
        <ProjectsSection />

        {/* 04. Verified Licenses & Certifications (38 Records + In-App Manager) */}
        <CertificatesSection />

        {/* 05. Resume & Track Record */}
        <ResumeSection />

        {/* 06. Inquire / Recruitment & Contact */}
        <InquireSection />
      </main>

      {/* Shared Terminal Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Cmd+K Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={scrollToSection}
        onSelectCertificate={(cert) => setSelectedCert(cert)}
      />

      {/* Certificate Inspection Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
