"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Full-Stack Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-12 relative bg-[#05070e]">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wider">
                <span className="w-4 h-[1.5px] bg-blue-500" />
                <span>07 / CONTACT</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s build something{" "}
                <span className="text-[#3b82f6]">
                  meaningful
                </span>
                .
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                Have a new project, an existing system that needs scaling, or an opportunity for a dedicated software developer? Let&apos;s connect and make it happen.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              <a
                href="mailto:lourdevincentpablo26@gmail.com"
                className="p-4 rounded-2xl figma-card border border-white/[0.08] hover:border-blue-500/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    lourdevincentpablo26@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/QuantumTan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl figma-card border border-white/[0.08] hover:border-blue-500/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#090e1d] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    GitHub Repositories
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    github.com/QuantumTan
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-2xl figma-card border border-white/[0.08] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Location &amp; Availability
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Philippines • Open to Opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-2xl bg-[#070b16] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Prompt reply guaranteed within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: Sleek Glassmorphic Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] figma-card p-6 sm:p-9 border border-white/[0.08] shadow-2xl shadow-black/80 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Send a Message
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Direct &amp; Active
                </span>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-normal">
                    Thank you for reaching out, {formData.firstName || "friend"}. I have received your message and will get back to you shortly!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        service: "Full-Stack Development",
                        message: "",
                      });
                    }}
                    className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl bg-[#060914] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#060914] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#060914] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Area of Collaboration
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#060914] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white transition-colors font-sans"
                    >
                      <option value="Full-Stack Development">
                        Full-Stack Web Development (Next.js / React)
                      </option>
                      <option value="Database Engineering">
                        Database Engineering &amp; SQL Routines
                      </option>
                      <option value="Desktop Systems">
                        Enterprise Desktop Systems (C# .NET)
                      </option>
                      <option value="Full-Time Opportunity">
                        Full-Time / Contract Engineering Role
                      </option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-[#060914] border border-white/[0.08] focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
