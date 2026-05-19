// src/sections/Hero.jsx
import { FileDown } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Open to Grad DevOps / Cloud Roles · Sydney, AU
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Software engineer who deploys their own infra —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                and programs the hardware too.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg">
              Master of IT student at{" "}
              <strong className="text-slate-300">UTS, Sydney</strong> — open to
              grad Software Engineering and DevOps / Cloud Engineer roles in
              2026.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-200 border border-slate-700"
              >
                Contact Me
              </a>
              {/* TODO: replace href with actual resume PDF path, e.g. /resume.pdf */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-slate-600 text-slate-300 hover:border-blue-500/60 hover:text-white"
              >
                <FileDown className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          {/* Hero Visual/Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl shadow-slate-950/60 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
              <div className="font-mono text-sm space-y-2 text-slate-300">
                <div className="flex gap-2">
                  <span className="text-green-400">user@uts-lab:~$</span>
                  <span>neofetch</span>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-xs sm:text-sm">
                  <div className="text-blue-400 font-bold">OS</div>
                  <div>Linux (Ubuntu / Alpine)</div>
                  <div className="text-blue-400 font-bold">Role</div>
                  <div>Software Eng · DevOps</div>
                  <div className="text-blue-400 font-bold">University</div>
                  <div>UTS — Master of IT</div>
                  <div className="text-blue-400 font-bold">Uptime</div>
                  {/* TODO: wire to real uptime via /api/uptime */}
                  <div>99.99%</div>
                  <div className="text-blue-400 font-bold">Shell</div>
                  <div>zsh / bash</div>
                  <div className="text-blue-400 font-bold">Location</div>
                  <div>Sydney, AU</div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 flex gap-2">
                  <span className="text-green-400">user@uts-lab:~$</span>
                  <span className="animate-pulse text-slate-400">▋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
