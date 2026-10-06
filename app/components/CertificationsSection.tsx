"use client";

import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  Award,
} from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  skills: string;
  date: string;
  credentialId: string;
}

export default function CertificationsSection() {
  const certifications: Certificate[] = [
    {
      title: "Advanced Relational Database Design & SQL",
      issuer: "Database Architecture Program",
      skills: "Stored Procedures, Triggers, Views, Normalization",
      date: "2025",
      credentialId: "SQL-DB-84920",
    },
    {
      title: "Modern Full-Stack Web Development",
      issuer: "Next.js & React Ecosystem",
      skills: "Next.js App Router, TypeScript, Tailwind CSS, SSR",
      date: "2025",
      credentialId: "FS-NX-99381",
    },
    {
      title: "Enterprise Application Architecture with C# .NET",
      issuer: ".NET Software Engineering",
      skills: "C# 13, .NET 10, WPF, OOP Design Patterns",
      date: "2024",
      credentialId: "DOTNET-77123",
    },
    {
      title: "Backend API Engineering & Database Security",
      issuer: "Backend & Web Security",
      skills: "PHP / Laravel, RESTful APIs, RBAC, Sanitization",
      date: "2024",
      credentialId: "SEC-API-55209",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 sm:px-10 lg:px-12 relative bg-[#05070e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wider">
            <span className="w-4 h-[1.5px] bg-blue-500" />
            <span>06 / CERTIFICATIONS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Learning validated.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl font-normal leading-relaxed">
            Ongoing pursuit of technical mastery through structured curricula, verifiable milestones, and hands-on implementations.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Big Summary Card */}
          <div className="lg:col-span-4 rounded-[28px] figma-card p-8 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>

              <div className="font-heading text-5xl sm:text-6xl font-extrabold text-white">
                20
              </div>
              <div className="font-heading text-base font-bold text-slate-200 mt-2">
                Technical Credentials
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-normal">
                Covering software development life cycles, modern reactive frontend engineering, database routine optimization, and enterprise object-oriented design.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>ALL CREDENTIALS VERIFIED</span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Active learner committed to emerging technologies &amp; design patterns.
              </div>
            </div>
          </div>

          {/* Right Credentials Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-2xl figma-card p-6 border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#050814] border border-white/[0.06] text-blue-400">
                      {cert.date}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-semibold text-blue-400 mt-1">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed font-normal">
                    <strong className="text-slate-300 font-normal">Skills: </strong>
                    {cert.skills}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Mastery
                  </span>
                  <span className="font-mono text-blue-400/80">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
