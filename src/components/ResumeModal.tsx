import React, { useState } from 'react';
import { X, Download, Printer, CheckCircle, Mail, Globe, Github, Linkedin, MapPin, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'light' | 'dark';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, theme = 'light' }) => {
  const [downloaded, setDownloaded] = useState(false);
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloaded(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    const resumeContent = `=====================================================
NATHANIEL ABEKA AMARTEY
Frontend Developer | React & JavaScript Engineer
Email: nathanielabeka03@gmail.com
LinkedIn: https://www.linkedin.com/in/nathaniel-amartey-0ba2b626b
GitHub: https://github.com/Samaritancss
Repositories: https://github.com/Samaritancss?tab=repositories
Location: Accra, Ghana (GMT/UTC+0) • 100% Remote Worldwide
=====================================================

PROFESSIONAL SUMMARY:
High-achieving, self-taught Frontend Developer with a BSc in Civil Engineering.
Brings engineering discipline, mathematical problem-solving, and structural rigor 
into building responsive, accessible, and high-performance web applications.
Specialized in React, Modern JavaScript (ES6+), Tailwind CSS, Python, and Git workflows.
Ready to contribute immediately to asynchronous, distributed engineering teams.

CORE TECHNICAL SKILLS:
- Languages & Frameworks: HTML5, CSS3, JavaScript (ES6+), React (18/19), Python, Tailwind CSS, TypeScript
- Tools & Workflows: Git, GitHub, RESTful APIs, Vite, LocalStorage, DevTools, Motion
- Engineering Competencies: Component Architecture, State Management, Responsive Design, WCAG AA Accessibility, Algorithmic Logic

KEY FEATURED PROJECTS:
1. Gemini AI Workspace Clone (React, Tailwind, Motion, Markdown)
   - Real-time token-by-token streaming AI chat interface with syntax highlighting & prompt presets.
   - Code: https://github.com/Samaritancss?tab=repositories

2. Crypto Currency Tracker & Analytics (React, REST APIs, Python Analytics, Tailwind)
   - Live market intelligence dashboard with interactive sparkline charts and portfolio tracking.
   - Code: https://github.com/Samaritancss?tab=repositories

3. Afri Homes: Ghana & Pan-African Real Estate Portal (React, Tailwind CSS, Responsive Grid)
   - Architectural property discovery portal with mortgage calculator and interactive search filters.
   - Code: https://github.com/Samaritancss?tab=repositories

4. TV Time / React Movies Finder (React, TMDB API, Debounce Search, LocalStorage)
   - Cinematic discovery engine with live debounced search, trailer previews, and saved watchlist.
   - Code: https://github.com/Samaritancss?tab=repositories

EDUCATION & BACKGROUND:
- Bachelor of Science (BSc) in Civil Engineering
- Self-Taught Software Engineer & Modern Frontend Specialization

REMOTE WORK CAPABILITIES:
- 100% Remote Ready: Dedicated high-speed workspace, fluent English communication.
- Asynchronous Excellence: Clear pull requests, atomic git commits, and disciplined documentation.
=====================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Nathaniel_Abeka_Amartey_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
          isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b sticky top-0 z-20 ${
            isLight ? 'bg-white/95 border-slate-200' : 'bg-slate-900/95 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Curriculum Vitae Preview • Ready for Remote Roles
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Resume"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                isLight ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              id="download-resume-btn"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all cursor-pointer"
            >
              {downloaded ? <CheckCircle className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'Downloaded!' : 'Download CV'}</span>
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-xl transition-colors ml-1 cursor-pointer ${
                isLight ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div
          className={`p-6 sm:p-10 overflow-y-auto space-y-8 text-sm ${
            isLight ? 'bg-slate-50/50 text-slate-700' : 'bg-slate-950/60 text-slate-300'
          }`}
        >
          {/* Header */}
          <div className={`border-b pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
            <div>
              <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
                Nathaniel Abeka Amartey
              </h1>
              <p className="text-base text-blue-600 font-semibold mt-1 flex items-center gap-2">
                <span>Frontend Developer</span>
                <span className="text-slate-400">•</span>
                <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>Civil Engineering Mindset</span>
              </p>
              <p className={`text-xs mt-2 max-w-xl ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                BSc Civil Engineering background applying structural precision, mathematical discipline, and systematic problem solving to create slick, high-performing frontend web applications.
              </p>
            </div>

            <div
              className={`flex flex-col gap-1.5 text-xs p-3.5 rounded-2xl border shrink-0 ${
                isLight ? 'bg-white border-slate-200 text-slate-700 shadow-sm' : 'bg-slate-900/80 border-slate-800 text-slate-300'
              }`}
            >
              <a
                href="mailto:nathanielabeka03@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>nathanielabeka03@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nathaniel-amartey-0ba2b626b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/Samaritancss"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-purple-600" />
                <span>github.com/Samaritancss</span>
              </a>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Accra, Ghana (GMT) • 100% Remote</span>
              </div>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Skills & Tooling
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'}`}>
                <span className="font-bold block mb-1 text-blue-600">Frontend Stack</span>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>HTML5 (Semantic & a11y), CSS3, Tailwind CSS, JavaScript (ES6+), React 18/19, Motion</p>
              </div>
              <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'}`}>
                <span className="font-bold block mb-1 text-emerald-600">Programming & Logic</span>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>Python (Algorithms, Data Structs, Automation), TypeScript basics, REST APIs, JSON</p>
              </div>
              <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'}`}>
                <span className="font-bold block mb-1 text-purple-600">Tools & Workflow</span>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>Git, GitHub (Branching, PRs, Reviews), Vite, Chrome DevTools, LocalStorage, VS Code</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Key Featured Projects
            </h2>
            <div className="space-y-3.5 text-xs">
              <div className={`p-4 rounded-2xl border space-y-1.5 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Gemini AI Workspace Clone
                  </h3>
                  <span className="text-blue-600 font-mono font-semibold">React • Tailwind • Motion</span>
                </div>
                <p className={isLight ? 'text-slate-600' : 'text-slate-300'}>
                  High-fidelity AI workspace with token-by-token response streaming, syntax-highlighted code output, prompt presets, and markdown rendering.
                </p>
                <div className="text-slate-400">
                  • Link: <a href="https://github.com/Samaritancss?tab=repositories" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">github.com/Samaritancss</a>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1.5 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Crypto Currency Tracker & Market Intelligence
                  </h3>
                  <span className="text-emerald-600 font-mono font-semibold">React • REST API • Python</span>
                </div>
                <p className={isLight ? 'text-slate-600' : 'text-slate-300'}>
                  Real-time market tracker with live 24h trendlines, interactive sparkline graphs, debounced search across 100+ tokens, and portfolio valuation.
                </p>
                <div className="text-slate-400">
                  • Link: <a href="https://github.com/Samaritancss?tab=repositories" target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline font-medium">github.com/Samaritancss</a>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1.5 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Afri Homes: Ghana & Pan-African Real Estate Portal
                  </h3>
                  <span className="text-amber-600 font-mono font-semibold">React • Tailwind CSS • Grid</span>
                </div>
                <p className={isLight ? 'text-slate-600' : 'text-slate-300'}>
                  Luxury real estate discovery engine with verified Ghana properties, dynamic mortgage amortization calculator, and booking tour inquiry flows.
                </p>
                <div className="text-slate-400">
                  • Link: <a href="https://github.com/Samaritancss?tab=repositories" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline font-medium">github.com/Samaritancss</a>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1.5 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    TV Time / React Movies Finder
                  </h3>
                  <span className="text-rose-600 font-mono font-semibold">React • TMDB API • LocalStorage</span>
                </div>
                <p className={isLight ? 'text-slate-600' : 'text-slate-300'}>
                  Cinematic movie discovery engine featuring debounced instant query search, genre filters, trailer preview player, and persistent offline watchlist.
                </p>
                <div className="text-slate-400">
                  • Link: <a href="https://github.com/Samaritancss?tab=repositories" target="_blank" rel="noreferrer" className="text-rose-600 hover:underline font-medium">github.com/Samaritancss</a>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Transition */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Education & Background
            </h2>
            <div className={`p-4 rounded-2xl border text-xs space-y-2 ${isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'}`}>
              <div className="flex items-center justify-between">
                <span className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Bachelor of Science (BSc) in Civil Engineering
                </span>
                <span className="text-emerald-600 font-semibold">Self-Taught Software Engineer</span>
              </div>
              <p className={isLight ? 'text-slate-600' : 'text-slate-300'}>
                Bridged civil engineering analytical discipline, structural design principles, and mathematical problem-solving into self-taught software and modern frontend development.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`px-6 py-4 border-t flex items-center justify-between text-xs ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-slate-900/95 border-slate-800 text-slate-400'
          }`}
        >
          <span>Nathaniel Abeka Amartey • Open to Remote Full-Time / Contract Frontend Roles</span>
          <button
            onClick={onClose}
            className={`px-4 py-1.5 rounded-xl font-semibold border transition-colors ${
              isLight ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
