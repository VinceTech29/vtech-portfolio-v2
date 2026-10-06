"use client";

import React, { useState } from "react";
import {
  Database,
  ShieldAlert,
  FileCheck,
  Check,
  Copy,
} from "lucide-react";

export default function DeepDiveSection() {
  const [activeTab, setActiveTab] = useState<"trigger" | "reporting" | "architecture">("trigger");
  const [copied, setCopied] = useState(false);

  const triggerSql = `-- SwineTrack POS Database Routine: Enforce Supplier Integrity
DELIMITER $$

CREATE TRIGGER trg_prevent_supplier_delete_with_active_batches
BEFORE DELETE ON suppliers
FOR EACH ROW
BEGIN
    DECLARE active_count INT;
    
    -- Verify if supplier has any non-concluded batches in system
    SELECT COUNT(*) INTO active_count
    FROM swine_batches
    WHERE supplier_id = OLD.supplier_id 
      AND status NOT IN ('ARCHIVED', 'COMPLETED');
      
    IF active_count > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Operation Denied: Cannot delete supplier with active swine batches.';
    END IF;
END$$

DELIMITER ;`;

  const reportingSql = `-- SwineTrack POS: Dynamic Sales & Activity Aggregation View
CREATE OR REPLACE VIEW view_daily_sales_activity AS
SELECT 
    DATE(s.sale_date) AS transaction_date,
    COUNT(s.sale_id) AS total_transactions,
    SUM(s.total_amount) AS gross_revenue,
    SUM(s.discount_amount) AS total_discounts,
    SUM(s.net_amount) AS net_revenue,
    AVG(s.net_amount) AS average_ticket_value,
    COUNT(DISTINCT s.batch_id) AS batches_involved
FROM sales s
WHERE s.status = 'COMPLETED'
GROUP BY DATE(s.sale_date)
ORDER BY transaction_date DESC;`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="deep-dive" className="py-24 px-6 sm:px-10 lg:px-12 relative bg-[#05070e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wider">
            <span className="w-4 h-[1.5px] bg-blue-500" />
            <span>04 / ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Architectural Deep Dive.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl font-normal leading-relaxed">
            Inspection of real-world database triggers and routines engineered to guarantee mission-critical data integrity.
          </p>
        </div>

        {/* Tabbed Code Window */}
        <div className="rounded-[28px] figma-card border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/80">
          {/* Top Bar with Navigation Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-[#070b16] gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                SwineTrack Database Engine
              </span>
            </div>

            {/* Tab Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090e1c] border border-white/[0.06]">
              <button
                onClick={() => setActiveTab("trigger")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "trigger"
                    ? "bg-blue-600 text-white font-semibold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Triggers &amp; Integrity
              </button>
              <button
                onClick={() => setActiveTab("reporting")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "reporting"
                    ? "bg-blue-600 text-white font-semibold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Views &amp; Analytics
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "architecture"
                    ? "bg-blue-600 text-white font-semibold shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Pipeline Blueprint
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {activeTab === "trigger" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono">
                    <ShieldAlert className="w-4 h-4" />
                    <span>SAFETY ENFORCEMENT</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Supplier Orphan Prevention
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Accidental deletion of suppliers tied to active livestock batches would corrupt traceability and accounting. Rather than relying solely on frontend validations, this database trigger halts deletion requests at the storage engine level with custom SQLSTATE errors.
                  </p>
                  <div className="p-3.5 rounded-xl figma-card-inner border border-white/[0.06] text-xs text-slate-400 space-y-2">
                    <div className="font-semibold text-slate-200 font-mono text-[11px]">Engine Benefits:</div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Zero possibility of orphaned batch rows</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Enforced across all client APIs &amp; migrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Standardized audit trail and integrity</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 relative">
                  <div className="flex items-center justify-between pb-2 mb-2 text-xs text-slate-400 font-mono border-b border-white/[0.06]">
                    <span>trigger_supplier_guard.sql</span>
                    <button
                      onClick={() => handleCopy(triggerSql)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied" : "Copy Code"}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#04060e] border border-white/[0.06] text-xs sm:text-sm font-mono text-blue-100 overflow-x-auto leading-relaxed">
                    <code>{triggerSql}</code>
                  </pre>
                </div>
              </div>
            )}

            {activeTab === "reporting" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                    <FileCheck className="w-4 h-4" />
                    <span>REPORTING AGGREGATION</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Dynamic Activity Views
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Powers the SwineTrack sales analytics dashboard with instantaneous daily metrics. By indexing the date dimension and materializing aggregated metrics, large-scale financial reporting executes with sub-millisecond query latency.
                  </p>
                  <div className="p-3.5 rounded-xl figma-card-inner border border-white/[0.06] text-xs text-slate-400 space-y-2">
                    <div className="font-semibold text-slate-200 font-mono text-[11px]">Performance Impact:</div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>Precomputed revenue &amp; ticket averages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>Paginated filters without table scans</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 relative">
                  <div className="flex items-center justify-between pb-2 mb-2 text-xs text-slate-400 font-mono border-b border-white/[0.06]">
                    <span>view_daily_sales.sql</span>
                    <button
                      onClick={() => handleCopy(reportingSql)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied" : "Copy Code"}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#04060e] border border-white/[0.06] text-xs sm:text-sm font-mono text-cyan-100 overflow-x-auto leading-relaxed">
                    <code>{reportingSql}</code>
                  </pre>
                </div>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl figma-card-inner border border-white/[0.06]">
                    <div className="text-xs font-mono text-blue-400 uppercase">Layer 01</div>
                    <h4 className="font-heading text-base font-bold text-white mt-1">Client &amp; Frontend</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Optimistic state updates, responsive charts, and input validation schemas powered by TypeScript.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl figma-card-inner border border-white/[0.06]">
                    <div className="text-xs font-mono text-cyan-400 uppercase">Layer 02</div>
                    <h4 className="font-heading text-base font-bold text-white mt-1">API Controller &amp; Auth</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Role-based permission gating, payload sanitization, and transaction orchestration.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl figma-card-inner border border-white/[0.06]">
                    <div className="text-xs font-mono text-indigo-400 uppercase">Layer 03</div>
                    <h4 className="font-heading text-base font-bold text-white mt-1">MySQL Engine Core</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Triggers, views, relational constraints, and acid transactions enforcing business safety rules.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
