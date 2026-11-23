export const me = {
  name: 'Pascal Bitterli',
  role: 'Software Engineer',
  location: 'Zurich, Switzerland',
  intro: [
    'I’m a backend engineer. I spent five years at Partners Group, starting as a software development apprentice and eventually becoming a junior software engineer. I worked on financial data pipelines and LLM agents that reduced manual work for business teams. I like working on every stage of a project, from figuring out what people actually need to building the software and keeping it running in production.',
    'I run open models on my desktop, compare their speed and output quality, and build small agents with them. I tinker with the hardware to speed up inference. I also enjoy taking part in coding competitions and hackathons. Away from the screen, I’m at the gym or on road trips with friends on my Honda CBR 500R.',
  ],
  // opens the last intro paragraph, which also holds the availability date and links
  now: 'I’m currently completing my mandatory civil service as a teacher’s assistant at a primary school.',
  description:
    'Pascal Bitterli, software engineer in Switzerland working on LLM applications, AI agents and data systems.',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pascaii/' },
    { label: 'GitHub', href: 'https://github.com/PascaII' },
  ],
  available: 'June 2027',
}

export const experience = [
  {
    when: '2026 - now',
    title: 'Teacher’s Assistant, civil service',
    org: 'Primarschule Knonau',
  },
  {
    when: '2025 - 2026',
    title: 'Junior Software Engineer',
    org: 'Partners Group',
    orgHref: 'https://www.partnersgroup.com/',
  },
  {
    when: '2024',
    title: 'Software Development Intern',
    org: 'Exchange Pro, San Francisco',
    orgHref: 'https://www.exchange-pro.ch/',
    more: [
      // local copy: the original at cdn.zg.ch is served as a forced download
      { label: 'Article (PDF)', href: '/documents/2024-wiz-article-silicon-valley.pdf' },
      { label: 'Certificate', href: '/documents/2024-silicon-valley-it-talent-program-certificate.pdf' },
    ],
  },
  {
    when: '2021 - 2025',
    title: 'Software Developer Apprentice',
    org: 'Partners Group',
    orgHref: 'https://www.partnersgroup.com/',
  },
]

const gh = (repo: string) => `https://github.com/PascaII/${repo}`

export const projects = [
  {
    when: '2026',
    name: 'Local Image Forge',
    href: gh('local-image-forge'),
    blurb: 'Runs the 33 GB Qwen Image 2.1 model on a 16 GB consumer GPU with BF16 weights and block-level CPU offloading. Built-in profiling shows the limit is PCIe bandwidth, not compute.',
    stack: ['Python', 'PyTorch', 'Diffusers', 'CUDA'],
    featured: true,
  },
  {
    when: '2026',
    name: 'Bend2 vs Rust',
    href: gh('bend2-benchmark'),
    blurb: 'Benchmarks a proof-checked functional language against Rust on an order book, ring buffer, Black-Scholes and Monte Carlo pricing. A timing only counts if both print the same checksum.',
    stack: ['Rust', 'Bend', 'Metal'],
    featured: true,
  },
  {
    when: '2026',
    name: 'Optiver × ETH Coding Challenge',
    href: gh('optiver-x-eth-coding-challenge'),
    blurb: 'Trading framework for a simulated exchange: strategies plug in as one function, and a replay backtester runs recorded order books through the live risk and execution path. I owned the code and execution.',
    stack: ['Python', 'pytest'],
    featured: true,
  },
  {
    when: '2026',
    name: 'SOcareS',
    href: gh('SOcareS'),
    blurb: 'Hackathon prototype that turns a recorded doctor’s visit into a care plan the patient can reopen and ask about. Speech recognition and the LLM run on the phone.',
    stack: ['Flutter', 'Whisper', 'Gemma', 'LiteRT'],
    featured: false,
  },
  {
    when: '2026',
    name: 'ephemeris',
    href: gh('ephemeris-screensaver'),
    blurb: 'Windows screensaver I built for my father: a world map that follows the sun and places deduplicated news where it happens. A 3.9 MB binary that idles below 1% of one core.',
    stack: ['Rust', 'OpenGL'],
    featured: true,
  },
  {
    when: '2025',
    name: 'Conecta Cuatro',
    href: gh('conecta-cuatro'),
    blurb: 'Connect Four robot for our diploma ceremony. OpenCV reads the board, and the opponent is MiniMax or MCTS in Rust or an AlphaZero network trained by self-play. Team of six.',
    stack: ['Python', 'Rust', 'PyTorch', 'OpenCV', 'Svelte'],
    featured: true,
  },
  {
    when: '2024',
    name: 'chart-visualizer',
    href: gh('chart-visualizer'),
    blurb: 'Charts for our Berufsmatura thesis on satisfaction when working from home.',
    stack: ['Python'],
    featured: false,
  },
  {
    when: '2024',
    name: 'task-organizer',
    href: gh('task-organizer'),
    blurb: 'Small task manager on Firebase with a CI/CD deploy pipeline.',
    stack: ['JavaScript', 'Firebase'],
    featured: false,
  },
  {
    when: '2024',
    name: 'sudoku-solver',
    href: gh('sudoku-solver'),
    blurb: 'Brute-force Sudoku solver, written to learn Rust.',
    stack: ['Rust'],
    featured: false,
  },
  {
    when: '2024',
    name: 'face-validator',
    href: gh('face-validator'),
    blurb: 'Dockerised FastAPI service that processes and checks face images.',
    stack: ['Python', 'FastAPI', 'Docker'],
    featured: false,
  },
]

export const recognition = [
  {
    when: '2026',
    title: 'Cambridge Battlecode, #189 of 831 teams',
    note: 'Autonomous game-playing bot in Rust. Platinum tier, peak rank #142.',
    more: [{ label: 'Certificate', href: '/documents/2026-cambridge-battlecode-certificate.png' }],
  },
  {
    when: '2024',
    title: 'Silicon Valley IT Talent Program, 1st place',
    href: 'https://github.com/camber-bikes/bike-fitting-api',
    note: 'One of the top 30 IT apprentices in Switzerland. Our team won with an AI bike-fitting app for Camber Bikes; I focused on the AI processing backend.',
    more: [{ label: 'Winner certificate', href: '/documents/2024-silicon-valley-it-talent-program-winner.pdf' }],
  },
]

export const education = [
  {
    when: '2021 - 2025',
    title: 'Federal Diploma in Information Technology, Application Development',
    org: 'GIBZ Zug',
    note: 'Grade 5.6 / 6.0.',
  },
  {
    when: '2021 - 2025',
    title: 'Federal Vocational Baccalaureate, Technology, Architecture and Life Sciences',
    org: 'GIBZ Zug',
    note: 'Berufsmaturität. Grade 5.6 / 6.0.',
  },
]
