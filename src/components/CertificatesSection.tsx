import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Award, ExternalLink, ShieldCheck, Star, Sparkles, BookOpen, Music, CheckCircle2, Plus, Pencil, Download, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { CERTIFICATES_MANIFEST, Certificate } from '../data/certificates';
import { CertificateModal } from './CertificateModal';
import { LinkedInCertificateManagerModal } from './LinkedInCertificateManagerModal';

export const CertificatesSection: React.FC = () => {
  // State for dynamic certificates loaded from localStorage with default manifest fallback
  const [certificates, setCertificates] = useState<Certificate[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dev_custom_certificates');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch (e) {
        console.error('Failed to load certificates from localStorage', e);
      }
    }
    return CERTIFICATES_MANIFEST;
  });

  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'extracurricular' | 'starred'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // LinkedIn Manager Modal State
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [managerMode, setManagerMode] = useState<'add' | 'manage'>('add');

  const handleSaveCertificates = (updatedList: Certificate[]) => {
    setCertificates(updatedList);
    try {
      localStorage.setItem('dev_custom_certificates', JSON.stringify(updatedList));
    } catch (e) {
      console.error('Failed to persist certificates in localStorage', e);
    }
  };

  // Available years from active certificates list
  const years = useMemo(() => {
    const ySet = new Set<string>();
    certificates.forEach(c => {
      if (c.year) ySet.add(c.year);
    });
    return Array.from(ySet).sort((a, b) => b.localeCompare(a));
  }, [certificates]);

  // Filtered certificates
  const filteredCertificates = useMemo(() => {
    return certificates.filter(cert => {
      // Tab filter
      if (activeTab === 'technical' && cert.type !== 'technical') return false;
      if (activeTab === 'extracurricular' && cert.type !== 'extracurricular') return false;
      if (activeTab === 'starred' && !cert.highlight) return false;

      // Year filter
      if (selectedYear !== 'all' && cert.year !== selectedYear) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = cert.title.toLowerCase().includes(query);
        const matchesIssuer = cert.issuer.toLowerCase().includes(query);
        const matchesSkills = cert.skills.some(s => s.toLowerCase().includes(query));
        const matchesId = cert.credentialId?.toLowerCase().includes(query);
        return matchesTitle || matchesIssuer || matchesSkills || Boolean(matchesId);
      }

      return true;
    });
  }, [certificates, activeTab, selectedYear, searchQuery]);

  const technicalCount = certificates.filter(c => c.type === 'technical').length;
  const extracurricularCount = certificates.filter(c => c.type === 'extracurricular').length;
  const starredCount = certificates.filter(c => c.highlight).length;

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a2e] relative bg-[#0a0a0f] terminal-grid">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Section Header with verified numbering '04.' and LinkedIn style controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1f2e] pb-5">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#00f5ff] flex items-center gap-2">
              <span>04.</span>
              <span className="uppercase tracking-widest text-[#7c3aed]">Verified Evidence Vault</span>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f5] tracking-tight">
                Licenses & certifications ({certificates.length})
              </h2>
            </div>
          </div>

          {/* LinkedIn-Style Action Buttons: Add [+] & Manage [✎] */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                setManagerMode('add');
                setIsManagerOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 border border-[#00f5ff]/40 text-[#00f5ff] font-mono text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-[0_0_12px_rgba(0,245,255,0.25)] cursor-pointer"
              title="Add New License or Certification (No coding needed)"
            >
              <Plus className="w-4 h-4" />
              <span>Add Certificate</span>
            </button>

            <button
              onClick={() => {
                setManagerMode('manage');
                setIsManagerOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-white/10 text-xs font-mono text-[#a0a0b2] hover:text-[#f0f0f5] transition-colors cursor-pointer"
              title="Manage and edit your licenses & certifications"
            >
              <Pencil className="w-3.5 h-3.5 text-[#7c3aed]" />
              <span>Manage</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-[#12121a] border border-[#1f1f2e]">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#1a1a2e] text-[#00f5ff] border border-[#00f5ff]/40 shadow-sm'
                  : 'text-[#a0a0b2] hover:text-[#f0f0f5]'
              }`}
            >
              All Records ({certificates.length})
            </button>

            <button
              onClick={() => setActiveTab('technical')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-[#1a1a2e] text-[#00f5ff] border border-[#00f5ff]/40 shadow-sm'
                  : 'text-[#a0a0b2] hover:text-[#f0f0f5]'
              }`}
            >
              Technical & Robotics ({technicalCount})
            </button>

            <button
              onClick={() => setActiveTab('extracurricular')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'extracurricular'
                  ? 'bg-[#1a1a2e] text-[#00f5ff] border border-[#00f5ff]/40 shadow-sm'
                  : 'text-[#a0a0b2] hover:text-[#f0f0f5]'
              }`}
            >
              Music & Leadership ({extracurricularCount})
            </button>

            <button
              onClick={() => setActiveTab('starred')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                activeTab === 'starred'
                  ? 'bg-[#1a1a2e] text-[#ffbd2e] border border-[#ffbd2e]/40 shadow-sm'
                  : 'text-[#a0a0b2] hover:text-[#ffbd2e]'
              }`}
            >
              <Star className="w-3 h-3 fill-[#ffbd2e]" />
              <span>Starred ({starredCount})</span>
            </button>
          </div>

          {/* Search Box & Year Filter */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#68687a]" />
              <input
                type="text"
                placeholder="Search skills, issuer, course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0e0e16] border border-white/10 text-xs text-[#f0f0f5] placeholder-[#68687a] focus:outline-none focus:border-[#00f5ff] font-mono"
              />
            </div>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-[#0e0e16] border border-white/10 text-xs font-mono text-[#a0a0b2] focus:outline-none focus:border-[#00f5ff]"
            >
              <option value="all">All Years</option>
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCertificates.map((cert) => {
            const isTechnical = cert.type === 'technical';
            return (
              <div
                key={cert.id}
                className="rounded-xl bg-[#12121a] border border-[#1f1f2e] hover:border-[#00f5ff]/40 p-5 flex flex-col justify-between space-y-4 transition-all duration-200 group relative hover:-translate-y-0.5 shadow-lg"
              >
                <div className="space-y-3">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#7c3aed] uppercase tracking-wider font-semibold">
                      {cert.issuer}
                    </span>

                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      {cert.highlight && (
                        <span title="Starred Credential">
                          <Star className="w-3.5 h-3.5 text-[#ffbd2e] fill-[#ffbd2e]" />
                        </span>
                      )}
                      <span className="text-[#a0a0b2]">{cert.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#f0f0f5] group-hover:text-[#00f5ff] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Summary / Course Info */}
                  <p className="text-xs text-[#a0a0b2] leading-relaxed line-clamp-3">
                    {cert.summary}
                  </p>

                  {/* Skills / Topics Unboxed Separator */}
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-[#a0a0b2] pt-1">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="hover:text-[#00f5ff] transition-colors">{skill}</span>
                        {sIdx < Math.min(cert.skills.length, 3) - 1 && (
                          <span className="text-white/20" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] text-[#68687a]">+{cert.skills.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-3 border-t border-[#1f1f2e] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f5ff] hover:text-[#ff007f] transition-colors cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Inspect Record</span>
                  </button>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#a0a0b2] hover:text-[#00f5ff] transition-colors"
                      title="Direct Issuer Verification"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : cert.credentialId ? (
                    <span className="text-[10px] font-mono text-[#68687a] truncate max-w-[120px]" title={`ID: ${cert.credentialId}`}>
                      ID: {cert.credentialId}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-[#00ff9d]">Verified</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#12121a] border border-[#1f1f2e] space-y-4">
            <Award className="w-10 h-10 text-[#68687a] mx-auto" />
            <h3 className="text-base font-semibold text-[#f0f0f5]">
              No certificates match your search query
            </h3>
            <p className="text-xs text-[#a0a0b2] max-w-sm mx-auto">
              Try searching with another skill keyword or clear the filter to see all {certificates.length} verified records.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
                setSelectedYear('all');
              }}
              className="px-4 py-2 rounded-lg bg-[#1a1a2e] text-xs font-mono text-[#00f5ff] border border-[#00f5ff]/30 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner: LinkedIn Management Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12121a] via-[#181828] to-[#12121a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff] shrink-0">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#f0f0f5]">
                Easily Add New Certificates Without Writing Code
              </div>
              <div className="text-xs text-[#a0a0b2]">
                Use the in-app LinkedIn-style manager to add new licenses, edit course details, or download a JSON backup.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setManagerMode('add');
                setIsManagerOpen(true);
              }}
              className="px-4 py-2.5 rounded-lg bg-[#00f5ff] hover:bg-[#00e1eb] text-[#0a0a0f] font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] whitespace-nowrap cursor-pointer"
            >
              + Add New Certificate
            </button>
          </div>
        </div>
      </motion.div>

      {/* Interactive Certificate View Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* LinkedIn-Style Certificate Manager & Editor Modal */}
      <LinkedInCertificateManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        certificates={certificates}
        onSaveCertificates={handleSaveCertificates}
        initialMode={managerMode}
      />
    </section>
  );
};
