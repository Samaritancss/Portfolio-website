import React, { useState } from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Download, CheckCircle2, Globe, Shield, Cpu, MapPin, Layers, Award, Terminal, Code2, Rocket, Clock } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  theme: 'light' | 'dark';
  profileImage: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, theme, profileImage }) => {
  const [activeTab, setActiveTab] = useState<'highlights' | 'engineering' | 'remote'>('highlights');
  const isLight = theme === 'light';

  return (
    <section
      id="home"
      className={`relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden transition-colors ${
        isLight
          ? 'bg-gradient-to-b from-white via-slate-50 to-slate-100/80 text-slate-900'
          : 'bg-slate-950 text-slate-100'
      }`}
    >
      {/* Dynamic Colorful Ambient Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radiant Light Glow Blobs */}
        <div
          className={`absolute -top-24 -left-20 w-[36rem] h-[36rem] rounded-full blur-3xl pointer-events-none transition-opacity ${
            isLight
              ? 'bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-indigo-400/15'
              : 'bg-cyan-500/15'
          }`}
        />
        <div
          className={`absolute top-1/4 right-0 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none transition-opacity ${
            isLight
              ? 'bg-gradient-to-br from-purple-400/15 via-pink-400/10 to-indigo-300/15'
              : 'bg-purple-600/15'
          }`}
        />
        <div
          className={`absolute -bottom-20 left-1/3 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none transition-opacity ${
            isLight ? 'bg-emerald-400/15' : 'bg-emerald-500/10'
          }`}
        />

        {/* Subtle Geometric Cyber Grid Matrix */}
        <div
          className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
            isLight
              ? 'bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)]'
              : 'bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)]'
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Pitch & Credentials */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                  isLight
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-slate-900/90 border border-cyan-500/30 text-cyan-300 shadow-cyan-500/10'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Available for Full-Time & Contract Remote Roles</span>
              </div>

              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                  isLight
                    ? 'bg-blue-50 border border-blue-200 text-blue-800'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Accra, Ghana (GMT/UTC+0)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
                  isLight ? 'text-slate-950' : 'text-white'
                }`}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Nathaniel Abeka Amartey
                </span>
              </h1>
              <p
                className={`text-xl sm:text-2xl font-bold ${
                  isLight ? 'text-slate-800' : 'text-slate-200'
                }`}
              >
                Frontend Developer & Self-Taught Software Engineer
              </p>
            </div>

            {/* Sub-headline / Value Proposition */}
            <p
              className={`text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              With a foundation in <strong className={isLight ? 'text-slate-900' : 'text-slate-200'}>Civil Engineering</strong>, I bring structural discipline, mathematical precision, and rapid problem-solving to crafting <strong className={isLight ? 'text-blue-700' : 'text-cyan-300'}>slick, accessible, and high-performance web applications</strong> in React, Modern JavaScript, Python, and Git.
            </p>

            {/* Engineering Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              <span
                className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-sm border ${
                  isLight
                    ? 'bg-white border-slate-200 text-slate-800'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-blue-600" /> BSc Civil Engineering Mindset
              </span>
              <span
                className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-sm border ${
                  isLight
                    ? 'bg-white border-slate-200 text-slate-800'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-emerald-600" /> Self-Taught Discipline
              </span>
              <span
                className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-sm border ${
                  isLight
                    ? 'bg-white border-slate-200 text-slate-800'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-purple-600" /> 100% Remote Ready
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#portfolio"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:brightness-110 shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#learn-to-code"
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all cursor-pointer shadow-sm ${
                  isLight
                    ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 hover:border-amber-400/60'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700/80 hover:border-cyan-500/40'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Learn to Code Hub</span>
              </a>

              <button
                onClick={onOpenResume}
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm border transition-all cursor-pointer shadow-sm ${
                  isLight
                    ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-800'
                }`}
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t ${isLight ? 'border-slate-200/90' : 'border-slate-800/80'}`}>
              <div className={`p-3 rounded-xl border text-center lg:text-left ${isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-900/40 border-slate-800/60'}`}>
                <div className="text-xl font-extrabold text-blue-600 font-mono">4+</div>
                <div className={`text-[11px] font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Featured Apps</div>
              </div>
              <div className={`p-3 rounded-xl border text-center lg:text-left ${isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-900/40 border-slate-800/60'}`}>
                <div className="text-xl font-extrabold text-emerald-600 font-mono">600+</div>
                <div className={`text-[11px] font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Hours of Code</div>
              </div>
              <div className={`p-3 rounded-xl border text-center lg:text-left ${isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-900/40 border-slate-800/60'}`}>
                <div className="text-xl font-extrabold text-purple-600 font-mono">100%</div>
                <div className={`text-[11px] font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Remote Async</div>
              </div>
              <div className={`p-3 rounded-xl border text-center lg:text-left ${isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-900/40 border-slate-800/60'}`}>
                <div className="text-xl font-extrabold text-amber-600 font-mono">BSc</div>
                <div className={`text-[11px] font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Civil Eng Rigor</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Card & Focus Inspector (NO RAW CODE) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Top: Mini Profile Badge Showcase with Custom Portrait */}
            <div
              className={`p-4 rounded-2xl border backdrop-blur-xl shadow-lg flex items-center gap-4 ${
                isLight
                  ? 'bg-white/95 border-slate-200/90 shadow-slate-200/50'
                  : 'bg-slate-900/90 border-slate-700/80 shadow-black/40'
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-18 h-18 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 shadow-md">
                  <img
                    src={profileImage}
                    alt="Nathaniel Abeka Amartey"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-400"></span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-base truncate ${isLight ? 'text-slate-950' : 'text-white'}`}>
                    Nathaniel Abeka Amartey
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <p className={`text-xs truncate ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Frontend Developer • BSc Civil Engineering
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <a
                    href="https://github.com/Samaritancss"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Samaritancss</span>
                  </a>
                  <span className={isLight ? 'text-slate-300' : 'text-slate-700'}>•</span>
                  <a
                    href="https://www.linkedin.com/in/nathaniel-amartey-0ba2b626b"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Clean Focus Card (Replaced Raw Terminal Code) */}
            <div
              className={`rounded-2xl border shadow-xl overflow-hidden backdrop-blur-xl ${
                isLight
                  ? 'bg-white border-slate-200 shadow-slate-200/60'
                  : 'bg-slate-900/90 border-slate-800 shadow-2xl'
              }`}
            >
              {/* Tab Selector Header */}
              <div
                className={`flex items-center justify-between px-4 py-3 border-b ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5" /> Candidate Focus
                </span>

                <div className="flex gap-1">
                  <button
                    onClick={() => setActiveTab('highlights')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'highlights'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    Specializations
                  </button>
                  <button
                    onClick={() => setActiveTab('engineering')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'engineering'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    Civil Eng Advantage
                  </button>
                  <button
                    onClick={() => setActiveTab('remote')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === 'remote'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : isLight
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    Remote Readiness
                  </button>
                </div>
              </div>

              {/* Tab Content Body */}
              <div className="p-5 space-y-3.5 min-h-[250px] flex flex-col justify-between">
                {activeTab === 'highlights' && (
                  <div className="space-y-3">
                    <div
                      className={`p-3 rounded-xl border flex items-start gap-3 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>
                          Real-Time AI & Streaming Workspaces
                        </h4>
                        <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          Engineered token-by-token streaming response engines with markdown syntax parsing (Gemini Clone).
                        </p>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-xl border flex items-start gap-3 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>
                          Fintech & Live Data Analytics
                        </h4>
                        <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          Debounced search across 100+ assets with live sparklines and Python moving averages (Crypto Tracker).
                        </p>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-xl border flex items-start gap-3 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>
                          Architectural Real Estate Discovery
                        </h4>
                        <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          Dynamic mortgage calculators and verified luxury listings in Accra and Pan-Africa (Afri Homes).
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'engineering' && (
                  <div className="space-y-3">
                    <div
                      className={`p-3.5 rounded-xl border space-y-1.5 ${
                        isLight ? 'bg-purple-50/60 border-purple-200' : 'bg-purple-950/20 border-purple-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold text-xs">
                        <Shield className="w-4 h-4" />
                        <span>Structural Stability Applied to Code</span>
                      </div>
                      <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        "In civil engineering, structures must withstand unpredictable physical forces. In frontend engineering, apps must withstand unstable networks, rapid user inputs, and varied viewports. I design defensively."
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className={`p-2.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'}`}>
                        <span className="font-bold block text-blue-600">Precision Math</span>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>clamp() fluid grids & aspect ratios</span>
                      </div>
                      <div className={`p-2.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'}`}>
                        <span className="font-bold block text-emerald-600">Error Resilience</span>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Defensive UI error boundaries</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'remote' && (
                  <div className="space-y-2.5">
                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <span className={`font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Timezone / Hours:</span>
                      <span className="font-bold text-emerald-600 font-mono">GMT / UTC+0 (4-6h US/EU overlap)</span>
                    </div>

                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <span className={`font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Communication:</span>
                      <span className="font-bold text-blue-600">Proactive & Asynchronous First</span>
                    </div>

                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <span className={`font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Git Workflow:</span>
                      <span className="font-bold text-purple-600 font-mono">Atomic PRs & Conventional Commits</span>
                    </div>

                    <div
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <span className={`font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Setup:</span>
                      <span className="font-bold text-cyan-600">Fiber Internet + Power Backup</span>
                    </div>
                  </div>
                )}

                {/* Card Footer Link */}
                <div className={`pt-3 border-t flex items-center justify-between text-xs ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
                  <span className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Verified in live GitHub repositories
                  </span>
                  <a
                    href="https://github.com/Samaritancss?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>View Repositories →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
