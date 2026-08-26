import React, { useState } from 'react';
import { X, Play, Youtube, ExternalLink, Sparkles, CheckCircle2, Clock, BookOpen, Share2 } from 'lucide-react';
import { StudyResource } from '../types';

interface VideoViewerModalProps {
  resource: StudyResource | null;
  onClose: () => void;
  theme?: 'light' | 'dark';
}

export const VideoViewerModal: React.FC<VideoViewerModalProps> = ({ resource, onClose, theme = 'light' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const isLight = theme === 'light';

  if (!resource || resource.groupType !== 'video') return null;

  return (
    <div
      id="video-viewer-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="video-viewer-modal-container"
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
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
            <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                Curated Video Masterclass & Crash Course
              </span>
              <h3 className={`text-lg font-bold leading-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
                {resource.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close video modal"
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              isLight ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-slate-800 text-slate-400'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Embedded Video Player + Lesson Insights */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-xl border border-slate-800">
            {resource.videoEmbedId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${resource.videoEmbedId}?autoplay=1&rel=0`}
                title={resource.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center space-y-3">
                <Youtube className="w-16 h-16 text-red-500" />
                <p className="font-bold text-base">{resource.title}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs inline-flex items-center gap-2"
                >
                  <Play className="w-4 h-4" /> Watch Directly on YouTube
                </a>
              </div>
            )}
          </div>

          {/* Video Metadata & Instructor */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Instructor / Creator:</span>
              <p className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>{resource.author}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-600 border border-red-500/20 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {resource.durationOrPages || 'Full Course'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 border border-blue-500/20">
                {resource.tag}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h4 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Course Overview & What You Will Master
            </h4>
            <p className={`leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              {resource.description}
            </p>
          </div>

          {/* Key Topics & Highlights */}
          {resource.videoHighlights && resource.videoHighlights.length > 0 && (
            <div className="space-y-3">
              <h4 className={`font-bold text-sm flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                <Sparkles className="w-4 h-4 text-amber-500" />
                Key Takeaways from Nathaniel's Self-Taught Journey
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {resource.videoHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/40 border-slate-800'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className={`text-xs ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Covered Topics Tags */}
          <div className="space-y-2">
            <h4 className={`font-bold text-xs uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Key Concepts & Syllabus
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {resource.topics.map((topic, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                    isLight
                      ? 'bg-slate-100 text-slate-700 border-slate-200'
                      : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800'
          }`}
        >
          <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Part of Nathaniel's Curated Remote Developer Study Library
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                isLight ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              Close
            </button>
            <a
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-md transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
