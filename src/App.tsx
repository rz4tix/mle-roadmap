import React, { useState } from 'react';
import { roadmap } from './data/roadmapData';
import { Month, Week, Day } from './types';
import { ChevronRight, ChevronDown, Rocket, Calendar, Map, CheckCircle } from 'lucide-react';
import { ContentArea } from './components/ContentArea';

export default function App() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number | null>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [expandedMonths, setExpandedMonths] = useState<Set<number>>(new Set([0]));
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(new Set(["0-0"])); // monthIndex-weekIndex format
  const [viewState, setViewState] = useState<'month' | 'week' | 'day'>('month');

  const selectedMonth = roadmap.months[selectedMonthIndex];
  const selectedWeek = selectedWeekIndex !== null ? selectedMonth.weeks[selectedWeekIndex] : null;
  const selectedDay = selectedWeek && selectedDayIndex !== null ? selectedWeek.days[selectedDayIndex] : null;

  const toggleMonth = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newExpanded = new Set(expandedMonths);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpandedMonths(newExpanded);
  };

  const toggleWeek = (monthIdx: number, weekIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const key = `${monthIdx}-${weekIdx}`;
    const newExpanded = new Set(expandedWeeks);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedWeeks(newExpanded);
  };

  const handleMonthClick = (idx: number) => {
    setSelectedMonthIndex(idx);
    setSelectedWeekIndex(null);
    setSelectedDayIndex(null);
    setViewState('month');
    setExpandedMonths(new Set([...expandedMonths, idx]));
  };

  const handleWeekClick = (monthIdx: number, weekIdx: number) => {
    setSelectedMonthIndex(monthIdx);
    setSelectedWeekIndex(weekIdx);
    setSelectedDayIndex(null);
    setViewState('week');
    
    setExpandedMonths(new Set([...expandedMonths, monthIdx]));
    setExpandedWeeks(new Set([...expandedWeeks, `${monthIdx}-${weekIdx}`]));
  };

  const handleDayClick = (monthIdx: number, weekIdx: number, dayIdx: number) => {
    setSelectedMonthIndex(monthIdx);
    setSelectedWeekIndex(weekIdx);
    setSelectedDayIndex(dayIdx);
    setViewState('day');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans flex selection:bg-emerald-500/30">
      
      {/* Sidebar Navigation */}
      <aside className="w-80 border-r border-slate-800 bg-slate-950/50 flex flex-col shrink-0 overflow-hidden sticky top-0 max-h-screen z-10 transition-all hidden md:flex">
        <div className="p-6 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3 text-emerald-400 mb-2">
            <Rocket size={20} />
            <h1 className="font-bold text-lg tracking-wide uppercase text-white">MLE Intensive</h1>
          </div>
          <p className="text-xs text-slate-500 font-mono leading-relaxed mt-3">PRO ROADMAP EXPLORER v1.0.0</p>
        </div>

        <div className="overflow-y-auto flex-1 p-4 custom-scrollbar">
          {roadmap.months.map((month, mIdx) => {
            const isMonthExpanded = expandedMonths.has(mIdx);
            const isMonthSelected = selectedMonthIndex === mIdx && viewState === 'month';

            return (
              <div key={month.monthNumber} className="mb-1">
                <div 
                  className={`flex justify-between items-center px-3 py-2.5 rounded-md cursor-pointer transition-colors ${
                    isMonthSelected ? 'bg-emerald-500/10 text-emerald-400' : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                  onClick={() => handleMonthClick(mIdx)}
                >
                  <div className="flex items-center truncate">
                    <button onClick={(e) => toggleMonth(mIdx, e)} className="mr-2 p-1 hover:bg-slate-700/50 rounded shrink-0">
                      {isMonthExpanded ? <ChevronDown size={14} className="opacity-70" /> : <ChevronRight size={14} className="opacity-70" />}
                    </button>
                    <span className="font-semibold text-sm truncate">M{month.monthNumber}: {month.title.split(' ')[0]}...</span>
                  </div>
                </div>

                {isMonthExpanded && (
                  <div className="ml-6 border-l border-slate-800 pl-2 mt-1 mb-3 space-y-1">
                    {month.weeks.map((week, wIdx) => {
                      const weekKey = `${mIdx}-${wIdx}`;
                      const isWeekExpanded = expandedWeeks.has(weekKey);
                      const isWeekSelected = selectedMonthIndex === mIdx && selectedWeekIndex === wIdx && viewState === 'week';

                      return (
                        <div key={week.weekNumber}>
                          <div 
                            className={`flex justify-between items-center px-3 py-2 rounded-md cursor-pointer transition-colors text-sm ${
                              isWeekSelected ? 'bg-slate-800 text-white' : 'hover:bg-slate-800/50 text-slate-400'
                            }`}
                            onClick={() => handleWeekClick(mIdx, wIdx)}
                          >
                            <div className="flex items-center truncate">
                              <button onClick={(e) => toggleWeek(mIdx, wIdx, e)} className="mr-2 p-1 hover:bg-slate-700/50 rounded shrink-0">
                                {isWeekExpanded ? <ChevronDown size={12} className="opacity-70" /> : <ChevronRight size={12} className="opacity-70" />}
                              </button>
                              <span className="truncate">W{week.weekNumber}: {week.title.split(' &')[0]}</span>
                            </div>
                          </div>

                          {isWeekExpanded && (
                            <div className="ml-7 border-l-2 border-slate-800/50 pl-2 mt-1 mb-2 space-y-1">
                              {week.days.map((day, dIdx) => {
                                const isDaySelected = selectedMonthIndex === mIdx && selectedWeekIndex === wIdx && selectedDayIndex === dIdx && viewState === 'day';
                                return (
                                  <div 
                                    key={day.dayNumber}
                                    onClick={() => handleDayClick(mIdx, wIdx, dIdx)}
                                    className={`px-3 py-1.5 rounded text-xs cursor-pointer truncate transition-colors ${
                                      isDaySelected ? 'bg-slate-800/80 text-emerald-400 font-medium' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
                                    }`}
                                  >
                                    Day {day.dayNumber}: {day.title}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto max-h-screen CustomScroll p-6 lg:p-12 relative w-full">
        {/* Mobile Navbar Substitute Placeholder */}
        <div className="md:hidden flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
           <div className="flex items-center gap-2 text-emerald-400">
            <Rocket size={18} />
            <span className="font-bold tracking-wide uppercase text-white text-sm">MLE Intensive</span>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">View Mode: {viewState}</span>
        </div>

        <ContentArea 
          month={selectedMonth}
          week={selectedWeek}
          day={selectedDay}
          viewState={viewState}
        />
      </main>

    </div>
  );
}
