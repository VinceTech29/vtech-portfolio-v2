import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vincent Pablo — Portfolio | Software & Data Systems",
  description:
    "BSIT student at University of Mindanao, mentor, and software developer building practical digital solutions through development, databases, analytics, and thoughtful design.",
  keywords: [
    "Vincent Pablo",
    "Lourde Vincent",
    "University of Mindanao",
    "BSIT",
    "Software & Data Systems",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  icons: {
    icon: [
      { url: "/brand-logo.png", type: "image/png" },
    ],
    shortcut: "/brand-logo.png",
    apple: "/brand-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${dmSans.variable} dark scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var o=Element.prototype.setAttribute;Element.prototype.setAttribute=function(n,v){if(typeof n==='string'&&n.indexOf('bis_')===0)return;return o.apply(this,arguments)};if(typeof MutationObserver!=='undefined'){new MutationObserver(function(m){for(var i=0;i<m.length;i++){if(m[i].attributeName&&m[i].attributeName.indexOf('bis_')===0){m[i].target.removeAttribute(m[i].attributeName)}}}).observe(document.documentElement,{subtree:true,attributes:true})}}catch(e){}})();`,
          }}
        />
        <link rel="icon" href="/brand-logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/brand-logo.png" />
        {/* Devicon CDN for official technology logos */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#05070e] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-blue-200"
      >
        {children}
      </body>
    </html>
  );
}
