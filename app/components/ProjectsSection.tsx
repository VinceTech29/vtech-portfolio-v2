"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Layers,
  Database,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  tagline: string;
  category: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  logoSrc?: string;
  badge: string;
  metrics: { label: string; value: string }[];
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "SwineTrack POS System",
      tagline: "Point of Sale & Livestock Batch Automation",
      category: "Enterprise Web System",
      badge: "Flagship Project",
      description:
        "Comprehensive point of sale, supplier batch tracking, and sales analytics suite designed for livestock operations. Engineered with strict MySQL database routines and triggers that enforce data integrity by preventing orphan deletions, tracking batch movements, and automating financial reporting.",
      keyFeatures: [
        "Automated SQL trigger preventing deletion of suppliers with active batches",
        "Filtered and paginated sales reporting with daily summary aggregations",
        "Export engine for financial reports, batch audit logs, and inventory statements",
        "Interactive dashboard displaying sales activity trends and supplier health",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "SQL Triggers & Views"],
      githubUrl: "https://github.com/QuantumTan/swineTrackPOS",
      metrics: [
        { label: "Data Integrity", value: "100%" },
        { label: "Reporting", value: "Real-Time" },
        { label: "Safety Triggers", value: "Active" },
      ],
    },
    {
      title: "Migs Fitness Management System",
      tagline: "Gym Operations, Subscriptions & Member Tracking",
      category: "Full-Stack Web Application",
      badge: "Operational Platform",
      logoSrc: "/projects/migs-logo.png",
      description:
        "Dedicated web platform for gym administration, managing memberships, walk-ins, trainer schedules, and daily revenue collection. Eliminates manual record-keeping with automated expiry notifications, member attendance logs, and financial dashboards.",
      keyFeatures: [
        "Dynamic membership subscription management with auto-status tracking",
        "Member attendance check-in and check-out logs",
        "Point of sale for fitness merchandise, supplements, and gym passes",
        "Executive dashboard displaying revenue breakdowns and membership retention",
      ],
      techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Blade", "REST APIs"],
      githubUrl: "https://github.com/QuantumTan",
      metrics: [
        { label: "Member Flow", value: "Automated" },
        { label: "Billing", value: "Instant" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
    {
      title: "AgriCycle Solutions",
      tagline: "Sustainable Agricultural Byproduct & Logistics Tracker",
      category: "Enterprise Desktop System",
      badge: "Circular Economy",
      logoSrc: "/projects/agricycle-logo.png",
      description:
        "Enterprise desktop application built with modern .NET 10 and C# WPF. Provides agricultural enterprises and recycling plants with precise traceability of farm byproducts, waste conversion batch lifecycles, and distribution logistics.",
      keyFeatures: [
        "Batch traceability for organic waste and biomass conversions",
        "Supplier and farm dispatch logs with custom weight/unit conversions",
        "Local and networked relational SQL database architecture",
        "High-performance native desktop client with responsive WPF interface",
      ],
      techStack: ["C#", ".NET 10", "WPF / XAML", "SQL Database", "Architecture Design"],
      githubUrl: "https://github.com/QuantumTan",
      metrics: [
        { label: "Platform", value: ".NET 10" },
        { label: "Traceability", value: "End-to-End" },
        { label: "Architecture", value: "Desktop" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-12 relative bg-[#05070e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wider">
            <span className="w-4 h-[1.5px] bg-blue-500" />
            <span>03 / PROJECTS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects built around real needs.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl font-normal leading-relaxed">
            Case studies and applications engineered to solve specific operational bottlenecks with database-enforced integrity.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className="rounded-[28px] figma-card border border-white/[0.08] overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-2xl shadow-black/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                {/* Visual Card Mockup Left */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl figma-card-inner border border-white/[0.06] p-6 min-h-[300px] flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#080d1e] to-[#040610]">
                    {/* Top Bar of Mockup */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        {proj.category}
                      </span>
                    </div>

                    {/* Center Mockup Content */}
                    <div className="py-8 flex flex-col items-center justify-center text-center">
                      {proj.logoSrc ? (
                        <div className="w-20 h-20 relative mb-3 p-2 rounded-2xl bg-[#090e1d] border border-blue-500/30 flex items-center justify-center shadow-lg">
                          <Image
                            src={proj.logoSrc}
                            alt={proj.title}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-3 border border-white/20">
                          <Activity className="w-8 h-8 text-white" />
                        </div>
                      )}

                      <h4 className="font-heading text-lg font-bold text-white tracking-tight">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-blue-300 font-mono mt-1">
                        {proj.tagline}
                      </p>
                    </div>

                    {/* Bottom Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.06]">
                      {proj.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-[#050812] rounded-xl p-2 text-center border border-white/[0.04]"
                        >
                          <div className="text-[9px] font-mono text-slate-500 uppercase">{m.label}</div>
                          <div className="text-xs font-mono font-bold text-white mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Details Right */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/25">
                      {proj.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      CASE 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                      {proj.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      Key Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {proj.keyFeatures.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#090e1c] border border-white/[0.06] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <a
                      href="#deep-dive"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-[#0b101e] border border-white/[0.08] hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                      <Database className="w-3.5 h-3.5 text-blue-400" />
                      <span>Inspect SQL Engine</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
