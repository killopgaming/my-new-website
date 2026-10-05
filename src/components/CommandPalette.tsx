import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Terminal, Award, FolderGit2, FileText, Mail, Github, Linkedin, Cpu, ArrowRight, CornerDownLeft } from 'lucide-react';
import { CERTIFICATES_MANIFEST, Certificate } from '../data/certificates';
import { PROJECTS } from '../data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onSelectCertificate: (cert: Certificate) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectCertificate
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Actions & Navigation items
  const navigationItems = [
    { id: 'hero', label: 'Home / Hero', section: 'hero', icon: Terminal, category: 'Navigation' },
    { id: 'about', label: '01. About Dev Chhangani', section: 'about', icon: Terminal, category: 'Navigation' },
    { id: 'skills', label: '02. Technical Competencies & Tech Stack', section: 'skills', icon: Cpu, category: 'Navigation' },
    { id: 'projects', label: '03. BHUJHA & Engineering Projects', section: 'projects', icon: FolderGit2, category: 'Navigation' },
    { id: 'certificates', label: '04. Licenses & Certifications (38 Records)', section: 'certificates', icon: Award, category: 'Navigation' },
    { id: 'resume', label: '05. Verified Curriculum Vitae', section: 'resume', icon: FileText, category: 'Navigation' },
    { id: 'inquire', label: '06. Contact & Recruiter Portal', section: 'inquire', icon: Mail, category: 'Navigation' },
  ];

  // Projects quick list
  const projectItems = PROJECTS.map(p => ({
    id: `project-${p.id}`,
    label: `${p.title} (${p.category})`,
    section: 'projects',
    icon: FolderGit2,
    category: 'Projects',
    badge: p.status
  }));

  // Filtered certificates
  const matchingCerts = CERTIFICATES_MANIFEST.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.issuer.toLowerCase().includes(query.toLowerCase()) ||
    c.skills.some(s => s.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 5);

  const filteredNav = navigationItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#12121a] border border-[#1f1f2e] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1f1f2e] bg-[#0e0e16]">
          <Search className="w-4 h-4 text-[#00f5ff] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search commands, projects, skills, or 38 certificates..."
            className="w-full pl-3 pr-2 bg-transparent text-sm text-[#f0f0f5] placeholder-[#68687a] outline-none font-mono"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#a0a0b2] bg-[#1a1a2e] border border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-[380px] overflow-y-auto space-y-4">
          {/* Navigation Section */}
          {filteredNav.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#68687a]">
                Navigation
              </div>
              {filteredNav.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.section);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-mono text-[#a0a0b2] hover:text-[#00f5ff] hover:bg-[#1a1a2e] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4 text-[#7c3aed] group-hover:text-[#00f5ff]" />
                    <span>{item.label}</span>
                  </div>
                  <CornerDownLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#00f5ff]" />
                </button>
              ))}
            </div>
          )}

          {/* Projects Section */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#68687a]">
                Projects
              </div>
              {filteredProjects.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate('projects');
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-mono text-[#a0a0b2] hover:text-[#00f5ff] hover:bg-[#1a1a2e] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 truncate pr-2">
                    <FolderGit2 className="w-4 h-4 text-[#00ff9d] shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                  <span className="text-[10px] text-[#00ff9d] px-1.5 py-0.5 rounded bg-[#00ff9d]/10 shrink-0">
                    {item.badge}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Certificates Section */}
          {matchingCerts.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#68687a]">
                Verified Licenses & Certifications
              </div>
              {matchingCerts.map(cert => (
                <button
                  key={cert.id}
                  onClick={() => {
                    onSelectCertificate(cert);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs text-[#a0a0b2] hover:text-[#00f5ff] hover:bg-[#1a1a2e] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 truncate pr-2">
                    <Award className="w-4 h-4 text-[#ffbd2e] shrink-0" />
                    <span className="truncate font-medium text-[#f0f0f5] group-hover:text-[#00f5ff]">
                      {cert.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#68687a] shrink-0">
                    {cert.issuer}
                  </span>
                </button>
              ))}
            </div>
          )}

          {filteredNav.length === 0 && filteredProjects.length === 0 && matchingCerts.length === 0 && (
            <div className="p-8 text-center text-xs font-mono text-[#68687a]">
              No results found for "{query}"
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#0e0e16] border-t border-[#1f1f2e] flex items-center justify-between text-[11px] font-mono text-[#68687a]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>esc Exit</span>
          </div>
          <span className="text-[#00f5ff]">DevOS Command Center</span>
        </div>
      </div>
    </div>
  );
};
