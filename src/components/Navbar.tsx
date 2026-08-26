import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Sparkles, Send, Sun, Moon, Palette } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  profileImage: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  activeSection,
  theme,
  onToggleTheme,
  profileImage
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Learn to Code', href: '#learn-to-code', id: 'learn-to-code' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const isLight = theme === 'light';

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-md shadow-slate-200/50 py-3'
            : 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Nathaniel's Photo Mini-Avatar */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={profileImage}
                alt="Nathaniel Abeka Amartey"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-400"></span>
          </div>

          <div className="flex flex-col">
            <span
              className={`text-base font-bold tracking-tight transition-colors flex items-center gap-1.5 ${
                isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-400'
              }`}
            >
              Nathaniel Amartey
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className={isLight ? 'text-emerald-700 font-semibold' : 'text-emerald-400 font-mono'}>
                Remote Frontend Dev
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-1 backdrop-blur-md px-3 py-1.5 rounded-full border shadow-sm ${
            isLight
              ? 'bg-white/80 border-slate-200/90 shadow-slate-200/40'
              : 'bg-slate-900/70 border-slate-800/80 shadow-black/20'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/25 font-bold'
                      : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/90'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons: Theme Switcher, Resume, Hire Me */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Bright/Dark Mode"
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Bright Mode'}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700 shadow-sm'
            }`}
          >
            {isLight ? (
              <>
                <Moon className="w-4 h-4 text-slate-700" />
                <span className="text-[11px] font-medium hidden md:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-medium hidden md:inline">Bright</span>
              </>
            )}
          </button>

          <button
            id="navbar-resume-btn"
            onClick={onOpenResume}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-sm ${
              isLight
                ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-slate-200/40'
                : 'bg-slate-800/90 hover:bg-slate-700 text-slate-200 border-slate-700/80'
            }`}
          >
            <FileText className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:brightness-110 shadow-md shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle Button */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Bright/Dark Mode"
            className={`p-2 rounded-xl border ${
              isLight
                ? 'bg-slate-100 text-slate-800 border-slate-200'
                : 'bg-slate-900 text-amber-300 border-slate-800'
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2 rounded-xl border ${
              isLight
                ? 'bg-white text-slate-800 border-slate-200 shadow-sm'
                : 'bg-slate-900 text-slate-300 border-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-x-4 top-20 rounded-2xl backdrop-blur-2xl border p-5 shadow-2xl space-y-4 animate-fadeIn ${
            isLight
              ? 'bg-white/95 border-slate-200/90 shadow-slate-300/50'
              : 'bg-slate-900/95 border-slate-800 shadow-black/60'
          }`}
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isLight
                    ? 'text-slate-800 hover:bg-blue-50 hover:text-blue-600'
                    : 'text-slate-200 hover:bg-slate-800/80 hover:text-cyan-300'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-400 font-mono">→</span>
              </a>
            ))}
          </div>

          <div className={`pt-3 border-t flex gap-2 ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border ${
                isLight
                  ? 'bg-slate-100 text-slate-800 border-slate-200'
                  : 'bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-blue-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
