"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#03050c] relative py-12 px-6 sm:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <Image
              src="/vincent-logo.png"
              alt="Vincent Logo"
              width={28}
              height={28}
              className="object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            />
          </div>
          <div>
            <div className="font-heading text-sm font-semibold text-white">
              Vincent Pablo
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              BSIT Student • Software &amp; Data Systems
            </div>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} Vincent Pablo. All rights reserved.</span>
          <div className="mt-1 text-[11px] text-slate-500 font-mono">
            University of Mindanao • CCE Skills Clinic Mentor
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/QuantumTan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#080d19] border border-white/[0.06] text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:lourdevincentpablo26@gmail.com"
            className="p-2.5 rounded-xl bg-[#080d19] border border-white/[0.06] text-slate-400 hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#080d19] border border-white/[0.06] text-blue-400 hover:text-white hover:bg-blue-600/30 transition-all cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
