import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Award, Cpu, Github, Linkedin, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { DEV_PROFILE } from '../data/cvData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const ROLES = [
  'Aspiring Software Engineer',
  'Problem Solver',
  'IoT & Robotics Builder',
  'Web Developer',
  'Project Builder',
  'Tech Enthusiast'
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(85);

  useEffect(() => {
    const handleType = () => {
      const fullText = ROLES[roleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(85);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1900);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTypingSpeed(280);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden terminal-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-br from-[#00f5ff]/8 via-[#7c3aed]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Headline, Bio, Typewriter, CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Terminal Command Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12121a] border border-white/10 font-mono text-xs text-[#a0a0b2]">
            <span className="text-[#00ff9d]">&gt;</span>
            <span className="text-[#f0f0f5]">whoami</span>
            <span className="text-[#7c3aed]">::</span>
            <span className="text-[#00f5ff]">dev.chhangani // portfolio v2.6</span>
          </div>

          {/* Name & Dynamic Role */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f0f0f5]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#b388ff] to-[#ff007f]">
                Dev Chhangani
              </span>
            </h1>

            <div className="flex items-center gap-2 font-mono text-lg sm:text-xl text-[#00f5ff] min-h-[34px]">
              <span className="text-[#68687a]">$</span>
              <span className="font-semibold text-[#f0f0f5]">{currentText}</span>
              <span className="inline-block w-2.5 h-5 bg-[#00f5ff] animate-blink" aria-hidden="true" />
            </div>
          </div>

          {/* Authentic CV Hero Copy */}
          <p className="text-base sm:text-lg text-[#a0a0b2] leading-relaxed max-w-2xl">
            I'm a programmer who builds web apps and robotics projects. I enjoy practical problem-solving and hands-on engineering.
          </p>

          {/* Location & Contact Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#a0a0b2] pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span>Jodhpur, Rajasthan, India</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a 
              href="mailto:dev.chhangani1@gmail.com" 
              className="flex items-center gap-1.5 hover:text-[#00f5ff] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#7c3aed]" />
              <span>dev.chhangani1@gmail.com</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00f5ff] hover:bg-[#00e1eb] text-[#0a0a0f] font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:shadow-[0_0_28px_rgba(0,245,255,0.5)] cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onNavigate('inquire')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#12121a] hover:bg-[#181824] border border-[#00f5ff]/40 hover:border-[#00f5ff] text-[#00f5ff] font-mono text-xs font-medium tracking-wide transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span>Get In Touch</span>
            </button>

            <button
              onClick={() => onNavigate('certificates')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#12121a] hover:bg-[#181824] border border-white/10 hover:border-white/25 text-[#f0f0f5] hover:text-[#00f5ff] font-mono text-xs transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#7c3aed]" />
              <span>38 Certificates Proof</span>
            </button>
          </div>

          {/* Quick External Links (Prominent GitHub & LinkedIn) */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <span className="text-xs font-mono text-[#68687a]">CHANNELS:</span>
            <a
              href="https://github.com/killopgaming"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12121a] hover:bg-[#181824] border border-white/10 hover:border-[#00f5ff] text-xs font-mono text-[#f0f0f5] hover:text-[#00f5ff] transition-all"
            >
              <Github className="w-4 h-4 text-[#00f5ff]" />
              <span className="font-semibold">GitHub (killopgaming)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-chhangani-a91b0334a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12121a] hover:bg-[#181824] border border-white/10 hover:border-[#7c3aed] text-xs font-mono text-[#f0f0f5] hover:text-[#00f5ff] transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#7c3aed]" />
              <span className="font-semibold">LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Console Card & Live Metrics */}
        <div className="lg:col-span-5 space-y-6">
          {/* Terminal Console Window */}
          <div className="rounded-2xl bg-[#12121a] border border-white/10 shadow-2xl overflow-hidden">
            {/* Terminal Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d14] border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#68687a]">
                <Terminal className="w-3.5 h-3.5" />
                <span>dev-chhangani@workstation:~</span>
              </div>
              <span className="text-[10px] font-mono text-[#00ff9d] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
                ACTIVE
              </span>
            </div>

            {/* Terminal Output */}
            <div className="p-5 font-mono text-xs leading-relaxed space-y-2.5 text-[#a0a0b2]">
              <div className="text-[#68687a]"># Core Configuration & Verification Records</div>
              <div>
                <span className="text-[#00ff9d]">const</span> <span className="text-[#f0f0f5]">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-[#00f5ff]">name</span>: <span className="text-[#ffbd2e]">"Dev Chhangani"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#00f5ff]">role</span>: <span className="text-[#ffbd2e]">"Programmer & Robotics Builder"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#00f5ff]">languages</span>: [<span className="text-[#ffbd2e]">"Python"</span>, <span className="text-[#ffbd2e]">"C"</span>, <span className="text-[#ffbd2e]">"C++"</span>, <span className="text-[#ffbd2e]">"Bash"</span>],
              </div>
              <div className="pl-4">
                <span className="text-[#00f5ff]">hardware</span>: [<span className="text-[#ffbd2e]">"ESP32"</span>, <span className="text-[#ffbd2e]">"PCA9685"</span>, <span className="text-[#ffbd2e]">"Arduino"</span>, <span className="text-[#ffbd2e]">"CAD"</span>],
              </div>
              <div className="pl-4">
                <span className="text-[#00f5ff]">flagshipProject</span>: <span className="text-[#ffbd2e]">"BHUJHA 6-DOF Robotic Arm"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#00f5ff]">status</span>: <span className="text-[#00ff9d]">"Available for Recruitment & Research"</span>
              </div>
              <div>&#125;;</div>

              <div className="pt-2 text-[11px] text-[#7c3aed] border-t border-white/10 flex items-center justify-between">
                <span>&gt; Proof Manifest: 38 Verified Records</span>
                <span className="text-[#00ff9d]">SHA-256 Validated</span>
              </div>
            </div>
          </div>

          {/* Quantitative Rigor Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DEV_PROFILE.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-[#12121a] border border-white/10 text-center space-y-1 hover:border-[#00f5ff]/35 transition-colors"
              >
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#00f5ff] tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[11px] text-[#a0a0b2] font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
