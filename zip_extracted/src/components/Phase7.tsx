import React, { useState } from 'react';
import { Rocket, Layers, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { capstones30Catalog } from '../data/curriculumData';

export default function Phase7() {
  const [selectedTier, setSelectedTier] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('All');

  const filteredProjects = capstones30Catalog.filter(p => {
    return selectedTier === 'All' || p.tier === selectedTier;
  });

  const tierCounts = {
    Beginner: capstones30Catalog.filter(p => p.tier === 'Beginner').length,
    Intermediate: capstones30Catalog.filter(p => p.tier === 'Intermediate').length,
    Advanced: capstones30Catalog.filter(p => p.tier === 'Advanced').length,
    Expert: capstones30Catalog.filter(p => p.tier === 'Expert').length,
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 7: Complete 30 Capstone Projects Portfolio</h2>
          <p className="text-slate-500 text-sm mt-1">30 production-grade capstones across 4 skill tiers with architectural blueprints & 100-point rubrics.</p>
        </div>
      </div>

      {/* Tier Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {(['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'] as const).map((tier) => (
          <button
            key={tier}
            onClick={() => setSelectedTier(tier)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedTier === tier
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>{tier}</span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] ${
              selectedTier === tier ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-500'
            }`}>
              {tier === 'All' ? 30 : tierCounts[tier]}
            </span>
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center font-mono">
                  {project.id}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  project.tier === 'Beginner' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  project.tier === 'Intermediate' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' :
                  project.tier === 'Advanced' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                  'bg-rose-50 text-rose-700 border border-rose-200'
                }`}>
                  {project.tier}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">{project.scope}</p>

              {/* Architecture Blueprint Box */}
              <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-[11px] mb-4 overflow-x-auto">
                <p className="text-indigo-400 font-bold text-[10px] uppercase mb-1">Architecture Pipeline</p>
                <p className="whitespace-pre">{project.architecture}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-1.5 mb-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Capabilities</p>
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 size={13} className="text-indigo-600 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rubric Breakdown Footer */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span className="font-semibold text-slate-700">100-Point Evaluation Rubric:</span>
                <span className="font-mono text-indigo-600 font-bold">100 Pts Total</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {project.rubric.map((r, rIdx) => (
                  <div key={rIdx} className="bg-slate-50 px-2 py-1 rounded text-[10px] flex justify-between items-center text-slate-600">
                    <span className="truncate">{r.category}</span>
                    <span className="font-bold text-indigo-700">{r.points}p</span>
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
