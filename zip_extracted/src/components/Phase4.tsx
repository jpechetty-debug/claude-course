import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { modules8List } from '../data/curriculumData';

export default function Phase4() {
  const [expandedMod, setExpandedMod] = useState<number>(1);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between shrink-0 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 4: Complete 60-Day Learning Syllabus</h2>
          <p className="text-slate-500 text-sm mt-1">8 Comprehensive Modular Milestones covering 60 day-by-day practical lessons.</p>
        </div>
        <div className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">
          60 Days · 8 Modules
        </div>
      </div>

      <div className="space-y-4">
        {modules8List.map((mod) => {
          const isExpanded = expandedMod === mod.id;
          return (
            <div key={mod.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => setExpandedMod(isExpanded ? 0 : mod.id)}
                className="w-full bg-slate-50/70 hover:bg-slate-100/70 p-5 flex items-center justify-between text-left transition-colors border-b border-slate-200"
              >
                <div className="flex items-center gap-4">
                  <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm font-mono shadow-sm">
                    M{mod.id}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{mod.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {mod.weeks}</span>
                      <span>•</span>
                      <span>{mod.lessons.length} Lessons</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-indigo-600 font-semibold hidden sm:inline-block">
                    {isExpanded ? 'Collapse' : 'View Lessons'}
                  </span>
                  {isExpanded ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                </div>
              </button>

              {isExpanded && (
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 italic bg-indigo-50/50 p-3 rounded-lg border border-indigo-100">
                    <span className="font-semibold text-indigo-900 not-italic">Module Goals:</span> {mod.goals}
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider">
                          <th className="px-4 py-3 border-b border-slate-200 w-16">Day</th>
                          <th className="px-4 py-3 border-b border-slate-200">Lesson Title</th>
                          <th className="px-4 py-3 border-b border-slate-200 w-20">Duration</th>
                          <th className="px-4 py-3 border-b border-slate-200">Hands-on Lab</th>
                          <th className="px-4 py-3 border-b border-slate-200">Assignment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {mod.lessons.map((lesson) => (
                          <tr key={lesson.day} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-bold text-indigo-600 font-mono">Day {lesson.day}</td>
                            <td className="px-4 py-3 font-medium text-slate-900">{lesson.title}</td>
                            <td className="px-4 py-3 text-slate-500">{lesson.duration}</td>
                            <td className="px-4 py-3 font-medium text-emerald-700 bg-emerald-50/30">{lesson.lab}</td>
                            <td className="px-4 py-3 text-slate-600">{lesson.assignment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
