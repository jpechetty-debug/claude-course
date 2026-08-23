import React from 'react';
import { Target, Clock, ArrowRight } from 'lucide-react';
import { gapAnalysisList } from '../data/curriculumData';

export default function Phase2() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between shrink-0 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 2: Comprehensive Gap Analysis</h2>
          <p className="text-slate-500 text-sm mt-1">20 Critical Enterprise Additions Identified and Integrated into Course V2.</p>
        </div>
        <div className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">
          20 Critical Gaps Resolved
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {gapAnalysisList.map((gap) => (
          <div key={gap.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center font-mono">
                  #{gap.id}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                  <Clock size={12} /> {gap.duration}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{gap.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">{gap.whyItMatters}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Placement:</span>
              <span className="font-semibold text-indigo-600 flex items-center gap-1">
                {gap.placement} <ArrowRight size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
