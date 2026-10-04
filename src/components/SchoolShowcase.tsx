import React from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { HighlightBadge, DaisyDoodle } from './DoodleAssets';
import { School, Trophy, Award, Compass, Heart, BookOpen, MapPin, Sparkles } from 'lucide-react';

export const SchoolShowcase: React.FC = () => {
  return (
    <section
      id="school"
      className="relative bg-[#F8FAF2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b-[4px] border-slate-900"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <HighlightBadge label="our alma mater" color="yellow" className="mb-2" />
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {STUDENT_INFO.schoolName}
          </h2>
          <p className="font-display font-bold text-rose-600 text-sm sm:text-base uppercase tracking-wider mt-1">
            {STUDENT_INFO.schoolAffiliation} • Santhome, Chennai - 600 004
          </p>
          <div className="inline-block mt-3 px-4 py-1 bg-amber-100 rounded-full border border-amber-300">
            <span className="font-handwriting text-slate-800 text-base font-bold italic">
              Motto: "{STUDENT_INFO.motto}"
            </span>
          </div>
        </div>

        {/* 4 Pillars of St. Bede's Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Heritage */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-[2px] border-slate-900 shadow-[4px_4px_0px_#1e293b] card-doodle-border-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-slate-900 flex items-center justify-center text-amber-800 mb-3">
                <School size={22} />
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-1">
                Centenary Heritage (Est. 1907)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                With more than 115+ glorious years of educational service in Santhome, Chennai, St. Bede’s stands tall as a beacon of Anglo-Indian learning and academic discipline.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500">
              📍 Santhome High Road, Chennai
            </div>
          </div>

          {/* Card 2: Don Bosco Values */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-[2px] border-slate-900 shadow-[4px_4px_0px_#1e293b] card-doodle-border-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-100 border border-slate-900 flex items-center justify-center text-pink-700 mb-3">
                <Heart size={22} />
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-1">
                Don Bosco Preventive System
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inspired by Don Bosco, education at St. Bede’s rests on the holy pillars of Reason, Religion, and Loving-Kindness—helping every young boy grow in wisdom and integrity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500">
              ✨ Character & Moral Values
            </div>
          </div>

          {/* Card 3: Sports Tradition */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-[2px] border-slate-900 shadow-[4px_4px_0px_#1e293b] card-doodle-border-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-slate-900 flex items-center justify-center text-blue-700 mb-3">
                <Trophy size={22} />
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-1">
                Cradle of Sporting Stars
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Celebrated across India as a cricket powerhouse. St. Bede’s has proudly shaped international cricketing icons including Ravichandran Ashwin and Dinesh Karthik.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500">
              🏏 Cricket & House Rua Pride
            </div>
          </div>

          {/* Card 4: BEDEX & Science */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-[2px] border-slate-900 shadow-[4px_4px_0px_#1e293b] card-doodle-border-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-slate-900 flex items-center justify-center text-emerald-700 mb-3">
                <Sparkles size={22} />
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 mb-1">
                BEDEX Science Exhibitions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The annual BEDEX exhibition stimulates young students' inventive minds, encouraging experimental models, green sustainability, and scientific curiosity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500">
              🔬 Innovation & Exploration
            </div>
          </div>

        </div>

        {/* Student's Personal Quote about School */}
        <div className="mt-10 bg-white rounded-2xl p-6 border-[2.5px] border-slate-900 shadow-[4px_4px_0px_#1e293b] flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-lime-200 border-2 border-slate-900 flex items-center justify-center text-xl shrink-0">
            👦🏽
          </div>
          <div>
            <p className="font-display font-bold text-xs sm:text-sm text-slate-900">
              "I am very proud to wear my yellow uniform and represent St. Bede's and Rua House in our studies and sports. Our teachers encourage us to explore, ask questions, and teach us the right way!"
            </p>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              — Heswanth . H (Fifth Standard / Std. V - Section B)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
