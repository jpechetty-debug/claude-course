import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Phase5() {
  const tracks = [
    {
      tier: "Tier 1: Beginner",
      days: "Days 1–15",
      badge: "Associate Level",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "CLI fundamentals, environment diagnostics, Plan Mode exploration, and steering files.",
      skills: ["claude doctor & auth verification", "Read-only exploration & ASCII flowcharts", "Plan Mode & atomic diff verification", "Authoring CLAUDE.md steering files", "Context budgeting & prompt caching basics"]
    },
    {
      tier: "Tier 2: Intermediate",
      days: "Days 16–30",
      badge: "Professional Level",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      description: "Custom slash commands, output styles, deterministic security hooks, and skills.",
      skills: ["Custom slash commands with $ARGUMENTS", "Dynamic developer personas & output styles", "PreToolUse secret blockers & exit-code protocols", "PostToolUse format-on-write & auto-fixers", "Authoring auto-activating Agent Skills (SKILL.md)"]
    },
    {
      tier: "Tier 3: Advanced",
      days: "Days 31–45",
      badge: "Specialist Level",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Building custom MCP servers, subagent swarms, model tiering, and git worktrees.",
      skills: ["Building Python FastMCP servers from scratch", "Building TypeScript Zod MCP servers (stdio)", "Remote HTTP/SSE MCP servers with Bearer auth", "Model tiering (Haiku search + Opus architecture)", "Parallel subagent swarms & git worktree fleets"]
    },
    {
      tier: "Tier 4: Expert",
      days: "Days 46–60",
      badge: "Enterprise Architect",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      description: "Autonomous GitHub Actions, Claude Agent SDK applications, multi-cloud, and FinOps.",
      skills: ["Autonomous GitHub Actions PR review & auto-fix bots", "Claude Agent SDK full-stack SaaS apps with Web UI", "Multi-cloud routing (AWS Bedrock & GCP Vertex AI)", "Automated agent evals & regression testing harnesses", "Enterprise FinOps, OpenTelemetry & live defense"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between shrink-0 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 5: 4-Tier Claude Code Track</h2>
          <p className="text-slate-500 text-sm mt-1">Progressive competency matrix from zero CLI experience to enterprise architect.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tracks.map((track, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{track.days}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${track.badgeColor}`}>
                  {track.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{track.tier}</h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">{track.description}</p>
              
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Competencies</p>
                {track.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={14} className="text-indigo-600 mt-0.5 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
