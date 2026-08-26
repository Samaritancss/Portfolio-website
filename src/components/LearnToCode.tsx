import React, { useState } from 'react';
import { BookOpen, FileText, Globe, Youtube, Search, Download, ExternalLink, Sparkles, CheckCircle2, Bookmark, Compass, ArrowRight, Play, Eye, Layers } from 'lucide-react';
import { studyResourcesData, selfTaughtRoadmap } from '../data/learnToCodeData';
import { StudyResource, LearningGroup } from '../types';

interface LearnToCodeProps {
  onOpenPDF: (resource: StudyResource) => void;
  onOpenVideo: (resource: StudyResource) => void;
  theme: 'light' | 'dark';
}

export const LearnToCode: React.FC<LearnToCodeProps> = ({ onOpenPDF, onOpenVideo, theme }) => {
  const [activeGroup, setActiveGroup] = useState<LearningGroup>('documents');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['doc-js-handbook', 'vid-traversy-react']);
  const isLight = theme === 'light';

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const documentResources = studyResourcesData.filter((r) => r.groupType === 'document');
  const videoResources = studyResourcesData.filter((r) => r.groupType === 'video');

  const getFilteredList = (list: StudyResource[]) => {
    return list.filter((item) => {
      const query = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        item.topics.some((t) => t.toLowerCase().includes(query))
      );
    });
  };

  return (
    <section
      id="learn-to-code"
      className={`py-24 relative overflow-hidden transition-colors ${
        isLight
          ? 'bg-slate-50/70 border-t border-slate-200/90 text-slate-900'
          : 'bg-slate-950/80 border-t border-slate-800/80 text-slate-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${
              isLight
                ? 'bg-amber-50 border border-amber-200 text-amber-800'
                : 'bg-amber-500/10 border border-amber-500/20 text-amber-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Developer Learning Materials & Library</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}
          >
            Learn to Code Study Hub
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Categorized technical documents, downloadable guides, and high-yield video masterclasses curated during my self-taught transition from Civil Engineering to Software Development.
          </p>

          {/* Group Filter Buttons (Documents vs Videos vs Roadmap) */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-4">
            <button
              id="group-btn-documents"
              onClick={() => setActiveGroup('documents')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${
                activeGroup === 'documents'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                  : isLight
                  ? 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-950" />
              <span>Documents & Guides ({documentResources.length})</span>
            </button>

            <button
              id="group-btn-videos"
              onClick={() => setActiveGroup('videos')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${
                activeGroup === 'videos'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-500/20 scale-105'
                  : isLight
                  ? 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>Videos & Masterclasses ({videoResources.length})</span>
            </button>

            <button
              id="group-btn-roadmap"
              onClick={() => setActiveGroup('roadmap')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${
                activeGroup === 'roadmap'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 scale-105'
                  : isLight
                  ? 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Compass className="w-4 h-4 text-purple-400" />
              <span>Self-Taught Roadmap</span>
            </button>
          </div>

          {/* Search Input for Materials */}
          {activeGroup !== 'roadmap' && (
            <div className="max-w-md mx-auto pt-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${activeGroup === 'documents' ? 'documents, PDFs, cheatsheets...' : 'video courses, topics, channels...'}`}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all shadow-inner ${
                    isLight
                      ? 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-amber-500'
                      : 'bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-amber-400/60'
                  }`}
                />
              </div>
            </div>
          )}
        </div>

        {/* 1. DOCUMENTS SECTION */}
        {activeGroup === 'documents' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredList(documentResources).map((doc) => {
                const isBookmarked = bookmarkedIds.includes(doc.id);
                const isPdf = doc.category === 'pdf';

                return (
                  <div
                    key={doc.id}
                    className={`p-5 rounded-2xl border shadow-md flex flex-col justify-between space-y-4 transition-all group ${
                      isLight
                        ? 'bg-white border-slate-200/90 hover:border-amber-400 hover:shadow-lg'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                            isPdf
                              ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                              : 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30'
                          }`}
                        >
                          {isPdf ? <FileText className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                          <span>{isPdf ? 'PDF Guide / Cheatsheet' : 'Documentation'}</span>
                        </span>

                        <button
                          onClick={() => toggleBookmark(doc.id)}
                          aria-label="Bookmark resource"
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                            isBookmarked
                              ? 'text-amber-500 bg-amber-500/10'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                        </button>
                      </div>

                      <h3
                        className={`text-base font-bold transition-colors leading-snug ${
                          isLight ? 'text-slate-900 group-hover:text-amber-600' : 'text-white group-hover:text-amber-300'
                        }`}
                      >
                        {doc.title}
                      </h3>
                      <p className={`text-xs font-medium mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {doc.author} • <span className="font-mono">{doc.durationOrPages}</span>
                      </p>

                      <p className={`text-xs mt-2.5 leading-relaxed line-clamp-3 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                        {doc.description}
                      </p>

                      {/* Topic Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3">
                        {doc.topics.slice(0, 3).map((topic, i) => (
                          <span
                            key={i}
                            className={`px-2 py-0.5 rounded text-[10px] border ${
                              isLight
                                ? 'bg-slate-50 text-slate-600 border-slate-200'
                                : 'bg-slate-950 text-slate-400 border-slate-800'
                            }`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons for Documents */}
                    <div className={`pt-3 border-t flex items-center gap-2 ${isLight ? 'border-slate-100' : 'border-slate-800/80'}`}>
                      <button
                        onClick={() => onOpenPDF(doc)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-300 border border-amber-500/30 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Document</span>
                      </button>

                      {isPdf ? (
                        <button
                          onClick={() => onOpenPDF(doc)}
                          title="Download PDF"
                          className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                            isLight
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                          }`}
                        >
                          <Download className="w-3.5 h-3.5 text-amber-600" />
                        </button>
                      ) : (
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noreferrer"
                          title="Open External Docs"
                          className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                            isLight
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                          }`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. VIDEOS SECTION */}
        {activeGroup === 'videos' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredList(videoResources).map((vid) => {
                const isBookmarked = bookmarkedIds.includes(vid.id);

                return (
                  <div
                    key={vid.id}
                    className={`p-5 rounded-2xl border shadow-md flex flex-col justify-between space-y-4 transition-all group ${
                      isLight
                        ? 'bg-white border-slate-200/90 hover:border-red-400 hover:shadow-lg'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-red-500/10 text-red-600 border border-red-500/30">
                          <Youtube className="w-3.5 h-3.5" />
                          <span>Video Masterclass</span>
                        </span>

                        <button
                          onClick={() => toggleBookmark(vid.id)}
                          aria-label="Bookmark video"
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                            isBookmarked
                              ? 'text-red-500 bg-red-500/10'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-red-500' : ''}`} />
                        </button>
                      </div>

                      <h3
                        className={`text-base font-bold transition-colors leading-snug ${
                          isLight ? 'text-slate-900 group-hover:text-red-600' : 'text-white group-hover:text-red-400'
                        }`}
                      >
                        {vid.title}
                      </h3>
                      <p className={`text-xs font-medium mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {vid.author} • <span className="font-mono text-red-500 font-semibold">{vid.durationOrPages}</span>
                      </p>

                      <p className={`text-xs mt-2.5 leading-relaxed line-clamp-3 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                        {vid.description}
                      </p>

                      {/* Topic Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3">
                        {vid.topics.slice(0, 3).map((topic, i) => (
                          <span
                            key={i}
                            className={`px-2 py-0.5 rounded text-[10px] border ${
                              isLight
                                ? 'bg-slate-50 text-slate-600 border-slate-200'
                                : 'bg-slate-950 text-slate-400 border-slate-800'
                            }`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons for Videos */}
                    <div className={`pt-3 border-t flex items-center gap-2 ${isLight ? 'border-slate-100' : 'border-slate-800/80'}`}>
                      <button
                        onClick={() => onOpenVideo(vid)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-sm transition-colors cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Video</span>
                      </button>

                      <a
                        href={vid.url}
                        target="_blank"
                        rel="noreferrer"
                        title="Open on YouTube"
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-red-600" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. ROADMAP SECTION */}
        {activeGroup === 'roadmap' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div
              className={`p-6 rounded-3xl border space-y-3 shadow-md ${
                isLight ? 'bg-purple-50/60 border-purple-200' : 'bg-slate-900/90 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between border-b border-purple-200/60 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  Engineering to Frontend Developer Blueprint
                </span>
                <span className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  100% Self-Directed Schedule
                </span>
              </div>
              <p className={`text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Transitioning into software engineering requires strict daily consistency, project-based milestones, and treating software architecture with physical engineering rigor.
              </p>
            </div>

            <div className="space-y-4">
              {selfTaughtRoadmap.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border space-y-3 transition-colors ${
                    isLight
                      ? 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-purple-500/10 text-purple-600 border border-purple-500/30">
                        {item.phase}
                      </span>
                      <h3 className={`font-bold text-base ${isLight ? 'text-slate-950' : 'text-white'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                        isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-950 text-slate-400'
                      }`}
                    >
                      {item.duration}
                    </span>
                  </div>

                  <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.coreSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                          isLight
                            ? 'bg-slate-50 text-blue-700 border-slate-200'
                            : 'bg-slate-950 text-cyan-300 border border-slate-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`pt-2 border-t text-xs flex items-start gap-2 ${
                      isLight ? 'border-slate-100 text-slate-600' : 'border-slate-800/80 text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className={isLight ? 'text-slate-900' : 'text-slate-200'}>
                        Milestone:
                      </strong>{' '}
                      {item.milestoneProject}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
