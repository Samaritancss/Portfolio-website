export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack / AI' | 'Fintech / Web3' | 'Real Estate / Marketplace' | 'Entertainment / API';
  image: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  videoDuration: string;
  videoSteps: {
    time: string;
    title: string;
    description: string;
  }[];
  architecture: string[];
  challengesSolved: string[];
}

export type LearningGroup = 'all' | 'documents' | 'videos' | 'roadmap';
export type ResourceCategory = 'all' | 'pdf' | 'website' | 'youtube' | 'roadmap';

export interface StudyResource {
  id: string;
  title: string;
  category: 'pdf' | 'website' | 'youtube' | 'roadmap';
  groupType: 'document' | 'video' | 'roadmap';
  author: string;
  description: string;
  tag: string;
  url: string;
  rating?: number;
  durationOrPages?: string;
  featured?: boolean;
  topics: string[];
  pdfDownloadName?: string;
  youtubeChannelUrl?: string;
  videoEmbedId?: string;
  videoHighlights?: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'language' | 'tools' | 'engineering';
  level: number; // 0 - 100
  experienceText: string;
  iconName: string;
  color: string;
  summary: string;
  keyConcepts: string[];
  realWorldApplication: string;
  verifiedInProjects: string[];
}

