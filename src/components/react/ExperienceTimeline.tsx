import React, { useState } from 'react';
import { experiences } from '../../data/portfolioData';
import { Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(experiences[0].id);

  const selectedExp = experiences.find((exp) => exp.id === activeExpId) || experiences[0];

  return (
    <div className="flex flex-col gap-8">
      {/* Desktop Layout: Sidebar + Detail view */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
        {/* Company Selector Sidebar */}
        <div className="col-span-4 flex flex-col gap-3">
          {experiences.map((exp) => {
            const isActive = exp.id === activeExpId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveExpId(exp.id)}
                className={`flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg shadow-blue-500/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-mono font-semibold ${isActive ? 'text-blue-100' : 'text-blue-600 dark:text-blue-400'}`}>
                    {exp.period}
                  </span>
                  <h4 className="font-bold text-base leading-snug">{exp.company}</h4>
                  <span className={`text-xs ${isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {exp.role}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-white' : 'opacity-40'}`} />
              </button>
            );
          })}
        </div>

        {/* Experience Detail Panel */}
        <div className="col-span-8 p-8 rounded-3xl glass-card shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 relative z-10">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {selectedExp.company}
                  </span>
                  {selectedExp.isCurrent && (
                    <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Actual
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  {selectedExp.role}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-4 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{selectedExp.period}</span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Responsabilidades y Logros Clave
              </h4>
              <ul className="flex flex-col gap-3">
                {selectedExp.highlights.map((highlight, idx) => {
                  const isMigrationHighlight = selectedExp.id === 'arguilea' && idx === 0;
                  return (
                  <li key={idx} className={`flex items-start gap-3 group ${isMigrationHighlight ? 'p-4 rounded-2xl bg-blue-500/10 border border-blue-500/25 shadow-sm' : ''}`}>
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform ${isMigrationHighlight ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500'}`} />
                    <span className={`text-sm leading-relaxed ${isMigrationHighlight ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                      {highlight}
                    </span>
                  </li>
                )})}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Stack:</span>
              {selectedExp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Stacked Cards */}
      <div className="flex flex-col gap-6 lg:hidden">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-2xl glass-card shadow-md flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="self-start px-3 py-1 text-[11px] font-semibold rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 break-words">
                  {exp.company}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            </div>

            <ul className="flex flex-col gap-2.5">
              {exp.highlights.map((highlight, idx) => {
                const isMigrationHighlight = exp.id === 'arguilea' && idx === 0;
                return (
                <li key={idx} className={`flex items-start gap-2.5 ${isMigrationHighlight ? 'p-3 rounded-xl bg-blue-500/10 border border-blue-500/25' : ''}`}>
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isMigrationHighlight ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500'}`} />
                  <span className={`text-xs leading-relaxed ${isMigrationHighlight ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                    {highlight}
                  </span>
                </li>
              )})}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
