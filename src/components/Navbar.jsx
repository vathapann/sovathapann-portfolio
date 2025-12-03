// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tighter">
              SOVATHAPANN<span className="text-blue-500">.SITE</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <Link
              to="/#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="/#skills"
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              to="/#projects"
              onClick={()=> setIsMenuOpen(false)}
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/#guide"
              className="hover:text-blue-400 transition-colors"
            >
              Deploy Guide
            </Link>
            <Link
              to="/journal"
              className="hover:text-blue-400 transition-colors"
            >
              Dev Journal
            </Link>
            <Link
              to="/#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
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
            {[
              { href: "/#about", label: "About" },
              { href: "/#skills", label: "Skills" },
              { href: "/#guide", label: "Deploy Guide" },
              { href: "/journal", label: "Dev Journal" },
              { href: "/#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-3 py-2 rounded-md hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
