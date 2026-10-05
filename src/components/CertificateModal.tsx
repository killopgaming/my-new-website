import React from 'react';
import { X, ExternalLink, Award, CheckCircle2, ShieldCheck, Calendar, User, FileText, Download } from 'lucide-react';
import { Certificate } from '../data/certificates';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="max-w-4xl w-full bg-[#12121a] border border-[#1f1f2e] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e0e16] border-b border-[#1f1f2e] shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00ff9d]" />
            <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-wider">
              VERIFIED CREDENTIAL ARCHIVE RECORD
            </span>
            <span className="text-[#66667a]">·</span>
            <span className="font-mono text-xs text-[#a0a0b0]">
              ID: {certificate.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-[#a0a0b0] hover:text-[#e0e0e0] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Certificate Visualizer & Credential Verification Data */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Certificate Visual Rendering Canvas */}
          <div className="relative rounded-xl border-2 border-[#2b2b40] bg-gradient-to-br from-[#171725] via-[#101018] to-[#171725] p-6 sm:p-10 shadow-inner overflow-hidden text-center">
            {/* Guilloche / Certificate Corner Ornaments */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#00f5ff]/40 rounded-tl pointer-events-none" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#00f5ff]/40 rounded-tr pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#00f5ff]/40 rounded-bl pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#00f5ff]/40 rounded-br pointer-events-none" />

            {/* Issuer Branding Watermark & Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a2e] border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff]">
                <Award className="w-3.5 h-3.5" />
                <span>{certificate.documentType}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#e0e0e0] font-serif">
                {certificate.issuer}
              </h4>
              <p className="text-xs font-mono uppercase tracking-widest text-[#a0a0b0]">
                Official Proof of Achievement & Credential
              </p>
            </div>

            {/* Awardee Name */}
            <div className="py-4 border-y border-[#1f1f2e] max-w-lg mx-auto my-4 space-y-1">
              <span className="text-xs font-mono text-[#7c3aed]">THIS CREDENTIAL IS PROUDLY CONFERRED UPON</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#e0e0e0] to-[#ff007f] font-serif">
                Dev Chhangani
              </div>
            </div>

            {/* Course / Award Title */}
            <div className="space-y-3 max-w-2xl mx-auto py-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#e0e0e0]">
                {certificate.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#a0a0b0] leading-relaxed max-w-xl mx-auto">
                {certificate.summary}
              </p>
            </div>

            {/* Signatory & Date Block */}
            <div className="pt-6 mt-4 border-t border-[#1f1f2e] grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-xs font-mono">
              <div className="text-left space-y-1">
                <span className="text-[#66667a]">AUTHORIZED ISSUANCE:</span>
                <div className="text-[#e0e0e0] font-medium">{certificate.signatory || certificate.issuer}</div>
              </div>
              <div className="text-left sm:text-right space-y-1">
                <span className="text-[#66667a]">DATE OF CONFERRAL:</span>
                <div className="text-[#00ff9d] font-semibold">{certificate.date || certificate.year}</div>
              </div>
            </div>

            {/* Verification Seal Tag */}
            {certificate.credentialId && (
              <div className="mt-4 pt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-[#a0a0b0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00ff9d]" />
                <span>Credential ID:</span>
                <span className="text-[#00f5ff] font-semibold">{certificate.credentialId}</span>
              </div>
            )}
          </div>

          {/* Verification Details & Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Skills & Metadata */}
            <div className="p-4 rounded-xl bg-[#0e0e16] border border-[#1f1f2e] space-y-3">
              <div className="text-xs font-mono text-[#00f5ff] uppercase">Competencies & Verification Topics</div>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#161624] text-xs font-mono text-[#e0e0e0] border border-[#1f1f2e]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Real Verification Links & Actions */}
            <div className="p-4 rounded-xl bg-[#0e0e16] border border-[#1f1f2e] space-y-3 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#00ff9d] uppercase">Verification Status</div>
                <div className="text-xs text-[#a0a0b0]">
                  {certificate.verifyUrl 
                    ? 'Official live verification URL is active on the issuer authority database.' 
                    : 'Verified directly from verified academic transcript and original physical certificate.'}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                {certificate.verifyUrl ? (
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#00f5ff] hover:bg-[#00e1eb] text-[#0a0a0f] font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Open Official Verification</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => window.print()}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-[#e0e0e0] font-mono text-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Print / Save Record</span>
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-[#1a1a2e] text-[#a0a0b0] hover:text-[#e0e0e0] font-mono text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
