import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-[#1f1f2e] bg-[#07070b] py-8 px-4 sm:px-6 lg:px-8 font-mono text-xs text-[#a0a0b0]"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#12121a] border border-[#00f5ff]/30 flex items-center justify-center shrink-0">
              <img src="/favicon.svg" alt="Dev Chhangani Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-[#e0e0e0]">&lt;Dev Chhangani/&gt;</div>
              <div className="text-[11px] text-[#66667a]">
                Robotics Engineer & Software Developer · Jodhpur, India
              </div>
            </div>
          </div>

          {/* Socials & Top Action */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/killopgaming"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#1f1f2e] text-[#a0a0b0] hover:text-[#00f5ff] transition-colors"
              title="GitHub Profile (killopgaming)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/dev-chhangani-a91b0334a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#1f1f2e] text-[#a0a0b0] hover:text-[#00f5ff] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:dev.chhangani1@gmail.com"
              className="p-2 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#1f1f2e] text-[#a0a0b0] hover:text-[#00f5ff] transition-colors"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#1f1f2e] text-[#a0a0b0] hover:text-[#00f5ff] transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="pt-4 border-t border-[#1f1f2e]/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#66667a]">
          <div>
            © {new Date().getFullYear()} Dev Chhangani · Backed by 38 verified proof records.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed with Dark Terminal Aesthetics</span>
            <span>·</span>
            <span className="text-[#00ff9d]">WCAG AA Certified Contrast</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
