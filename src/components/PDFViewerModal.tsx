import React, { useState } from 'react';
import { X, Download, BookOpen, CheckCircle, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { StudyResource } from '../types';

interface PDFViewerModalProps {
  resource: StudyResource | null;
  onClose: () => void;
  theme?: 'light' | 'dark';
}

export const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ resource, onClose, theme = 'light' }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'summary'>('overview');
  const isLight = theme === 'light';

  if (!resource) return null;

  const handleDownload = () => {
    setDownloaded(true);
    const element = document.createElement('a');
    const file = new Blob([
      `=== ${resource.title} ===\nAuthor: ${resource.author}\nTag: ${resource.tag}\n\nKey Concepts Covered:\n${resource.topics.map((t) => `- ${t}`).join('\n')}\n\nCurated for Nathaniel Abeka Amartey's Remote Developer Study Hub.\nGitHub: https://github.com/Samaritancss\nLinkedIn: https://www.linkedin.com/in/nathaniel-amartey-0ba2b626b\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = resource.pdfDownloadName || `${resource.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div
      id="pdf-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="pdf-modal-container"
        className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
          isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-700 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isLight ? 'bg-white/95 border-slate-200' : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                Study Guide PDF & Cheatsheet
              </span>
              <h3 className={`text-lg font-bold leading-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
                {resource.title}
              </h3>
            </div>
          </div>
          <button
            id="close-pdf-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              isLight ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-slate-800 text-slate-400'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div
          className={`flex items-center gap-2 px-6 py-2.5 border-b text-xs font-semibold ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800'
          }`}
        >
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Scope
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'content'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Key Chapters & Takeaways
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'summary'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : isLight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Self-Taught Notes
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-800/60 border-slate-700 text-slate-300'
                }`}
              >
                <h4 className="font-bold mb-1 flex items-center gap-2 text-amber-600">
                  <Sparkles className="w-4 h-4" /> Document Summary
                </h4>
                <p>{resource.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      isLight ? 'bg-white text-slate-700 border border-slate-200' : 'bg-slate-700/60 text-slate-300'
                    }`}
                  >
                    Format: {resource.durationOrPages || 'Cheatsheet PDF'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-700 border border-amber-500/30">
                    Category: {resource.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-700 border border-emerald-500/30">
                    Level: Beginner to Advanced
                  </span>
                </div>
              </div>

              <div>
                <h4 className={`font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  Core Topics Mastered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {resource.topics.map((topic, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${
                        isLight ? 'bg-white border-slate-200' : 'bg-slate-800/40 border-slate-800'
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className={`text-xs font-medium ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-3">
              <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800/40 border-slate-800'}`}>
                <h5 className={`font-bold text-xs sm:text-sm mb-1 ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                  1. Conceptual Foundations & Architecture
                </h5>
                <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Understanding fundamental execution contexts, scope hierarchies, and asynchronous event loops.
                </p>
              </div>
              <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800/40 border-slate-800'}`}>
                <h5 className={`font-bold text-xs sm:text-sm mb-1 ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                  2. Practical Application & Real-World Code Patterns
                </h5>
                <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Writing testable, decoupled components, custom hooks, and defensive error-handling routines.
                </p>
              </div>
              <div className={`p-3.5 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-800/40 border-slate-800'}`}>
                <h5 className={`font-bold text-xs sm:text-sm mb-1 ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                  3. Performance Optimization & Best Practices
                </h5>
                <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Minimizing layout thrashing, optimizing bundle size, and ensuring 60 FPS user interactions.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'summary' && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-slate-800 space-y-3">
              <h4 className="font-bold text-amber-900">
                Nathaniel's Personal Takeaway for Remote Teams:
              </h4>
              <p className="text-xs leading-relaxed text-amber-950">
                "Coming from a Civil Engineering background, this material reinforced the analogy between structural stability and modular frontend architecture. Just like load-bearing beams require calculated reinforcement, frontend code requires decoupled state management, clean typing, and predictable data flow."
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-slate-900/90 border-slate-800 text-slate-400'
          }`}
        >
          <div className="text-xs">
            Curated in Nathaniel's Remote Engineering Library
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                isLight ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              Close
            </button>
            <button
              id="download-pdf-guide-btn"
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition-all cursor-pointer"
            >
              {downloaded ? (
                <>
                  <CheckCircle className="w-4 h-4" /> Downloaded Guide!
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" /> Download Cheatsheet (.pdf)
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
