import { StudyResource } from '../types';

export const studyResourcesData: StudyResource[] = [
  // ================= DOCUMENTS & STUDY GUIDES =================
  {
    id: 'doc-js-handbook',
    title: 'Modern JavaScript (ES6+) Complete Handbook',
    category: 'pdf',
    groupType: 'document',
    author: 'Nathaniel\'s Self-Taught Archive',
    description: 'Comprehensive technical handbook covering closures, promises, async/await, array methods, destructuring, DOM manipulation, memory management, and ES modules.',
    tag: 'JavaScript ES6+',
    durationOrPages: '48 Pages PDF',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    pdfDownloadName: 'Modern_JavaScript_ES6_Mastery.pdf',
    topics: ['Async / Await', 'Closures & Scope Chain', 'Array Methods (Map/Filter/Reduce)', 'Event Loop & Microtasks', 'ES Modules & Imports']
  },
  {
    id: 'doc-css-mastery',
    title: 'CSS Grid & Flexbox Visual Architecture Guide',
    category: 'pdf',
    groupType: 'document',
    author: 'Modern Layout Blueprint',
    description: 'Visual layout breakdowns of 2D Grid systems, 1D Flexbox alignment rules, responsive clamp() sizing math, and modern CSS custom properties.',
    tag: 'CSS3 & Tailwind',
    durationOrPages: '36 Pages PDF',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    pdfDownloadName: 'CSS_Grid_Flexbox_Mastery.pdf',
    topics: ['CSS Grid Template Areas', 'Flex Grow & Shrink Math', 'Fluid clamp() Scaling', 'Container Queries', 'Tailwind Utility Systems']
  },
  {
    id: 'doc-react-patterns',
    title: 'React 18 / 19 & Custom Hooks Architecture Guide',
    category: 'pdf',
    groupType: 'document',
    author: 'Frontend Engineering Lab',
    description: 'Deep dive into useEffect lifecycle safety, custom hooks, reducer patterns, memoization strategies (useMemo, useCallback), and clean modular component breakdown.',
    tag: 'React Architecture',
    durationOrPages: '52 Pages PDF',
    url: 'https://react.dev/',
    pdfDownloadName: 'React_Hooks_Architecture_Patterns.pdf',
    topics: ['Custom Hooks Pattern', 'State Reducers & Context API', 'Virtual DOM Performance', 'Lifecycle & Dependency Rules', 'Component Composition']
  },
  {
    id: 'doc-python-fundamentals',
    title: 'Python for Problem Solving & Algorithmic Logic',
    category: 'pdf',
    groupType: 'document',
    author: 'Engineering Logic Series',
    description: 'Bridging civil engineering mathematical computations into clean Python scripts, data structures (lists, dictionaries, sets), algorithmic complexity, and automation.',
    tag: 'Python & Algorithms',
    durationOrPages: '42 Pages PDF',
    url: 'https://docs.python.org/3/',
    pdfDownloadName: 'Python_Problem_Solving_Fundamentals.pdf',
    topics: ['Data Structures (Dict, List, Set)', 'Big-O Algorithmic Complexity', 'Automation & File I/O', 'Mathematical Modeling', 'REST API Scripting']
  },
  {
    id: 'doc-git-collaboration',
    title: 'Git & GitHub Collaboration Workflow for Remote Teams',
    category: 'pdf',
    groupType: 'document',
    author: 'Remote Engineering Standards',
    description: 'Branching strategies (Trunk-based, GitFlow), conventional commit messages, resolving merge conflicts, PR code reviews, and remote team workflows.',
    tag: 'Git & GitHub',
    durationOrPages: '28 Pages PDF',
    url: 'https://git-scm.com/doc',
    pdfDownloadName: 'Git_GitHub_Remote_Team_Workflow.pdf',
    topics: ['Conventional Commits', 'Interactive Rebase & Squash', 'Pull Request Etiquette', 'Merge Conflict Resolution', 'SSH Key Authentication']
  },
  {
    id: 'doc-mdn-web-docs',
    title: 'MDN Web Docs (Mozilla Developer Network)',
    category: 'website',
    groupType: 'document',
    author: 'Mozilla & Open Web Community',
    description: 'The definitive gold standard for HTML5, CSS3, JavaScript, Web APIs, and browser compatibility specifications.',
    tag: 'Web Standard Docs',
    durationOrPages: 'Official Documentation',
    url: 'https://developer.mozilla.org/',
    topics: ['HTML5 Semantic Elements', 'CSS Selectors & Cascade', 'JavaScript Web APIs', 'Accessibility (a11y) Standards', 'Fetch API Reference']
  },
  {
    id: 'doc-javascript-info',
    title: 'JavaScript.info (The Modern JavaScript Guide)',
    category: 'website',
    groupType: 'document',
    author: 'Ilya Kantor',
    description: 'Comprehensive documentation from fundamentals to advanced concepts including prototype inheritance, event loop, promises, and generators.',
    tag: 'In-Depth JS Docs',
    durationOrPages: 'Comprehensive Reference',
    url: 'https://javascript.info/',
    topics: ['Object Prototypes', 'Promises & Async/Await', 'DOM Mutation & Events', 'Garbage Collection', 'Web Components']
  },
  {
    id: 'doc-react-dev-docs',
    title: 'React Official Documentation (react.dev)',
    category: 'website',
    groupType: 'document',
    author: 'Meta React Core Team',
    description: 'The modern interactive React documentation featuring diagrams, deep dives into reactive thinking, and state lifecycle rules.',
    tag: 'Official Framework Docs',
    durationOrPages: 'Official Documentation',
    url: 'https://react.dev/',
    topics: ['Thinking in React', 'Describing UI with JSX', 'Managing State Flow', 'Escape Hatches & Refs', 'Server Components Basics']
  },

  // ================= VIDEOS & MASTERCLASSES =================
  {
    id: 'vid-traversy-react',
    title: 'React 18 & 19 Full Masterclass & Crash Course',
    category: 'youtube',
    groupType: 'video',
    author: 'Brad Traversy (Traversy Media)',
    description: 'Complete hands-on breakdown of React components, state, hooks, props, form handling, and building real-world dynamic web applications.',
    tag: 'Full Crash Course',
    durationOrPages: '2.5 Hours Video Course',
    url: 'https://www.youtube.com/@TraversyMedia',
    youtubeChannelUrl: 'https://www.youtube.com/@TraversyMedia',
    videoEmbedId: 'w7ejDZ8SWv8',
    topics: ['Component Structure', 'useState & useEffect', 'Custom Hooks', 'Props & Event Handlers', 'Project Deployment'],
    videoHighlights: [
      'Core component architecture & mental model',
      'Handling asynchronous API data with clean loading states',
      'Modular CSS styling & Tailwind integration'
    ]
  },
  {
    id: 'vid-kevin-powell-css',
    title: 'CSS Grid & Flexbox Mastery Video Masterclass',
    category: 'youtube',
    groupType: 'video',
    author: 'Kevin Powell (CSS Specialist)',
    description: 'Master modern responsive layouts, subgrids, auto-fit repeat grids, flexbox alignment quirks, and fluid typography without media query clutter.',
    tag: 'Modern CSS Layouts',
    durationOrPages: '1.8 Hours Masterclass',
    url: 'https://www.youtube.com/@KevinPowell',
    youtubeChannelUrl: 'https://www.youtube.com/@KevinPowell',
    videoEmbedId: 'rg7Fvvl3taU',
    topics: ['CSS Grid Template Areas', 'Auto-Fit vs Auto-Fill', 'Flex Shrink & Basis', 'Fluid Typography', 'Subgrid Layouts'],
    videoHighlights: [
      'Building bulletproof responsive navigation bars',
      '2D multi-row card grids with zero media queries',
      'Advanced clamp() math for fluid spacing'
    ]
  },
  {
    id: 'vid-webdev-simplified-hooks',
    title: 'React Hooks Complete Deep Dive & Safety Rules',
    category: 'youtube',
    groupType: 'video',
    author: 'Kyle Cook (Web Dev Simplified)',
    description: 'Crystal-clear explanations of every React hook: useState, useEffect, useMemo, useCallback, useRef, and useReducer with anti-pattern warnings.',
    tag: 'React Hooks & State',
    durationOrPages: '1.5 Hours Video Series',
    url: 'https://www.youtube.com/@WebDevSimplified',
    youtubeChannelUrl: 'https://www.youtube.com/@WebDevSimplified',
    videoEmbedId: 'O6P86uwfdR0',
    topics: ['useEffect Dependency Safety', 'useMemo Performance', 'useCallback References', 'useReducer Architecture', 'useRef DOM Controls'],
    videoHighlights: [
      'Eliminating infinite useEffect re-render loops',
      'When to memoize vs when NOT to memoize',
      'Extracting shared logic into clean custom hooks'
    ]
  },
  {
    id: 'vid-fireship-trends',
    title: 'Modern Web Architecture & 100 Seconds of Code',
    category: 'youtube',
    groupType: 'video',
    author: 'Jeff Delaney (Fireship)',
    description: 'Fast-paced, high-density breakdowns of frontend paradigms, JavaScript runtimes, state managers, and full-stack engineering tools.',
    tag: 'Tech Trends & Speed',
    durationOrPages: '3.3M+ Subscribers',
    url: 'https://www.youtube.com/@Fireship',
    youtubeChannelUrl: 'https://www.youtube.com/@Fireship',
    videoEmbedId: 'DHjqpvDnNGE',
    topics: ['100 Seconds of React', 'JavaScript Event Loop', 'REST vs GraphQL', 'Vite Bundler Internals', 'Web Performance'],
    videoHighlights: [
      'Rapid understanding of new ecosystem libraries',
      'Modern build tools and Vite performance',
      'Architectural trade-offs in frontend development'
    ]
  },
  {
    id: 'vid-net-ninja-js',
    title: 'Modern JavaScript (Async, Promises & Fetch API)',
    category: 'youtube',
    groupType: 'video',
    author: 'Shaun Pelling (The Net Ninja)',
    description: 'Structured step-by-step video tutorials on async JavaScript, the Fetch API, promises, JSON data manipulation, and error handling routines.',
    tag: 'Asynchronous JavaScript',
    durationOrPages: '1.2M+ Subscribers',
    url: 'https://www.youtube.com/@NetNinja',
    youtubeChannelUrl: 'https://www.youtube.com/@NetNinja',
    videoEmbedId: 'Z7nCPzN86qA',
    topics: ['Async / Await Patterns', 'Fetch API Error Handling', 'JSON Parsing', 'Promise.all Concurrency', 'Modular JS'],
    videoHighlights: [
      'Handling network errors defensively',
      'Async functions with try/catch blocks',
      'Chaining promises and transforming response streams'
    ]
  },
  {
    id: 'vid-freecodecamp-python',
    title: 'Python for Beginners & Algorithmic Problem Solving',
    category: 'youtube',
    groupType: 'video',
    author: 'Beau Carnes (freeCodeCamp)',
    description: 'Comprehensive 4-hour video course covering Python programming, data structures, algorithms, mathematical computing, and script automation.',
    tag: 'Python & Computer Science',
    durationOrPages: '4.2 Hours Full Course',
    url: 'https://www.youtube.com/@freecodecamp',
    youtubeChannelUrl: 'https://www.youtube.com/@freecodecamp',
    videoEmbedId: 'rfscVS0vtbw',
    topics: ['Data Structures & Types', 'Functions & Loops', 'Object-Oriented Python', 'Algorithm Problem Solving', 'File I/O'],
    videoHighlights: [
      'Bridging engineering mathematics into software code',
      'Writing efficient algorithms with minimal complexity',
      'Building practical scripts for data automation'
    ]
  }
];

export const selfTaughtRoadmap = [
  {
    phase: 'Phase 01',
    title: 'Engineering Mindset & Web Foundations',
    duration: 'Weeks 1 - 4',
    summary: 'Transferring civil engineering analytical thinking and structural problem solving into web fundamentals.',
    coreSkills: ['Semantic HTML5', 'Modern CSS3 & Flexbox/Grid', 'Responsive Sizing (clamp, rem)', 'Git Version Control & CLI'],
    milestoneProject: 'Built responsive structural landing pages with pristine CSS grid and accessible layout hierarchies.'
  },
  {
    phase: 'Phase 02',
    title: 'Modern JavaScript (ES6+) & Algorithmic Logic',
    duration: 'Weeks 5 - 10',
    summary: 'Mastering asynchronous programming, functional array methods, event handling, and Python algorithmic thinking.',
    coreSkills: ['ES6+ Syntax', 'Promises & Async/Await', 'DOM Manipulation', 'Python Data Structures & Scripting', 'API Integration'],
    milestoneProject: 'Built interactive dynamic web utilities with live data fetching, debounce search, and error handling.'
  },
  {
    phase: 'Phase 03',
    title: 'React Architecture & State Management',
    duration: 'Weeks 11 - 18',
    summary: 'Transitioning to component-driven development, custom hooks, reactive state flow, and Tailwind CSS styling.',
    coreSkills: ['React 18/19 Hooks', 'Custom Hooks Pattern', 'Tailwind CSS Utility Design', 'Vite Bundler', 'Component Modularity'],
    milestoneProject: 'Built Real Estate Marketplace, Crypto Currency Tracker, and Movies Finder apps.'
  },
  {
    phase: 'Phase 04',
    title: 'Advanced AI UX, Performance & Remote Readiness',
    duration: 'Weeks 19+',
    summary: 'Constructing high-fidelity AI chat workspaces, token streaming engines, WCAG AA accessibility, and async remote team collaboration.',
    coreSkills: ['Gemini AI Clone UI', 'Token Streaming UX', 'GitHub Team Workflows & PRs', 'Lighthouse 95+ Performance', 'Asynchronous Communication'],
    milestoneProject: 'Gemini AI Workspace Clone with streaming response parser & interactive prompt playground.'
  }
];
