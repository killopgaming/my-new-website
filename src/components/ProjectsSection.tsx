import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Linkedin, Cpu, ShieldCheck, ChevronRight, Layers, Wrench, CheckCircle, Info, X, Globe, Folder, Bot, Music, Users, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS, Project } from '../data/projects';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [kinematicState, setKinematicState] = useState<'home' | 'pick' | 'reach' | 'hold'>('home');

  const kinematicPresets = {
    home: { label: 'Calibration Stance', base: '0°', shoulder: '90°', elbow: '45°', wrist1: '0°', wrist2: '0°', claw: 'Standby (35%)', pwm: '1500 µs' },
    pick: { label: 'Pick Payload', base: '45°', shoulder: '125°', elbow: '75°', wrist1: '-15°', wrist2: '10°', claw: 'Clamped (100%)', pwm: '1850 µs' },
    reach: { label: 'Extended Reach', base: '90°', shoulder: '45°', elbow: '110°', wrist1: '25°', wrist2: '30°', claw: 'Open (0%)', pwm: '1120 µs' },
    hold: { label: 'Hold & Transport', base: '60°', shoulder: '80°', elbow: '60°', wrist1: '0°', wrist2: '15°', claw: 'Locked (85%)', pwm: '1720 µs' },
  };

  const activeKinematics = kinematicPresets[kinematicState];

  const categories = ['All', 'Robotics & Embedded', 'Web Engineering', 'Software Systems', 'Education & Community'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const getProjectIcon = (project: Project) => {
    switch (project.category) {
      case 'Robotics & Embedded':
        return <Bot className="w-5 h-5 text-[#00f5ff]" />;
      case 'Web Engineering':
        return <Globe className="w-5 h-5 text-[#00ff9d]" />;
      case 'Software Systems':
        if (project.id.includes('drum')) return <Music className="w-5 h-5 text-[#ff007f]" />;
        return <Terminal className="w-5 h-5 text-[#7c3aed]" />;
      case 'Education & Community':
        return <Users className="w-5 h-5 text-[#ffbd2e]" />;
      default:
        return <Folder className="w-5 h-5 text-[#00f5ff]" />;
    }
  };

  const bhujha = PROJECTS.find(p => p.id === 'bhujha-robotic-arm');

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a2e] relative bg-[#0a0a0f] terminal-grid-dense">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1f2e] pb-5">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#00f5ff] flex items-center gap-2">
              <span>03.</span>
              <span className="uppercase tracking-widest text-[#7c3aed]">Practical Implementations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e0e0e0] tracking-tight">
              Featured Projects & Engineering Work
            </h2>
          </div>

          {/* Direct GitHub & LinkedIn Badges */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="https://github.com/killopgaming"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#00f5ff]/40 text-[#00f5ff] hover:shadow-[0_0_12px_rgba(0,245,255,0.25)] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>killopgaming</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-chhangani-a91b0334a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12121a] hover:bg-[#1a1a2e] border border-[#7c3aed]/40 text-[#e0e0e0] hover:text-[#00f5ff] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Flagship Hardware System: BHUJHA 6-DOF Robotic Arm */}
        {bhujha && (
          <div className="rounded-2xl bg-[#12121a] border border-[#1f1f2e] hover:border-[#00f5ff]/40 transition-all overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image & Hardware Diagram Column */}
              <div className="lg:col-span-6 relative bg-[#0e0e16] flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1f1f2e]">
                <div className="relative aspect-video sm:aspect-auto sm:h-80 lg:h-full min-h-[340px] overflow-hidden">
                  <img
                    src={bhujha.image}
                    alt="BHUJHA Final Prototype 6-DOF Robotic Arm"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Status Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded bg-[#0a0a0f]/90 border border-[#00f5ff]/40 backdrop-blur-md font-mono text-xs text-[#00f5ff]">
                    <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
                    <span>6-DOF ARTICULATED ROBOTIC ARM</span>
                  </div>

                  {/* Gripper Actions Overlay */}
                  <div className="absolute top-4 right-4 hidden sm:flex flex-col gap-1 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#0a0a0f]/80 border border-[#1f1f2e] text-[#00f5ff]">
                      PICK
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#0a0a0f]/80 border border-[#1f1f2e] text-[#00ff9d]">
                      MOVE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#0a0a0f]/80 border border-[#1f1f2e] text-[#ffbd2e]">
                      HOLD
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#e0e0e0]">
                    <span className="px-2 py-0.5 rounded bg-[#12121a]/80 border border-[#1f1f2e]">
                      ESP32 · Arduino Nano · 6× MG996R
                    </span>
                    <span className="text-[#00ff9d]">FINAL PROTOTYPE</span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications & Description Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-mono text-xs text-[#7c3aed] font-medium tracking-wider uppercase">
                      FLAGSHIP HARDWARE SYSTEM
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#1a1a2e] text-[#00f5ff] border border-[#00f5ff]/20">
                      Assembled & Tested
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#e0e0e0]">
                      BHUJHA Final Prototype
                    </h3>
                    <p className="text-xs font-mono text-[#00f5ff] italic mt-1">
                      "A robotic arm built with mechanics, electronics and a lot of patience."
                    </p>
                  </div>

                  <p className="text-sm text-[#a0a0b0] leading-relaxed">
                    {bhujha.overview}
                  </p>

                  {/* Interactive 6-DOF Kinematic Joint Articulation Simulator */}
                  <div className="space-y-2.5 pt-2 border-t border-[#1f1f2e]">
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-xs text-[#e0e0e0] flex items-center gap-2">
                        <Wrench className="w-3.5 h-3.5 text-[#00f5ff]" />
                        <span>6-DOF Joint Telemetry Simulator:</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#00ff9d] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
                        LIVE PWM
                      </span>
                    </div>

                    {/* Preset Trajectory Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 font-mono text-[11px]">
                      {(['home', 'pick', 'reach', 'hold'] as const).map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setKinematicState(preset)}
                          className={`px-2 py-1.5 rounded text-center transition-all cursor-pointer ${
                            kinematicState === preset
                              ? 'bg-[#00f5ff]/20 text-[#00f5ff] border border-[#00f5ff]/60 font-semibold'
                              : 'bg-[#1a1a2e] text-[#a0a0b2] hover:text-[#f0f0f5] border border-white/5'
                          }`}
                        >
                          {preset === 'home' && '1. Home'}
                          {preset === 'pick' && '2. Pick'}
                          {preset === 'reach' && '3. Reach'}
                          {preset === 'hold' && '4. Hold'}
                        </button>
                      ))}
                    </div>

                    {/* Calculated Live Joint Angles Display */}
                    <div className="p-3 rounded-xl bg-[#0e0e16] border border-white/10 grid grid-cols-3 gap-2 font-mono text-xs">
                      <div>
                        <div className="text-[10px] text-[#68687a]">J1 BASE</div>
                        <div className="text-[#00f5ff] font-semibold">{activeKinematics.base}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#68687a]">J2 SHOULDER</div>
                        <div className="text-[#00f5ff] font-semibold">{activeKinematics.shoulder}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#68687a]">J3 ELBOW</div>
                        <div className="text-[#00f5ff] font-semibold">{activeKinematics.elbow}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#68687a]">J4/J5 WRIST</div>
                        <div className="text-[#f0f0f5] font-semibold">{activeKinematics.wrist1}, {activeKinematics.wrist2}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#68687a]">J6 GRIPPER</div>
                        <div className="text-[#00ff9d] font-semibold">{activeKinematics.claw}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#68687a]">PWM TIMING</div>
                        <div className="text-[#ffbd2e] font-semibold">{activeKinematics.pwm}</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Components Tag Cloud */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-mono text-[#66667a]">HARDWARE BOM COMPONENTS:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {bhujha.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-[#1a1a2e] border border-[#1f1f2e] text-[11px] font-mono text-[#a0a0b0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="pt-4 flex items-center gap-3 border-t border-[#1f1f2e]">
                  <button
                    onClick={() => setSelectedProject(bhujha)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 border border-[#00f5ff]/40 text-[#00f5ff] font-mono text-xs font-semibold tracking-wide transition-all cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Technical Architecture Deep Dive</span>
                  </button>

                  <a
                    href="https://github.com/killopgaming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] border border-[#1f1f2e] text-[#a0a0b0] hover:text-[#00f5ff] transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-[#12121a] border border-[#1f1f2e] font-mono text-xs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1a1a2e] text-[#00f5ff] border border-[#00f5ff]/40 shadow-sm'
                  : 'text-[#a0a0b0] hover:text-[#e0e0e0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Full Grid of All Projects Built & Explored */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-[#12121a] border border-[#1f1f2e] hover:border-[#00f5ff]/40 transition-all p-5 flex flex-col justify-between space-y-4 group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-[#1a1a2e] border border-[#1f1f2e] group-hover:border-[#00f5ff]/50 transition-colors">
                    {getProjectIcon(project)}
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1a1a2e] text-[#00ff9d] border border-[#1f1f2e]">
                    {project.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#e0e0e0] group-hover:text-[#00f5ff] transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <div className="text-[11px] font-mono text-[#7c3aed] mt-0.5 line-clamp-1">
                    {project.tagline}
                  </div>
                </div>

                <p className="text-xs text-[#a0a0b0] leading-relaxed line-clamp-3">
                  {project.overview}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#1a1a2e] text-[10px] font-mono text-[#a0a0b0]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono text-[#66667a] self-center">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Controls */}
              <div className="pt-3 border-t border-[#1f1f2e] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-[#00f5ff] hover:text-[#ff007f] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Inspect Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-mono text-[#a0a0b0] hover:text-[#00f5ff] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Explorer Bottom Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12121a] via-[#161626] to-[#12121a] border border-[#00f5ff]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff] shrink-0">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#e0e0e0]">
                Explore Dev's Repositories on GitHub
              </div>
              <div className="text-xs text-[#a0a0b0]">
                Check out source code, commits, robotics CAD models, and algorithmic problem sets.
              </div>
            </div>
          </div>

          <a
            href="https://github.com/killopgaming"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f5ff] hover:bg-[#00e1eb] text-[#0a0a0f] font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] whitespace-nowrap"
          >
            <Github className="w-4 h-4" />
            <span>Visit github.com/killopgaming</span>
          </a>
        </div>
      </motion.div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-2xl w-full bg-[#12121a] border border-[#1f1f2e] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#1f1f2e] pb-4">
              <div>
                <span className="font-mono text-xs text-[#00f5ff]">{selectedProject.category}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0]">{selectedProject.title}</h3>
                <div className="text-xs text-[#a0a0b0] font-mono mt-1">{selectedProject.tagline}</div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-[#1a1a2e] text-[#a0a0b0] hover:text-[#e0e0e0] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#a0a0b0] leading-relaxed">
              <div>
                <h4 className="font-mono text-xs font-semibold text-[#00f5ff] uppercase">Overview & Purpose</h4>
                <p className="mt-1">{selectedProject.overview}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold text-[#00f5ff] uppercase">Key Highlights</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                  {selectedProject.keyHighlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold text-[#00f5ff] uppercase">Architecture & Implementation</h4>
                <p className="mt-1 text-xs">{selectedProject.deepDive.engineeringSolution}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold text-[#00ff9d] uppercase">Engineering Takeaway</h4>
                <p className="mt-1 text-xs">{selectedProject.deepDive.learningsAndOutcomes}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#1f1f2e]">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f5ff] hover:underline"
              >
                <Github className="w-4 h-4" />
                <span>View Repository on GitHub</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] text-[#e0e0e0] font-mono text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
