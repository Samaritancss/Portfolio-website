import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles, Layers, BookOpen, User, Code2 } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
  profileImage: string;
}

export const Footer: React.FC<FooterProps> = ({ theme, profileImage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const isLight = theme === 'light';
  const linkedInUrl =
    'https://www.linkedin.com/in/nathaniel-amartey-0ba2b626b?utm_source=share_via&utm_content=profile&utm_medium=member_android';
  const githubUrl = 'https://github.com/Samaritancss';
  const reposUrl = 'https://github.com/Samaritancss?tab=repositories';
  const emailAddress = 'nathanielabeka03@gmail.com';

  return (
    <footer
      className={`border-t text-xs py-12 relative transition-colors ${
        isLight
          ? 'bg-white border-slate-200 text-slate-600'
          : 'bg-slate-950 border-slate-800/80 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
            isLight ? 'border-slate-100' : 'border-slate-800/80'
          }`}
        >
          {/* Brand & Tagline with Avatar */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-blue-600 to-purple-600">
                <img
                  src={profileImage}
                  alt="Nathaniel Amartey"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className={`font-bold text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Nathaniel Abeka Amartey
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-semibold">
                Remote Ready
              </span>
            </div>
            <p className={`text-xs max-w-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Frontend Developer & Software Engineer • BSc Civil Engineering Background
            </p>
          </div>

          {/* Social Contact Icons at Bottom */}
          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-purple-600 border-slate-200 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800 hover:border-purple-500/40'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-blue-600 border-slate-200 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800 hover:border-blue-500/40'
              }`}
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              aria-label="Email Nathaniel"
              className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-cyan-600 border-slate-200 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className={`p-2.5 rounded-xl border transition-all hover:scale-110 ml-2 cursor-pointer ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border-slate-800'
              }`}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Links & Attribution */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
            isLight ? 'text-slate-500' : 'text-slate-500'
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Me</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#learn-to-code" className="hover:text-blue-600 transition-colors">Learn to Code</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a
              href={reposUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline font-mono font-semibold"
            >
              GitHub Repositories
            </a>
          </div>

          <div>
            Crafted for Remote Engineering Excellence • {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};
