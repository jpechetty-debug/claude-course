import React from 'react';

export default function Phase1() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end justify-between shrink-0 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 1: Curriculum Audit Report</h2>
          <p className="text-slate-500 text-sm mt-1">Analyzing repository structure and pedagogical depth of current assets.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-md text-xs font-semibold shadow-sm hover:bg-slate-50 text-slate-700">Export Audit PDF</button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-sm text-slate-700">File 1: Claude Code - The Complete Study Companion</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Clarity</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-emerald-600">9.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Depth</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-amber-500">8.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Engagement</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-indigo-600">8.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Practicality</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-emerald-600">10.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Learning Objectives</h4>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span><span className="text-sm text-slate-700">Master the Claude Code CLI interface and core commands.</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span><span className="text-sm text-slate-700">Execute a safe explore-plan-code-verify agentic loop.</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span><span className="text-sm text-slate-700">Implement automation using pre/post tool hooks.</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span><span className="text-sm text-slate-700">Orchestrate multi-agent workflows using Subagents.</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span><span className="text-sm text-slate-700">Extend Claude's capabilities via the Model Context Protocol (MCP).</span></li>
                </ul>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Core Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-indigo-100">CLI Navigation</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-indigo-100">Context Mgmt</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-emerald-100">CLAUDE.md</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-emerald-100">Hooks</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-rose-100">Subagents</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-md text-xs font-semibold uppercase tracking-wider border border-rose-100">MCP</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-slate-700">Metadata</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider">
                  Duration: 3-4 Hours (Self-paced) <br/>
                  Difficulty: Beginner to Advanced
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-sm text-slate-700">File 2: Claude Code - Zero to Hero Detailed Notes</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Clarity</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-emerald-600">9.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Depth</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-amber-500">7.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Engagement</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-indigo-600">7.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Practicality</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-emerald-600">8.0</span>
                <span className="text-[10px] text-slate-400">/ 10.0</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Teaching Pattern</h4>
                <div className="border-l-2 border-indigo-500 pl-4 py-1">
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    Heavily relies on Mental Models (e.g., "Agent vs Autocomplete", "Junior Engineering Partner") and Frameworks (The Agent Loop: Task → Explore → Plan → Verify → Report). Uses structured dos and don'ts to establish boundaries.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-64 shrink-0">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-slate-700">Metadata</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider">
                  Duration: 2 Hours (Theory) <br/>
                  Difficulty: Beginner to Int.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
