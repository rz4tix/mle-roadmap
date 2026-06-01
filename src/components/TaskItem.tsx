import React from 'react';
import { Task, TaskType } from '../types';
import { 
  Code2, BookOpen, Bug, Network, Server, Hexagon, Shield, Activity, HardDrive, Cpu, Terminal 
} from 'lucide-react';

const typeConfig: Record<TaskType, { icon: React.ReactNode, color: string, label: string }> = {
  coding: { icon: <Code2 size={16} />, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', label: 'Implementation' },
  reading: { icon: <BookOpen size={16} />, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20', label: 'Reading' },
  debugging: { icon: <Bug size={16} />, color: 'text-red-400 bg-red-400/10 border-red-400/20', label: 'Debugging' },
  architecture: { icon: <Network size={16} />, color: 'text-purple-400 bg-purple-400/10 border-purple-400/20', label: 'Architecture' },
  deployment: { icon: <Server size={16} />, color: 'text-orange-400 bg-orange-400/10 border-orange-400/20', label: 'Deployment' },
  testing: { icon: <Shield size={16} />, color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20', label: 'Testing' },
  monitoring: { icon: <Activity size={16} />, color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20', label: 'Monitoring' },
  optimization: { icon: <Hexagon size={16} />, color: 'text-pink-400 bg-pink-400/10 border-pink-400/20', label: 'Optimization' },
  production: { icon: <HardDrive size={16} />, color: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20', label: 'Production' },
  system_design: { icon: <Cpu size={16} />, color: 'text-rose-400 bg-rose-400/10 border-rose-400/20', label: 'System Design' },
  code_review: { icon: <Terminal size={16} />, color: 'text-teal-400 bg-teal-400/10 border-teal-400/20', label: 'Code Review' },
};

export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const config = typeConfig[task.type];

  return (
    <div className="flex flex-col p-4 mb-3 border rounded-lg bg-slate-900 border-slate-700/50">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-semibold tracking-wide text-slate-100">{task.title}</h4>
        <span className="text-xs font-mono text-slate-400 whitespace-nowrap ml-4">{task.duration}</span>
      </div>
      <p className="text-sm leading-relaxed text-slate-300 mb-4">{task.description}</p>
      
      <div className="flex items-center mt-auto">
        <span className={`inline-flex items-center px-2 py-1 text-xs border rounded ${config.color}`}>
          <span className="mr-1.5">{config.icon}</span>
          {config.label}
        </span>
      </div>
    </div>
  );
};
