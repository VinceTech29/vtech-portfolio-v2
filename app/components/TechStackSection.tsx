"use client";

import React from "react";

interface TechBadge {
  name: string;
  iconClass: string;
}

export default function TechStackSection() {
  const frontendTech: TechBadge[] = [
    { name: "Next.js", iconClass: "devicon-nextjs-plain" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "HTML", iconClass: "devicon-html5-plain colored" },
    { name: "CSS", iconClass: "devicon-css3-plain colored" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" },
  ];

  const backendTech: TechBadge[] = [
    { name: "Laravel", iconClass: "devicon-laravel-original colored" },
    { name: ".NET", iconClass: "devicon-dot-net-plain colored" },
    { name: "C#", iconClass: "devicon-csharp-plain colored" },
    { name: "SQL Server", iconClass: "devicon-microsoftsqlserver-plain colored" },
    { name: "Entity Framework Core", iconClass: "devicon-dotnetcore-plain colored" },
    { name: "MySQL", iconClass: "devicon-mysql-original colored" },
  ];

  const languagesTech: TechBadge[] = [
    { name: "Java", iconClass: "devicon-java-plain colored" },
    { name: "Python", iconClass: "devicon-python-plain colored" },
    { name: "C#", iconClass: "devicon-csharp-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { name: "SQL", iconClass: "devicon-azuresqldatabase-plain colored" },
    { name: "C++", iconClass: "devicon-cplusplus-plain colored" },
  ];

  const toolsTech: TechBadge[] = [
    { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
    { name: "Arduino Uno", iconClass: "devicon-arduino-plain colored" },
    { name: "PyQt6", iconClass: "devicon-qt-original colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "GitHub", iconClass: "devicon-github-original" },
    { name: "Figma", iconClass: "devicon-figma-plain colored" },
    { name: "Visual Studio", iconClass: "devicon-visualstudio-plain colored" },
  ];

  const rows = [
    { id: "01", category: "Front-end", items: frontendTech, reverse: false },
    { id: "02", category: "Back-end", items: backendTech, reverse: true },
    { id: "03", category: "Programming Languages", items: languagesTech, reverse: false },
    { id: "04", category: "Tools", items: toolsTech, reverse: true },
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-12 relative bg-[#05070e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag & Title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wider">
            <span className="w-4 h-[1.5px] bg-blue-500" />
            <span>02 / CAPABILITIES</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tools I use.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl font-normal leading-relaxed">
            A focused technical toolkit for designing, developing, and improving practical digital systems.
          </p>
        </div>

        {/* Outer Card with 4 Distinct Rows */}
        <div className="rounded-[28px] figma-card border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/80">
          {rows.map((row, idx) => {
            // Repeat array 4 times for infinite seamless loop
            const marqueeList = [...row.items, ...row.items, ...row.items, ...row.items];

            return (
              <div
                key={row.id}
                className={`grid grid-cols-1 md:grid-cols-12 items-center py-6 px-6 sm:px-8 gap-4 sm:gap-6 ${
                  idx !== rows.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                {/* Left Category Label */}
                <div className="md:col-span-3 lg:col-span-2.5 flex items-center gap-3">
                  <span className="text-xs font-mono text-blue-400 font-semibold">
                    {row.id}
                  </span>
                  <span className="font-heading text-sm font-semibold text-slate-200">
                    {row.category}
                  </span>
                </div>

                {/* Right Marquee Scroll Area */}
                <div className="md:col-span-9 lg:col-span-9.5 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                  <div
                    className={row.reverse ? "marquee-track-reverse" : "marquee-track"}
                  >
                    {marqueeList.map((tech, i) => (
                      <div
                        key={`${tech.name}-${i}`}
                        className="tech-pill mr-3"
                      >
                        <i className={`${tech.iconClass} text-lg shrink-0`} />
                        <span className="font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
