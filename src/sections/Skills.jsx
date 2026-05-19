// src/sections/Skills.jsx
import { Server, Globe, Code, Cpu } from "lucide-react";

const skills = {
  devops: [
    { name: "Docker & Kubernetes", level: "Advanced" },
    { name: "CI/CD (Jenkins/GitHub)", level: "Advanced" },
    { name: "AWS & Azure Cloud", level: "Intermediate" },
    { name: "Terraform/Ansible", level: "Intermediate" },
  ],
  networking: [
    { name: "TCP/IP & DNS", level: "Advanced" },
    { name: "Load Balancing (Nginx)", level: "Advanced" },
    { name: "Firewall Config", level: "Intermediate" },
    { name: "Subnetting/VLANs", level: "Intermediate" },
  ],
  web: [
    { name: "React & Node.js", level: "Intermediate" },
    { name: "RESTful APIs", level: "Advanced" },
    { name: "HTML5/CSS3", level: "Advanced" },
    { name: "PostgreSQL/Mongo", level: "Intermediate" },
  ],
  embedded: [
    { name: "C/C++ Programming", level: "Advanced" },
    { name: "RTOS", level: "Intermediate" },
    { name: "IoT Protocols (MQTT)", level: "Advanced" },
    { name: "Microcontrollers", level: "Advanced" },
  ],
};

const categories = [
  {
    key: "devops",
    label: "DevOps",
    icon: Server,
    accent: "text-blue-400",
    hover: "hover:border-blue-500/50 hover:shadow-blue-500/5",
  },
  {
    key: "networking",
    label: "Networking",
    icon: Globe,
    accent: "text-cyan-400",
    hover: "hover:border-cyan-500/50 hover:shadow-cyan-500/5",
  },
  {
    key: "web",
    label: "Web Dev",
    icon: Code,
    accent: "text-purple-400",
    hover: "hover:border-purple-500/50 hover:shadow-purple-500/5",
  },
  {
    key: "embedded",
    label: "Embedded",
    icon: Cpu,
    accent: "text-green-400",
    hover: "hover:border-green-500/50 hover:shadow-green-500/5",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-900/50 border-y border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            // 02 — Skills
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical Proficiency
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A full-stack approach to infrastructure and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ key, label, icon: Icon, accent, hover }) => (
            <div key={key} className="space-y-4">
              <div className={`flex items-center gap-3 ${accent} mb-2`}>
                <Icon className="w-6 h-6" />
                <h3 className="font-bold text-white">{label}</h3>
              </div>
              <ul className="space-y-3">
                {skills[key].map((skill, idx) => (
                  <li
                    key={idx}
                    className={`bg-slate-900 p-3 rounded-lg border border-slate-800 shadow-sm transition-all duration-200 hover:shadow-lg ${hover}`}
                  >
                    <div className="font-medium text-slate-200 text-sm">
                      {skill.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {skill.level}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
