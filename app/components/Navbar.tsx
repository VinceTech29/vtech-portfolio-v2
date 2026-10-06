"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-[#070a0d]/95 backdrop-blur-md">
      <div className="max-w-[1360px] mx-auto px-8 sm:px-12 flex items-center justify-between">
        {/* Brand Monogram Glyph */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/vincent-logo.png"
              alt="Vincent Logo"
              width={30}
              height={30}
              className="object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.85)]"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 text-xs tracking-wide transition-colors font-sans ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200 font-normal"
                }`}
              >
                {link.label}

                {/* Glowing Blue Underline Tab for Active State */}
                {isActive && (
                  <div className="absolute -bottom-3 left-0 right-0 flex flex-col items-center">
                    <span className="w-full h-[2.5px] bg-[#3b82f6] rounded-full shadow-[0_0_10px_#3b82f6]" />
                    <span className="w-10 h-2 bg-[#3b82f6]/50 blur-sm rounded-full -mt-0.5" />
                  </div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b16] border-b border-white/10 px-8 py-4 space-y-2.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block py-1.5 text-sm ${
                activeSection === link.id ? "text-blue-400 font-semibold" : "text-slate-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
