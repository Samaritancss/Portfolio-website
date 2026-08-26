import React, { useState } from 'react';
import { X, Play, Github, ExternalLink, Sparkles, CheckCircle2, Video, Code2, Layers, Cpu, ShieldCheck, ArrowRight, MonitorPlay, Send, RefreshCw, Smartphone, Laptop, Search, Star, DollarSign, Home, Film, Bot } from 'lucide-react';
import { Project } from '../types';
import { ProjectVideoPlayer } from './ProjectVideoPlayer';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  theme?: 'light' | 'dark';
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  theme = 'light'
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'video' | 'architecture' | 'screenshots'>('demo');
  const [selectedScreenshot, setSelectedScreenshot] = useState<string>('');

  // Interactive Live Demo states per project
  const [chatPrompt, setChatPrompt] = useState('How can I optimize React components for 60fps rendering?');
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const [cryptoSearch, setCryptoSearch] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  const [propertyFilter, setPropertyFilter] = useState('All');
  const [movieQuery, setMovieQuery] = useState('Inception');

  if (!project) return null;

  const isLight = theme === 'light';
  const screenshots = project.screenshots || [project.image];
  const activeImage = selectedScreenshot || screenshots[0];

  // Simulated AI generator for Gemini Clone demo
  const handleRunAiDemo = () => {
    if (!chatPrompt) return;
    setIsGenerating(true);
    setChatResponse('');
    const fullText = `### Nat's Gemini Workspace Response:\n\nTo achieve **60 FPS React rendering**, adhere to these structural engineering rules:\n\n1. **Memoize Expensive Renders**: Utilize \`React.memo\` for leaf components in long lists.\n2. **Virtualize Scrollable Arrays**: Implement virtual windows for large DOM sets (100+ items).\n3. **Debounce User Input**: Decouple high-frequency keystroke events from state tree recalculations.\n4. **Web Workers for Intensive Math**: Offload cryptographic hashing or heavy sorting off the UI thread.`;

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setChatResponse(fullText.slice(0, i + 3));
        i += 3;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 25);
  };

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className={`relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-slate-900 border-slate-700 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isLight
              ? 'bg-white/95 border-slate-200 shadow-sm'
              : 'bg-slate-900/95 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                {project.category}
              </span>
              <h2 className={`text-lg sm:text-xl font-extrabold leading-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-all cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Review Code</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close project modal"
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isLight ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div
          className={`flex items-center gap-2 px-6 py-2.5 border-b text-xs font-semibold ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          {[
            { id: 'demo', label: 'Live Interactive Playground', icon: <MonitorPlay className="w-3.5 h-3.5 text-blue-500" /> },
            { id: 'screenshots', label: 'Screenshots & Gallery', icon: <Layers className="w-3.5 h-3.5 text-emerald-500" /> },
            { id: 'video', label: 'Simulated Video Walkthrough', icon: <Video className="w-3.5 h-3.5 text-purple-500" /> },
            { id: 'architecture', label: 'Civil Eng Architecture & Code', icon: <Code2 className="w-3.5 h-3.5 text-amber-500" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === tab.id
                  ? isLight
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'bg-blue-600/30 text-cyan-300 border border-blue-500/40'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {/* TAB 1: LIVE INTERACTIVE PLAYGROUND */}
          {activeTab === 'demo' && (
            <div className="space-y-6">
              {/* Project Overview Banner */}
              <div
                className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/60 border-slate-700'
                }`}
              >
                <div>
                  <h3 className={`font-bold text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {project.tagline}
                  </h3>
                  <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm shrink-0"
                >
                  GitHub Repository →
                </a>
              </div>

              {/* SPECIFIC INTERACTIVE DEMO ACCORDING TO PROJECT */}
              {project.id === 'gemini-clone' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 text-slate-100 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xs text-white">
                        ✦
                      </div>
                      <span className="font-bold text-sm text-cyan-300">
                        Gemini AI Workspace Simulation (Nat's Workspace)
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      Live Token Engine
                    </span>
                  </div>

                  {/* Prompt Selector Presets */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-slate-400 font-medium">Quick Prompts:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'How can I optimize React components for 60fps rendering?',
                        'Suggest clean color palettes for dark mode dashboards',
                        'Write a Python script for crypto price volatility calculations',
                        'Explain Civil Engineering structural integrity in software design'
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => setChatPrompt(preset)}
                          className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors text-left"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Prompt Input Bar */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatPrompt}
                      onChange={(e) => setChatPrompt(e.target.value)}
                      placeholder="Ask Nat's Gemini Clone anything..."
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      onClick={handleRunAiDemo}
                      disabled={isGenerating}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isGenerating ? 'Streaming...' : 'Generate'}</span>
                    </button>
                  </div>

                  {/* Streaming Output Display */}
                  {(chatResponse || isGenerating) && (
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                        <span className="flex items-center gap-1 text-cyan-400">
                          <Sparkles className="w-3.5 h-3.5" /> Gemini 2.5 Flash Engine Stream
                        </span>
                        <span className="text-[10px] text-slate-500">35 ms / token</span>
                      </div>
                      <div className="text-slate-200 whitespace-pre-line leading-relaxed">
                        {chatResponse}
                        {isGenerating && <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.id === 'crypto-tracker' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 text-slate-100 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-white">
                        Crypto Market Live Intelligence Feed
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">
                      ● Live Real-Time Feed
                    </span>
                  </div>

                  {/* Quick Coin List matching the user's project screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { name: 'Bitcoin', symbol: 'BTC', price: '$64,819.26', change: '+1.10%', up: true },
                      { name: 'Ethereum', symbol: 'ETH', price: '$1,914.60', change: '+0.30%', up: true },
                      { name: 'Tether', symbol: 'USDT', price: '$1.00', change: '-0.02%', up: false },
                      { name: 'Dogecoin', symbol: 'DOGE', price: '$0.091', change: '+2.45%', up: true },
                    ].map((coin) => (
                      <div
                        key={coin.symbol}
                        className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-xs">{coin.name}</span>
                          <span className="text-[10px] font-mono text-slate-400">{coin.symbol}</span>
                        </div>
                        <div className="text-base font-extrabold text-white font-mono">{coin.price}</div>
                        <div
                          className={`text-xs font-mono font-semibold flex items-center gap-1 ${
                            coin.up ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          <span>{coin.change}</span>
                          <span className="text-[10px] text-slate-400">(24h)</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Currency Converter */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <span className="text-slate-300">
                      Convert 1.00 BTC to Ghana Cedi (GHS):
                    </span>
                    <span className="font-bold text-cyan-300 font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                      ≈ GH₵ 1,024,144.30
                    </span>
                  </div>
                </div>
              )}

              {project.id === 'real-estate-website' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 text-slate-100 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        <Home className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-white">
                        Afri Homes: Ghana & Pan-African Real Estate Portal
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400">
                      East Legon & Cantonments
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-white block">
                        5-Bedroom Luxury Villa
                      </span>
                      <p className="text-[11px] text-slate-400">East Legon, Accra • With Infinity Pool</p>
                      <div className="text-sm font-extrabold text-amber-400 font-mono">$650,000</div>
                      <button className="w-full py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px]">
                        Schedule Tour
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-white block">
                        Modern 3-Bed Penthouse
                      </span>
                      <p className="text-[11px] text-slate-400">Airport Residential, Accra</p>
                      <div className="text-sm font-extrabold text-amber-400 font-mono">$380,000</div>
                      <button className="w-full py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px]">
                        Schedule Tour
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-white block">
                        Verified Prime Titled Land
                      </span>
                      <p className="text-[11px] text-slate-400">Cantonments & Osu, Accra</p>
                      <div className="text-sm font-extrabold text-amber-400 font-mono">$220,000 / Acre</div>
                      <button className="w-full py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px]">
                        Verify Deed
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'movies-finder' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 text-slate-100 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        <Film className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-white">
                        TV Time / React Movies Finder
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-rose-400">
                      IMDb Rated 8.4+
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Inception</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">★ 8.8</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Christopher Nolan • Sci-Fi / Action</p>
                      <p className="text-[11px] text-slate-300">A thief who steals corporate secrets through dream-sharing technology.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Interstellar</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">★ 8.7</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Christopher Nolan • Adventure / Drama</p>
                      <p className="text-[11px] text-slate-300">A team of explorers travel through a wormhole in space.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">The Dark Knight</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">★ 9.0</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Christopher Nolan • Action / Crime</p>
                      <p className="text-[11px] text-slate-300">When the menace known as the Joker wreaks havoc on Gotham.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SCREENSHOTS & GALLERY */}
          {activeTab === 'screenshots' && (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/10] shadow-2xl">
                <img
                  src={activeImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {screenshots.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedScreenshot(imgUrl)}
                    className={`relative w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImage === imgUrl ? 'border-blue-500 shadow-md scale-105' : 'border-slate-800 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Screenshot ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SIMULATED VIDEO WALKTHROUGH */}
          {activeTab === 'video' && (
            <div className="space-y-4">
              <ProjectVideoPlayer project={project} theme={theme} />
            </div>
          )}

          {/* TAB 4: ARCHITECTURE & ENGINEERING */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 text-xs leading-relaxed">
              <div
                className={`p-4 rounded-2xl border space-y-2 ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}
              >
                <h4 className="font-bold text-sm text-blue-600 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Civil Engineering & Architecture Foundations
                </h4>
                <p className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                  Nathaniel treats software development with physical structural rigor. Every system is broken into modular load-bearing services, atomic UI elements, and hardened data pipelines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-2xl border space-y-2 ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <span className="font-bold text-slate-900 dark:text-white block text-sm">
                    Structural Best Practices:
                  </span>
                  <ul className="space-y-2">
                    {project.architecture.map((arch, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`p-4 rounded-2xl border space-y-2 ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <span className="font-bold text-slate-900 dark:text-white block text-sm">
                    Complex Problems Overcome:
                  </span>
                  <ul className="space-y-2">
                    {project.challengesSolved.map((cs, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{cs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          className={`px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-slate-900/90 border-slate-800 text-slate-400'
          }`}
        >
          <span>Nathaniel Abeka Amartey • Open Source Code on GitHub</span>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Open GitHub Repo
            </a>
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl font-semibold border transition-colors ${
                isLight ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
