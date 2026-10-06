"use client";

import React from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Users,
} from "lucide-react";

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      role: "Lead Full-Stack Developer",
      organization: "SwineTrack POS Initiative",
      period: "2025 — Present",
      location: "Philippines",
      type: "Enterprise Application",
      description:
        "Architected and led the development of a livestock inventory and point of sale platform. Directed database schema design, automated safety triggers, and Next.js frontend reporting modules.",
      achievements: [
        "Authored database triggers to eliminate orphan record deletions across supplier relations.",
        "Implemented paginated sales analysis tools with dynamic CSV/print export capabilities.",
        "Collaborated with stakeholders to convert manual farm ledgers into high-speed digital workflows.",
      ],
      skills: ["Next.js", "TypeScript", "MySQL", "SQL Triggers", "Tailwind CSS"],
    },
    {
      role: "Systems & Desktop Engineer",
      organization: "AgriCycle Byproduct Solutions",
      period: "2024 — 2025",
      location: "Philippines",
      type: "Desktop & Environmental System",
      description:
        "Engineered a native Windows desktop tracking system using C# and .NET 10 WPF, monitoring organic waste diversion and agricultural recycling cycles.",
      achievements: [
        "Designed relational models tracking multi-stage processing batches from farm collection to plant delivery.",
        "Built responsive WPF UI components optimized for heavy data entry and touch-friendly desktop displays.",
        "Structured system documentation and architecture blueprints for downstream maintainers.",
      ],
      skills: ["C#", ".NET 10", "WPF / XAML", "SQL Architecture", "Data Modeling"],
    },
    {
      role: "Full-Stack Web Developer",
      organization: "Migs Fitness Gym Management",
      period: "2024",
      location: "Philippines",
      type: "Commercial Web Application",
      description:
        "Developed an end-to-end gym administrative platform for member enrollment, subscription renewal automation, and sales tracking.",
      achievements: [
        "Built automated subscription lifecycle trackers with status indicators and renewal logs.",
        "Created an intuitive cashier POS interface for fitness gear and walk-in passes.",
        "Maintained high code maintainability with Laravel MVC architecture and clean Eloquent queries.",
      ],
      skills: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "RESTful APIs"],
    },
    {
      role: "Technical Contributor & Peer Mentor",
      organization: "CCE Skills Clinic & Academic Community",
      period: "2023 — Present",
      location: "University of Mindanao",
      type: "Mentorship & Leadership",
      description:
        "Actively assisting junior and peer programmers through code reviews, SQL query tuning, and architectural problem-solving sessions.",
      achievements: [
        "Conducted peer debugging workshops focused on relational normalization and SQL optimization.",
        "Collaborated in Git version control workflows, reviewing pull requests and promoting best practices.",
      ],
      skills: ["Git & GitHub", "Code Review", "Mentorship", "Database Tuning"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-12 relative bg-[#05070e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading & Leadership Pitch */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-wider">
              <span className="w-4 h-[1.5px] bg-blue-500" />
              <span>05 / EXPERIENCE</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Leading by helping others grow.
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Software engineering is a collaborative craft. From owning the technical design of core applications to guiding teammates through database design dilemmas, I measure success by the quality of the system and the empowerment of the team.
            </p>

            {/* Impact Highlights Card */}
            <div className="p-6 rounded-2xl figma-card border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>LEADERSHIP HIGHLIGHTS</span>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Full development lifecycle leadership across 3 distinct systems.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Enforcing database safety routines and automated triggers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Continuous proactive guidance through code reviews and workshops.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-8 space-y-5">
            {experiences.map((exp, idx) => (
              <div
                key={exp.role}
                className="rounded-2xl figma-card p-6 sm:p-8 border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glowing accent indicator */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/80 group-hover:bg-blue-400 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pl-2">
                  <div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300">
                      {exp.type}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-400">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-normal pl-2">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-4 space-y-2 pl-2">
                  {exp.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2 text-xs text-slate-300/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Pills */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5 pl-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-[#050814] border border-white/[0.06] text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
