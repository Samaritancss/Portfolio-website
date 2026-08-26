import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, ExternalLink, Github, Sparkles, CheckCircle, Code2, MonitorPlay, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectVideoPlayerProps {
  project: Project;
  onOpenLiveDemo?: () => void;
  onOpenDetails?: () => void;
  theme?: 'light' | 'dark';
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({
  project,
  onOpenLiveDemo,
  onOpenDetails,
  theme = 'light'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5 | 2>(1);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const totalSteps = project.videoSteps.length || 4;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 0.8 * playbackSpeed;
          const calculatedStep = Math.min(
            totalSteps - 1,
            Math.floor((next / 100) * totalSteps)
          );
          setActiveStepIndex(calculatedStep);
          return next;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed, totalSteps]);

  const togglePlay = () => {
    if (progress >= 99) {
      setProgress(0);
      setActiveStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setProgress(val);
    const calculatedStep = Math.min(
      totalSteps - 1,
      Math.floor((val / 100) * totalSteps)
    );
    setActiveStepIndex(calculatedStep);
  };

  const handleStepClick = (idx: number) => {
    setActiveStepIndex(idx);
    const targetProgress = (idx / totalSteps) * 100 + 2;
    setProgress(targetProgress);
    setIsPlaying(true);
  };

  const currentStep = project.videoSteps[activeStepIndex] || project.videoSteps[0];

  return (
    <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden group/player text-slate-100">
      {/* Top Video Header / Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="font-mono text-slate-300 ml-1 truncate max-w-[200px] sm:max-w-xs font-semibold">
            {project.title.toLowerCase().replace(/\s+/g, '-')}-demo.mp4
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-blue-500/20 text-cyan-300 border border-blue-500/30">
            60 FPS Interactive
          </span>
          <span className="text-slate-400 font-mono text-[11px]">
            {project.videoDuration}
          </span>
        </div>
      </div>

      {/* Video Viewport Stage */}
      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden flex items-center justify-center">
        {/* Project Thumbnail Image Backdrop */}
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ${
            isPlaying ? 'scale-105 filter brightness-95' : 'filter brightness-100'
          }`}
        />

        {/* Dynamic Simulated Video Overlay Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

        {/* Floating animated cursor & interaction simulation when playing */}
        {isPlaying && (
          <div
            className="absolute pointer-events-none transition-all duration-500 z-10"
            style={{
              top: `${30 + Math.sin(progress * 0.1) * 25}%`,
              left: `${20 + Math.cos(progress * 0.08) * 45}%`
            }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-cyan-400/90 rounded-full border-2 border-white shadow-lg animate-ping opacity-75" />
              <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full border border-white absolute inset-0 shadow-md" />
              <span className="absolute left-5 top-0 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/30 whitespace-nowrap">
                {currentStep.title}
              </span>
            </div>
          </div>
        )}

        {/* Big Central Play Button when Paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            aria-label="Play Project Walkthrough"
            className="relative z-20 p-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
          >
            <Play className="w-8 h-8 fill-white ml-1 group-hover/btn:scale-105 transition-transform" />
          </button>
        )}

        {/* Video Subtitles / Active Feature Annotation */}
        <div className="absolute bottom-14 left-4 right-4 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-xs text-slate-200 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-semibold text-cyan-300">{currentStep.time}</span>
            <span className="text-slate-400">•</span>
            <span className="font-medium truncate max-w-sm sm:max-w-md">{currentStep.description}</span>
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-slate-200 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            {project.category}
          </span>
        </div>
      </div>

      {/* Video Progress Scrubber Bar */}
      <div className="px-4 pt-2 bg-slate-950">
        <div className="relative flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleScrub}
            aria-label="Video timeline scrubber"
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Video Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-950 border-t border-slate-800/80 text-slate-300 text-xs">
        {/* Left playback controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
          </button>
          <button
            onClick={() => {
              setProgress(0);
              setActiveStepIndex(0);
              setIsPlaying(true);
            }}
            title="Replay video"
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? 'Unmute narration' : 'Mute narration'}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 font-mono ml-2">
            <span>{Math.floor((progress / 100) * 105)}s</span>
            <span>/</span>
            <span>{project.videoDuration}</span>
          </div>
        </div>

        {/* Middle: Video Chapters / Key Frames */}
        <div className="hidden md:flex items-center gap-1.5">
          {project.videoSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => handleStepClick(idx)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'bg-blue-600/30 text-cyan-300 border border-blue-500/50'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {step.time} {step.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Right action links */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setPlaybackSpeed(playbackSpeed === 1 ? 1.5 : playbackSpeed === 1.5 ? 2 : 1);
            }}
            className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] font-semibold cursor-pointer"
          >
            {playbackSpeed}x
          </button>

          {onOpenDetails && (
            <button
              onClick={onOpenDetails}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Details</span>
            </button>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
