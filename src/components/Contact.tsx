import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, Sparkles, MapPin, Globe, Clock, MessageSquare, ArrowRight, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  theme: 'light' | 'dark';
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'Full-Time Remote',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isLight = theme === 'light';

  const emailAddress = 'nathanielabeka03@gmail.com';
  const linkedInUrl =
    'https://www.linkedin.com/in/nathaniel-amartey-0ba2b626b?utm_source=share_via&utm_content=profile&utm_medium=member_android';
  const githubUrl = 'https://github.com/Samaritancss';
  const reposUrl = 'https://github.com/Samaritancss?tab=repositories';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      window.location.href = `mailto:${emailAddress}?subject=Remote Role Inquiry: ${formData.roleType} from ${formData.name}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    }, 800);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors ${
        isLight
          ? 'bg-slate-50/80 border-t border-slate-200/90 text-slate-900'
          : 'bg-slate-950 border-t border-slate-800/80 text-slate-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${
              isLight
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Remote Hire</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}
          >
            Let's Build Something Exceptional
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Looking for a disciplined, self-taught frontend developer with civil engineering problem solving for your remote team? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contacts & Socials with Icons */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div
              className={`p-6 rounded-3xl border shadow-xl space-y-4 ${
                isLight ? 'bg-white border-slate-200 shadow-slate-200/50' : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 border border-blue-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-xs block font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      Direct Email Contact
                    </span>
                    <span className={`text-sm sm:text-base font-bold font-mono break-all ${isLight ? 'text-slate-950' : 'text-white'}`}>
                      {emailAddress}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs border transition-colors cursor-pointer ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs hover:brightness-110 shadow-sm transition-all cursor-pointer"
                >
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* LinkedIn & GitHub Direct Contact Cards with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* LinkedIn */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin-link"
                className={`p-5 rounded-2xl border shadow-md flex flex-col justify-between space-y-3 transition-all group cursor-pointer ${
                  isLight
                    ? 'bg-white hover:bg-blue-50/50 border-slate-200 hover:border-blue-300'
                    : 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:border-blue-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-blue-600 font-semibold">Connect →</span>
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>LinkedIn</h3>
                  <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Nathaniel Amartey</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-github-link"
                className={`p-5 rounded-2xl border shadow-md flex flex-col justify-between space-y-3 transition-all group cursor-pointer ${
                  isLight
                    ? 'bg-white hover:bg-purple-50/50 border-slate-200 hover:border-purple-300'
                    : 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:border-purple-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 border border-purple-500/20 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-purple-600 font-semibold">Follow →</span>
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>GitHub Profile</h3>
                  <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>@Samaritancss</p>
                </div>
              </a>
            </div>

            {/* Repositories Quick Banner */}
            <a
              href={reposUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-4 rounded-2xl border flex items-center justify-between text-xs transition-colors ${
                isLight
                  ? 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="font-medium">Inspect all repositories on GitHub</span>
              </div>
              <span className="text-blue-600 font-semibold font-mono">github.com/Samaritancss</span>
            </a>

            {/* Timezone & Remote Availability Widget */}
            <div
              className={`p-4 rounded-2xl border space-y-2 text-xs ${
                isLight ? 'bg-white border-slate-200 text-slate-600' : 'bg-slate-900/40 border-slate-800/80 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`flex items-center gap-1.5 font-medium ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  <Clock className="w-3.5 h-3.5 text-blue-600" /> Current Timezone: GMT (UTC+0)
                </span>
                <span className="text-emerald-600 font-mono font-bold">● Online & Ready</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Comfortable with flexible scheduling and overlapping 4–6+ hours daily with US Eastern, Central, and European engineering teams.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl border p-6 sm:p-8 shadow-2xl backdrop-blur-xl ${
                isLight
                  ? 'bg-white/95 border-slate-200 shadow-slate-200/50'
                  : 'bg-slate-900/90 border-slate-700/80'
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h3 className={`text-lg font-bold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                  Send a Message or Remote Role Inquiry
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Message Prepared!</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Thank you for reaching out! A direct email prompt has also been initiated. Nathaniel will reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', roleType: 'Full-Time Remote', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor / Hiring Manager"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all shadow-inner ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white'
                            : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all shadow-inner ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white'
                            : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Opportunity Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Full-Time Remote', 'Contract / Freelance', 'Technical Chat'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, roleType: type })}
                          className={`py-2 px-2 text-center rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
                            formData.roleType === type
                              ? 'bg-blue-600 text-white shadow-sm'
                              : isLight
                              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                              : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={`block font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Message / Project Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Nathaniel, we are looking for a frontend developer to join our team..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all shadow-inner resize-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white'
                          : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:brightness-110 shadow-lg shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Send Remote Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
