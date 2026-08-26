import React, { useRef, useState } from 'react';
import { User, Award, Compass, Heart, CheckCircle2, ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Building, BookOpen, Layers, Terminal, Camera, RotateCcw } from 'lucide-react';
import defaultProfileImage from '../assets/images/nathaniel_profile_pic_1787750756678.jpg';


interface AboutMeProps {
  onOpenResume: () => void;
  theme: 'light' | 'dark';
  profileImage: string;
  onProfileImageChange: (image: string) => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenResume, theme, profileImage, onProfileImageChange }) => {
  const [activeStoryTab, setActiveStoryTab] = useState<'journey' | 'mindset' | 'remote'>('journey');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isLight = theme === 'light';

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') onProfileImageChange(reader.result);
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const linkedInUrl =
    'https://www.linkedin.com/in/nathaniel-amartey-0ba2b626b?utm_source=share_via&utm_content=profile&utm_medium=member_android';
  const githubUrl = 'https://github.com/Samaritancss';

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors ${
        isLight
          ? 'bg-slate-50/70 border-t border-slate-200/90 text-slate-900'
          : 'bg-slate-950 border-t border-slate-800/80 text-slate-100'
      }`}
    >
      {/* Ambient background light glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${
              isLight
                ? 'bg-blue-50 border border-blue-200 text-blue-800'
                : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Engineering Discipline & Story</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}
          >
            About Nathaniel Abeka Amartey
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Bridging civil engineering structural principles with modern web development to build dependable, high-converting digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Photo Frame & Quick Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative group w-full max-w-md">
              {/* Outer Decorative Gradient Glow Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-60 blur-lg group-hover:opacity-90 transition duration-500"></div>

              {/* Card Container */}
              <div
                className={`relative rounded-3xl p-3 border shadow-2xl overflow-hidden ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-slate-300/50'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                {/* Photo Image with referrer policy */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={profileImage}
                    alt="Nathaniel Abeka Amartey Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Photo Bottom Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs font-semibold font-mono uppercase tracking-wider text-emerald-300">
                        Nathaniel Abeka Amartey
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 mt-0.5 font-medium">
                      BSc. Civil Engineering • Self-Taught Frontend Developer
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-3 rounded-xl border p-3 ${
                    isLight ? 'border-blue-100 bg-blue-50/70' : 'border-cyan-500/20 bg-cyan-500/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className={`flex items-center gap-1.5 text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        <Camera className="h-3.5 w-3.5 text-blue-600" /> Make it yours
                      </p>
                      <p className={`mt-1 text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                        Upload a professional headshot for your portfolio.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700"
                    >
                      Upload photo
                    </button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleProfileImageChange}
                    className="hidden"
                    aria-label="Upload profile photo"
                  />
                  <button
                    type="button"
                    onClick={() => onProfileImageChange(defaultProfileImage)}
                    className={`mt-2 flex items-center gap-1 text-[11px] font-semibold ${isLight ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-white'}`}
                  >
                    <RotateCcw className="h-3 w-3" /> Restore original photo
                  </button>
                </div>

                {/* Social & Contact Mini Bar Below Photo */}
                <div
                  className={`mt-3 p-3 rounded-xl border flex items-center justify-between gap-2 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Profile"
                      className={`p-2 rounded-lg border transition-all ${
                        isLight
                          ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:text-purple-600'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:text-purple-400'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      className={`p-2 rounded-lg border transition-all ${
                        isLight
                          ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:text-blue-600'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:text-blue-400'
                      }`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:nathanielabeka03@gmail.com"
                      aria-label="Email Nathaniel"
                      className={`p-2 rounded-lg border transition-all ${
                        isLight
                          ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:text-cyan-600'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:text-cyan-400'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>

                  <a
                    href="#contact"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:brightness-110 transition-all"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Engineering Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Story Navigation Tabs */}
            <div
              className={`flex flex-wrap gap-2 p-1.5 rounded-2xl border ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'
              }`}
            >
              {[
                { id: 'journey', label: 'Civil Eng to Code', icon: <Building className="w-3.5 h-3.5 text-blue-500" /> },
                { id: 'mindset', label: 'Self-Taught Rigor', icon: <BookOpen className="w-3.5 h-3.5 text-emerald-500" /> },
                { id: 'remote', label: 'Remote Readiness', icon: <Compass className="w-3.5 h-3.5 text-purple-500" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStoryTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeStoryTab === tab.id
                      ? isLight
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Tab Content Panel */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 ${
                isLight
                  ? 'bg-white/95 border-slate-200/90 shadow-slate-200/60'
                  : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              {activeStoryTab === 'journey' && (
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="flex items-center gap-2">
                    <span
                      className={`p-2 rounded-xl border ${
                        isLight
                          ? 'bg-blue-50 text-blue-600 border-blue-200'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }`}
                    >
                      <Building className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className={`font-bold text-lg ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        Structural Precision Meets Web Engineering
                      </h3>
                      <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        BSc in Civil Engineering • Self-Taught Programmer
                      </p>
                    </div>
                  </div>

                  <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    My foundation in <strong className={isLight ? 'text-slate-900' : 'text-white'}>Civil Engineering</strong> trained me in load calculations, structural integrity, modular frameworks, and meticulous project execution. When I transitioned into software development, I recognized that web applications are virtual structures requiring the exact same discipline.
                  </p>

                  <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Instead of steel and concrete, my materials are <strong className="text-blue-600 font-semibold">React, TypeScript, Tailwind CSS, and Python</strong>. Every component is designed to be modular, every state transition is structurally sound, and every interface is built to withstand real-world traffic under diverse network conditions.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className={`block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                          Mathematical Mindset
                        </strong>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                          Comfortable with algorithms, calculations, and performance budgeting.
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className={`block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                          Clean Component Architecture
                        </strong>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                          Decoupled logic, reusable UI blocks, and predictable state lifecycles.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStoryTab === 'mindset' && (
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="flex items-center gap-2">
                    <span
                      className={`p-2 rounded-xl border ${
                        isLight
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      }`}
                    >
                      <BookOpen className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className={`font-bold text-lg ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        The Self-Taught Dev Advantage
                      </h3>
                      <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Curiosity, Relentless Practice & Daily Execution
                      </p>
                    </div>
                  </div>

                  <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Being self-taught means I did not simply follow a syllabus—I taught myself how to master complex technical concepts independently. I read official specifications (MDN, React docs), built end-to-end full-stack projects from scratch, digested technical handbooks, and debugged hundreds of real issues.
                  </p>

                  <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    This makes me exceptionally agile in remote teams. When your team adopts a new library, updates an internal tool, or tackles an unfamiliar API, I ramp up quickly with minimal supervision and maximum accountability.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className={`block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                          Rapid Technical Absorption
                        </strong>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                          Picks up new frameworks, SDKs, and tooling with speed.
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className={`block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                          Continuous Growth
                        </strong>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                          Daily code commits, technical notes, and community sharing.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStoryTab === 'remote' && (
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="flex items-center gap-2">
                    <span
                      className={`p-2 rounded-xl border ${
                        isLight
                          ? 'bg-purple-50 text-purple-600 border-purple-200'
                          : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      }`}
                    >
                      <Compass className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className={`font-bold text-lg ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        Engineered for Global Remote Teams
                      </h3>
                      <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        Asynchronous Communication & Dependability
                      </p>
                    </div>
                  </div>

                  <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Based in Accra, Ghana (GMT / UTC+0), my timezone offers natural overlap with North America (US Eastern/Central), European engineering teams, and APAC markets.
                  </p>

                  <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    I practice proactive communication: concise pull request descriptions, atomic Git commits, recorded Loom/video walkthroughs for UX flows, and respectful asynchronous task handoffs.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className={`block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                          Reliable Infrastructure
                        </strong>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                          Dedicated workstation with stable high-speed internet & backup power.
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className={`block ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                          Clear Documentation
                        </strong>
                        <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>
                          Clean README files, architectural notes, and test plans.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Action Strip */}
              <div
                className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${
                  isLight ? 'border-slate-100' : 'border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-emerald-600">● Open for Remote Roles</span>
                  <span className={isLight ? 'text-slate-400' : 'text-slate-600'}>|</span>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Contract or Full-Time</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenResume}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-sm ${
                      isLight
                        ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    Review Curriculum Vitae
                  </button>
                  <a
                    href="#skills"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all"
                  >
                    Inspect Skills →
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
