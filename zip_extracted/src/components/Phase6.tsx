import React, { useState } from 'react';
import { Beaker, Search, ChevronDown, ChevronUp, CheckCircle, Terminal } from 'lucide-react';
import { labs50Catalog } from '../data/curriculumData';

export default function Phase6() {
  const [search, setSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [expandedLab, setExpandedLab] = useState<number | null>(1);

  const filteredLabs = labs50Catalog.filter(lab => {
    const matchesSearch = lab.title.toLowerCase().includes(search.toLowerCase()) || 
                          lab.section.toLowerCase().includes(search.toLowerCase());
    const matchesDiff = difficultyFilter === 'All' || lab.difficulty === difficultyFilter;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 6: Complete 50 Hands-On Labs Catalog</h2>
          <p className="text-slate-500 text-sm mt-1">50 industry-calibrated practical labs with step-by-step instructions and pass criteria.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">
            {filteredLabs.length} of 50 Labs Displayed
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search labs by title or section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'].map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                difficultyFilter === diff
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Labs List */}
      <div className="space-y-3">
        {filteredLabs.map((lab) => {
          const isExpanded = expandedLab === lab.id;
          return (
            <div key={lab.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => setExpandedLab(isExpanded ? null : lab.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    #{lab.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${lab.difficultyColor}`}>
                        {lab.difficulty}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{lab.section}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{lab.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-indigo-600 font-semibold hidden sm:inline-block">
                    {isExpanded ? 'Hide Details' : 'View Lab'}
                  </span>
                  {isExpanded ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                </div>
              </button>

              {isExpanded && (
                <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">Objective</h4>
                    <p className="text-slate-600">{lab.objective}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">Inputs & Prerequisites</h4>
                    <p className="text-slate-600">{lab.inputs}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">Execution Steps</h4>
                    <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono space-y-1">
                      {lab.instructions.map((inst, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2">
                          <span className="text-indigo-400 select-none">$</span>
                          <span>{inst}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">Expected Output</h4>
                      <p className="text-slate-600">{lab.expectedOutput}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">Success Criteria</h4>
                      <p className="text-emerald-700 font-medium flex items-start gap-1.5">
                        <CheckCircle size={14} className="mt-0.5 shrink-0" />
                        <span>{lab.successCriteria}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
