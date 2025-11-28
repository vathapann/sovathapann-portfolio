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

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-900/50 border-y border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical Proficiency
          </h2>
          <p className="text-slate-400">
            A full-stack approach to infrastructure and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DevOps */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-400 mb-2">
              <Server className="w-6 h-6" />
              <h3 className="font-bold text-white">DevOps</h3>
            </div>
            <ul className="space-y-3">
              {skills.devops.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-slate-900 p-3 rounded border border-slate-800 hover:border-blue-500/50 transition-colors"
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

          {/* Networking */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-cyan-400 mb-2">
              <Globe className="w-6 h-6" />
              <h3 className="font-bold text-white">Networking</h3>
            </div>
            <ul className="space-y-3">
              {skills.networking.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-slate-900 p-3 rounded border border-slate-800 hover:border-cyan-500/50 transition-colors"
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

          {/* Web */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-purple-400 mb-2">
              <Code className="w-6 h-6" />
              <h3 className="font-bold text-white">Web Dev</h3>
            </div>
            <ul className="space-y-3">
              {skills.web.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-slate-900 p-3 rounded border border-slate-800 hover:border-purple-500/50 transition-colors"
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

          {/* Embedded */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-green-400 mb-2">
              <Cpu className="w-6 h-6" />
              <h3 className="font-bold text-white">Embedded</h3>
            </div>
            <ul className="space-y-3">
              {skills.embedded.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-slate-900 p-3 rounded border border-slate-800 hover:border-green-500/50 transition-colors"
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
        </div>
      </div>
    </section>
  );
}