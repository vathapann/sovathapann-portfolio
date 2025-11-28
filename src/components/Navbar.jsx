// src/components/Navbar.jsx
import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tighter">
              SOVATHAPANN<span className="text-blue-500">.COM</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#guide" className="hover:text-blue-400 transition-colors">
              Deploy Guide
            </a>
            <a
              href="#journal"
              className="hover:text-blue-400 transition-colors"
            >
              Dev Journal
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-400 hover:text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#guide"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Deploy Guide
            </a>
            <a
              href="#journal"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Dev Journal
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
