// src/sections/Projects.jsx
import {
  Code2,
  Cloud,
  ServerCog,
  Radar,
  Github,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    id: "ci-cd-pipeline",
    icon: <ServerCog className="w-6 h-6 text-blue-400" />,
    title: "Production CI/CD Pipeline on DigitalOcean",
    role: "DevOps Engineer",
    period: "2024",
    summary:
      "Built a full CI/CD pipeline for a containerized web app using GitHub Actions, Docker, and Nginx on a DigitalOcean droplet.",
    bullets: [
      "Created multi-stage Dockerfile and Docker Compose stack with Nginx reverse proxy.",
      "Configured GitHub Actions to build, test, and deploy on every push to main.",
      "Implemented zero-downtime deployments and automatic SSL via Let's Encrypt.",
    ],
    tech: ["Docker", "GitHub Actions", "Nginx", "DigitalOcean", "Traefik / SSL"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "django-deployment",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: "Secure Django App Deployment",
    role: "Full-Stack / DevOps",
    period: "2023–2024",
    summary:
      "Deployed a Django application with PostgreSQL behind Nginx, focusing on hardened security and observability.",
    bullets: [
      "Configured Gunicorn, Nginx, and systemd services on Ubuntu 22.04.",
      "Enabled HTTPS, HSTS, and hardened TLS ciphers with automatic renewal.",
      "Set up structured logging and health checks for fast incident triage.",
    ],
    tech: ["Django", "Gunicorn", "PostgreSQL", "Nginx", "Ubuntu"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "jewellery-store",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "JKY Jewellery Store",
    role: "Full-Stack Developer",
    period: "2023",
    summary:
      "End-to-end jewellery e-commerce site with category browsing, product images, and basic order workflow.",
    bullets: [
      "Designed responsive UI and product catalogue for mobile-first customers.",
      "Built REST APIs for product listing and admin management.",
      "Deployed on cloud VPS with domain, DNS, and SSL configured from scratch.",
    ],
    tech: ["React / Vite", "Node / Django (API)", "REST", "Cloud VPS", "SSL"],
    links: {
      github: "#",
      demo: "https://jky-harngmeas.store",
    },
  },
  {
    id: "monitoring-stack",
    icon: <Radar className="w-6 h-6 text-purple-400" />,
    title: "Observability Stack for Small Services",
    role: "DevOps / SRE",
    period: "2024",
    summary:
      "Built a small observability stack to monitor containerized services and visualize performance.",
    bullets: [
      "Deployed Prometheus + Grafana for metrics and dashboards.",
      "Used exporters to monitor Linux host, containers, and Nginx.",
      "Documented alerting rules and incident runbook for service outages.",
    ],
    tech: ["Prometheus", "Grafana", "Docker", "Linux", "Alerting"],
    links: {
      github: "#",
      demo: "#",
    },
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-slate-950 border-t border-slate-800 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real deployments and hands-on work across DevOps, cloud, and
            full-stack development. Each project focuses on reliability,
            automation, and practical impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-lg shadow-slate-950/40 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {project.role} • {project.period}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 mb-3">{project.summary}</p>

              {/* Bullets */}
              <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 mb-4">
                {project.bullets.map((line, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[6px] h-1 w-1 rounded-full bg-blue-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-800/80 border border-slate-700 px-2.5 py-1 text-[11px] uppercase tracking-wide text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-3 pt-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


//TODO: add timeline for CV (https://github.com/Digital-Humanities-Toolkit/timeline-builder)