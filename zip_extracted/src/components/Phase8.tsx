import React from 'react';
import { Video, FileText, CheckSquare, HelpCircle, Layers } from 'lucide-react';

export default function Phase8() {
  const components = [
    { title: "1. Core Lesson Notes", icon: FileText, desc: "Comprehensive conceptual and internal engine architecture treatise." },
    { title: "2. Instructor Lecture Guide", icon: Video, desc: "Timed delivery checkpoints (45 mins), live terminal scripts & common pitfalls." },
    { title: "3. Student Quick-Reference", icon: Layers, desc: "1-page printable cheat sheet card with commands, rules, and syntax." },
    { title: "4. Slide Deck Outline", icon: FileText, desc: "12-slide visual blueprint with architectural sequence diagrams." },
    { title: "5. Autograded Quiz Bank", icon: HelpCircle, desc: "5 scenario-based assessment questions with detailed technical rationales." },
    { title: "6. Practical Coding Assignment", icon: CheckSquare, desc: "Graded GitHub repository exercise with automated CI test assertions." },
    { title: "7. Step-by-Step Lab Guide", icon: FileText, desc: "Command-by-command terminal exercise with pass/fail verification." }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between shrink-0 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Phase 8: LMS Content Generation Strategy</h2>
          <p className="text-slate-500 text-sm mt-1">Standardized 7-part master production blueprint for all 60 lessons.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Standardized 7-Part Lesson Blueprint</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div key={idx} className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{comp.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-sm">
        <h4 className="text-base font-bold mb-2">LMS Autograding & Assessment Framework</h4>
        <p className="text-xs text-indigo-200 leading-relaxed mb-4">
          All student submissions are verified automatically via GitHub Actions runners executing headless test suites (`pytest`, `vitest`, `claude -p`) before human TA review.
        </p>
        <div className="flex flex-wrap gap-3 text-xs">
          <span className="bg-indigo-800 px-3 py-1.5 rounded-lg border border-indigo-700 font-mono">✔ Automated PR Linting</span>
          <span className="bg-indigo-800 px-3 py-1.5 rounded-lg border border-indigo-700 font-mono">✔ 100% Mutation Kill Gate</span>
          <span className="bg-indigo-800 px-3 py-1.5 rounded-lg border border-indigo-700 font-mono">✔ Diff Review Integrity</span>
        </div>
      </div>
    </div>
  );
}
