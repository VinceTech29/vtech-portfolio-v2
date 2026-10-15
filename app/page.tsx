"use client";

import { FormEvent, PointerEvent as ReactPointerEvent, ReactNode, useEffect, useRef, useState } from "react";
const brandLogo = "/brand-logo.png";
const vincentPortrait = "/vincent-portrait.png";

type IconName =
  | "arrow"
  | "briefcase"
  | "check"
  | "code"
  | "database"
  | "external"
  | "facebook"
  | "figma"
  | "github"
  | "instagram"
  | "linkedin"
  | "mail"
  | "menu"
  | "school"
  | "send"
  | "spark"
  | "x";

function Icon({ name, className = "size-4" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    briefcase: <><rect width="18" height="14" x="3" y="6" rx="2" /><path d="M8 6V4h8v2M3 11h18M10 11v2h4v-2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    external: <><path d="M15 3h6v6M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4h-4V7a1 1 0 0 1 1-1h3V2Z" />,
    figma: <><path d="M9 3h3v6H9a3 3 0 0 1 0-6ZM12 3h3a3 3 0 0 1 0 6h-3V3Z" /><path d="M9 9h3v6H9a3 3 0 0 1 0-6ZM12 9h3a3 3 0 1 1-3 3V9ZM9 15h3v3a3 3 0 1 1-3-3Z" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />,
    instagram: <><rect width="20" height="20" x="2" y="2" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    school: <><path d="m2 10 10-5 10 5-10 5L2 10Z" /><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
    spark: <path d="m12 3 1.4 4.1L17.5 8l-4.1 1.4L12 13.5l-1.4-4.1L6.5 8l4.1-.9L12 3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

function BrandLogo({ className = "brand-logo" }: { className?: string }) {
  return <img className={className} src={brandLogo} alt="" />;
}

function Button({
  children,
  href,
  variant = "primary",
  icon,
  type,
  target,
  rel,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: IconName;
  type?: "submit";
  target?: string;
  rel?: string;
}) {
  const className = `button button-${variant}`;
  if (href) {
    return <a className={className} href={href} target={target} rel={rel}>{children}{icon && <Icon name={icon} />}</a>;
  }
  return <button className={className} type={type ?? "button"}>{children}{icon && <Icon name={icon} />}</button>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.getAttribute("data-nav") ?? "Home")),
      { rootMargin: "-35% 0px -58%" },
    );
    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Primary navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <BrandLogo />
        </a>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={active === item ? "nav-link active" : "nav-link"}>{item}</a>
          ))}
        </div>
        <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "x" : "menu"} className="size-5" />
        </button>
      </nav>
      <div className={open ? "mobile-nav open" : "mobile-nav"}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className={active === item ? "mobile-link active" : "mobile-link"} onClick={() => setOpen(false)}>{item}</a>
        ))}
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function HeroProfile() {
  return (
    <aside className="hero-profile" aria-label="Vincent Pablo profile">
      <div className="profile-intro">
        <span className="profile-mini-mark"><BrandLogo /></span>
        <strong>I&apos;m<br />Vincent.</strong>
      </div>
      <div className="profile-portrait">
        <div className="portrait-grid" />
        <BrandLogo className="portrait-brand-logo" />
        <div className="portrait-orbit one" />
        <div className="portrait-orbit two" />
        <span className="portrait-label">SYSTEM BUILDER</span>
      </div>
      <div className="profile-status">
        <span><i /></span>
        <p>Available for<br /><strong>opportunities</strong></p>
      </div>
      <div className="profile-meta">
        <div><small>FOCUS</small><strong>Software & Data</strong></div>
        <div><small>BASED IN</small><strong>Philippines</strong></div>
      </div>
      <div className="profile-socials">
        <a href="https://github.com/VinceTech29" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
        <a href="https://www.linkedin.com/in/lourde-vincent-pablo-457b10348/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        <a href="https://www.instagram.com/lrdvncnt_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
        <a href="https://www.facebook.com/lourdevincent29" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
        <a href="mailto:lourdevincentpablo26@gmail.com" aria-label="Email"><Icon name="mail" /></a>
      </div>
      <Button href="#contact" variant="secondary" icon="arrow">Contact me</Button>
    </aside>
  );
}

function HeroStatement() {
  return (
    <div className="hero-statement">
      <div className="hero-orb"><span /></div>
      <span className="hello-pill"><i /> Hello, I&apos;m Vincent</span>
      <h1>I build <span>software</span><br />&amp; data systems.</h1>
      <p>BSIT student, mentor, and technology enthusiast focused on creating practical digital solutions through development, databases, analytics, and thoughtful design.</p>
      <div className="hero-actions">
        <Button href="#projects" icon="arrow">View my projects</Button>
        <Button href="#contact" variant="secondary">Let&apos;s connect</Button>
        <Button href="/resume" variant="ghost" icon="briefcase">Resume</Button>
      </div>
      <div className="hero-focus-tags">
        <span>TypeScript</span>
        <span>Next.js</span>
        <span>SQL</span>
        <span>UI/UX</span>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll down</span>
        <i><Icon name="arrow" /></i>
      </a>
      <div className="hero-side-note">
        <small>CURRENTLY EXPLORING</small>
        <span>Software Development · Data Analytics</span>
      </div>
    </div>
  );
}

const skillRows = [
  {
    category: "Front-end",
    items: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    speed: "marquee-medium",
    reverse: false,
  },
  {
    category: "Back-end",
    items: [".NET", "C#", "SQL Server", "Entity Framework Core", "MySQL", "Laravel"],
    speed: "marquee-slow",
    reverse: true,
  },
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C#", "JavaScript", "TypeScript", "SQL", "C++"],
    speed: "marquee-fast",
    reverse: false,
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Visual Studio", "VS Code", "Arduino Uno", "PyQt6"],
    speed: "marquee-medium",
    reverse: true,
  },
];

const technologyIcons: Record<string, { src: string; monochrome?: boolean }> = {
  "Next.js": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", monochrome: true },
  TypeScript: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  JavaScript: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  HTML: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  CSS: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  "Tailwind CSS": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  Bootstrap: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  ".NET": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  "C#": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  "SQL Server": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  "Entity Framework Core": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg" },
  MySQL: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  Laravel: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  Java: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  Python: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  SQL: { src: "database" },
  "C++": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  Git: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  GitHub: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", monochrome: true },
  Figma: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  "Visual Studio": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
  "VS Code": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  "Arduino Uno": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
  PyQt6: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" },
};

function TechIcon({ name }: { name: string }) {
  const icon = technologyIcons[name];
  if (icon?.src === "database") return <span className="tech-icon"><Icon name="database" /></span>;
  return (
    <span className="tech-icon">
      <img className={icon?.monochrome ? "monochrome-icon" : ""} src={icon?.src} alt="" draggable="false" />
    </span>
  );
}

function TechnologyGroup({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <div className="technology-item" key={item}>
          <TechIcon name={item} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function SkillMarqueeRow({ row, index }: { row: (typeof skillRows)[number]; index: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const interactionRef = useRef({ pointerId: -1, startX: 0, startY: 0, startTime: 0, dragging: false });
  const resumeTimerRef = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);

  function getAnimation() {
    return trackRef.current?.getAnimations()[0];
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const animation = getAnimation();
    if (!animation || !trackRef.current) return;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    animation.pause();
    interactionRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startTime: Number(animation.currentTime ?? 0),
      dragging: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const state = interactionRef.current;
    const animation = getAnimation();
    const track = trackRef.current;
    if (state.pointerId !== event.pointerId || !animation || !track) return;

    const deltaX = event.clientX - state.startX;
    const deltaY = event.clientY - state.startY;
    if (!state.dragging && Math.abs(deltaX) < 5) return;
    if (!state.dragging && Math.abs(deltaY) > Math.abs(deltaX)) return;

    state.dragging = true;
    setDragging(true);
    event.preventDefault();
    const timing = animation.effect?.getTiming();
    const duration = typeof timing?.duration === "number" ? timing.duration : 30000;
    const distance = track.scrollWidth / 2;
    const direction = row.reverse ? 1 : -1;
    const nextTime = state.startTime + direction * (deltaX / distance) * duration;
    animation.currentTime = ((nextTime % duration) + duration) % duration;
  }

  function finishInteraction(event: ReactPointerEvent<HTMLDivElement>) {
    const state = interactionRef.current;
    if (state.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    interactionRef.current.pointerId = -1;
    setDragging(false);
    resumeTimerRef.current = window.setTimeout(() => getAnimation()?.play(), 1100);
  }

  useEffect(() => () => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
  }, []);

  return (
    <div className="skill-marquee-row">
      <div className="skill-category">
        <span>0{index + 1}</span>
        <h3>{row.category}</h3>
      </div>
      <div
        className={dragging ? "marquee-viewport dragging" : "marquee-viewport"}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishInteraction}
        onPointerCancel={finishInteraction}
      >
        <div ref={trackRef} className={`marquee-track ${row.speed}${row.reverse ? " reverse" : ""}`}>
          <TechnologyGroup items={row.items} />
          <TechnologyGroup items={row.items} hidden />
        </div>
      </div>
    </div>
  );
}

function GymMockup() {
  return (
    <div className="project-mock gym">
      <div className="mock-top"><strong>MIG&apos;S</strong><span>Overview&nbsp;&nbsp; Members&nbsp;&nbsp; Payments</span><i /></div>
      <div className="mock-content">
        <div className="mock-title"><div><small>GOOD MORNING</small><strong>Gym overview</strong></div><button>+ New member</button></div>
        <div className="mock-metrics">
          <div><small>Active members</small><strong>128</strong><em>+8 this month</em></div>
          <div><small>Today&apos;s check-ins</small><strong>42</strong><em>Live attendance</em></div>
          <div><small>Payments due</small><strong>09</strong><em>Needs attention</em></div>
        </div>
        <div className="mock-bottom">
          <div className="chart-card"><small>WEEKLY ATTENDANCE</small><div className="chart"><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="member-card"><small>RECENT CHECK-INS</small>{["A. Santos", "J. Rivera", "M. Cruz"].map((n, i) => <span key={n}><b>{n[0]}</b>{n}<em>{i + 8}:2{i} AM</em></span>)}</div>
        </div>
      </div>
    </div>
  );
}

function CakeMockup() {
  return (
    <div className="project-mock cake">
      <div className="cake-side"><strong>C.</strong><span>▦</span><span>◎</span><span>◇</span><span>≡</span></div>
      <div className="cake-main">
        <div className="cake-head"><div><small>BUSINESS OVERVIEW</small><strong>Customer relations</strong></div><span>VP</span></div>
        <div className="cake-stats"><div><small>Total orders</small><strong>248</strong><em>+12.4%</em></div><div><small>Returning customers</small><strong>68%</strong><em>Growing</em></div></div>
        <div className="cake-table">
          <div className="table-head"><strong>Recent orders</strong><small>View report</small></div>
          {[
            ["L. Garcia", "Wedding cake", "Confirmed"],
            ["N. Reyes", "Custom cake", "In progress"],
            ["P. Mendoza", "Birthday set", "Delivered"],
          ].map((row) => <span key={row[0]}><b>{row[0].slice(0, 2)}</b><i>{row[0]}<small>{row[1]}</small></i><em>{row[2]}</em></span>)}
        </div>
      </div>
    </div>
  );
}

function FigmaMockup() {
  const designs = [
    ["01", "StockWise", "Inventory system", "stockwise"],
    ["02", "SwiftPay", "E-wallet app", "swiftpay"],
    ["03", "Library System", "Web experience", "library"],
    ["04", "OwlReg", "Registration system", "owlreg"],
    ["05", "Dabawenyos", "City Mobile App", "dabawenyos"],
  ];

  return (
    <div className="project-mock figma-showcase">
      <div className="figma-toolbar">
        <div><Icon name="figma" /><strong>Vincent&apos;s UI/UX Designs</strong></div>
        <span>Research&nbsp;&nbsp; Interface&nbsp;&nbsp; Prototype</span>
        <i>VP</i>
      </div>
      <div className="real-design-grid">
        {designs.map(([number, name, type, className]) => (
          <article className="real-design-card" key={name}>
            <div className={`design-thumbnail ${className}`} role="img" aria-label={`${name} UI design preview`} />
            <div className="design-card-meta">
              <span>{number}</span>
              <div><strong>{name}</strong><small>{type}</small></div>
              <Icon name="arrow" />
            </div>
          </article>
        ))}
      </div>
      <div className="figma-showcase-footer">
        <span><i /> REAL PROJECTS</span>
        <small>Designed in Figma · 2024–2025</small>
      </div>
    </div>
  );
}

export const figmaDesigns = [
  {
    number: "01",
    name: "StockWise",
    type: "Inventory system",
    visual: "stockwise",
    date: "February 2024",
    description:
      "A Java-based inventory management and tracking experience designed for small businesses.",
  },
  {
    number: "02",
    name: "SwiftPay",
    type: "E-wallet app",
    visual: "swiftpay",
    date: "September 2025",
    description:
      "A fast, secure, and easy-to-use mobile wallet for sending, receiving, and managing money.",
  },
  {
    number: "03",
    name: "Library Management System",
    type: "Web experience",
    visual: "library",
    date: "October 2025",
    description:
      "A Python-based interface for managing book borrowing, returns, and library operations.",
  },
  {
    number: "04",
    name: "OwlReg",
    type: "Registration system",
    visual: "owlreg",
    date: "October 2025",
    description:
      "A student registration and administrative system designed around clear, efficient workflows.",
  },
  {
    number: "05",
    name: "Dabawenyos",
    type: "City mobile app",
    visual: "dabawenyos",
    date: "November 2025",
    description:
      "One App. One City. A unified mobile civic prototype designed for Davao City services, local discovery, and community engagement.",
  },
];

export function FigmaGallery() {
  return (
    <div className="figma-gallery">
      <div className="figma-gallery-heading">
        <div>
          <span className="eyebrow">FIGMA DESIGN ARCHIVE</span>
          <h3>Interfaces designed with intention.</h3>
        </div>

        <p>
          Explore selected web and mobile experiences from research and
          structure through polished interface design.
        </p>
      </div>

      <div className="figma-gallery-grid">
        {figmaDesigns.map((design) => (
          <article className="figma-gallery-card" key={design.name}>
            <div
              className={`design-thumbnail ${design.visual}`}
              role="img"
              aria-label={`${design.name} Figma design`}
            />

            <div className="figma-gallery-content">
              <div>
                <span>
                  {design.number} / {design.type}
                </span>

                <small>{design.date}</small>
              </div>

              <h4>{design.name}</h4>

              <p>{design.description}</p>

              <span className="figma-made-with">
                <Icon name="figma" />
                Designed in Figma
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FigmaDesignsPage() {
  return (
    <div className="site design-page">
      <CustomCursor />

      <header className="design-page-nav">
        <div className="container">
          <a
            className="brand"
            href="/"
            aria-label="Vincent Pablo portfolio"
          >
            <BrandLogo />
          </a>

          <a className="design-back-link" href="/#projects">
            <Icon name="arrow" />
            Back to portfolio
          </a>
        </div>
      </header>

      <main className="design-page-main">
        <div className="design-page-glow" />

        <section className="container design-page-hero">
          <span className="eyebrow">UI/UX DESIGN COLLECTION</span>

          <h1>
            Digital experiences,
            <br />
            <span>designed to work.</span>
          </h1>

          <p>
            A focused collection of web and mobile interfaces built around
            clear user journeys, thoughtful systems, and practical product
            needs.
          </p>

          <div className="design-page-meta">
            <span>05 Selected Projects</span>
            <i />
            <span>Web & Mobile</span>
            <i />
            <span>Designed in Figma</span>
          </div>
        </section>

        <div className="container">
          <FigmaGallery />
        </div>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand" href="/">
              <BrandLogo />
            </a>

            <p>BSIT Student · Mentor · Tech Enthusiast</p>
          </div>

          <div className="footer-links">
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact</a>
          </div>

          <small>
            © {new Date().getFullYear()} Vincent Pablo. Built with
            intention.
          </small>
        </div>
      </footer>
    </div>
  );
}

export function ResumePage() {
  const expertise = [
    "Project Management",
    "Quality Assurance",
    "Software Development",
    "Database Management",
    "UI/UX Design",
    "Internet of Things",
  ];

  const credentials = [
    "Software Quality Assurance",
    "Certiport – Java IT Specialist",
    "Certiport – Database Specialist",
    "Certiport – HTML & CSS Specialist",
    "Udemy – UI/UX Designer",
  ];

  return (
    <div className="site resume-page">
      <CustomCursor />

      <header className="design-page-nav resume-page-nav">
        <div className="container">
          <a
            className="brand"
            href="/"
            aria-label="Vincent Pablo portfolio"
          >
            <BrandLogo />
          </a>

          <div className="resume-nav-actions">
            <a className="design-back-link" href="/">
              <Icon name="arrow" />
              Back to portfolio
            </a>

            <a
              className="button button-primary"
              href="/vincent-pablo-resume.pdf"
              download="Lourde-Vincent-Pablo-Resume.pdf"
            >
              Download PDF
              <Icon name="external" />
            </a>
          </div>
        </div>
      </header>

      <main className="resume-page-main">
        <article className="resume-sheet">
          <header className="resume-header">
            <div>
              <BrandLogo className="resume-logo" />

              <span>LOURDE VINCENT PABLO / RESUME</span>
            </div>

            <h1>Lourde Vincent Pablo</h1>

            <p>
              Project Manager · Quality Assurance · Information Technology
            </p>

            <div className="resume-header-meta">
              <span>Davao City, Philippines</span>
              <span>0924 130 2206</span>
              <span>lourdevincentpablo26@gmail.com</span>
            </div>
          </header>

          <div className="resume-layout">
            <aside className="resume-sidebar">
              <section>
                <h2>Power Statement</h2>

                <p>
                  Driven IT professional with hands-on experience in project
                  management, quality assurance, software development, and
                  database management. Combines technical expertise with
                  strong leadership, problem-solving, and team coordination
                  skills to deliver reliable and user-focused technology
                  solutions.
                </p>
              </section>

              <section>
                <h2>Areas of Expertise</h2>

                <div className="resume-skill-list">
                  {expertise.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </section>

              <section>
                <h2>Technical Proficiencies</h2>

                <div className="resume-credential-list">
                  {credentials.map((credential) => (
                    <span key={credential}>
                      <Icon name="check" />
                      {credential}
                    </span>
                  ))}
                </div>
              </section>
            </aside>

            <div className="resume-content">
              <section>
                <h2>Professional Summary</h2>

                <p className="resume-summary">
                  Results-driven Information Technology professional with
                  experience in Project Management at FourtyBytes and
                  Quality Assurance at Wemo Dynamics, contributing to
                  software development, system testing, and project
                  delivery. Skilled in database management, SQL, web
                  development, UI/UX, Internet of Things, requirements
                  analysis, and technical documentation.
                </p>
              </section>

              <section>
                <h2>Accomplishments</h2>

                <ul className="resume-accomplishments">
                  <li>
                    Led project planning and team coordination as Project
                    Manager at FourtyBytes, supporting the successful
                    delivery of project requirements and deliverables.
                  </li>

                  <li>
                    Performed Quality Assurance at Wemo Dynamics,
                    identifying software issues, validating system
                    functionality, and supporting product quality
                    improvements.
                  </li>

                  <li>
                    Led the CCE Skills Clinic Mentorship Program at the
                    University of Mindanao, coordinating technical mentoring
                    activities and student development initiatives.
                  </li>

                  <li>
                    Developed management systems and software projects using
                    database management, SQL, web development, system
                    testing, and UI/UX principles.
                  </li>
                </ul>
              </section>

              <section>
                <h2>Employment History</h2>

                <div className="resume-entry">
                  <span>JAN 2025 — MAR 2025 · DAVAO CITY</span>

                  <h3>Project Manager · FourtyBytes</h3>

                  <p>
                    Led project planning, task coordination, and progress
                    monitoring. Coordinated team members, assigned tasks,
                    monitored milestones, communicated requirements, and
                    assisted with system validation and documentation.
                  </p>
                </div>

                <div className="resume-entry">
                  <span>OCT 2025 — JAN 2026 · DAVAO CITY</span>

                  <h3>Quality Assurance · Wemo Dynamics</h3>

                  <p>
                    Conducted functional and usability testing, documented
                    software defects, performed test scenarios, collaborated
                    with developers to verify fixes, and supported release
                    readiness.
                  </p>
                </div>
              </section>

              <section>
                <h2>Education</h2>

                <div className="resume-education">
                  <div>
                    <span>JUN 2024 — PRESENT · DAVAO CITY</span>

                    <h3>BS Information Technology</h3>

                    <p>University of Mindanao</p>
                  </div>

                  <strong>
                    President / Lead Officer — CCE Skills Clinic
                  </strong>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

function ProjectCard({
  number,
  title,
  subtitle,
  description,
  tags,
  children,
  primaryLabel = "View project",
  primaryHref = "#contact",
  previewHref,
  secondaryLabel = "GitHub",
  secondaryIcon = "github",
  secondaryHref = "https://github.com/VinceTech29",
  contributors,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  children: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  previewHref?: string;
  secondaryLabel?: string;
  secondaryIcon?: IconName;
  secondaryHref?: string;
  contributors?: {
    name: string;
    username: string;
    avatar: string;
    github?: string;
  }[];
}) {
  return (
    <article className="project-card">
      <div className="project-preview">
        {previewHref ? (
          <a
            className="project-preview-link"
            href={previewHref}
            target={previewHref.startsWith("http") ? "_blank" : undefined}
            rel={previewHref.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={`Explore ${title}`}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </div>
      <div className="project-info">
        <span className="project-number">PROJECT / {number}</span>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {contributors && contributors.length > 0 && (
          <div className="project-contributors-container">
            <div className="project-contributors-header">
              <span className="project-contributors-title">Contributors</span>
              <span className="project-contributors-count">{contributors.length}</span>
            </div>
            <div className="project-contributors-list">
              {contributors.map((c) => (
                <a
                  key={c.username}
                  href={c.github || `https://github.com/${c.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-contributor-item"
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="project-contributor-avatar"
                    width={32}
                    height={32}
                  />
                  <div className="project-contributor-meta">
                    <span className="project-contributor-username">{c.username}</span>
                    <span className="project-contributor-name">{c.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="project-actions">
          <Button href={primaryHref} target={primaryHref.startsWith("http") ? "_blank" : undefined} rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined} icon="arrow">{primaryLabel}</Button>
          <Button href={secondaryHref} target={secondaryHref.startsWith("http") ? "_blank" : undefined} rel={secondaryHref.startsWith("http") ? "noopener noreferrer" : undefined} variant="ghost" icon={secondaryIcon}>{secondaryLabel}</Button>
        </div>
      </div>
    </article>
  );
}

const certifications = [
  {
    name: "Software Engineer Role Certification",
    issuer: "HackerRank",
    category: "Software Engineering",
    group: "Software",
    code: "SWE",
    pdfUrl: "/certificates/cert-hackerrank-software-engineer.pdf",
  },
  {
    name: "Python Developer",
    issuer: "Sololearn",
    category: "Software Dev",
    group: "Software",
    code: "PY",
    pdfUrl: "/certificates/cert-sololearn-python.pdf",
  },
  {
    name: "Java (Basic) Certificate of Accomplishment",
    issuer: "HackerRank",
    category: "OOP Programming",
    group: "Software",
    code: "JAVA",
    pdfUrl: "/certificates/cert-hackerrank-java.pdf",
  },
  {
    name: "Python (Basic) Certificate of Accomplishment",
    issuer: "HackerRank",
    category: "Programming",
    group: "Software",
    code: "PY",
    pdfUrl: "/certificates/cert-hackerrank-python.pdf",
  },
  {
    name: "Information Technology Specialist - Java",
    issuer: "Certiport / Pearson VUE",
    category: "Programming Language",
    group: "Languages",
    code: "JAVA",
    pdfUrl: "/certificates/cert-java.pdf",
  },
  {
    name: "Introduction to C++",
    issuer: "Sololearn",
    category: "Systems Programming",
    group: "Languages",
    code: "C++",
    pdfUrl: "/certificates/cert-cpp.pdf",
  },
  {
    name: "C# Intermediate",
    issuer: "Sololearn",
    category: ".NET & C#",
    group: "Languages",
    code: "C#",
    pdfUrl: "/certificates/cert-sololearn-csharp-intermediate.pdf",
  },
  {
    name: "Introduction to C#",
    issuer: "Sololearn",
    category: ".NET & C#",
    group: "Languages",
    code: "C#",
    pdfUrl: "/certificates/cert-sololearn-csharp-intro.pdf",
  },
  {
    name: "Information Technology Specialist - Databases",
    issuer: "Certiport / Pearson VUE",
    category: "Data Systems",
    group: "Database",
    code: "DATA",
    pdfUrl: "/certificates/cert-databases.pdf",
  },
  {
    name: "SQL (Advanced) Certificate of Accomplishment",
    issuer: "HackerRank",
    category: "Advanced SQL",
    group: "Database",
    code: "SQL",
    pdfUrl: "/certificates/cert-hackerrank-sql-advanced.pdf",
  },
  {
    name: "SQL (Intermediate) Certificate of Accomplishment",
    issuer: "HackerRank",
    category: "Relational Queries",
    group: "Database",
    code: "SQL",
    pdfUrl: "/certificates/cert-hackerrank-sql-intermediate.pdf",
  },
  {
    name: "Introduction to SQL",
    issuer: "Sololearn",
    category: "Query Fundamentals",
    group: "Database",
    code: "SQL",
    pdfUrl: "/certificates/cert-sololearn-sql.pdf",
  },
  {
    name: "UI/UX Design With Figma: 5+ Real World Projects",
    issuer: "Udemy / Chetan Pujari",
    category: "Product Design",
    group: "Web & Design",
    code: "FIGMA",
    pdfUrl: "/certificates/cert-figma-udemy.pdf",
  },
  {
    name: "Information Technology Specialist - HTML and CSS",
    issuer: "Certiport / Pearson VUE",
    category: "Front-end Dev",
    group: "Web & Design",
    code: "WEB",
    pdfUrl: "/certificates/cert-html-css.pdf",
  },
  {
    name: "CSS (Basic) Certificate of Accomplishment",
    issuer: "HackerRank",
    category: "Web Styling",
    group: "Web & Design",
    code: "CSS",
    pdfUrl: "/certificates/cert-hackerrank-css.pdf",
  },
  {
    name: "JavaScript (Basic) Certificate of Accomplishment",
    issuer: "HackerRank",
    category: "Web Scripting",
    group: "Web & Design",
    code: "JS",
    pdfUrl: "/certificates/cert-hackerrank-js.pdf",
  },
];

const portfolioProjects = [
  {
    tab: "OwlReg",
    title: "OwlReg – School Registration System",
    description: "A comprehensive system designed to simplify student registration and record management.",
    tags: ["Python", "MySQL", "Database Design", "User Management"],
    visual: "project-owlreg",
    githubUrl: "https://github.com/VinceTech29/OwlReg-Pablo",
  },
  {
    tab: "Library",
    title: "Book Borrow and Returning System",
    description: "A digital library management tool that tracks borrowed and returned books efficiently.",
    tags: ["Python", "MySQL", "Library System", "Data Management"],
    visual: "project-library",
    githubUrl: "https://github.com/VinceTech29",
  },
  {
    tab: "IoT Sterilizer",
    title: "IoT – Advanced Sterilizing System",
    description: "An Arduino-based automated sterilization system using IoT, relays, and sensors to manage timed sterilizing, drying, cooling, and draining processes.",
    tags: ["Arduino Uno", "IoT", "Capstone", "C++"],
    visual: "project-iot",
    githubUrl: "https://github.com/VinceTech29/Advanced-Sterilizing-System",
  },
  {
    tab: "StockWise",
    title: "StockWise – Inventory Management System",
    description: "An intuitive inventory tracking application for managing stock levels and reports.",
    tags: ["Java", "Inventory Tracking", "Reports", "UI Design"],
    visual: "project-stockwise",
    githubUrl: "https://github.com/VinceTech29/StockWise---Inventory-Management-and-Tracking-System",
  },
  {
    tab: "Pig Meat",
    title: "Pig Meat Business Management System",
    description: "A desktop application that records daily transactions, tracks expenses, and calculates revenue and profit for a meat business.",
    tags: ["PyQt6", "Sales Tracking", "Financial Monitoring", "Profit Calculation"],
    visual: "project-pig",
    githubUrl: "https://github.com/VinceTech29/Pig-Meat-Business-Management-System",
  },
  {
    tab: "Utility",
    title: "Utility Bill Calculator",
    description: "A desktop application that calculates utility bills based on consumption and tariff rates while tracking expenses.",
    tags: ["PyQt6", "Utility Billing", "Financial Calculation", "Data Input"],
    visual: "project-utility",
    githubUrl: "https://github.com/VinceTech29/Utility-Bill-Calculator",
  },
  {
    tab: "AidDesk",
    title: "AidDesk – Ticketing & Monitoring System",
    description: "A website application that manages ticket creation, assignment, monitoring, and customer support issue resolution.",
    tags: ["Laravel", "Bootstrap", "Ticketing", "Monitoring", "Customer Support"],
    visual: "project-ticketing",
    githubUrl: "https://github.com/VinceTech29/AidDesk-Laravel-Project-IT9aL",
  },
  {
    tab: "SwineTrack",
    title: "SwineTrack: A Meatshop Inventory & POS",
    description: "An inventory and point-of-sale solution for meatshops that manages stock, sales processing, and financial tracking.",
    tags: ["Laravel", "Bootstrap", "Inventory Management", "POS System", "Financial Tracking"],
    visual: "project-swine",
    githubUrl: "https://github.com/VinceTech29/SwineTrack-Invetory",
  },
];

function ProjectBrowser() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = portfolioProjects[activeIndex];
  const projectPath = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <div className="project-browser">
      <div className="project-tab-bar">
        <div className="browser-controls"><i /><i /><i /></div>
        <div className="project-tabs" role="tablist" aria-label="Project archive">
          {portfolioProjects.map((item, index) => (
            <button
              key={item.title}
              className={index === activeIndex ? "project-tab active" : "project-tab"}
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span>0{index + 1}</span>{item.tab}
            </button>
          ))}
        </div>
        <span className="new-tab">+</span>
      </div>
      <div className="project-address-row">
        <div className="browser-history"><span>‹</span><span>›</span><span>↻</span></div>
        <div className="browser-address"><Icon name="code" /><span>vincent.dev/projects/{projectPath}</span></div>
        <Icon name="external" className="browser-action" />
      </div>
      <div className="project-browser-viewport">
        <div className={`portfolio-project-image ${project.visual}`} aria-label={`${project.title} interface concept`}>
          <span>0{activeIndex + 1}</span>
          <div className="system-preview">
            <div className="system-preview-bar">
              <i /><i /><i />
              <small>{project.tab}</small>
            </div>
            <div className="system-preview-body">
              <aside><i /><i /><i /><i /></aside>
              <div className="system-preview-main">
                <div className="system-preview-title"><i /><span /></div>
                <div className="system-preview-metrics"><i /><i /><i /></div>
                <div className="system-preview-data">
                  <div><i /><i /><i /><i /><i /></div>
                  <span><i /><i /><i /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="browser-project-details">
          <span className="project-number">PROJECT / 0{activeIndex + 1}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.githubUrl && (
            <div className="browser-project-actions">
              <Button
                href={project.githubUrl}
                variant="secondary"
                icon="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>
            </div>
          )}
          <div className="browser-project-nav">
            <button onClick={() => setActiveIndex((activeIndex - 1 + portfolioProjects.length) % portfolioProjects.length)}>Previous</button>
            <span>{activeIndex + 1} / {portfolioProjects.length}</span>
            <button onClick={() => setActiveIndex((activeIndex + 1) % portfolioProjects.length)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ certification, index }: { certification: (typeof certifications)[number]; index: number }) {
  return (
    <a
      href={certification.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      aria-label={`View certificate for ${certification.name}`}
    >
      <div className="cert-card-top">
        <span className="cert-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="cert-category">{certification.category}</span>
      </div>
      <div className="cert-card-body">
        <div className="cert-seal">
          <span>{certification.code}</span>
          <Icon name="check" />
        </div>
        <div>
          <h3>{certification.name}</h3>
          <p>Issued by <strong>{certification.issuer}</strong></p>
        </div>
      </div>
      <div className="cert-card-footer">
        <span><Icon name="check" /> View Credential</span>
        <Icon name="external" />
      </div>
    </a>
  );
}

function CertificationGallery() {
  const [activeFilter, setActiveFilter] = useState("Software");
  const [page, setPage] = useState(1);
  const filters = ["Software", "Languages", "Database", "Web & Design", "All"];

  const filteredCertifications = activeFilter === "All"
    ? certifications
    : certifications.filter((certification) => certification.group === activeFilter);

  // Limit items per page when "All" is active (6 per page) so it never causes a giant scroll.
  // Specific category tabs (4-5 items) fit comfortably without pagination.
  const pageSize = activeFilter === "All" ? 6 : filteredCertifications.length;
  const totalPages = Math.ceil(filteredCertifications.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const visibleCertifications = filteredCertifications.slice(startIndex, startIndex + pageSize);

  function handleFilterChange(filter: string) {
    setActiveFilter(filter);
    setPage(1);
  }

  return (
    <div className="cert-results">
      <div className="cert-filter-bar">
        <div>
          <small>EXPLORE CREDENTIALS</small>
          <span>{activeFilter === "All" ? "Complete collection" : `${activeFilter} credentials`}</span>
        </div>
        <div className="cert-filters" aria-label="Filter certifications">
          {filters.map((filter) => {
            const count = filter === "All"
              ? certifications.length
              : certifications.filter((certification) => certification.group === filter).length;
            return (
              <button
                className={activeFilter === filter ? "active" : ""}
                key={filter}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}<span>{count}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="cert-grid" key={`${activeFilter}-${page}`}>
        {visibleCertifications.map((certification) => (
          <CertificationCard
            key={certification.name}
            certification={certification}
            index={certifications.indexOf(certification)}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="cert-pagination">
          <span className="cert-pagination-info">
            Showing {startIndex + 1}–{Math.min(startIndex + pageSize, filteredCertifications.length)} of {filteredCertifications.length} credentials
          </span>
          <div className="cert-pagination-controls">
            <button
              className="cert-pagination-btn"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              ‹ Previous
            </button>
            <span className="cert-page-indicator">
              Page {page} of {totalPages}
            </span>
            <button
              className="cert-pagination-btn"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Next page"
            >
              Next ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const valid = Boolean(name && email && subject && message);
    setError(!valid);
    if (valid) {
      setSubmitted(true);
      const mailtoUrl = `mailto:lourdevincentpablo26@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject}`
      )}&body=${encodeURIComponent(
        `Hi Vincent,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      window.location.href = mailtoUrl;
      event.currentTarget.reset();
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label><span>Name</span><input name="name" placeholder="Your name" /></label>
        <label><span>Email</span><input name="email" type="email" placeholder="you@email.com" /></label>
      </div>
      <label><span>Subject</span><input name="subject" placeholder="What would you like to discuss?" /></label>
      <label><span>Message</span><textarea name="message" rows={5} placeholder="Tell me a little about your project or opportunity..." /></label>
      {error && <p className="form-error">Please complete all fields before sending.</p>}
      {submitted && <p className="form-success"><Icon name="check" /> Message prepared. Opening your email client...</p>}
      <Button type="submit" icon="send">Send message</Button>
    </form>
  );
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    // Keep the native cursor on touch devices and for reduced-motion users.
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;

    let lastTrailTime = 0;
    let lastTrailX = targetX;
    let lastTrailY = targetY;

    const trailParticles = new Set<HTMLSpanElement>();

    document.body.classList.add("custom-cursor-enabled");

    // Smoothly move the outer ring toward the pointer.
    const render = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      ring.style.transform = `
        translate3d(${ringX}px, ${ringY}px, 0)
        translate(-50%, -50%)
      `;

      frame = window.requestAnimationFrame(render);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      targetX = event.clientX;
      targetY = event.clientY;

      // The center dot follows the pointer immediately.
      dot.style.transform = `
        translate3d(${targetX}px, ${targetY}px, 0)
        translate(-50%, -50%)
      `;

      dot.classList.add("visible");
      ring.classList.add("visible");

      // Generate a trail particle only after enough time and movement.
      const now = performance.now();
      const trailDistance = Math.hypot(
        targetX - lastTrailX,
        targetY - lastTrailY,
      );

      if (now - lastTrailTime > 45 && trailDistance > 9) {
        const particle = document.createElement("span");

        particle.className = "cursor-trail-particle";
        particle.style.left = `${targetX}px`;
        particle.style.top = `${targetY}px`;

        particle.addEventListener(
          "animationend",
          () => {
            particle.remove();
            trailParticles.delete(particle);
          },
          { once: true },
        );

        document.body.appendChild(particle);
        trailParticles.add(particle);

        lastTrailTime = now;
        lastTrailX = targetX;
        lastTrailY = targetY;
      }

      // Enlarge the cursor over interactive elements.
      const target =
        event.target instanceof Element ? event.target : null;

      const interactive = target?.closest(
        "a, button, input, textarea, .technology-item, .project-tab",
      );

      dot.classList.toggle("interactive", Boolean(interactive));
      ring.classList.toggle("interactive", Boolean(interactive));
    };

    const handleDown = () => {
      ring.classList.add("pressed");
    };

    const handleUp = () => {
      ring.classList.remove("pressed");
    };

    const handleLeave = () => {
      dot.classList.remove("visible");
      ring.classList.remove("visible");
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    frame = window.requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");

      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleLeave,
      );

      window.cancelAnimationFrame(frame);

      trailParticles.forEach((particle) => particle.remove());
      trailParticles.clear();
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
      />

      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
    </>
  );
}

export default function App() {
  return (
    <div className="site">
      <CustomCursor />
      <Navbar />
      <main>
        <section id="home" data-nav="Home" className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <HeroProfile />
            <HeroStatement />
          </div>
          <div className="container tech-strip"><span>TECHNICAL FOCUS</span><div><b>Software Development</b><i /><b>Database Systems</b><i /><b>Data Analytics</b><i /><b>UI/UX Design</b></div></div>
        </section>

        <section id="about" data-nav="About" className="section about-section">
          <div className="container">
            <SectionHeading eyebrow="01 / ABOUT" title="Technology with purpose." />
            <div className="about-window">
              <div className="about-window-bar">
                <span>···</span>
                <p><b>/</b> about</p>
                <small>Vincent Pablo — Portfolio</small>
              </div>
              <div className="about-window-main">
                <article className="about-story">
                  <span className="eyebrow">HOW I WORK</span>
                  <h3>I solve problems by building things.</h3>
                  <p>I&apos;m a BS Information Technology student at the <strong>University of Mindanao</strong>, driven by the challenge of turning complex needs into clear, useful systems.</p>
                  <p>My work moves between software development, database architecture, analytics, and UI/UX—understanding the problem first, then shaping the data and interface around real people.</p>
                  <p>I also lead and mentor through the CCE Skills Clinic, helping other students strengthen practical technical skills.</p>
                  <div className="about-discipline-list">
                    <span>Software</span><i /> <span>Databases</span><i /> <span>Data</span><i /> <span>UI/UX</span>
                  </div>
                </article>
                <div className="about-workspace">
                  <img className="about-photo" src={vincentPortrait} alt="Vincent Pablo" />
                  <div className="about-photo-overlay" />
                  <div className="workspace-grid" />
                  <span className="about-photo-label"><i /> PORTRAIT / VINCENT PABLO</span>
                  <div className="workspace-caption"><strong>Still curious. Still building.</strong><span>Based in the Philippines · Open to opportunities</span></div>
                </div>
              </div>
              <div className="about-fact-strip">
                {[
                  { value: "3+", label: "Years of hands-on growth", type: "Experience", href: "#experience" },
                  { value: "10+", label: "Systems and applications", type: "Project work", href: "#projects" },
                  { value: String(figmaDesigns.length).padStart(2, "0"), label: "Figma interface projects", type: "UI/UX designs", href: "/figma-designs" },
                  { value: String(certifications.length), label: "Technical credentials", type: "Certifications", href: "#certifications" },
                ].map(({ value, label, type, href }) => (
                  <a key={label} href={href}>
                    <small>{type}</small>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" data-nav="Skills" className="section skills-section">
          <div className="container">
            <SectionHeading eyebrow="02 / CAPABILITIES" title="Tools I use." text="A focused technical toolkit for designing, developing, and improving practical digital systems." />
            <div className="skill-marquee-list">{skillRows.map((row, index) => <SkillMarqueeRow row={row} index={index} key={row.category} />)}</div>
          </div>
        </section>

        <section id="projects" data-nav="Projects" className="section projects-section">
          <div className="container">
            <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects built around real needs." text="Information systems designed to improve operations, organize data, and support better decisions." />
            <div className="projects-list">
              <ProjectCard
                number="01"
                title="Mig’s Fitness Gym"
                subtitle="Integrated Attendance and Payment Management System"
                description="A system designed to improve attendance monitoring and payment management for a local fitness gym."
                tags={["C#", ".NET", "SQL Server", "Entity Framework"]}
                primaryLabel="Live demo"
                primaryHref="https://migs-fitness-management-system.onrender.com/login"
                previewHref="https://migs-fitness-management-system.onrender.com/login"
                secondaryLabel="GitHub"
                secondaryIcon="github"
                secondaryHref="https://github.com/quielScript/migs-fitness-management-system"
                contributors={[
                  {
                    name: "Exequiel A.",
                    username: "quielScript",
                    avatar: "/assets/contributors/quielScript.png",
                    github: "https://github.com/quielScript",
                  },
                  {
                    name: "Jonathan Peguit Jr.",
                    username: "QuantumTan",
                    avatar: "/assets/contributors/QuantumTan.png",
                    github: "https://github.com/QuantumTan",
                  },
                  {
                    name: "L.Vincent Pablo",
                    username: "VinceTech29",
                    avatar: "/assets/contributors/VinceTech29.png",
                    github: "https://github.com/VinceTech29",
                  },
                ]}
              >
                <GymMockup />
              </ProjectCard>
              <ProjectCard number="02" title="Custom Cake Shop CRMS" subtitle="Customer Relationship Management System" description="A CRM-focused system for customer management, ordering transactions, retention, reporting, and day-to-day business operations." tags={["Next.js", "TypeScript", "SQL", "UI/UX"]}><CakeMockup /></ProjectCard>
              <ProjectCard
                number="03"
                title="Figma UI/UX Projects"
                subtitle="StockWise · SwiftPay · Library System · OwlReg · Dabawenyos"
                description="A collection of practical interface designs for inventory tracking, digital payments, library operations, student registration, and civic mobile apps—created with responsive experiences and clear user journeys in mind."
                tags={["Figma", "UI/UX Design", "Web & Mobile", "Prototyping"]}
                primaryLabel="Explore designs"
                primaryHref="/figma-designs"
                previewHref="/figma-designs"
                secondaryLabel="View all"
                secondaryIcon="figma"
                secondaryHref="/figma-designs"
              >
                <FigmaMockup />
              </ProjectCard>
            </div>
            <div className="project-gallery-heading">
              <span className="eyebrow">PROJECT ARCHIVE</span>
              <h3>More systems I&apos;ve built.</h3>
              <p>Academic and practical applications developed across desktop, web, database, and IoT environments.</p>
            </div>
            <ProjectBrowser />
          </div>
        </section>

        <section id="experience" data-nav="Experience" className="section experience-section">
          <div className="container experience-grid">
            <SectionHeading eyebrow="04 / EXPERIENCE" title="Leading by helping others grow." text="Technical leadership grounded in service, coordination, and shared progress." />
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-dot"><Icon name="briefcase" /></span>
                <div className="timeline-head"><div><span>CCE SKILLS CLINIC</span><h3>President / Lead Officer</h3></div><small>Leadership & Mentorship</small></div>
                <p>Supporting student development through practical mentorship, technical skills initiatives, and organized learning opportunities.</p>
                <ul>
                  <li><Icon name="check" />Lead mentorship program direction and student development activities</li>
                  <li><Icon name="check" />Coordinate technical initiatives, activities, and partnerships</li>
                  <li><Icon name="check" />Manage leadership and organizational responsibilities</li>
                </ul>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot"><Icon name="check" /></span>
                <div className="timeline-head"><div><span>WEMO DYNAMICS · CURRENT ROLE</span><h3>Quality Assurance</h3></div><small>Software Quality</small></div>
                <p>Contributed to software quality by reviewing system behavior, identifying issues, and helping ensure that project requirements were met.</p>
                <ul>
                  <li><Icon name="check" />Reviewed features and workflows for quality and consistency</li>
                  <li><Icon name="check" />Documented issues and supported the improvement process</li>
                </ul>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot"><Icon name="database" /></span>
                <div className="timeline-head"><div><span>FOURTYBYTES · PREVIOUS ROLE</span><h3>Project Manager &amp; Database Manager</h3></div><small>Project & Data</small></div>
                <p>Helped guide project execution while organizing and maintaining the database systems that supported the team&apos;s work.</p>
                <ul>
                  <li><Icon name="check" />Coordinated project tasks, priorities, and team progress</li>
                  <li><Icon name="check" />Supported database structure, organization, and management</li>
                </ul>
              </article>
              <div className="leadership-note"><Icon name="spark" /><p><strong>My approach</strong>Build with clarity. Lead with empathy. Keep learning.</p></div>
            </div>
          </div>
        </section>

        <section id="certifications" data-nav="Certifications" className="section certifications-section">
          <div className="container">
            <SectionHeading eyebrow="05 / CERTIFICATIONS" title="Learning, validated." text="Industry-focused credentials across development, databases, and digital design." />
            <div className="cert-showcase">
              <aside className="cert-overview">
                <span className="eyebrow">CREDENTIAL INDEX</span>
                <div className="cert-total"><strong>{certifications.length}</strong><span>certifications<br />earned</span></div>
                <p>Continuous learning across software engineering, programming languages, databases, and UI/UX design.</p>
                <div className="cert-focus-list">
                  {[
                    { label: "Software Dev", count: "4" },
                    { label: "Core Languages", count: "4" },
                    { label: "Databases & SQL", count: "4" },
                    { label: "Web & UI/UX", count: "4" },
                  ].map((item, index) => (
                    <div key={item.label}>
                      <span>0{index + 1}</span>
                      <strong>{item.label}</strong>
                      <small style={{ color: "#64748b", fontSize: "10px", marginLeft: "auto", marginRight: "8px" }}>
                        {item.count} certs
                      </small>
                      <i />
                    </div>
                  ))}
                </div>
                <div className="cert-selection-note"><Icon name="spark" /><span>Separated by tabs for focused viewing</span></div>
              </aside>
              <CertificationGallery />
            </div>
          </div>
        </section>

        <section className="section education-section">
          <div className="container education-card">
            <div className="education-icon"><Icon name="school" /></div>
            <div><span className="eyebrow">EDUCATION</span><h2>University of Mindanao</h2><p>Bachelor of Science in Information Technology</p></div>
            <div className="education-focus"><small>ACADEMIC FOCUS</small><span>Software · Data · Systems · Design</span></div>
          </div>
        </section>

        <section id="contact" data-nav="Contact" className="section contact-section">
          <div className="contact-glow" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">06 / CONTACT</span>
              <h2>Let&apos;s build something <span>meaningful.</span></h2>
              <p>Have a project, opportunity, or idea? Let&apos;s connect.</p>
              <div className="social-list">
                <a href="mailto:lourdevincentpablo26@gmail.com"><span><Icon name="mail" /></span><div><small>EMAIL</small><strong>Email me</strong></div><Icon name="arrow" /></a>
                <a href="https://github.com/VinceTech29" target="_blank" rel="noopener noreferrer"><span><Icon name="github" /></span><div><small>GITHUB</small><strong>View profile</strong></div><Icon name="arrow" /></a>
                <a href="https://www.linkedin.com/in/lourde-vincent-pablo-457b10348/?isSelfProfile=true" target="_blank" rel="noopener noreferrer"><span><Icon name="linkedin" /></span><div><small>LINKEDIN</small><strong>Let&apos;s connect</strong></div><Icon name="arrow" /></a>
                <a href="https://www.instagram.com/lrdvncnt_/" target="_blank" rel="noopener noreferrer"><span><Icon name="instagram" /></span><div><small>INSTAGRAM</small><strong>Follow my work</strong></div><Icon name="arrow" /></a>
                <a href="https://www.facebook.com/lourdevincent29" target="_blank" rel="noopener noreferrer"><span><Icon name="facebook" /></span><div><small>FACEBOOK</small><strong>Connect with me</strong></div><Icon name="arrow" /></a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><a className="brand" href="#home" aria-label="Vincent Pablo home"><BrandLogo /></a><p>BSIT Student · Mentor · Tech Enthusiast</p></div>
          <div className="footer-links">
            <a href="https://github.com/VinceTech29" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/lourde-vincent-pablo-457b10348/?isSelfProfile=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:lourdevincentpablo26@gmail.com">Email</a>
          </div>
          <small>© {new Date().getFullYear()} Vincent Pablo. Built with intention.</small>
        </div>
      </footer>
    </div>
  );
}