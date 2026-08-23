import React from 'react';
import { Crown, Briefcase, DollarSign, Award, Rocket, CheckCircle2 } from 'lucide-react';

export default function Phase9() {
  const certifications = [
    {
      level: "Level 1: CC-A",
      title: "Certified Claude Associate",
      scope: "Days 1–15 (Beginner Track)",
      format: "60-Min Practical Exam (5 atomic bugfixes in Plan Mode with passing tests)",
      passing: "80% Pass Score"
    },
    {
      level: "Level 2: CC-P",
      title: "Certified Claude Professional",
      scope: "Days 16–45 (Intermediate/Advanced)",
      format: "120-Min Sandbox (Author custom PreToolUse hook, Skill, and Python MCP server)",
      passing: "85% Pass Score"
    },
    {
      level: "Level 3: CC-EA",
      title: "Certified Claude Enterprise Architect",
      scope: "Days 46–60 (Expert Track)",
      format: "180-Min Defense (Deploy GitHub Actions bot, Agent SDK SaaS, and live portfolio defense)",
      passing: "90% Pass Score"
    }
  ];

  const pathways = [
    {
      title: "AI Software Engineer ($140k–$220k)",
      icon: Briefcase,
      desc: "Embed Claude Code and Agent SDK into core engineering squads, boosting feature delivery velocity by 4x."
    },
    {
      title: "High-Ticket Freelancing ($150–$250/hr)",
      icon: DollarSign,
      desc: "Package and sell custom MCP servers ($4k-$8.5k) and autonomous PR bots ($3.5k-$7k) on Upwork/Toptal."
    },
    {
      title: "Enterprise AI Consulting ($10k–$50k)",
      icon: Crown,
      desc: "4-phase enterprise implementation model: AI Readiness Audit, Guardrails, MCP build, and Team Enablement."
    },
    {
      title: "30-Day AI SaaS Startup Launch",
      icon: Rocket,
      desc: "Use Claude Code as a 10x technical co-founder to build, evaluate, and launch an AI SaaS product in under a month."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between shrink-0 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 9: Premium Upgrade, Certification & Career Pathways</h2>
          <p className="text-slate-500 text-sm mt-1">3 Tiered Industry Certifications and 6 Production Career/Business Roadmaps.</p>
        </div>
      </div>

      {/* Certification Tiers */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="text-indigo-600" size={20} /> 3-Tier Proctored Certification Progression
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-slate-50/70 p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 mb-2">
                  {cert.level}
                </span>
                <h4 className="font-bold text-slate-900 text-base mb-1">{cert.title}</h4>
                <p className="text-xs text-slate-500 mb-3">{cert.scope}</p>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">{cert.format}</p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 size={13} /> {cert.passing}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career & Business Pathways */}
      <div className="grid md:grid-cols-2 gap-4">
        {pathways.map((path, idx) => {
          const Icon = path.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-indigo-300 transition-all">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">{path.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{path.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
