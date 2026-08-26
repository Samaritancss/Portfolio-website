import React, { useState } from 'react';
import { Layers, Play, Github, ExternalLink, Sparkles, Filter, CheckCircle2, Video, Code2, Eye, Compass, Info, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import { ProjectVideoPlayer } from './ProjectVideoPlayer';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  theme: 'light' | 'dark';
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideoProjectId, setActiveVideoProjectId] = useState<string | null>(null);
  const isLight = theme === 'light';

  const categories = [
    'All',
    'Full Stack / AI',
    'Fintech / Web3',
    'Real Estate / Marketplace',
    'Entertainment / API'
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const activeVideoProject = projectsData.find((p) => p.id === activeVideoProjectId);

  return (
    <section
      id="portfolio"
      className={`py-24 relative overflow-hidden transition-colors ${
        isLight
          ? 'bg-slate-50/80 border-t border-slate-200/90 text-slate-900'
          : 'bg-slate-950 border-t border-slate-800/80 text-slate-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${
              isLight
                ? 'bg-blue-50 border border-blue-200 text-blue-800'
                : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Video Showcase & Real Screenshots</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}
          >
            Featured Portfolio of Work
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Explore the 4 flagship web applications: Gemini Clone, Crypto Currency Tracker, Real Estate Portal, and Movies Finder. Click any project to watch simulated video walkthroughs or inspect live code.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? isLight
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold'
                      : 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : isLight
                    ? 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Global GitHub Repositories Banner Link */}
        <div
          className={`mb-10 p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isLight
              ? 'bg-white border-slate-200/90 shadow-sm'
              : 'bg-slate-900/80 border-slate-800 shadow-xl'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 border border-purple-500/30">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-xs font-bold block ${isLight ? 'text-slate-900' : 'text-white'}`}>
                GitHub Repository Hub: @Samaritancss
              </span>
              <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                All projects are open-source with clean commit histories and setup guides.
              </span>
            </div>
          </div>

          <a
            href="https://github.com/Samaritancss?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700 shadow-sm hover:scale-105 transition-all cursor-pointer shrink-0"
          >
            <span>Review Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg ${
                isLight
                  ? 'bg-white/95 border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10'
                  : 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10'
              }`}
            >
              <div>
                {/* Project Image & Video Simulation Launcher */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Video Duration Badge & Interactive Trigger */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => setActiveVideoProjectId(project.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-105"
                      title="Play Video Walkthrough"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Video Demo ({project.videoDuration})</span>
                    </button>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-1 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Project Body Info */}
                <div className="p-6 space-y-4">
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        isLight ? 'text-blue-700' : 'text-cyan-400'
                      }`}
                    >
                      Core Architecture & Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <div
                          key={i}
                          className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className={`text-[11px] ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border ${
                          isLight
                            ? 'bg-slate-100 text-slate-800 border-slate-200'
                            : 'bg-slate-950 text-slate-300 border-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Strip */}
                  <div
                    className={`grid grid-cols-4 gap-2 pt-3 border-t text-center ${
                      isLight ? 'border-slate-100' : 'border-slate-800'
                    }`}
                  >
                    {project.metrics.map((metric, i) => (
                      <div key={i}>
                        <div
                          className={`text-xs font-bold font-mono ${
                            isLight ? 'text-blue-600' : 'text-cyan-400'
                          }`}
                        >
                          {metric.value}
                        </div>
                        <div
                          className={`text-[10px] truncate ${
                            isLight ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div
                className={`p-6 pt-0 flex flex-wrap gap-2.5 items-center justify-between border-t ${
                  isLight ? 'border-slate-100' : 'border-slate-800/80'
                }`}
              >
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:brightness-110 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Deep Dive & Interactive Demo</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <Github className="w-3.5 h-3.5 text-purple-500" />
                  <span>GitHub Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Standalone Video Player Modal when user clicks "Video Demo" */}
        {activeVideoProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveVideoProjectId(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-cyan-300 border border-blue-500/40">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Interactive Video Demonstration
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {activeVideoProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveVideoProjectId(null)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Video
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <ProjectVideoPlayer project={activeVideoProject} theme={theme} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
