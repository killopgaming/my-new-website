import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Copy, Check, Sparkles, Building, User, Briefcase, HelpCircle, Terminal, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { DEV_PROFILE } from '../data/cvData';

export const InquireSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    organisation: '',
    purpose: 'Internship / Job Recruitment',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const purposeOptions = [
    'Internship / Job Recruitment',
    'Robotics & Hardware Collaboration',
    'Web Development / Software Project',
    'Academic Mentorship / Research',
    'Speaking or Workshop Invitation',
    'General Inquiry'
  ];

  const roleSuggestions = [
    'Technical Recruiter',
    'Hiring Manager',
    'Engineering Lead',
    'Startup Founder',
    'Robotics Researcher',
    'Academic Mentor'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`[Inquiry via Portfolio] ${formData.purpose} — ${formData.name || 'Visitor'} (${formData.organisation || 'Independent'})`);
    const bodyContent = `Hello Dev,

I am reaching out to you via your portfolio website inquiry portal.

--- INQUIRER DETAILS ---
Name: ${formData.name}
Email: ${formData.email}
Role: ${formData.role}
Organisation: ${formData.organisation}
Purpose of Contact: ${formData.purpose}

--- MESSAGE / OPPORTUNITY DETAILS ---
${formData.message || '(No extra notes provided)'}

Looking forward to connecting with you.`;

    const body = encodeURIComponent(bodyContent);
    return `mailto:dev.chhangani1@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = generateMailtoUrl();
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const messageText = `To: dev.chhangani1@gmail.com
Subject: [Inquiry via Portfolio] ${formData.purpose} — ${formData.name || 'Visitor'} (${formData.organisation || 'N/A'})

Name: ${formData.name}
Email: ${formData.email}
Role: ${formData.role}
Organisation: ${formData.organisation}
Purpose: ${formData.purpose}

Message:
${formData.message}`;

    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inquire" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a2e] relative bg-[#0a0a0f] terminal-grid">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Section Header with verified numbering '06.' */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1f2e] pb-5">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#00f5ff] flex items-center gap-2">
              <span>06.</span>
              <span className="uppercase tracking-widest text-[#7c3aed]">Recruiter Portal & Direct Dispatch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e0e0e0] tracking-tight">
              Inquire / Recruit Dev
            </h2>
          </div>
          <div className="font-mono text-xs text-[#00ff9d] flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>Direct Channel: dev.chhangani1@gmail.com</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & SLA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#12121a] border border-[#1f1f2e] space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00f5ff]">
                <Terminal className="w-4 h-4" />
                <span>INQUIRY ROUTING CONTRACT</span>
              </div>
              <p className="text-sm text-[#a0a0b0] leading-relaxed">
                Whether you are a recruiter looking for an ambitious young software & robotics intern, a researcher collaborating on 5-DOF hardware, or a team building web tools—your inquiry reaches Dev Chhangani directly.
              </p>

              <div className="space-y-3 pt-3 border-t border-[#1f1f2e] font-mono text-xs">
                <a
                  href="mailto:dev.chhangani1@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0e0e16] hover:bg-[#161624] border border-[#1f1f2e] text-[#e0e0e0] hover:text-[#00f5ff] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00f5ff] shrink-0" />
                  <div className="truncate">
                    <div className="text-[10px] text-[#66667a]">PRIMARY EMAIL:</div>
                    <div className="font-medium">dev.chhangani1@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+916377580643"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0e0e16] hover:bg-[#161624] border border-[#1f1f2e] text-[#e0e0e0] hover:text-[#00ff9d] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00ff9d] shrink-0" />
                  <div>
                    <div className="text-[10px] text-[#66667a]">PHONE / WHATSAPP:</div>
                    <div className="font-medium">+91 6377580643</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e0e16] border border-[#1f1f2e] text-[#e0e0e0]">
                  <MapPin className="w-4 h-4 text-[#7c3aed] shrink-0" />
                  <div>
                    <div className="text-[10px] text-[#66667a]">LOCATION:</div>
                    <div className="font-medium">Jodhpur, Rajasthan, India</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="https://github.com/killopgaming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0e0e16] hover:bg-[#161624] border border-[#1f1f2e] hover:border-[#00f5ff] text-[#e0e0e0] hover:text-[#00f5ff] transition-all"
                  >
                    <Github className="w-4 h-4 text-[#00f5ff]" />
                    <span className="text-[11px] font-semibold">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dev-chhangani-a91b0334a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0e0e16] hover:bg-[#161624] border border-[#1f1f2e] hover:border-[#7c3aed] text-[#e0e0e0] hover:text-[#00f5ff] transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#7c3aed]" />
                    <span className="text-[11px] font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-[#66667a]">
                Expected response latency: &lt; 24 hours.
              </div>
            </div>

            {/* Quick Role Suggestions */}
            <div className="p-4 rounded-xl bg-[#12121a] border border-[#1f1f2e] space-y-2">
              <span className="font-mono text-[11px] text-[#7c3aed] uppercase tracking-wider">
                Common Recruitment Roles:
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {roleSuggestions.map((r, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, role: r }))}
                    className="px-2.5 py-1 rounded bg-[#1a1a2e] hover:bg-[#25253e] text-[11px] font-mono text-[#a0a0b0] hover:text-[#00f5ff] border border-[#1f1f2e] transition-colors cursor-pointer"
                  >
                    + {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Complete Recruiter Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12121a] border border-[#1f1f2e] shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#1f1f2e]">
                  <span className="font-mono text-xs text-[#00f5ff] flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>DISPATCH PROPOSAL / INQUIRY</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#66667a]">
                    Connected to Dev's Inbox
                  </span>
                </div>

                {/* 1. Name & 2. Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#a0a0b0]">
                      Your Name <span className="text-[#00f5ff]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#66667a]" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0e0e16] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] placeholder-[#66667a] focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#a0a0b0]">
                      Your Email Address <span className="text-[#00f5ff]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#66667a]" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0e0e16] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] placeholder-[#66667a] focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Role & 4. Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#a0a0b0]">
                      Your Role / Designation <span className="text-[#00f5ff]">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#66667a]" />
                      <input
                        type="text"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g. Senior Recruiter, Founder"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0e0e16] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] placeholder-[#66667a] focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#a0a0b0]">
                      Organisation / Company <span className="text-[#00f5ff]">*</span>
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#66667a]" />
                      <input
                        type="text"
                        name="organisation"
                        required
                        value={formData.organisation}
                        onChange={handleInputChange}
                        placeholder="e.g. Tech Robotics Corp, University"
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0e0e16] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] placeholder-[#66667a] focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Purpose of Contact */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-[#a0a0b0]">
                    Purpose of Contact <span className="text-[#00f5ff]">*</span>
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0e0e16] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all cursor-pointer"
                  >
                    {purposeOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#0e0e16] text-[#e0e0e0]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Message / Project Proposal Details */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-[#a0a0b0]">
                    Message / Opportunity Details <span className="text-[#00f5ff]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe the internship scope, robotics project, compensation/stipend if applicable, or questions for Dev..."
                    className="w-full p-3 rounded-lg bg-[#0e0e16] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] placeholder-[#66667a] focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                  />
                </div>

                {/* Submission & Helper Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-5 rounded-lg bg-[#00f5ff] hover:bg-[#00e1eb] text-[#0a0a0f] font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Dev</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full sm:w-auto py-3 px-4 rounded-lg bg-[#1a1a2e] hover:bg-[#25253e] border border-[#1f1f2e] text-xs font-mono text-[#e0e0e0] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    title="Copy full message text and details to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#00ff9d]" />
                        <span className="text-[#00ff9d]">Message Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#a0a0b0]" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-xs font-mono text-[#00ff9d] flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>
                      Mail client triggered for dev.chhangani1@gmail.com! If your browser did not open an email app, use "Copy Message" above.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
