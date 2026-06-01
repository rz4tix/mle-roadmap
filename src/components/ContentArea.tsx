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
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8">
          <h2 className="text-sm font-mono tracking-widest text-emerald-500 mb-1">MONTH {month.monthNumber}</h2>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-3">{month.title}</h1>
          <p className="text-slate-400 text-lg">{month.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="flex items-center mb-4">
              <Briefcase className="w-5 h-5 text-purple-400 mr-2" />
              <h3 className="text-lg font-semibold text-slate-100">Portfolio Project</h3>
            </div>
            <h4 className="text-md font-medium text-white mb-2">{month.portfolioProject.title}</h4>
            <p className="text-sm text-slate-300 mb-4">{month.portfolioProject.description}</p>
            <div className="mb-4">
              <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Architecture</h5>
              <div className="flex flex-wrap gap-2">
                {month.portfolioProject.architecture.map((item, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-slate-300">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Requirements</h5>
              <ul className="space-y-2">
                {month.portfolioProject.requirements.map(req => (
                  <li key={req.id} className="flex items-start text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                    <span>{req.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Monthly Assessment</h3>
            <div className="space-y-4">
              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Engineering Review</h5>
                <p className="text-sm text-slate-300">{month.monthlyReview.engineeringReview}</p>
              </div>
              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Architecture Review</h5>
                <p className="text-sm text-slate-300">{month.monthlyReview.architectureReview}</p>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Mock Interview</h5>
                <p className="text-sm text-blue-300">{month.monthlyReview.mockInterview}</p>
              </div>
              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Technical Assessment</h5>
                <p className="text-sm text-emerald-400 font-mono">{month.monthlyReview.technicalAssessment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewState === 'week' && week) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-6 flex items-center text-sm text-slate-400 font-mono uppercase tracking-widest">
          <span>Month {month.monthNumber}</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-emerald-500">Week {week.weekNumber}</span>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-white mb-2">{week.title}</h1>
          <p className="text-slate-400">{week.theme}</p>
        </div>

        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 mb-8">
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Weekly Engineering Review</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Practical</h5>
              <p className="text-sm text-slate-300">{week.review.practical}</p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Project & Debugging</h5>
              <p className="text-sm text-slate-300">{week.review.project} <br/><span className="text-slate-400 italic text-xs mt-1 block">Fixes: {week.review.debugging}</span></p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Interview Prep</h5>
              <p className="text-sm text-emerald-400">{week.review.interviewPrep}</p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-wider text-slate-500 mb-1">Assessment</h5>
              <p className="text-sm text-blue-300">{week.review.assessment}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewState === 'day' && week && day) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-4xl">
        <div className="mb-6 flex items-center text-sm text-slate-400 font-mono uppercase tracking-widest flex-wrap gap-y-2">
          <span>Month {month.monthNumber}</span>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span>Week {week.weekNumber}</span>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
          <span className="text-emerald-500">Day {day.dayNumber}</span>
        </div>
        <div className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">{day.title}</h1>
          <p className="text-slate-400">Focus: <span className="text-slate-300 font-medium">{day.focus}</span></p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-200 mb-4 hidden">Engineering Tasks</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
