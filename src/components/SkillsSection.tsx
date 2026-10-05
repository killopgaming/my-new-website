import React, { useState } from 'react';
import { Cpu, Code2, Wrench, Layers, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES } from '../data/cvData';

interface SkillsSectionProps {
  onNavigateToCertificates: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigateToCertificates }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const icons = [Code2, Layers, Cpu, Wrench];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a2e] relative bg-[#0a0a0f] terminal-grid-dense">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1f2e] pb-5">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#00f5ff] flex items-center gap-2">
              <span>02.</span>
              <span className="uppercase tracking-widest text-[#7c3aed]">Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e0e0e0] tracking-tight">
              Tech Stack & Engineering Skills
            </h2>
          </div>
          <div className="text-xs font-mono text-[#a0a0b0]">
            Notice: Explicit standard C compliance (no "C+" typos)
          </div>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#12121a] border border-[#1f1f2e]">
          {SKILLS_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx] || Code2;
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1a1a2e] text-[#00f5ff] border border-[#00f5ff]/40 shadow-[0_0_12px_rgba(0,245,255,0.15)]'
                    : 'text-[#a0a0b0] hover:text-[#e0e0e0] hover:bg-[#161622]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#00f5ff]' : 'text-[#7c3aed]'}`} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILLS_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-5 rounded-xl bg-[#12121a] border border-[#1f1f2e] hover:border-[#00f5ff]/40 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#00f5ff] group-hover:shadow-[0_0_8px_#00f5ff] transition-all" />
                  <h4 className="font-mono text-base font-semibold text-[#e0e0e0] group-hover:text-[#00f5ff] transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#1a1a2e] text-[#00ff9d] border border-[#1f1f2e]">
                  {skill.level}
                </span>
              </div>

              <p className="text-sm text-[#a0a0b0] leading-relaxed">
                {skill.description}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#66667a] border-t border-[#1f1f2e]">
                <span>Verified by real projects & coursework</span>
                <button
                  onClick={onNavigateToCertificates}
                  className="flex items-center gap-1 text-[#00f5ff] hover:text-[#ff007f] transition-colors cursor-pointer"
                >
                  <span>View Proof</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hardware & Microcontroller Callout Banner */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-[#12121a] via-[#1a1a2e] to-[#12121a] border border-[#00f5ff]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#e0e0e0]">
                Hardware & Software Co-Design
              </div>
              <div className="text-xs text-[#a0a0b0]">
                Bridging C/C++ embedded firmware on ESP32 with precision 3D CAD mechanical assemblies in Fusion 360.
              </div>
            </div>
          </div>
          <button
            onClick={onNavigateToCertificates}
            className="px-4 py-2 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] border border-[#7c3aed]/50 text-[#e0e0e0] font-mono text-xs whitespace-nowrap transition-colors cursor-pointer"
          >
            Review 15 Technical Certifications →
          </button>
        </div>
      </motion.div>
    </section>
  );
};
