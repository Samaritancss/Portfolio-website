import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'gemini-clone',
    title: 'Gemini AI Workspace Clone',
    tagline: 'Intelligent AI Chat & Multimodal Code Assistant (Nat\'s Workspace)',
    description:
      'A high-fidelity recreation of the Google Gemini AI interface featuring "Hello, Nat. How can I help you today?" conversational greeting, token-by-token streaming responses, multimodal prompt suggestion cards, copyable syntax-highlighted code output, prompt presets, and markdown parsing.',
    category: 'Full Stack / AI',
    image: '/src/assets/images/gemini_clone_real_1787750091851.jpg',
    screenshots: [
      '/src/assets/images/gemini_clone_real_1787750091851.jpg',
      '/src/assets/images/gemini_clone_mockup_1787749486321.jpg'
    ],
    technologies: ['React 18', 'Tailwind CSS', 'JavaScript (ES6+)', 'Motion', 'Markdown Engine', 'REST APIs', 'Lucide Icons'],
    githubUrl: 'https://github.com/Samaritancss?tab=repositories',
    demoUrl: '#demo-gemini',
    highlights: [
      'Personalized greeting greeting "Hello, Nat. How can I help you today?" with prompt cards',
      'Token-by-token simulated AI response streaming engine with cancelable controller',
      'Interactive prompt gallery featuring coding, creative writing, and data analysis presets',
      'Dynamic markdown rendering with one-click copyable syntax-highlighted code blocks'
    ],
    metrics: [
      { label: 'Token Stream Rate', value: '35 ms/tok' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Prompt Library', value: '18+ Presets' },
      { label: 'Mobile Responsive', value: '100% Fluid' }
    ],
    videoDuration: '01:45',
    videoSteps: [
      {
        time: '0:00',
        title: 'Initial Workspace & Prompt Presets',
        description: 'User enters the luminous workspace with dynamic suggestion chips and customizable prompt tags.'
      },
      {
        time: '0:28',
        title: 'Live Streaming AI Response Generation',
        description: 'Observing asynchronous token delivery, typing simulation, and instant markdown parsing with table support.'
      },
      {
        time: '0:58',
        title: 'Code Highlight & Snippet Copy',
        description: 'Demonstrating interactive syntax blocks with multi-language detection and instant clipboard copy.'
      },
      {
        time: '01:25',
        title: 'Responsive Drawer & Chat History',
        description: 'Persistent conversation state stored locally with instant search through previous chat logs.'
      }
    ],
    architecture: [
      'Modular React custom hooks (useChatStream, useLocalStorageHistory, usePromptPresets)',
      'Optimized virtual DOM rendering to handle high-frequency stream state updates without frame drops',
      'Clean CSS Grid & Flexbox layouts adapting gracefully from 360px mobile screens to 4K displays',
      'WCAG AA accessible keyboard navigation (Tab navigation, ESC to close modal, Enter to send)'
    ],
    challengesSolved: [
      'Prevented frequent re-renders during high-speed typing by batching text chunk updates with requestAnimationFrame.',
      'Constructed a reliable fallback markdown renderer handling unclosed code fences and nested lists during live streaming.'
    ]
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Currency Tracker & Analytics',
    tagline: 'Real-Time Market Intelligence, Bitcoin & Altcoin Live Analytics',
    description:
      'A sleek, responsive crypto market intelligence platform delivering real-time asset pricing for Bitcoin ($64,819.26), Ethereum ($1,914.60), Tether ($1.00), Dogecoin ($0.09), Staked Ether, and 100+ altcoins with 24-hour volume changes, interactive sparklines, and currency conversion.',
    category: 'Fintech / Web3',
    image: '/src/assets/images/crypto_tracker_real_1787750057746.jpg',
    screenshots: [
      '/src/assets/images/crypto_tracker_real_1787750057746.jpg',
      '/src/assets/images/crypto_tracker_mockup_1787749462366.jpg'
    ],
    technologies: ['React 18', 'JavaScript (ES6+)', 'Tailwind CSS', 'CoinGecko REST API', 'Python Analytics', 'Local Persistence', 'Lucide Icons'],
    githubUrl: 'https://github.com/Samaritancss?tab=repositories',
    demoUrl: '#demo-crypto',
    highlights: [
      'Real-time price feeds for Bitcoin, Ethereum, Tether, Dogecoin, and 100+ top coins',
      'Live upward/downward percentage badges (+1.10%, +0.30%) and market cap analytics',
      'Client-side multi-currency conversion (USD, EUR, GBP, GHS) with instant exchange calculation',
      'Search debounce algorithm filtering 100+ cryptocurrencies with zero UI stutter'
    ],
    metrics: [
      { label: 'Tracked Assets', value: '100+ Coins' },
      { label: 'Search Latency', value: '< 15ms' },
      { label: 'Data Refresh', value: 'Auto 10s' },
      { label: 'Themes', value: 'Crisp & Dark' }
    ],
    videoDuration: '01:30',
    videoSteps: [
      {
        time: '0:00',
        title: 'Market Overview & Trending Ticker',
        description: 'Top gainers, total market cap, and live scrolling crypto marquee.'
      },
      {
        time: '0:22',
        title: 'Instant Search & Category Filters',
        description: 'Instant debounce-driven search across tokens, DeFi, Layer 1s, and Memecoins.'
      },
      {
        time: '0:48',
        title: 'Interactive Price Chart & Timeframes',
        description: 'Hover tooltips displaying timestamped price points, volume, and all-time highs.'
      },
      {
        time: '01:12',
        title: 'Custom Watchlist & Local Portfolio',
        description: 'Starring favorite coins and calculating simulated investment gain/loss.'
      }
    ],
    architecture: [
      'Custom React State management with reducer pattern for reliable market updates',
      'Python data analysis scripts used to model predictive trend calculations and statistical moving averages',
      'Debounced input handlers to throttle API calls and maintain 60 FPS scrolling performance',
      'Defensive error boundaries ensuring graceful fallbacks when network endpoints are throttled'
    ],
    challengesSolved: [
      'Overcame public API rate limiting by architecting client-side stale-while-revalidate caching.',
      'Designed responsive SVG sparkline charts with custom Bézier interpolation that render smoothly on low-end mobile devices.'
    ]
  },
  {
    id: 'real-estate-website',
    title: 'Afri Homes: Ghana & Pan-African Real Estate',
    tagline: 'Verified Luxury Mansions, Apartments & Land in East Legon, Cantonments & Accra',
    description:
      'A luxury real estate web portal for discovering verified property in Ghana and across Pan-Africa. Features prime neighborhood exploration (East Legon, Cantonments, Airport Residential, Osu & Labone), verified agent directory (Nana Yaa Asante, Emeka Okafor), mortgage calculator, and booking tours.',
    category: 'Real Estate / Marketplace',
    image: '/src/assets/images/afri_homes_real_1787750073097.jpg',
    screenshots: [
      '/src/assets/images/afri_homes_real_1787750073097.jpg',
      '/src/assets/images/real_estate_mockup_1787749445843.jpg'
    ],
    technologies: ['React 18', 'Tailwind CSS', 'JavaScript (ES6+)', 'Motion', 'Responsive Architecture', 'Git & GitHub'],
    githubUrl: 'https://github.com/Samaritancss?tab=repositories',
    demoUrl: '#demo-realestate',
    highlights: [
      'Verified property catalog covering East Legon, Cantonments, Airport Residential & Accra',
      'Verified real estate agent directory with direct inquiry and WhatsApp contact buttons',
      'Interactive mortgage repayment calculator with dynamic amortization breakdown',
      'Civil Engineering spatial attention applied to architectural blueprints and floor plan previews'
    ],
    metrics: [
      { label: 'Properties Listed', value: '45+ Units' },
      { label: 'Filter Speed', value: 'Instant' },
      { label: 'Conversion Flow', value: '3-Step Tour' },
      { label: 'UI Accessibility', value: 'WCAG AA' }
    ],
    videoDuration: '01:20',
    videoSteps: [
      {
        time: '0:00',
        title: 'Hero Showcase & Quick Search',
        description: 'Fluid hero search bar with location autocomplete and budget selectors for Ghana & Africa.'
      },
      {
        time: '0:25',
        title: 'Property Grid & Detail Drawer',
        description: 'High-definition property card grid with hover zoom, favorite toggles, and key amenities.'
      },
      {
        time: '0:50',
        title: 'Interactive Mortgage Calculator',
        description: 'Sliders for down payment, interest rate, and term length with instant monthly payment calculations.'
      },
      {
        time: '01:10',
        title: 'Booking Tour Modal & Validation',
        description: 'Calendar date picker with instant client-side validation and confirmation notification.'
      }
    ],
    architecture: [
      'Component-driven architecture with clean separation between UI components and business calculation logic',
      'Stateful filter hooks utilizing URL search params simulation for shareable filter states',
      'High-performance lazy loading for property assets and responsive srcset generation',
      'Civil engineering structural precision applied to layout grid rhythms and whitespace math'
    ],
    challengesSolved: [
      'Engineered an accurate mortgage calculation formula with amortization schedule that updates in real time as the user drags sliders.',
      'Built a fluid mobile-first drawer filter menu that prevents background scrolling while preserving touch gestures.'
    ]
  },
  {
    id: 'movies-finder',
    title: 'TV Time / React Movies: Without the Hassle',
    tagline: 'Instant Movie & TV Show Discovery, IMDb Ratings & Watchlist Hub',
    description:
      'A modern movie discovery web application for browsing trending films, box office hits, and genre classics without the clutter. Features instant search (e.g. "Inception"), IMDb rating badges (8.4, 7.2), category and year filters, trailer previews, and offline watchlist persistence.',
    category: 'Entertainment / API',
    image: '/src/assets/images/movies_finder_real_1787750109912.jpg',
    screenshots: [
      '/src/assets/images/movies_finder_real_1787750109912.jpg',
      '/src/assets/images/movie_finder_mockup_1787749474832.jpg'
    ],
    technologies: ['React 18', 'JavaScript', 'CSS3 / Tailwind', 'TMDB / IMDb APIs', 'LocalStorage API', 'Lucide Icons'],
    githubUrl: 'https://github.com/Samaritancss?tab=repositories',
    demoUrl: '#demo-movies',
    highlights: [
      'Instant debounced movie search bar (tested on Inception, blockbusters, and classics)',
      'IMDb / TMDB rating badges (8.4, 7.2) and release year metadata chips',
      'Genre tagging system (Action, Sci-Fi, Drama, Thriller, Comedy, Animation)',
      'Watchlist manager with local storage persistence and quick remove/watched toggles'
    ],
    metrics: [
      { label: 'Movie Database', value: '10,000+ Titles' },
      { label: 'Debounce Delay', value: '300ms' },
      { label: 'User Watchlist', value: 'Offline Saved' },
      { label: 'Image Load', value: 'Progressive' }
    ],
    videoDuration: '01:15',
    videoSteps: [
      {
        time: '0:00',
        title: 'Trending Movie Carousel',
        description: 'Top trending blockbusters with synopsis, rating star breakdown, and backdrop artwork.'
      },
      {
        time: '0:20',
        title: 'Real-Time Movie Search',
        description: 'Typing queries with instant poster grid population and zero UI stutter.'
      },
      {
        time: '0:45',
        title: 'Detailed Movie Modal & Cast View',
        description: 'Release dates, runtime, director, plot summary, and simulated trailer playback.'
      },
      {
        time: '01:05',
        title: 'Watchlist Management',
        description: 'One-click bookmarking to local device memory with watched counter.'
      }
    ],
    architecture: [
      'Custom React hooks for asynchronous data fetching and error state management',
      'Memoized component rendering for movie cards using React.memo to optimize re-rendering of long lists',
      'Graceful fallback images when poster URLs are missing or slow to load',
      'Responsive multi-column grid scaling smoothly across phone, tablet, laptop, and ultra-wide screens'
    ],
    challengesSolved: [
      'Handled rapid user typing without flickering by implementing a cleanup function in the debounce useEffect.',
      'Implemented progressive image loading with blur-up placeholders to provide immediate visual feedback on slow network connections.'
    ]
  }
];
