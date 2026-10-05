import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Send, Award, Cpu, Code2, User, Github, Linkedin, Search } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', number: '01', icon: User },
    { id: 'skills', label: 'Skills', number: '02', icon: Cpu },
    { id: 'projects', label: 'Projects', number: '03', icon: Code2 },
    { id: 'certificates', label: 'Certificates', number: '04', icon: Award },
    { id: 'resume', label: 'Resume', number: '05', icon: FileText },
    { id: 'inquire', label: 'Inquire', number: '06', icon: Send },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#00f5ff] via-[#7c3aed] to-[#ff007f] z-50 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(0,245,255,0.7)]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Main Navigation Header - Top Bar Contract */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled 
            ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1f1f2e] py-3 shadow-lg shadow-black/40' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5ff] rounded px-1"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#12121a] border border-[#00f5ff]/40 flex items-center justify-center group-hover:border-[#00f5ff] group-hover:shadow-[0_0_12px_rgba(0,245,255,0.4)] transition-all shrink-0">
              <img src="/favicon.svg" alt="Dev Chhangani Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-sm font-semibold tracking-tight text-[#e0e0e0] group-hover:text-[#00f5ff] transition-colors">
                &lt;Dev/&gt;
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" title="System Status: Online" />
            </div>
          </button>

          {/* Zone 2: Numbered Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`group flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    isActive 
                      ? 'text-[#00f5ff] font-medium' 
                      : 'text-[#a0a0b0] hover:text-[#e0e0e0]'
                  }`}
                >
                  <span className={`transition-colors ${isActive ? 'text-[#00f5ff]' : 'text-[#7c3aed] group-hover:text-[#00f5ff]'}`}>
                    {link.number}.
                  </span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-white/10 hover:border-[#00f5ff]/40 text-xs font-mono text-[#a0a0b2] hover:text-[#00f5ff] transition-all cursor-pointer"
                title="Search commands, skills, or certificates (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#00f5ff]" />
                <span className="hidden md:inline">Search</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-[#1a1a2e] border border-white/10 rounded text-[#68687a]">
                  ⌘K
                </kbd>
              </button>
            )}

            <a
              href="https://github.com/killopgaming"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#1f1f2e] hover:border-[#00f5ff] text-[#a0a0b0] hover:text-[#00f5ff] transition-all cursor-pointer"
              title="GitHub: killopgaming"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/dev-chhangani-a91b0334a"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#1f1f2e] hover:border-[#7c3aed] text-[#a0a0b0] hover:text-[#00f5ff] transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleNavClick('inquire')}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 border border-[#00f5ff]/50 text-[#00f5ff] font-mono text-xs font-medium tracking-wide transition-all shadow-sm hover:shadow-[0_0_12px_rgba(0,245,255,0.25)] cursor-pointer whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded bg-[#12121a] border border-[#1f1f2e] text-[#e0e0e0] hover:text-[#00f5ff] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#0c0c14] border-b border-[#1f1f2e] px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded font-mono text-sm text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#1a1a2e] text-[#00f5ff] border-l-2 border-[#00f5ff]'
                      : 'text-[#a0a0b0] hover:bg-[#12121a] hover:text-[#e0e0e0]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#7c3aed]" />
                    <span>{link.label}</span>
                  </div>
                  <span className="text-xs text-[#7c3aed]">{link.number}.</span>
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('inquire')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 border border-[#00f5ff]/50 text-[#00f5ff] font-mono text-xs font-semibold uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Recruiter Inquire Portal</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
