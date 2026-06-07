// All portfolio content lives here. Edit this file to update the site.
// Sections render automatically from this data.

export const site = {
  name: "Sovatha Pann",
  fullName: "Sovatha Pann",
  profileImage: "/images/profile-pic.jpeg",
  profileImageAlt: "Portrait of Sovatha Pann",
  title: "Full-stack developer | DevOps engineer",
  tagline:
    "I build reliable full systems and ship infrastructure for high-traffic products.",
  location: "Sydney, Australia",
  email: "sovathapann@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/vathapann",
    linkedin: "https://www.linkedin.com/in/sovatha-pann-a96834100/",
    email: "mailto:sovathapann@gmail.com",
    medium: "https://medium.com/@Sovathapann",
  },
} as const;

export const hero = {
  // greeting: "Hi, my name is",
  name: "Sovatha Pann",
  // tagline:
    // "🎓 Currently pursuing a Master's in IT at UTS (Sydney, Australia)\n",
  intro: `I'm a Sydney-based, currently finishing a Master of IT @UTS while looking for full-stack and DevOps roles in Australia.`,
  primaryCtaLabel: "See my work",
  primaryCtaHref: "#projects",
  blogCtaLabel: "Read my blog",
  blogCtaHref: "/blog",
};

export const about = {
  paragraphs: [
    `I've spent the last <span class="text-slate-200">4 years</span> shipping full-stack services and infrastructure including a Laravel microservice for SIM registration serving over <span class="text-mint">1M subscribers</span>, and Docker-based CI/CD pipelines for production deployments.`,
    `Right now I'm finishing my Master of IT in <span class="text-slate-200">Enterprise Software Development at UTS</span>, with a focus on cloud infrastructure and platform engineering. Outside of work I run a self-hosted Docker homelab and occasionally write about the things that broke.`,
    `Here are a few technologies I work with day-to-day:`,
  ],
  skills: [
    "Laravel (PHP)",
    "Django/FastAPI (Python)",
    "React / Next.js / Express",
    "Docker / Traefik / Nginx",
    "GitHub Actions",
    "PostgreSQL / MySQL / Ms SQL Server",
    "Linux / Bash",
    "IaC (Terraform (learning))",
    "Kubernetes (learning)",
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  url?: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Superbolt Co., Ltd.",
    role: "Frontend Developer Intern",
    url: "https://dev-ads.superbolt.com.au/",
    period: "Apr 2026 — Present",
    bullets: [
      "Built and maintained a React-based dashboard for managing digital ad campaigns, improving user engagement by 25% through enhanced UI/UX and performance optimizations",
      "Implemented a custom analytics module using D3.js, providing clients with real-time insights into campaign performance and audience demographics",
      "Collaborated with cross-functional teams to integrate third-party APIs for payment processing and data visualization, streamlining workflows and enhancing functionality",
      "Mentored junior developers through code reviews, pair programming sessions, and knowledge-sharing workshops, fostering a culture of continuous learning and improvement",
    ],
  },
  {
    company: "Smart Axiata Co., Ltd.",
    role: "Application Developer",
    url: "https://www.smart.com.kh/",
    period: "Feb 2025 — May 2025",
    bullets: [
      'Built and maintained a Laravel SIM registration microservice handling <span class="text-slate-200">1M+ active subscribers</span> with async job queues and audit trails',
      "Designed Docker + GitHub Actions pipelines for staging and production deploys, cutting release time from hours to minutes",
      "Owned API design, observability, and incident response for the registration domain",
      "Mentored two junior engineers through code review, pairing, and pull request standards",
    ],
  },
  {
    company: "Thai PBS",
    role: "Full-stack Developer/DevOps Engineer (Freelance)",
    url: "https://en.thaipbs.or.th/",
    period: "2021 — 2022",
    bullets: [
      "Delivered a full-stack HR promotion and employee management system end-to-end",
      "Built role-based approval workflows and audit trails for promotion decisions",
      "Integrated with internal PMS APIs via authenticated shell tooling",
    ],
  },
  {
    company: "Telco Connecting Co., Ltd.",
    role: "IT Support Technician (Freelance)",
    url: "https://www.telcoconnecting.com/",
    period: "2024 — 2025",
    bullets: [
      "Configured and maintained Windows and Linux servers for internal applications and services,",
      "Subnetting and VLAN management for office network infrastructure, and provided technical support to end-users across the organization.",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2020 — 2021",
    bullets: [
      "Shipped a Node.js / Express school management system as a first independent backend project",
      "Built small Laravel and Express APIs for early-stage clients in Cambodia and Thailand",
    ],
  },
  {
    company: "VAMStack Co., Ltd.",
    role: "Full-Stack Developer",
    period: "2021 — 2023",
    bullets: [
      "Assisted in developing and maintaining web applications using modern JavaScript frameworks.",
      "Participated in code reviews and contributed to the improvement of software quality.",
    ],
  },
];

export const education = {
  paragraphs: [
    `Master of Information Technology (Enterprise Software Development) — University of Technology Sydney (UTS),   <span class="text-slate-200">2025 — Present</span>`,
    `Bachelor of Engineering (Embedded Systems Engineering) — Burapha University (Thailand),  <span class="text-slate-200"> 2017 — 2021 </span>`,
  ],
  skills: [
    // "Cloud infrastructure (AWS, Azure, GCP - learning)",
    // "Platform engineering (Kubernetes, Terraform - learning)",
    // "Full-stack development (React, Laravel, Django)",
    // "CI/CD pipelines (GitHub Actions, Docker)",
    // "Databases (PostgreSQL, MySQL, MongoDB)",
    // "Linux systems and Bash scripting",
  ],
};

export type MomentImage = {
  src: string;
  alt: string;
};

export type Moment = {
  title: string;
  context: string;
  description: string;
  images: MomentImage[];
};

export const moments: Moment[] = [
  {
    title: "[VAMStack] Field deployment",
    context: "Smart Hospital Services care center",
    description:
      "Supported healthcare technology delivery at VAMStack, where I worked across responsive web applications, API integration, authentication flows, and AI-assisted medical imaging tools. This on-site moment reflects the practical side of turning product work into a usable service environment.",
    images: [
      {
        src: "/images/1658196971166.jpg",
        alt: "Sovatha Pann with colleagues at a Smart Hospital Services care center display",
      },
      // {
      //   src: "/images/20211104_113630.jpg",
      //   alt: "Smart Hospital Services screening kiosk showing Sovatha Pann",
      // },
      {
        src: "/images/vamstack-2022-on-duty.jpg",
        alt: "VAMStack on-duty team moment",
      },
    ],
  },
  {
    title: "[VAMStack] Technical presentation",
    context: "DHTC Bangkok 2022 speaker profile",
    description:
      "Represented VAMStack's medical AI platform work in a technical presentation context, connecting my AI engineering experience in image segmentation, face recognition, and diagnostic workflow tooling with healthcare product use cases.",
    images: [
      {
        src: "/images/20220824_212915.jpg",
        alt: "Conference speaker page showing Sovatha Pann as an AI engineer",
      },
      // {
      //   src: "/images/20240830_145528.jpg",
      //   alt: "VxPACS medical AI platform display banner",
      // },
    ],
  },
  {
    title: "[Telco Connecting] Infrastructure duty",
    context: "Network and server room support",
    description:
      "Handled hands-on infrastructure support for Telco Connecting, including Windows/Linux server maintenance, network equipment setup, subnetting, VLAN coordination, and end-user technical support to keep internal services reliable.",
    images: [
      {
        src: "/images/telco-connecting-on-duty-setting-network.jpg",
        alt: "Server rack with network switches and fiber connections",
      },
      {
        src: "/images/telco-connecting-on-duty-setting-network-1.png",
        alt: "Sovatha Pann setting up network equipment on site",
      },
      {
        src: "/images/telco-connecting-on-duty-setting-network-2.jpg",
        alt: "Sovatha Pann setting up network equipment on site",
      },
    ],
  },
  {
    title: "[Alphatex] Proposal discussion",
    context: "Project proposal discussion",
    description:
      "Worked as a freelance full-stack developer and DevOps engineer for AlphaTex, delivering a school management system and supporting client discussions around scope, workflows, deployment planning, CI/CD, SSL setup, and production operations.",
    images: [
      {
        src: "/images/alphatex-on-duty-project-proposal-discussion.jpg",
        alt: "Sovatha Pann in a meeting room discussing a project proposal with colleagues",
      },
      {
        src: "/images/alphatex-on-duty-project-proposal-discussion-1.jpg",
        alt: "Sovatha Pann presenting a project proposal to colleagues",
      },
      {
        src: "/images/alphatex-on-duty-project-proposal-discussion-2.jpg",
        alt: "Sovatha Pann and colleagues reviewing a project proposal",
      },
    ],
  },
];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type FeaturedProject = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  images?: ProjectImage[];
  variant?: "default" | "showcase";
  github?: string;
  external?: string;
};

export const featuredProjects: FeaturedProject[] = [
  // {
  //   title: "SIM registration microservice",
  //   description: `A Laravel-based microservice handling SIM registration and KYC flows for a national telecom, serving <span class="text-slate-200">1M+ active subscribers</span>. Built for high-throughput onboarding with async job queues, audit trails, and granular failure handling. Reduced average onboarding latency by 40% versus the legacy monolith.`,
  //   tech: ["Laravel", "MySQL", "Redis", "Docker", "RabbitMQ"],
  //   image: "/images/sim-microservice.svg",
  //   imageAlt: "Architecture diagram of the SIM registration microservice",
  //   github: "https://github.com/sovatha",
  //   external: undefined,
  // },
  {
    title: "Self-hosted Docker homelab (In development)",
    description: `A production-style homelab running 15+ services behind <span class="text-slate-200">Traefik v3</span> with automatic TLS, GitOps deploys via GitHub Actions, and infrastructure-as-code. Includes writeups on Compose v2 migration, API version compatibility, and outage post-mortems.`,
    tech: ["Docker", "Traefik v3", "GitHub Actions", "Ubuntu", "Cloudflare"],
    image: "",
    // "/images/homelab.svg",
    imageAlt: "Screenshot of the Traefik dashboard showing running services",
    github: "https://github.com/sovatha",
    external: "https://sovatha.dev/blog",
  },
  {
    title: "HR promotion & employee system",
    description: `A full-stack HR platform delivered as a freelance engagement for Thai PBS. Manages employee records, multi-step promotion workflows, and approval chains with role-based access control and signed audit logs. Replaced a paper-driven process used by 500+ staff.`,
    tech: [
      "Backend: FastAPI",
      "Frontend: Django",
      "Database: SQL Server",
      "Role-Based Access Control",
      "Infrastructure: Docker, Traefik, On-prem Windows Server",
    ],
    image: "/images/thaipbs-hr-system_1.png",
    imageAlt: "Screenshot of the HR promotion dashboard",
    variant: "showcase",
    images: [
      {
        src: "/images/thaipbs-hr-system_1.png",
        alt: "Screenshot of the HR promotion dashboard",
      },
      {
        src: "/images/thaipbs-hr-system_2.png",
        alt: "Screenshot of the HR employee management dashboard",
      },
    ],
    github: undefined,
    external: undefined,
  },
  {
    title: "School management system",
    description: `A confidential freelance school management platform delivered for a private school, supporting <span class="text-slate-200">200+ active student records</span> across enrolment, grading, scheduling, attendance, classroom management, and inventory workflows. Designed and built 30+ Express.js REST API endpoints to streamline operations across 4 departments. Source code is private due to client confidentiality.`,
    tech: [
      "Vue.js",
      "Express.js",
      "MongoDB, Docker",
      "Role-Based Access Control, Digital Ocean Droplet deployment",
    ],
    image: "/images/willkids-school-ui.png",
    images: [
      {
        src: "/images/willkids-school-ui.png",
        alt: "Screenshot of the school management system dashboard",
      },
      {
        src: "/images/willkids-school-ui-1.png",
        alt: "Screenshot of the school management system dashboard",
      },
    ],
    imageAlt: "Screenshot of the school management system dashboard",
    variant: "showcase",
    github: undefined,
    external: undefined,
  },
];

export type OtherProject = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "AI resume tailoring tool",
    description:
      "A web app that analyzes job descriptions and suggests targeted resume edits using LLM APIs.",
    tech: ["Next.js", "TypeScript", "OpenAI API"],
    github: "https://github.com/sovatha",
    external: undefined,
  },
  {
    title: "School management system",
    description:
      "First independent Node.js project — student records, enrolment, and attendance tracking.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/sovatha",
    external: undefined,
  },
  {
    title: "PMS API integration toolkit",
    description:
      "Shell tooling for authenticated curl-based integration with the Thai PBS internal PMS.",
    tech: ["Bash", "curl", "jq"],
    github: "https://github.com/sovatha",
    external: undefined,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Moments", href: "#moments" },
  { label: "Education", href: "#education" },
  { label: "Work", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
] as const;
