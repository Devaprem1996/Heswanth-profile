import React from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { Heart, School, Award, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t-[3px] border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: School and student info */}
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-400 border border-slate-900 flex items-center justify-center font-display font-black text-sm">
              H
            </span>
            <span className="font-display font-extrabold text-slate-900 text-base">
              {STUDENT_INFO.fullName}
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-semibold text-slate-600 font-display">
              {STUDENT_INFO.gradeDisplay}
            </span>
          </div>

          <p className="text-xs text-slate-500 mt-1">
            {STUDENT_INFO.schoolName} • Santhome, Chennai - 600 004
          </p>
          <p className="font-handwriting text-slate-700 text-sm mt-0.5">
            "{STUDENT_INFO.motto}"
          </p>
        </div>

        {/* Right Side: Back to top & attribution */}
        <div className="flex flex-col sm:items-end gap-2 text-center sm:text-right">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-display font-bold text-slate-700 transition-colors cursor-pointer self-center sm:self-auto"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
          
          <p className="text-[11px] text-slate-400">
            Created with enthusiasm for School Project.
          </p>
        </div>

      </div>
    </footer>
  );
};
