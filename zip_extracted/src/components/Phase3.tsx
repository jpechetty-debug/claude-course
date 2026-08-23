import React from 'react';
import { Layout, CheckCircle, Sparkles } from 'lucide-react';
import { courseNamesList, masterPromise } from '../data/curriculumData';

export default function Phase3() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-2xl shadow-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-400/20">
          <Sparkles size={14} /> Master Course Promise
        </div>
        <h3 className="text-2xl font-bold leading-relaxed mb-4">
          "{masterPromise}"
        </h3>
        <div className="flex flex-wrap gap-4 text-xs text-indigo-200 mt-6 pt-6 border-t border-indigo-800/50">
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> 60-Day Immersive Duration</span>
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> 120 Total Lab & Lecture Hours</span>
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> 4 Tiered Capstone Portfolios</span>
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-400" /> CC-ASA Industry Credential</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Layout className="text-indigo-600" size={20} /> 10 Premium Flagship Course Titles
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {courseNamesList.map((name, idx) => (
            <div key={idx} className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
              idx === 0 ? 'bg-indigo-50/50 border-indigo-200 shadow-sm' : 'bg-slate-50/50 border-slate-100'
            }`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                idx === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                {idx + 1}
              </span>
              <div>
                <p className={`text-sm font-semibold ${idx === 0 ? 'text-indigo-950' : 'text-slate-800'}`}>
                  {name}
                </p>
                {idx === 0 && <span className="inline-block mt-1 text-[10px] uppercase font-bold text-indigo-600 bg-white px-2 py-0.5 rounded border border-indigo-200">Recommended Flagship</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { title: "30 Days (Fast-Track)", status: "Too Short", desc: "Covers CLI only; rushes custom MCP and Agent SDK coding.", border: "border-slate-200" },
          { title: "45 Days (Standard)", status: "Good", desc: "Covers MCP and basic CI/CD, but skips multi-agent swarms.", border: "border-slate-200" },
          { title: "60 Days (Flagship)", status: "⭐ Optimal", desc: "Full CLI, Custom MCP, Agent SDK, Swarms, CI/CD, Evals & Capstone Defense.", border: "border-indigo-500 bg-indigo-50/30 shadow-sm" },
          { title: "90 Days (Extended)", status: "Too Long", desc: "Corporate cohort pacing with higher self-paced drop-off risk.", border: "border-slate-200" }
        ].map((item, idx) => (
          <div key={idx} className={`bg-white p-5 rounded-xl border ${item.border} flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
              </div>
              <span className="inline-block px-2 py-0.5 text-xs font-bold text-indigo-700 bg-indigo-50 rounded mb-2">{item.status}</span>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
