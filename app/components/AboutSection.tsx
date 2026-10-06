"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    {
      label: "EXPERIENCE",
      value: "3+",
      detail: "Years of hands-on growth",
    },
    {
      label: "PROJECT WORK",
      value: "10+",
      detail: "Systems and applications",
    },
    {
      label: "UI/UX DESIGNS",
      value: "04",
      detail: "Figma interface projects",
    },
    {
      label: "CERTIFICATIONS",
      value: "20",
      detail: "Technical credentials",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-12 relative bg-[#05070e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag & Title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wider">
            <span className="w-4 h-[1.5px] bg-blue-500" />
            <span>01 / ABOUT</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technology with purpose.
          </h2>
        </div>

        {/* Outer Dashboard Window Container */}
        <div className="rounded-[28px] figma-card border border-white/[0.08] p-5 sm:p-7 shadow-2xl shadow-black/80">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-bold tracking-widest">...</span>
              <span>/ ABOUT</span>
            </div>
            <span>Vincent Pablo — Portfolio</span>
          </div>

          {/* Inner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: How I Work & Bio */}
            <div className="lg:col-span-6 rounded-2xl figma-card-inner p-6 sm:p-8 flex flex-col justify-between border border-white/[0.05]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-4 tracking-wider">
                  <span className="w-3.5 h-[1.5px] bg-blue-500" />
                  <span>HOW I WORK</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                  I solve problems by building things.
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  <p>
                    I&apos;m a BS Information Technology student at the{" "}
                    <strong className="text-white font-semibold">
                      University of Mindanao
                    </strong>
                    , driven by the challenge of turning complex needs into clear,
                    useful systems.
                  </p>
                  <p>
                    My work moves between software development, database architecture,
                    analytics, and UI/UX—understanding the problem first, then shaping
                    the data and interface around real people.
                  </p>
                  <p>
                    I also lead and mentor through the CCE Skills Clinic, helping
                    other students strengthen practical technical skills.
                  </p>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] text-[11px] font-mono tracking-wider text-slate-500 uppercase flex flex-wrap items-center gap-2">
                <span>SOFTWARE</span>
                <span className="text-blue-500">•</span>
                <span>DATABASES</span>
                <span className="text-blue-500">•</span>
                <span>DATA</span>
                <span className="text-blue-500">•</span>
                <span>UI/UX</span>
              </div>
            </div>

            {/* Right Card: Portrait of Vincent */}
            <div className="lg:col-span-6 rounded-2xl figma-card-inner overflow-hidden relative flex flex-col justify-between min-h-[380px] border border-white/[0.05]">
              {/* Portrait Image */}
              <div className="relative w-full h-full min-h-[320px] flex items-center justify-center bg-[#070b16]">
                <Image
                  src="/vincent-portrait.png"
                  alt="Portrait / Vincent Pablo"
                  fill
                  className="object-cover object-top grayscale contrast-[1.1] brightness-[0.9]"
                  priority
                />

                {/* Subtle gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060914] via-transparent to-black/30" />

                {/* Top Right Portrait Tag */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>PORTRAIT / VINCENT PABLO</span>
                </div>

                {/* Bottom Text Banner inside Image */}
                <div className="absolute bottom-5 left-6 right-6 z-10">
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                    Still curious. Still building.
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Based in the Philippines • Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl figma-card border border-white/[0.06] p-5 sm:p-6"
            >
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                {s.label}
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-1.5">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
