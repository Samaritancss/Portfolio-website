/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { LearnToCode } from './components/LearnToCode';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PDFViewerModal } from './components/PDFViewerModal';
import { VideoViewerModal } from './components/VideoViewerModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CustomCursor } from './components/CustomCursor';
import { Project, StudyResource } from './types';
import defaultProfileImage from './assets/images/nathaniel_profile_pic_1787750756678.jpg';


export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState<StudyResource | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<StudyResource | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [profileImage, setProfileImage] = useState(() => {
    try {
      return localStorage.getItem('nathaniel-profile-image') || defaultProfileImage;
    } catch {
      return defaultProfileImage;
    }
  });

  const updateProfileImage = (image: string) => {
    setProfileImage(image);
    try {
      localStorage.setItem('nathaniel-profile-image', image);
    } catch { }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'portfolio', 'learn-to-code', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isLight
          ? 'bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900'
          : 'bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200'
      }`}
    >
      {/* Interactive Custom Trailing Cursor */}
      <CustomCursor />

      {/* Top Fixed Navbar with Theme Toggle */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        profileImage={profileImage}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero / Home */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          theme={theme}
          profileImage={profileImage}
        />

        {/* About Me */}
        <AboutMe
          onOpenResume={() => setResumeModalOpen(true)}
          theme={theme}
          profileImage={profileImage}
          onProfileImageChange={updateProfileImage}
        />

        {/* Skills */}
        <Skills theme={theme} />

        {/* Portfolio of Work (Videos + Real Project Screenshots + Live Demos + Repos) */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
          theme={theme}
        />

        {/* Learn to Code (Grouped into Documents & Videos with Click-to-View Modals) */}
        <LearnToCode
          onOpenPDF={(resource) => setSelectedPDF(resource)}
          onOpenVideo={(resource) => setSelectedVideo(resource)}
          theme={theme}
        />

        {/* Contact with LinkedIn & GitHub Icons */}
        <Contact theme={theme} />
      </main>

      {/* Footer with Socials and Links */}
      <Footer theme={theme} profileImage={profileImage} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        theme={theme}
      />

      <PDFViewerModal
        resource={selectedPDF}
        onClose={() => setSelectedPDF(null)}
        theme={theme}
      />

      <VideoViewerModal
        resource={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        theme={theme}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        theme={theme}
      />
    </div>
  );
}
