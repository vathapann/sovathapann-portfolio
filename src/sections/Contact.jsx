// src/sections/Contact.jsx
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
          // 06 — Contact
        </p>
        <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Looking for grad opportunities in Software Engineering, DevOps / Cloud,
          and Embedded Systems. Sydney-based and open to remote.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/vathapann"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 text-white border border-slate-700 hover:border-slate-600"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sovatha-pann-a96834100/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-full transition-colors duration-200 text-white"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sovathapann@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 text-white border border-slate-700 hover:border-slate-600"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>© {year} Sovatha Pann. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  );
}
