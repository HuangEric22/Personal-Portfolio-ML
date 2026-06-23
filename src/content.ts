export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export type ProjectItem = {
  name: string;
  subtitle: string;
  period: string;
  link: string;
  repoLabel: string;
  category: string;
  summary: string;
  impact: string;
  highlights: string[];
  tech: string[];
};

export const profile = {
  name: "Eric Huang",
  role: "Software Engineer + ML Systems Builder",
  location: "Los Angeles, CA",
  email: "huangeric50@gmail.com",
  phone: "949-664-1648",
  github: "https://github.com/HuangEric22",
  resumePath: "/Eric_Huang_Resume.pdf",
  avatar: "https://avatars.githubusercontent.com/u/147469005?v=4",
  summary:
    "UCLA computer science student building practical software across cloud infrastructure, applied machine learning, and AI-assisted workflows.",
  focus: ["ML systems", "Cloud tooling", "AI products", "Backend platforms"]
};

export const stats = [
  {
    value: "75%",
    label: "less onboarding time",
    detail: "Go CLI tooling for AWS EC2 Nitro onboarding"
  },
  {
    value: "50%",
    label: "faster releases",
    detail: "CloudFormation and CI/CD automation"
  },
  {
    value: "68.20%",
    label: "BEV AP",
    detail: "CenterPillars 3D detection performance"
  },
  {
    value: "19.7%",
    label: "character error rate",
    detail: "sEMG keystroke classification after model iteration"
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Amazon Web Services, EC2 Nitro",
    date: "Jun. 2025 - Sep. 2025",
    location: "Seattle, WA",
    summary: "Built secure cloud automation and developer onboarding tools for EC2 Nitro teams.",
    bullets: [
      "Built and launched a Go-based CLI onboarding tool that reduced onboarding time and manual workload by 75%.",
      "Deployed API Gateway endpoints and AWS Lambda handlers with SAM deploy for secure service calls.",
      "Integrated IAM roles and Midway cookies for authentication, strengthening access control across internal workflows.",
      "Automated infrastructure deployment with CloudFormation and CI/CD, cutting release time by 50%."
    ],
    tech: ["Go", "AWS Lambda", "API Gateway", "SAM", "IAM", "CloudFormation", "CI/CD"]
  },
  {
    role: "LZR Research Assistant",
    company: "Stanford Security Research",
    date: "Oct. 2024 - Oct. 2025",
    location: "Stanford, CA",
    summary: "Improved internet-scale service detection tooling with performance and compliance safeguards.",
    bullets: [
      "Optimized packet transmission and control flow in Go, speeding detection of unexpected services by 35%.",
      "Created a Go script to avoid scanning blocked IPs, decreasing runtime by 20% while honoring ISP requests."
    ],
    tech: ["Go", "Networking", "Security research", "Packet analysis", "Automation"]
  }
];

export const projects: ProjectItem[] = [
  {
    name: "GeminiGo",
    subtitle: "Tool-augmented AI itinerary planner",
    period: "Jan. 2026 - Present",
    link: "https://github.com/HuangEric22/gemini_hackathon",
    repoLabel: "HuangEric22/gemini_hackathon",
    category: "AI Product",
    summary:
      "Grounds itinerary generation with routes, weather, restaurant data, opening hours, and scheduling constraints.",
    impact: "Reduced planning errors by injecting real travel-time matrices and operating constraints into the model context.",
    highlights: [
      "Designed multi-model inference routing across Gemini Pro and Flash tiers for reliability under heavy load.",
      "Built a Next.js, TypeScript, Drizzle, and Turso/SQLite stack with caching to reduce latency and API calls."
    ],
    tech: ["Next.js", "TypeScript", "Gemini", "Drizzle", "Turso", "SQLite"]
  },
  {
    name: "Spire Bot",
    subtitle: "Two-policy reinforcement-learning game agent",
    period: "Apr. 2026 - Present",
    link: "https://github.com/HuangEric22/spire-bot",
    repoLabel: "HuangEric22/spire-bot",
    category: "Reinforcement Learning",
    summary:
      "A Slay the Spire 2 agent architecture with separate combat and planning policies for long-horizon decision making.",
    impact: "Structured game state, masked discrete actions, and trajectory generation for PPO and behavioral cloning workflows.",
    highlights: [
      "Designed a PPO-based PyTorch combat policy over game-state features and valid-action masks.",
      "Built simulation data pipelines for rollouts, offline training, warm starts, and agent evaluation."
    ],
    tech: ["Python", "PyTorch", "PPO", "NumPy", ".NET CLI"]
  },
  {
    name: "CenterPillars",
    subtitle: "Low-latency 3D object detection",
    period: "Sep. 2025 - Dec. 2025",
    link: "https://github.com/HuangEric22/PointPillars",
    repoLabel: "HuangEric22/PointPillars",
    category: "Computer Vision",
    summary:
      "A LiDAR detection system combining pillar BEV encoding with anchor-free, center-based detection heads.",
    impact: "Reached 68.20% BEV AP, improving 6.75% over the PointPillars baseline while keeping inference low latency.",
    highlights: [
      "Accelerated IoU and NMS with custom CUDA kernels, reducing inference time from 16 ms to 12 ms.",
      "Used TensorBoard and Matplotlib to debug localization sensitivity and validate model improvements."
    ],
    tech: ["Python", "PyTorch", "CUDA", "TensorBoard", "Matplotlib"]
  },
  {
    name: "NoteLab",
    subtitle: "AI note-taking with citations and realtime transcription",
    period: "Mar. 2025 - Apr. 2025",
    link: "https://github.com/henrynvn09/NoteLab",
    repoLabel: "henrynvn09/NoteLab",
    category: "Full-stack AI",
    summary:
      "A note-taking tool that turns realtime transcription, scraped visuals, and citation-aware AI workflows into study notes.",
    impact: "Reduced transcription cost by 25% and boosted scraped chart and diagram accuracy by 35%.",
    highlights: [
      "Built the product with Angular, TypeScript, FastAPI, MongoDB, and Docker.",
      "Engineered AI note generation workflows that include images, citations, and timestamped references."
    ],
    tech: ["Angular", "TypeScript", "FastAPI", "MongoDB", "Docker", "Deepgram"]
  },
  {
    name: "EMG2QWERTY",
    subtitle: "sEMG keystroke classification",
    period: "Jan. 2024 - Mar. 2024",
    link: "https://github.com/kevinhongca/emg2qwerty",
    repoLabel: "kevinhongca/emg2qwerty",
    category: "Machine Learning",
    summary:
      "A sequence-modeling project classifying keystrokes from forearm sEMG signals using neural architectures.",
    impact: "Improved character error rate from 30% to 19.7% with temporal convolutions and bidirectional LSTMs.",
    highlights: [
      "Trained CNN, LSTM, GRU, and Transformer variants to compare temporal modeling tradeoffs.",
      "Diagnosed cross-user robustness limits as subject-generalization error rose sharply."
    ],
    tech: ["Python", "CNN", "LSTM", "GRU", "Transformer", "Keras"]
  }
];

export const skillGroups = [
  {
    name: "Languages",
    items: ["C++", "C", "Python", "Go", "Java", "TypeScript", "JavaScript", "SQL", "Bash"]
  },
  {
    name: "ML + Data",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Keras"]
  },
  {
    name: "Cloud + Backend",
    items: ["AWS Lambda", "API Gateway", "IAM", "SAM", "FastAPI", "Flask", "Express", "Node.js"]
  },
  {
    name: "Frontend + Product",
    items: ["React Native", "Angular", "Bootstrap", "Three.js", "Firebase", "MongoDB"]
  },
  {
    name: "Developer Tools",
    items: ["Git", "Docker", "WSL", "VirtualBox", "Agile", "Jira", "Jest", "Cobra"]
  }
];

export const education = {
  school: "University of California, Los Angeles",
  degree: "Bachelor of Science in Computer Science",
  date: "Aug. 2022 - Jun. 2026",
  location: "Los Angeles, CA",
  gpa: "3.71 / 4.0",
  coursework: [
    "Neural Networks",
    "Computer Vision",
    "Reinforcement Learning",
    "Distributed Systems",
    "Natural Language Processing",
    "Programming Languages",
    "Databases",
    "Web Development"
  ]
};
