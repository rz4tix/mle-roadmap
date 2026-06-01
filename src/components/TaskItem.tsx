import React from 'react';
import { Task, TaskType } from '../types';
import { 
  Code2, BookOpen, Bug, Network, Server, Hexagon, Shield, Activity, HardDrive, Cpu, Terminal 
} from 'lucide-react';

const typeConfig: Record<TaskType, { icon: React.ReactNode, color: string, label: string }> = {
  coding: { icon: <Code2 size={14} />, color: 'text-emerald-700 bg-emerald-50 border border-emerald-200', label: 'Implementation' },
  reading: { icon: <BookOpen size={14} />, color: 'text-blue-700 bg-blue-50 border border-blue-200', label: 'Reading' },
  debugging: { icon: <Bug size={14} />, color: 'text-red-700 bg-red-50 border border-red-200', label: 'Debugging' },
  architecture: { icon: <Network size={14} />, color: 'text-purple-700 bg-purple-50 border border-purple-200', label: 'Architecture' },
  deployment: { icon: <Server size={14} />, color: 'text-orange-700 bg-orange-50 border border-orange-200', label: 'Deployment' },
  testing: { icon: <Shield size={14} />, color: 'text-yellow-700 bg-yellow-50 border border-yellow-200', label: 'Testing' },
  monitoring: { icon: <Activity size={14} />, color: 'text-cyan-700 bg-cyan-50 border border-cyan-200', label: 'Monitoring' },
  optimization: { icon: <Hexagon size={14} />, color: 'text-pink-700 bg-pink-50 border border-pink-200', label: 'Optimization' },
  production: { icon: <HardDrive size={14} />, color: 'text-indigo-700 bg-indigo-50 border border-indigo-200', label: 'Production' },
  system_design: { icon: <Cpu size={14} />, color: 'text-rose-700 bg-rose-50 border border-rose-200', label: 'System Design' },
  code_review: { icon: <Terminal size={14} />, color: 'text-teal-700 bg-teal-50 border border-teal-200', label: 'Code Review' },
};

export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const config = typeConfig[task.type];
  
  const getBorderColor = (type: TaskType) => {
    switch (type) {
      case 'coding': return 'border-l-emerald-500 bg-slate-50';
      case 'debugging': return 'border-l-red-500 bg-slate-50';
      case 'reading': return 'border-l-blue-500 bg-slate-50';
      case 'architecture': return 'border-l-purple-500 bg-slate-50';
      case 'system_design': return 'border-l-rose-500 bg-slate-50';
      default: return 'border-l-slate-400 bg-white';
    }
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 p-4 rounded-md border border-slate-200 border-l-[4px] ${getBorderColor(task.type)} shadow-sm`}>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-slate-800 mb-1">{task.title}</h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{task.description}</p>
        
        <div className="flex items-center mt-3 gap-2">
          <span className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md ${config.color}`}>
            <span className="mr-1">{config.icon}</span>
            {config.label}
          </span>
          <span className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded-md shadow-sm">{task.duration}</span>
        </div>
      </div>
    </div>
  );
};
