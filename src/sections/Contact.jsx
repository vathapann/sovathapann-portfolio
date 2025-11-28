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
        <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          I'm currently looking for opportunities in DevOps Engineering, Network
          Administration, or Embedded Software roles.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-white"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-full transition-colors text-white"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:student@uts.edu.au"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-white"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-sm text-slate-500">
          <p>
            © {year} UTS Master of IT Student Portfolio. Built with React &
            Tailwind.
          </p>
        </footer>
      </div>
    </section>
  );
}

// return (<div> HI</div>)};
