import React from 'react';
import { Day, Week, Month } from '../types';
import { TaskItem } from './TaskItem';
import { CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

interface ContentAreaProps {
  month: Month;
  week: Week | null;
  day: Day | null;
  viewState: 'month' | 'week' | 'day';
}

export const ContentArea: React.FC<ContentAreaProps> = ({ month, week, day, viewState }) => {
  
  if (viewState === 'month') {
    return (
      <div className="animate-in fade-in flex flex-col gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xs font-bold text-blue-500 mb-1 tracking-widest uppercase">Month {month.monthNumber}</h2>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{month.title}</h1>
          <p className="text-slate-500 text-sm">{month.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-blue-600 rounded-xl p-8 text-white shadow-lg flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Portfolio Project</div>
                <h3 className="text-xl font-bold">{month.portfolioProject.title}</h3>
              </div>
            </div>
            
            <p className="text-sm opacity-90 mb-6 leading-relaxed bg-white/10 p-4 rounded-lg">{month.portfolioProject.description}</p>
            
            <div className="mb-6">
              <h5 className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-2">Architecture & Tech</h5>
              <div className="flex flex-wrap gap-2">
                {[...month.portfolioProject.architecture, ...month.portfolioProject.techStack].map((item, idx) => (
                  <span key={idx} className="px-2 py-1 text-[10px] font-bold rounded bg-white/10 text-white uppercase">{item}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-2">Requirements</h5>
              <ul className="space-y-2">
                {month.portfolioProject.requirements.map(req => (
                  <li key={req.id} className="flex items-start text-sm opacity-90">
                    <CheckCircle2 className="w-4 h-4 text-blue-200 mr-2 shrink-0 mt-0.5" />
                    <span>{req.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
              Monthly Assessment
            </h3>
            <div className="space-y-4 flex-1">
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Engineering Review</h5>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{month.monthlyReview.engineeringReview}</p>
              </div>
              <div className="h-px w-full bg-slate-100 my-2"></div>
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Architecture Review</h5>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{month.monthlyReview.architectureReview}</p>
              </div>
              <div className="h-px w-full bg-slate-100 my-2"></div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <h5 className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Mock Interview</h5>
                <p className="text-sm text-blue-600 font-bold">{month.monthlyReview.mockInterview}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <h5 className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Tech Assessment</h5>
                <p className="text-sm text-slate-900 font-bold">{month.monthlyReview.technicalAssessment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewState === 'week' && week) {
    return (
      <div className="animate-in fade-in flex flex-col gap-6 max-w-5xl mx-auto">
        <div className="flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest gap-2">
          <span>Month {month.monthNumber}</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-blue-500">Week {week.weekNumber}</span>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">{week.title}</h1>
          <p className="text-slate-500 text-sm font-medium">{week.theme}</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-tight">Weekly Engineering Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h5 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Practical Implementation</h5>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">{week.review.practical}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h5 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Project & Debugging</h5>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">{week.review.project}</p>
              <div className="mt-3 text-[10px] font-bold text-orange-700 bg-orange-100 inline-block px-2 py-1 rounded border border-orange-200 uppercase tracking-widest">
                Fixes: {week.review.debugging}
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h5 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Interview Prep</h5>
              <p className="text-sm text-blue-600 font-bold leading-relaxed">{week.review.interviewPrep}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h5 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Assessment</h5>
              <p className="text-sm text-slate-800 font-medium leading-relaxed">{week.review.assessment}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewState === 'day' && week && day) {
    return (
      <div className="animate-in fade-in flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest gap-2 mb-3">
                <span>Month {month.monthNumber}</span>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span>Week {week.weekNumber}</span>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-blue-500">Day {day.dayNumber}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{day.title}</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">Focus: {day.focus}</p>
            </div>
            <div className="md:text-right hidden sm:block">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Tasks</div>
              <div className="text-xl font-bold text-slate-900">{day.tasks.length}</div>
            </div>
          </div>

          <div className="space-y-4">
            {day.tasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
