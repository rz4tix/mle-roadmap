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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex selection:bg-blue-500/30 overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 overflow-hidden h-screen z-10 transition-all hidden md:flex">
        <div className="p-6 shrink-0 border-b border-slate-800/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white shrink-0">
              <Rocket size={18} />
            </div>
            <h1 className="font-bold text-lg tracking-wide uppercase text-white truncate">MLE Intensive</h1>
          </div>
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest leading-relaxed">Phase Roadmap</p>
        </div>

        <div className="overflow-y-auto flex-1 px-4 py-4 custom-scrollbar">
          {roadmap.months.map((month, mIdx) => {
            const isMonthExpanded = expandedMonths.has(mIdx);
            const isMonthSelected = selectedMonthIndex === mIdx && viewState === 'month';

            return (
              <div key={month.monthNumber} className="mb-1">
                <div 
                  className={`flex justify-between items-center px-3 py-2.5 rounded-md cursor-pointer transition-colors ${
                    isMonthSelected ? 'bg-blue-600 text-white font-medium shadow-sm' : 'hover:bg-slate-800 text-slate-300'
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
                              isWeekSelected ? 'bg-slate-800 text-white font-medium' : 'hover:bg-slate-800/50 text-slate-400'
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
                                      isDaySelected ? 'bg-blue-600/20 text-blue-400 font-medium' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
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
      <main className="flex-1 overflow-y-auto h-screen CustomScroll relative w-full flex flex-col">
        {/* Top Bar for Desktop */}
        <header className="hidden md:flex h-16 bg-white border-b border-slate-200 items-center justify-between px-8 shrink-0 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-slate-500 tracking-wide">
              M{selectedMonth.monthNumber} / {selectedWeek ? `W${selectedWeek.weekNumber}` : 'Roadmap Overview'} {selectedDay ? <>/ <span className="text-slate-900 font-bold">D{selectedDay.dayNumber}</span></> : ''}
            </div>
            <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">High Intensity</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sys Active</span>
            </div>
            <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded shadow-sm hover:bg-slate-800 transition-colors">INITIATE NEXT</button>
          </div>
        </header>

        {/* Mobile Navbar Substitute Placeholder */}
        <div className="md:hidden flex items-center justify-between p-6 bg-slate-900 border-b border-slate-800 shrink-0 sticky top-0 z-20">
           <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
              <Rocket size={16} />
            </div>
            <span className="font-bold tracking-wide uppercase text-sm">MLE Intensive</span>
          </div>
          <span className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1.5 rounded uppercase tracking-wider">{viewState}</span>
        </div>
        
        <div className="p-6 md:p-8 lg:p-10 flex-1">
          <ContentArea 
            month={selectedMonth}
            week={selectedWeek}
            day={selectedDay}
            viewState={viewState}
          />
        </div>
      </main>

    </div>
  );
}
