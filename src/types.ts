export type TaskType = 
  | 'coding' 
  | 'reading' 
  | 'debugging' 
  | 'architecture' 
  | 'deployment' 
  | 'testing' 
  | 'monitoring' 
  | 'optimization' 
  | 'production' 
  | 'system_design' 
  | 'code_review';

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  duration: string;
}

export interface Day {
  dayNumber: number; // 1-6
  title: string;
  focus: string;
  tasks: Task[];
}

export interface WeekReview {
  practical: string;
  reading: string;
  project: string;
  debugging: string;
  assessment: string;
  interviewPrep: string;
}

export interface Week {
  weekNumber: number; // 1-4 per month
  title: string;
  theme: string;
  days: Day[];
  review: WeekReview;
}

export interface ProjectRequirement {
  id: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  architecture: string[];
  techStack: string[];
  requirements: ProjectRequirement[];
}

export interface MonthReview {
  engineeringReview: string;
  architectureReview: string;
  mockInterview: string;
  technicalAssessment: string;
}

export interface Month {
  monthNumber: number; // 1-5
  title: string;
  theme: string;
  description: string;
  weeks: Week[];
  portfolioProject: PortfolioProject;
  monthlyReview: MonthReview;
}

export interface Roadmap {
  title: string;
  description: string;
  months: Month[];
}
