// src/sections/Hero.jsx
import { Shield } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Open to Work
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Mastering the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Infrastructure & Code
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg">
              I am a <strong>Master of IT student at UTS</strong> bridging the
              gap between hardware and cloud. Specializing in DevOps automation,
              secure networking, and embedded systems engineering.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-900/20"
              >
                Contact Me
              </a>
              <a
                href="#guide"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700"
              >
                View Setup Guide
              </a>
            </div>
          </div>

          {/* Hero Visual/Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
              <div className="font-mono text-sm space-y-2 text-slate-300">
                <div className="flex gap-2">
                  <span className="text-green-400">user@uts-lab:~$</span>
                  <span>neofetch</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 text-xs sm:text-sm">
                  <div className="text-blue-400 font-bold">OS</div>
                  <div>Linux (Ubuntu/Alpine)</div>
                  <div className="text-blue-400 font-bold">Role</div>
                  <div>DevOps Engineer</div>
                  <div className="text-blue-400 font-bold">University</div>
                  <div>UTS (Master of IT)</div>
                  <div className="text-blue-400 font-bold">Uptime</div>
                  <div>99.99%</div>
                  <div className="text-blue-400 font-bold">Shell</div>
                  <div>zsh / bash</div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 flex gap-2">
                  <span className="text-green-400">user@uts-lab:~$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}