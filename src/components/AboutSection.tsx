import React from 'react';
import { Terminal, CheckCircle2, Sparkles, BookOpen, Heart, Users, ExternalLink, Github, Linkedin, Award, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { DEV_PROFILE } from '../data/cvData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a2e] relative bg-[#0a0a0f]">
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
              <span>01.</span>
              <span className="uppercase tracking-widest text-[#7c3aed]">Identity & Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e0e0e0] tracking-tight">
              About Dev Chhangani
            </h2>
          </div>
          {/* Prominent GitHub & LinkedIn Links */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="https://github.com/killopgaming"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#00f5ff]/30 hover:border-[#00f5ff] text-[#00f5ff] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/killopgaming</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-chhangani-a91b0334a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#7c3aed]/40 hover:border-[#7c3aed] text-[#e0e0e0] hover:text-[#00f5ff] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Main Content Grid (No Photo - High Tech Developer Terminal Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Developer Narrative & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12121a] border border-[#1f1f2e] space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff]">
                <BookOpen className="w-4 h-4" />
                <span>PROFILE & BACKGROUND</span>
              </div>

              {/* Exact User Bio Text */}
              <div className="text-sm text-[#a0a0b0] leading-relaxed space-y-4">
                <p className="text-base text-[#e0e0e0] font-medium leading-relaxed">
                  I’m a passionate programmer with interests in <strong className="text-[#00f5ff]">Computer Science</strong>, <strong className="text-[#00f5ff]">Mathematics</strong>, <strong className="text-[#00f5ff]">Physics</strong>, <strong className="text-[#00f5ff]">AI</strong>, and <strong className="text-[#00f5ff]">Robotics</strong>. I enjoy building projects, exploring new technologies, and continuously expanding my technical skills.
                </p>
                <p>
                  I have experience with <strong className="text-[#e0e0e0]">HTML, CSS, JavaScript, and GitHub</strong>, and I enjoy creating practical solutions through coding. Beyond academics, I actively participate in workshops, collaborative projects, and activities that help me develop leadership, communication, and problem-solving skills.
                </p>
                <p>
                  Currently exploring higher education opportunities and looking to connect with students, professionals, entrepreneurs, and technology enthusiasts. I’m always eager to learn, collaborate, and contribute to meaningful projects.
                </p>
              </div>

              {/* Unboxed Interest Tags */}
              <div className="pt-4 border-t border-[#1f1f2e] space-y-2">
                <div className="text-xs font-mono text-[#66667a]">AREAS OF EXPLORATION:</div>
                <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-[#e0e0e0]">
                  {DEV_PROFILE.interests.map((interest, idx) => (
                    <React.Fragment key={idx}>
                      <span className="hover:text-[#00f5ff] transition-colors">{interest}</span>
                      {idx < DEV_PROFILE.interests.length - 1 && (
                        <span className="text-[#7c3aed]" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal Window Chrome Code Card */}
            <div className="rounded-2xl bg-[#12121a] border border-[#1f1f2e] overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e0e16] border-b border-[#1f1f2e]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs font-mono text-[#66667a]">
                  dev_profile.py
                </div>
                <div className="text-[10px] font-mono text-[#00ff9d]">
                  Python 3.12
                </div>
              </div>

              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#a0a0b0]">
                <pre>
{`class Developer:
    def __init__(self):
        self.name = "Dev Chhangani"
        self.location = "Jodhpur, Rajasthan, India"
        self.education = "Senior Secondary (12th) - NWAC"
        self.skills = ["Python", "C", "C++", "Bash", "HTML/CSS", "JavaScript", "Django"]
        self.hardware = ["ESP32-WROVER", "PCA9685", "Fusion 360", "3D Printing"]
        self.flagship_project = "BHUJHA (5-DOF Robotic Arm)"
        self.volunteer_work = "IN-DEED Foundation AI & Digital Literacy"
        self.music = "Trinity College London - Initial Drums (Distinction)"
        self.github = "https://github.com/killopgaming"
        self.linkedin = "https://www.linkedin.com/in/dev-chhangani-a91b0334a"

    def mission(self):
        return "Eager to learn, collaborate, and contribute to meaningful projects."`}
                </pre>
              </div>
            </div>
          </div>

          {/* Right Column: IN-DEED Volunteer Story & Key Achievements */}
          <div className="lg:col-span-5 space-y-6">
            {/* Special Highlight: IN-DEED Foundation Feature */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#12121a] via-[#161626] to-[#12121a] border border-[#00f5ff]/30 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f5ff]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff]">
                  <Users className="w-3.5 h-3.5" />
                  <span>COMMUNITY & EDUCATION IMPACT</span>
                </div>
                <span className="text-[10px] font-mono text-[#00ff9d]">Aug – Sep 2026</span>
              </div>

              <h3 className="text-base font-bold text-[#e0e0e0] leading-snug">
                {DEV_PROFILE.indeedVolunteerStory.title}
              </h3>

              <div className="p-3 rounded-lg bg-[#0a0a0f]/80 border border-[#1f1f2e] space-y-1 font-mono text-xs text-[#a0a0b0]">
                <div className="text-[#e0e0e0]">
                  📍 {DEV_PROFILE.indeedVolunteerStory.school}
                </div>
                <div className="text-[#00f5ff]">
                  👥 {DEV_PROFILE.indeedVolunteerStory.cohort} · {DEV_PROFILE.indeedVolunteerStory.duration}
                </div>
              </div>

              <p className="text-xs text-[#a0a0b0] leading-relaxed">
                {DEV_PROFILE.indeedVolunteerStory.description}
              </p>

              <blockquote className="border-l-2 border-[#00ff9d] pl-3 py-1 text-xs italic text-[#e0e0e0]">
                "{DEV_PROFILE.indeedVolunteerStory.quote}"
              </blockquote>

              <div className="flex flex-wrap gap-1.5 pt-2 text-[10px] font-mono text-[#00f5ff]">
                {DEV_PROFILE.indeedVolunteerStory.hashtags.map((tag, idx) => (
                  <span key={idx} className="hover:text-[#ff007f] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Connect & Direct Channels */}
            <div className="p-5 rounded-2xl bg-[#12121a] border border-[#1f1f2e] space-y-3 font-mono text-xs">
              <div className="text-[#00f5ff] uppercase font-semibold">CONNECT DIRECTLY:</div>
              <div className="space-y-2 text-[#a0a0b0]">
                <a 
                  href="https://github.com/killopgaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e0e16] hover:bg-[#1a1a2e] border border-[#1f1f2e] hover:border-[#00f5ff] text-[#e0e0e0] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#00f5ff]" />
                    <span>GitHub: killopgaming</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66667a]" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/dev-chhangani-a91b0334a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#0e0e16] hover:bg-[#1a1a2e] border border-[#1f1f2e] hover:border-[#7c3aed] text-[#e0e0e0] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#7c3aed]" />
                    <span>LinkedIn: dev-chhangani</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66667a]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
