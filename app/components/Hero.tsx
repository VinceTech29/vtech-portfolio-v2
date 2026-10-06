"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  Mail,
  GitBranch,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 sm:px-10 lg:px-12 overflow-hidden bg-[#070a0d]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="max-w-[1360px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center relative z-10 my-auto">
        {/* Left Column: Glassmorphic Phone / System Console Card */}
        <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start">
          <div className="w-full max-w-[310px] rounded-[30px] p-5 figma-card border border-white/[0.08] shadow-2xl shadow-black/90 relative">
            {/* Header: Logo + "I'm Vincent." */}
            <div className="flex items-center gap-3 mb-4 px-1">
              <div className="w-7 h-7 relative flex items-center justify-center shrink-0">
                <Image
                  src="/vincent-logo.png"
                  alt="Vincent Logo"
                  width={28}
                  height={28}
                  className="object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.85)]"
                  priority
                />
              </div>
              <div className="flex flex-col leading-[1.15]">
                <span className="text-slate-300 text-sm font-normal">I&apos;m</span>
                <span className="font-heading font-bold text-white text-lg tracking-tight">
                  Vincent.
                </span>
              </div>
            </div>

            {/* Inset Screen Card with Emblem & Orbital Rings */}
            <div className="rounded-2xl figma-card-inner p-4 relative overflow-hidden flex flex-col items-center justify-center mb-5 border border-white/[0.05] bg-tech-grid min-h-[190px]">
              <div className="relative w-36 h-36 flex items-center justify-center my-1">
                {/* Orbital concentric rings */}
                <div className="w-32 h-32 rounded-full border border-blue-500/20 absolute pointer-events-none" />
                <div className="w-40 h-24 rounded-full border border-cyan-400/20 absolute -rotate-12 pointer-events-none" />

                <Image
                  src="/vincent-logo.png"
                  alt="Vincent Emblem"
                  width={96}
                  height={96}
                  className="object-contain relative z-10 drop-shadow-[0_0_20px_rgba(56,189,248,0.75)]"
                  priority
                />
              </div>

              {/* System Builder Badge */}
              <div className="mt-1 px-3 py-1 rounded-md bg-[#040711] border border-white/[0.08] text-[10px] font-mono tracking-widest text-slate-400 uppercase relative z-10">
                SYSTEM BUILDER
              </div>
            </div>

            {/* Status Indicator */}
            <div className="px-1 mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse shrink-0" />
              <div className="text-xs text-slate-400 leading-tight">
                Available for{" "}
                <span className="text-white font-medium">opportunities</span>
              </div>
            </div>

            {/* Info Grid (Focus & Based in) */}
            <div className="grid grid-cols-2 gap-3 px-1 mb-5 text-xs">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                  FOCUS
                </span>
                <span className="text-slate-200 font-medium text-xs mt-0.5 block">
                  Software &amp; Data
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                  BASED IN
                </span>
                <span className="text-slate-200 font-medium text-xs mt-0.5 block">
                  Philippines
                </span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-2 mb-4 px-1">
              <button
                className="p-2.5 rounded-xl bg-[#0e1424] border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/30 transition-all cursor-pointer"
                title="Achievements"
              >
                <Award className="w-4 h-4" />
              </button>
              <a
                href="https://github.com/QuantumTan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0e1424] border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/30 transition-all cursor-pointer"
                title="Repositories"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href="mailto:lourdevincentpablo26@gmail.com"
                className="p-2.5 rounded-xl bg-[#0e1424] border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/30 transition-all cursor-pointer"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Me CTA Button at bottom of card */}
            <a
              href="#contact"
              className="w-full py-3 px-4 rounded-xl bg-[#0e1424] hover:bg-[#141d33] border border-white/[0.1] text-white text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Contact me</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Center Hero Content */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1424] border border-blue-500/25 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_#60a5fa]" />
            <span className="text-xs text-slate-300 font-medium">
              Hello, I&apos;m Vincent
            </span>
          </div>

          {/* Bold Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            I build{" "}
            <span className="text-[#3b82f6]">
              software
            </span>
            <br />
            &amp; data systems.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-400 max-w-lg mb-8 leading-relaxed font-normal">
            BSIT student, mentor, and technology enthusiast focused on creating practical digital solutions through development, databases, analytics, and thoughtful design.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563eb] hover:bg-[#3b82f6] text-white text-xs font-semibold shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-200 cursor-pointer"
            >
              <span>View my projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d1424] hover:bg-[#131d36] border border-white/[0.1] text-slate-200 text-xs font-medium transition-all duration-200 cursor-pointer"
            >
              <span>Let&apos;s connect</span>
            </a>
          </div>

          {/* Tech Badges List */}
          <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase flex items-center gap-2">
            <span>TYPESCRIPT</span>
            <span className="text-blue-500">•</span>
            <span>NEXT.JS</span>
            <span className="text-blue-500">•</span>
            <span>SQL</span>
            <span className="text-blue-500">•</span>
            <span>UI/UX</span>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
              SCROLL DOWN
            </span>
            <a
              href="#about"
              className="w-8 h-8 rounded-full border border-dashed border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Metallic Blue Sphere Visual */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-center justify-center relative">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* 3D Sphere Element */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full sphere-3d relative flex items-center justify-center overflow-hidden">
              {/* Highlight specular reflection at upper left */}
              <div className="absolute top-5 left-7 w-20 h-14 bg-white/30 rounded-full blur-lg -rotate-45 pointer-events-none" />
              {/* Subtle inner ring highlight */}
              <div className="absolute inset-2 rounded-full border border-white/[0.08] pointer-events-none" />
            </div>
          </div>

          {/* Currently Exploring Note */}
          <div className="mt-8 text-right self-end hidden lg:block">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
              CURRENTLY EXPLORING
            </span>
            <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
              Software Development • Data Analytics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
