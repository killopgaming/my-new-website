import React, { useState } from 'react';
import { X, Plus, Pencil, Trash2, Download, Copy, Check, ShieldCheck, Award, Save, RotateCcw, ExternalLink } from 'lucide-react';
import { Certificate, CERTIFICATES_MANIFEST } from '../data/certificates';

interface LinkedInCertificateManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: Certificate[];
  onSaveCertificates: (updatedList: Certificate[]) => void;
  initialMode?: 'add' | 'manage';
}

export const LinkedInCertificateManagerModal: React.FC<LinkedInCertificateManagerModalProps> = ({
  isOpen,
  onClose,
  certificates,
  onSaveCertificates,
  initialMode = 'add'
}) => {
  const [activeTab, setActiveTab] = useState<'add' | 'manage'>(initialMode);
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    year: new Date().getFullYear().toString(),
    date: 'October 2026',
    type: 'technical' as 'technical' | 'extracurricular',
    highlight: false,
    credentialId: '',
    verifyUrl: '',
    skills: '',
    summary: '',
    signatory: '',
    documentType: 'Certificate of Completion',
    badgeColor: '#00f5ff'
  });

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleResetForm = () => {
    setFormData({
      title: '',
      issuer: '',
      year: new Date().getFullYear().toString(),
      date: 'October 2026',
      type: 'technical',
      highlight: false,
      credentialId: '',
      verifyUrl: '',
      skills: '',
      summary: '',
      signatory: '',
      documentType: 'Certificate of Completion',
      badgeColor: '#00f5ff'
    });
    setEditingCertId(null);
  };

  const handleStartEdit = (cert: Certificate) => {
    setEditingCertId(cert.id);
    setFormData({
      title: cert.title,
      issuer: cert.issuer,
      year: cert.year,
      date: cert.date || cert.year,
      type: cert.type,
      highlight: cert.highlight || false,
      credentialId: cert.credentialId || '',
      verifyUrl: cert.verifyUrl || '',
      skills: cert.skills.join(', '),
      summary: cert.summary,
      signatory: cert.signatory || '',
      documentType: cert.documentType || 'Certificate of Completion',
      badgeColor: cert.badgeColor || '#00f5ff'
    });
    setActiveTab('add');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.issuer.trim()) return;

    const parsedSkills = formData.skills
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const newOrUpdatedCert: Certificate = {
      id: editingCertId || `cert-${Date.now()}`,
      title: formData.title.trim(),
      issuer: formData.issuer.trim(),
      year: formData.year.trim() || new Date().getFullYear().toString(),
      date: formData.date.trim() || formData.year.trim(),
      type: formData.type,
      highlight: formData.highlight,
      credentialId: formData.credentialId.trim() || undefined,
      verifyUrl: formData.verifyUrl.trim() || undefined,
      skills: parsedSkills.length > 0 ? parsedSkills : ['Technical Certification'],
      summary: formData.summary.trim() || 'Verified course completion and credential achievement.',
      signatory: formData.signatory.trim() || undefined,
      documentType: formData.documentType.trim() || 'Certificate of Completion',
      badgeColor: formData.badgeColor
    };

    let updatedList: Certificate[];
    if (editingCertId) {
      updatedList = certificates.map(c => (c.id === editingCertId ? newOrUpdatedCert : c));
      showToast('Certificate successfully updated!');
    } else {
      updatedList = [newOrUpdatedCert, ...certificates];
      showToast('New license / certification added to your portfolio!');
    }

    onSaveCertificates(updatedList);
    handleResetForm();
    setActiveTab('manage');
  };

  const handleDeleteCert = (id: string) => {
    const updated = certificates.filter(c => c.id !== id);
    onSaveCertificates(updated);
    showToast('Certificate removed.');
  };

  const handleResetToFactory = () => {
    if (window.confirm('Reset all certificates back to the official 38 verified records?')) {
      onSaveCertificates(CERTIFICATES_MANIFEST);
      localStorage.removeItem('dev_custom_certificates');
      showToast('Reset to original 38 records.');
    }
  };

  const handleCopyManifest = () => {
    const jsonStr = JSON.stringify(certificates, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    showToast('Full JSON Manifest copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadManifest = () => {
    const jsonStr = JSON.stringify(certificates, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dev_chhangani_certificates_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Manifest downloaded as JSON file.');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="max-w-3xl w-full bg-[#12121a] border border-[#1f1f2e] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (LinkedIn Style) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d0d14] border-b border-[#1f1f2e] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#f0f0f5]">
                {editingCertId ? 'Edit License or Certification' : 'Licenses & Certifications Manager'}
              </h3>
              <div className="text-[11px] font-mono text-[#00f5ff]">
                LinkedIn-Style Portfolio Management (No coding required)
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-[#a0a0b2] hover:text-[#f0f0f5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#1f1f2e] bg-[#0e0e16] px-6 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('add')}
            className={`py-3 px-4 border-b-2 font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'add'
                ? 'border-[#00f5ff] text-[#00f5ff]'
                : 'border-transparent text-[#a0a0b2] hover:text-[#f0f0f5]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{editingCertId ? 'Edit Certificate' : 'Add New Certificate'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('manage');
              handleResetForm();
            }}
            className={`py-3 px-4 border-b-2 font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'manage'
                ? 'border-[#00f5ff] text-[#00f5ff]'
                : 'border-transparent text-[#a0a0b2] hover:text-[#f0f0f5]'
            }`}
          >
            <Pencil className="w-3.5 h-3.5" />
            <span>Manage All ({certificates.length})</span>
          </button>
        </div>

        {/* Toast Alert */}
        {successToast && (
          <div className="bg-[#00ff9d]/15 border-b border-[#00ff9d]/30 px-6 py-2 text-xs font-mono text-[#00ff9d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5" />
              <span>{successToast}</span>
            </div>
            <button onClick={() => setSuccessToast(null)} className="text-[#a0a0b2] hover:text-[#f0f0f5]">✕</button>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'add' ? (
            /* Add / Edit Form */
            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Certificate Title */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-mono text-[#f0f0f5] flex items-center justify-between">
                    <span>Name / Title*</span>
                    <span className="text-[10px] text-[#68687a]">e.g. AWS Certified AI Practitioner</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Course or Certification Title"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-sans"
                  />
                </div>

                {/* Issuing Organisation */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#f0f0f5]">Issuing Organization*</label>
                  <input
                    type="text"
                    required
                    value={formData.issuer}
                    onChange={(e) => setFormData(prev => ({ ...prev, issuer: e.target.value }))}
                    placeholder="e.g. Harvard, Udemy, IIT Madras, Kitspire"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none"
                  />
                </div>

                {/* Issue Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#f0f0f5]">Issue Date / Month*</label>
                  <input
                    type="text"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    placeholder="e.g. October 2026"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none"
                  />
                </div>

                {/* Category Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#f0f0f5]">Category Track*</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as any }))}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-mono"
                  >
                    <option value="technical">Technical & AI</option>
                    <option value="extracurricular">Extracurricular, Music & Leadership</option>
                  </select>
                </div>

                {/* Document Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#f0f0f5]">Document Type</label>
                  <input
                    type="text"
                    value={formData.documentType}
                    onChange={(e) => setFormData(prev => ({ ...prev, documentType: e.target.value }))}
                    placeholder="e.g. Certificate of Completion, Award"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-sans"
                  />
                </div>

                {/* Credential ID */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#a0a0b2]">Credential ID (Optional)</label>
                  <input
                    type="text"
                    value={formData.credentialId}
                    onChange={(e) => setFormData(prev => ({ ...prev, credentialId: e.target.value }))}
                    placeholder="e.g. UC-ba402ef5..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-mono"
                  />
                </div>

                {/* Credential URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#a0a0b2]">Credential Verification URL (Optional)</label>
                  <input
                    type="url"
                    value={formData.verifyUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, verifyUrl: e.target.value }))}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-mono"
                  />
                </div>

                {/* Signatory / Instructor */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-mono text-[#a0a0b2]">Instructor / Signatory</label>
                  <input
                    type="text"
                    value={formData.signatory}
                    onChange={(e) => setFormData(prev => ({ ...prev, signatory: e.target.value }))}
                    placeholder="e.g. David J. Malan, Prof. Andrew Thangaraj, Jonas Schmedtmann"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-sans"
                  />
                </div>

                {/* Skills / Keywords */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-mono text-[#f0f0f5]">Skills & Keywords (Comma separated)</label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                    placeholder="e.g. Python, Machine Learning, ESP32, Robotics, Fusion 360"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-sans"
                  />
                </div>

                {/* Summary / Course Info */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-mono text-[#f0f0f5]">Course Description & What You Learned</label>
                  <textarea
                    rows={3}
                    value={formData.summary}
                    onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                    placeholder="Explain the concepts covered, hours completed, problem sets submitted, or achievements..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 focus:border-[#00f5ff] text-sm text-[#f0f0f5] outline-none font-sans"
                  />
                </div>

                {/* Featured Highlight Checkbox */}
                <div className="sm:col-span-2 flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="highlight"
                    checked={formData.highlight}
                    onChange={(e) => setFormData(prev => ({ ...prev, highlight: e.target.checked }))}
                    className="w-4 h-4 rounded bg-[#0e0e16] border-white/20 text-[#00f5ff] focus:ring-[#00f5ff]"
                  />
                  <label htmlFor="highlight" className="text-xs font-mono text-[#f0f0f5] cursor-pointer">
                    Pin as Featured / Starred Certificate on Homepage
                  </label>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-[#1f1f2e]">
                {editingCertId && (
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-4 py-2 rounded-lg bg-[#1a1a2e] text-xs font-mono text-[#a0a0b2] hover:text-[#f0f0f5]"
                  >
                    Cancel Edit
                  </button>
                )}

                <div className="flex items-center gap-3 ml-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg bg-[#1a1a2e] text-xs font-mono text-[#a0a0b2] hover:text-[#f0f0f5]"
                  >
                    Close
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f5ff] hover:bg-[#00e1eb] text-[#0a0a0f] font-mono text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingCertId ? 'Save Changes' : 'Save Certificate'}</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Manage Existing Certificates View */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#0e0e16] border border-[#1f1f2e]">
                <div className="text-xs font-mono text-[#a0a0b2]">
                  Total Records: <strong className="text-[#00f5ff]">{certificates.length}</strong>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyManifest}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-xs font-mono text-[#00f5ff] border border-[#00f5ff]/30 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#00ff9d]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
                  </button>

                  <button
                    onClick={handleDownloadManifest}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-xs font-mono text-[#f0f0f5] border border-white/10 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Backup</span>
                  </button>

                  <button
                    onClick={handleResetToFactory}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1a1a2e] hover:bg-[#351a24] text-xs font-mono text-[#ff5f56] border border-white/10 transition-colors"
                    title="Reset to 38 Official Certificates"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Certificates Row List */}
              <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 rounded-xl bg-[#0e0e16] border border-[#1f1f2e] hover:border-white/20 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${cert.type === 'technical' ? 'bg-[#00f5ff]' : 'bg-[#7c3aed]'}`} />
                        <h4 className="text-sm font-semibold text-[#f0f0f5] truncate">
                          {cert.title}
                        </h4>
                        {cert.highlight && (
                          <span className="text-[10px] font-mono text-[#ffbd2e] px-1.5 py-0.2 rounded bg-[#ffbd2e]/10">
                            ★ Starred
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#a0a0b2] font-mono flex items-center gap-2">
                        <span>{cert.issuer}</span>
                        <span>·</span>
                        <span>{cert.date || cert.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleStartEdit(cert)}
                        className="p-2 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-[#00f5ff] transition-colors"
                        title="Edit Certificate"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDeleteCert(cert.id)}
                        className="p-2 rounded-lg bg-[#1a1a2e] hover:bg-[#351a24] text-[#ff5f56] transition-colors"
                        title="Remove Certificate"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
