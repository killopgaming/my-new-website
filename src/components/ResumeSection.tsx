import React, { useState } from 'react';
import { FileText, Printer, Download, Briefcase, GraduationCap, Trophy, CheckCircle, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { DEV_PROFILE, EDUCATION_LIST, EXPERIENCE_LIST, EXTRACURRICULAR_LIST, SKILLS_CATEGORIES } from '../data/cvData';

export const ResumeSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'interactive' | 'printable'>('interactive');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a2e] relative bg-[#0a0a0f]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Section Header with verified numbering '05.' */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1f2e] pb-5">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#00f5ff] flex items-center gap-2">
              <span>05.</span>
              <span className="uppercase tracking-widest text-[#7c3aed]">Verified Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e0e0e0] tracking-tight">
              Resume & Track Record
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-[#12121a] border border-[#1f1f2e] flex items-center font-mono text-xs">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'interactive' ? 'bg-[#1a1a2e] text-[#00f5ff]' : 'text-[#a0a0b0] hover:text-[#e0e0e0]'
                }`}
              >
                Interactive
              </button>
              <button
                onClick={() => setViewMode('printable')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'printable' ? 'bg-[#1a1a2e] text-[#00f5ff]' : 'text-[#a0a0b0] hover:text-[#e0e0e0]'
                }`}
              >
                Formal CV
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] transition-colors cursor-pointer"
              title="Print CV or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
          </div>
        </div>

        {/* View Mode: Printable Formal CV Format */}
        {viewMode === 'printable' ? (
          <div className="rounded-2xl bg-[#12121a] border border-[#1f1f2e] p-6 sm:p-12 space-y-8 font-sans shadow-2xl max-w-4xl mx-auto">
            {/* Header */}
            <div className="border-b border-[#1f1f2e] pb-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-3xl font-extrabold tracking-tight text-[#e0e0e0]">
                  DEV CHHANGANI
                </h1>
                <span className="text-xs font-mono text-[#00f5ff]">
                  DOB: 11/11/2008
                </span>
              </div>
              <div className="text-xs font-mono text-[#a0a0b0] flex flex-wrap gap-x-4 gap-y-1">
                <span>Jodhpur, Rajasthan, India</span>
                <span>·</span>
                <a href="mailto:dev.chhangani1@gmail.com" className="text-[#00f5ff] hover:underline">dev.chhangani1@gmail.com</a>
                <span>·</span>
                <span>+91 6377580643</span>
              </div>
              <div className="text-xs font-mono text-[#a0a0b0] flex flex-wrap gap-x-4 gap-y-1 pt-1">
                <a href="https://linkedin.com/in/dev-chhangani-a91b0334a" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f5ff]">
                  LinkedIn: linkedin.com/in/dev-chhangani-a91b0334a
                </a>
                <span>·</span>
                <a href="https://github.com/killopgaming" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f5ff]">
                  GitHub: github.com/killopgaming
                </a>
              </div>
            </div>

            {/* Profile */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f5ff] border-b border-[#1f1f2e] pb-1">
                PROFILE
              </h2>
              <p className="text-xs sm:text-sm text-[#a0a0b0] leading-relaxed">
                {DEV_PROFILE.summary}
              </p>
            </div>

            {/* Education Table */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f5ff] border-b border-[#1f1f2e] pb-1">
                EDUCATION
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#1f1f2e] text-[#66667a]">
                      <th className="py-2 pr-4">CLASS / QUALIFICATION</th>
                      <th className="py-2 pr-4">SCHOOL / BOARD</th>
                      <th className="py-2 pr-4">PASSING YEAR</th>
                      <th className="py-2">PERCENTAGE / STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1f1f2e]/60 text-[#a0a0b0]">
                    {EDUCATION_LIST.map((edu, idx) => (
                      <tr key={idx} className="hover:bg-[#161624]">
                        <td className="py-2.5 pr-4 font-semibold text-[#e0e0e0]">{edu.qualification}</td>
                        <td className="py-2.5 pr-4">{edu.institution}</td>
                        <td className="py-2.5 pr-4">{edu.timeline}</td>
                        <td className="py-2.5 text-[#00ff9d]">{edu.percentageOrStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Internships & Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f5ff] border-b border-[#1f1f2e] pb-1">
                INTERNSHIPS & PRACTICAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {EXPERIENCE_LIST.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono">
                      <span className="font-bold text-[#e0e0e0] text-sm">{exp.role}</span>
                      <span className="text-[#66667a]">{exp.timeline} | {exp.location}</span>
                    </div>
                    <div className="font-mono text-[#7c3aed] text-xs">{exp.organization}</div>
                    <ul className="list-disc pl-5 space-y-1 text-[#a0a0b0] marker:text-[#00f5ff]">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f5ff] border-b border-[#1f1f2e] pb-1">
                EXTRACURRICULAR & LEADERSHIP
              </h2>
              <div className="space-y-4">
                {EXTRACURRICULAR_LIST.map((extra, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono">
                      <span className="font-bold text-[#e0e0e0]">{extra.title}</span>
                      <span className="text-[#66667a]">{extra.organization} · {extra.timeline}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-[#a0a0b0] marker:text-[#7c3aed]">
                      {extra.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f5ff] border-b border-[#1f1f2e] pb-1">
                SKILLS & TECHNOLOGIES
              </h2>
              <div className="space-y-1.5 text-xs font-mono text-[#a0a0b0]">
                <div>
                  <strong className="text-[#e0e0e0]">Programming: </strong>
                  <span>Python · C (Standard) · C++ · Bash</span>
                </div>
                <div>
                  <strong className="text-[#e0e0e0]">Web Development: </strong>
                  <span>HTML · CSS · JavaScript · Django</span>
                </div>
                <div>
                  <strong className="text-[#e0e0e0]">Robotics & Hardware: </strong>
                  <span>ESP32-WROVER · PCA9685 · MG995 Servos · CAD (Autodesk Fusion 360) · 3D Printing</span>
                </div>
                <div>
                  <strong className="text-[#e0e0e0]">Tools: </strong>
                  <span>Git · GitHub · VS Code · Microsoft Office</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode: Interactive Timeline & Cards */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Education & Experience */}
            <div className="lg:col-span-7 space-y-8">
              {/* Internships & Volunteering Card */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#00f5ff]">
                  <Briefcase className="w-4 h-4" />
                  <span>Work & Volunteering Experience</span>
                </div>

                <div className="space-y-4">
                  {EXPERIENCE_LIST.map((exp, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl bg-[#12121a] border border-[#1f1f2e] space-y-3 hover:border-[#00f5ff]/30 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                        <div>
                          <h4 className="text-base font-bold text-[#e0e0e0]">{exp.role}</h4>
                          <div className="font-mono text-xs text-[#00f5ff]">{exp.organization}</div>
                        </div>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#1a1a2e] text-[#00ff9d] border border-[#1f1f2e] self-start">
                          {exp.timeline}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#66667a]">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>

                      <ul className="text-xs text-[#a0a0b0] space-y-1.5 pl-4 list-disc marker:text-[#00f5ff]">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#00f5ff]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualifications</span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {EDUCATION_LIST.map((edu, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl bg-[#12121a] border border-[#1f1f2e] space-y-2 hover:border-[#7c3aed]/30 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h4 className="text-base font-bold text-[#e0e0e0]">{edu.qualification}</h4>
                        <span className="font-mono text-xs text-[#00ff9d]">{edu.percentageOrStatus}</span>
                      </div>
                      <div className="font-mono text-xs text-[#7c3aed]">{edu.institution}</div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#66667a]">
                        <span>{edu.timeline}</span>
                        <span>{edu.location}</span>
                      </div>
                      {edu.notes && (
                        <p className="text-xs text-[#a0a0b0] pt-1 border-t border-[#1f1f2e]">{edu.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Extracurricular Leadership & CV Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#00f5ff]">
                  <Trophy className="w-4 h-4 text-[#ffbd2e]" />
                  <span>Leadership & Extracurriculars</span>
                </div>

                <div className="space-y-4">
                  {EXTRACURRICULAR_LIST.map((extra, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl bg-[#12121a] border border-[#1f1f2e] space-y-2 hover:border-[#1f1f3e] transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#e0e0e0]">{extra.title}</h4>
                        <span className="font-mono text-[10px] text-[#66667a]">{extra.timeline}</span>
                      </div>
                      <div className="font-mono text-xs text-[#7c3aed]">{extra.organization}</div>
                      <ul className="text-xs text-[#a0a0b0] space-y-1 pl-4 list-disc marker:text-[#7c3aed]">
                        {extra.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct CV Download / Contact Card */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#12121a] via-[#1a1a2e] to-[#12121a] border border-[#00f5ff]/20 space-y-3">
                <div className="font-mono text-xs text-[#00f5ff] uppercase font-semibold">
                  Recruiter Fast Track
                </div>
                <p className="text-xs text-[#a0a0b0] leading-relaxed">
                  Looking to hire Dev for a software engineering internship, robotics prototyping project, or web development engagement?
                </p>
                <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
                  <a
                    href="mailto:dev.chhangani1@gmail.com"
                    className="w-full text-center py-2 px-3 rounded-lg bg-[#00f5ff] hover:bg-[#00e1eb] text-[#0a0a0f] font-semibold transition-colors"
                  >
                    Email Dev Directly
                  </a>
                  <button
                    onClick={handlePrint}
                    className="w-full text-center py-2 px-3 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-[#e0e0e0] border border-[#1f1f2e] transition-colors cursor-pointer"
                  >
                    Print Complete Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};
