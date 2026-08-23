/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Target, Layout, Map, Award, BookText, GraduationCap, Video, Crown, ChevronRight } from 'lucide-react';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import Phase4 from './components/Phase4';
import Phase5 from './components/Phase5';
import Phase6 from './components/Phase6';
import Phase7 from './components/Phase7';
import Phase8 from './components/Phase8';
import Phase9 from './components/Phase9';

const navItems = [
  { id: 'phase1', title: 'Curriculum Audit', icon: BookOpen, component: Phase1 },
  { id: 'phase2', title: 'Gap Analysis', icon: Target, component: Phase2 },
  { id: 'phase3', title: 'Course Blueprint', icon: Layout, component: Phase3 },
  { id: 'phase4', title: 'Learning Roadmap', icon: Map, component: Phase4 },
  { id: 'phase5', title: 'Claude Code Track', icon: Award, component: Phase5 },
  { id: 'phase6', title: 'Hands-On Labs', icon: BookText, component: Phase6 },
  { id: 'phase7', title: 'Capstone Projects', icon: GraduationCap, component: Phase7 },
  { id: 'phase8', title: 'LMS Content Strategy', icon: Video, component: Phase8 },
  { id: 'phase9', title: 'Premium Upgrade', icon: Crown, component: Phase9 },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const mainRef = useRef<HTMLElement>(null);

  // Intersection Observer to update active section based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to find the most visible element
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { root: mainRef.current, rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5, 0.8, 1] }
    );

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const mainEl = mainRef.current;
    if (el && mainEl) {
      // Calculate position relative to the scroll container
      const top = el.offsetTop;
      mainEl.scrollTo({ top: top - 32, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 overflow-hidden">
      
      {/* Top Banner */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white font-bold">
            <Crown size={18} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            Claude Course <span className="text-indigo-600">Architect</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider border border-indigo-100">
            Elite Educator Mode
          </span>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden w-full max-w-[1600px] mx-auto relative">
        
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 h-full overflow-y-auto">
          <nav className="flex-1 p-4 flex flex-col gap-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Workflow Phases</div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left ${
                    isActive 
                      ? 'bg-slate-50 text-indigo-600 font-medium border border-slate-100' 
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-indigo-600' : 'bg-slate-300'}`}></span>
                  <div className="flex items-center gap-2 flex-1">
                    <Icon size={16} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                    {item.title}
                  </div>
                </button>
              );
            })}
          </nav>
          <div className="p-4 border-t border-slate-100 shrink-0">
            <div className="bg-slate-900 rounded-lg p-3 text-white">
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Target Benchmark</p>
              <p className="text-sm font-bold mt-1">Anthropic Academy+</p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main ref={mainRef} className="flex-1 p-8 overflow-y-auto relative scroll-smooth flex flex-col items-center">
          <div className="w-full max-w-4xl space-y-16 pb-24">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide border border-indigo-100 mb-6 uppercase">
                Executive Summary
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Curriculum Architect <br/><span className="text-indigo-600">Reverse-Engineering Report</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                A comprehensive analysis and redesign of the provided Claude Code study materials, transforming them into an elite, production-grade AI engineering program capable of taking students from zero to mastery.
              </p>
            </div>

          <div className="space-y-32">
            {navItems.map((item) => {
              const Component = item.component;
              return (
                <section key={item.id} id={item.id} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200">
                      <item.icon size={24} className="text-indigo-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{item.title}</h2>
                  </div>
                  <Component />
                </section>
              );
            })}
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

