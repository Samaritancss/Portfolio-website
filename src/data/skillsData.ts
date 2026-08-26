import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML5 & Semantic Web',
    category: 'frontend',
    level: 95,
    experienceText: 'High Proficiency',
    iconName: 'Layout',
    color: '#E34F26',
    summary: 'Mastery of semantic markup, accessible ARIA attributes, SEO metadata, form validation, and modern web component structures.',
    keyConcepts: [
      'Semantic Architecture (<main>, <article>, <nav>, <section>)',
      'WCAG AA Accessibility & Screen Reader Navigation',
      'OpenGraph & SEO Meta Tags for High Discoverability',
      'Native Constraint Validation & Custom Form States',
      'Accessible Modals, Dialogs & Focus Management'
    ],
    realWorldApplication: 'Engineered accessible landmarks, clean screen reader announcements, and robust focus traps across all portfolio applications.',
    verifiedInProjects: ['Gemini AI Workspace Clone', 'Afri Homes Real Estate', 'Crypto Tracker', 'TV Time Movie Finder']
  },
  {
    id: 'css',
    name: 'CSS3 & Tailwind CSS',
    category: 'frontend',
    level: 94,
    experienceText: 'High Proficiency',
    iconName: 'Palette',
    color: '#264DE4',
    summary: 'Fluid typography using clamp(), 2D CSS Grid & Flexbox alignment, Tailwind CSS utility architecture, subtle keyframe animations, and custom theme systems.',
    keyConcepts: [
      'Tailwind CSS Utility-First Architecture',
      '2D CSS Grid Template Areas & Auto-Fit Layouts',
      'Flexbox Spatial Alignment & Multi-Row Wrapping',
      'Fluid Typography & Responsive Sizing (clamp, rem, ch)',
      'Dark/Light Dynamic Theming & Backdrop Filters'
    ],
    realWorldApplication: 'Constructed responsive layout engines that adapt gracefully from 320px mobile screens up to 4K desktop monitors with zero horizontal overflow.',
    verifiedInProjects: ['Gemini AI Workspace Clone', 'Afri Homes Real Estate', 'Crypto Tracker']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'language',
    level: 92,
    experienceText: 'Advanced Proficiency',
    iconName: 'Code2',
    color: '#F7DF1E',
    summary: 'Deep understanding of asynchronous programming, promises, event loop, closures, destructuring, higher-order array methods, and debounce/throttle optimization.',
    keyConcepts: [
      'Asynchronous Programming (Promises, Async/Await)',
      'High-Performance Array Methods (Map, Filter, Reduce)',
      'Closures, Lexical Scope & Garbage Collection',
      'Debounce & Throttle Optimization Algorithms',
      'Event Delegation, Bubbling & Custom Events'
    ],
    realWorldApplication: 'Built zero-stutter search algorithms, robust client-side storage managers, and error-resilient network fetch handlers.',
    verifiedInProjects: ['Crypto Tracker', 'TV Time Movie Finder', 'Gemini AI Workspace']
  },
  {
    id: 'react',
    name: 'React (18 / 19)',
    category: 'frontend',
    level: 93,
    experienceText: 'Advanced Proficiency',
    iconName: 'Atom',
    color: '#61DAFB',
    summary: 'Component-driven architecture, custom hooks, reactive state flow, useEffect lifecycle safety, performance memoization (useMemo/useCallback), and modern context.',
    keyConcepts: [
      'Custom Hooks for Shared State & Logic Extraction',
      'State Reducer Patterns & Immutable Data Flows',
      'Render Optimization (React.memo, useMemo, useCallback)',
      'Context API & Modular Compound Components',
      'Declarative Motion Animations & Modal Portals'
    ],
    realWorldApplication: 'Architected high-speed reactive interfaces including token streaming chat engines, live market graphs, and dynamic property filter drawers.',
    verifiedInProjects: ['Gemini AI Workspace Clone', 'Afri Homes Real Estate', 'Crypto Tracker', 'TV Time Movie Finder']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    level: 86,
    experienceText: 'Strong Competency',
    iconName: 'Terminal',
    color: '#3776AB',
    summary: 'Algorithmic problem solving, data processing, backend automation scripts, mathematical modeling, and REST API consumption derived from civil engineering computations.',
    keyConcepts: [
      'Data Structures & Algorithmic Complexity (Big-O)',
      'Data Analysis, Calculations & Statistical Math',
      'File Automation, Parsing & REST Endpoints',
      'Object-Oriented Programming (OOP) Principles',
      'Mathematical Simulation & Predictive Models'
    ],
    realWorldApplication: 'Developed data processing models for moving averages, mortgage amortization formulas, and automation scripts.',
    verifiedInProjects: ['Crypto Currency Tracker Analytics', 'Mortgage Math Engine']
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'tools',
    level: 90,
    experienceText: 'Advanced Proficiency',
    iconName: 'GitBranch',
    color: '#F05032',
    summary: 'Professional version control, atomic commits, feature-branch workflows, pull request reviews, merge conflict resolution, and remote team collaboration.',
    keyConcepts: [
      'Feature Branching Strategies & Trunk-Based Development',
      'Atomic Conventional Commits (feat, fix, docs, refactor)',
      'Pull Request Etiquette, Code Reviews & Diffs',
      'Interactive Rebasing & Clean Commit History',
      'GitHub Repository Setup, Issues & Releases'
    ],
    realWorldApplication: 'Maintains clean, well-documented open-source repositories with detailed READMEs, milestone tracking, and branch hygiene.',
    verifiedInProjects: ['github.com/Samaritancss Repositories']
  },
  {
    id: 'rest-api',
    name: 'REST APIs & Async UX',
    category: 'engineering',
    level: 89,
    experienceText: 'Strong Competency',
    iconName: 'Network',
    color: '#10B981',
    summary: 'Integrating third-party APIs (CoinGecko, TMDB, Open APIs), handling loading/error states gracefully, optimistic UI updates, and client-side caching.',
    keyConcepts: [
      'HTTP Status Code & Network Error Handling',
      'Stale-While-Revalidate Caching Strategies',
      'Optimistic UI Updates & Loading Skeletons',
      'JSON Schema Serialization & Type Safety',
      'Rate Limit Fallback & Retry Mechanisms'
    ],
    realWorldApplication: 'Connected live market tickers and global media databases with zero UI flicker during network latency spikes.',
    verifiedInProjects: ['Crypto Currency Tracker', 'TV Time Movie Finder']
  },
  {
    id: 'engineering-math',
    name: 'Civil Engineering Discipline',
    category: 'engineering',
    level: 96,
    experienceText: 'Engineering Rigor',
    iconName: 'Compass',
    color: '#8B5CF6',
    summary: 'BSc Civil Engineering background applying structural analysis, mathematical precision, systematic debugging, and resilient architecture to frontend code.',
    keyConcepts: [
      'Root Cause Analysis & Systematic Debugging',
      'Mathematical Layout Geometry & Proportions',
      'High-Load Reliability & Fault Tolerance',
      'Disciplined Project Milestone Execution',
      'Analytical Thinking Under Complex Constraints'
    ],
    realWorldApplication: 'Treats software architecture with structural stability: predictable data flows, robust error boundaries, and defensive component design.',
    verifiedInProjects: ['Afri Homes Ghana', 'Gemini AI Workspace Clone']
  }
];
