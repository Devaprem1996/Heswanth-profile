import React from 'react';
import { STUDENT_INFO, TIMELINE, CERTIFICATES } from '../data/portfolioData';
import { StudentPortrait } from './StudentPortrait';
import {
  DaisyDoodle,
  SwirlDoodle,
  SquiggleArrow,
  DotCluster,
  HighlightBadge,
  CoilDoodle,
  WavyLineDoodle,
} from './DoodleAssets';
import { Award, BookOpen, GraduationCap, MapPin, School, Sparkles, Trophy, Calendar, CheckCircle2 } from 'lucide-react';

interface HeroTemplateSectionProps {
  onViewCertificates: () => void;
  onExploreSchool: () => void;
  onSelectCertificate?: (cert: any) => void;
}

export const HeroTemplateSection: React.FC<HeroTemplateSectionProps> = ({
  onViewCertificates,
  onExploreSchool,
  onSelectCertificate,
}) => {
  return (
    <section
      id="home"
      className="relative bg-[#E0F2FE] py-6 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-8 flex justify-center"
    >
      {/* Outer Poster Frame matching 10100747.jpg */}
      <div className="w-full max-w-4xl bg-[#A6E064] rounded-3xl border-[3.5px] border-slate-900 shadow-[8px_10px_0px_#1e293b] overflow-hidden relative">
        
        {/* ================= TOP SECTION (LIME GREEN CANVAS) ================= */}
        <div className="relative p-5 sm:p-8 lg:p-10 pb-8 overflow-hidden">
          
          {/* Top Left Swirl Ribbon Doodle (Matching Template) */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-0 pointer-events-none">
            <SwirlDoodle color="#FDA4AF" size={75} />
          </div>

          {/* Top Right Yellow Organic Blob with Dots & Wavy Line (Matching Template) */}
          <div className="absolute -top-4 -right-4 w-44 h-40 bg-[#FEF08A] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-[2.5px] border-slate-900 -z-0 pointer-events-none overflow-hidden flex flex-col items-center justify-center p-4">
            <div className="absolute top-6 right-6">
              <DotCluster />
            </div>
            <div className="absolute bottom-4 left-6">
              <svg width="40" height="20" viewBox="0 0 50 20" fill="none">
                <path d="M 5 10 Q 15 2 25 10 T 45 10" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* TOP HEADER: EDUCATION (2-Column Grid matching Template 10100747.jpg) */}
          <div className="relative z-10 max-w-2xl mb-6">
            <div className="flex items-center gap-2 mb-3">
              <HighlightBadge label="education" color="blue" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-900">
              {/* Left Column: 2026 Current Std. V */}
              <div className="flex items-start gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border-[2px] border-slate-900 shadow-[2px_2px_0px_#1e293b]">
                <span className="font-display font-black text-xs px-2 py-1 bg-[#86EFAC] text-emerald-950 rounded border border-slate-900 shadow-xs shrink-0">
                  2026
                </span>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-slate-900 leading-tight">
                    Fifth Standard (Std. V - Sec B)
                  </h4>
                  <p className="text-[10px] font-bold text-slate-600">
                    St. Bede's Anglo-Indian Hr. Sec. School
                  </p>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                    Current 2026 scholar, House Rua, STEM models & mathematics.
                  </p>
                </div>
              </div>

              {/* Right Column: 2025 Std. IV Distinction */}
              <div className="flex items-start gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border-[2px] border-slate-900 shadow-[2px_2px_0px_#1e293b]">
                <span className="font-display font-black text-xs px-2 py-1 bg-[#FDE047] text-amber-950 rounded border border-slate-900 shadow-xs shrink-0">
                  2025
                </span>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-slate-900 leading-tight">
                    Std. IV - First Terminal (78.3%)
                  </h4>
                  <p className="text-[10px] font-bold text-slate-600">
                    BEDEX 2025 Science Fair Merit
                  </p>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                    Won Certificate of Merit for scientific curiosity and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MIDDLE THREE-COLUMN COMPOSITION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 my-4 sm:my-8">
            
            {/* LEFT: CONTACT & STUDENT DETAILS (Matching Template 'contact') */}
            <div className="lg:col-span-3 flex flex-col gap-2 order-2 lg:order-1">
              <div className="relative">
                <HighlightBadge label="contact" color="pink" className="mb-2" />
                
                {/* Hand drawn bracket and contact info */}
                <div className="relative pl-3 border-l-[2.5px] border-slate-900 py-1 space-y-1.5 text-xs text-slate-900 font-medium">
                  <p className="font-bold text-slate-950 text-xs sm:text-sm">
                    {STUDENT_INFO.fullName}
                  </p>
                  <p className="text-[11px] text-slate-800 flex items-center gap-1">
                    <span className="font-bold">Grade:</span> Std. V - Sec B (2026)
                  </p>
                  <p className="text-[11px] text-slate-800 flex items-center gap-1">
                    <span className="font-bold">House:</span> Rua House
                  </p>
                  <p className="text-[11px] text-slate-800 leading-tight">
                    Santhome, Chennai - 600 004
                  </p>
                  <p className="text-[11px] font-bold text-blue-900 truncate">
                    {STUDENT_INFO.schoolName}
                  </p>
                </div>

                {/* Dotted cluster beneath contact */}
                <div className="mt-3 ml-2">
                  <DotCluster />
                </div>
              </div>
            </div>

            {/* CENTER: THE MAIN HERO PORTRAIT (Matching Template Center) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 relative">
              
              {/* The Student Portrait Frame */}
              <StudentPortrait />

              {/* Black squiggly arrow pointing directly to skills (Matching Template) */}
              <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none z-30">
                <SquiggleArrow />
              </div>

              {/* Coil doodle under ribbon on right (Matching Template) */}
              <div className="hidden lg:block absolute right-6 -bottom-3 pointer-events-none z-30">
                <CoilDoodle />
              </div>
            </div>

            {/* RIGHT: SKILLS WITH CIRCLE BULLETS (Matching Template 'skills') */}
            <div className="lg:col-span-3 flex flex-col gap-2 order-3 relative">
              {/* Blue Wavy Ribbon next to skills */}
              <div className="hidden lg:block absolute -left-6 top-8 pointer-events-none">
                <WavyLineDoodle color="#38BDF8" />
              </div>

              <div>
                <HighlightBadge label="skills" color="pink" className="mb-2" />

                <ul className="space-y-2 text-xs font-display font-bold text-slate-900">
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-white inline-block shrink-0" />
                    <span>Science & BEDEX Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-white inline-block shrink-0" />
                    <span>Mathematics (78.3% Score)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-white inline-block shrink-0" />
                    <span>Model Crafting & STEM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-white inline-block shrink-0" />
                    <span>House Rua Sports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-white inline-block shrink-0" />
                    <span>Project Presentation</span>
                  </li>
                </ul>
              </div>

              {/* Top right daisy doodle */}
              <div className="hidden sm:block absolute -top-8 -right-4 pointer-events-none">
                <DaisyDoodle size={42} />
              </div>
            </div>

          </div>

          {/* ================= MIDDLE BOTTOM: ABOUT ME (Matching Template) ================= */}
          <div className="relative z-10 max-w-2xl mx-auto mt-6 pt-4">
            <div className="flex flex-col sm:flex-row items-start gap-4 bg-white/90 backdrop-blur-xs p-5 rounded-2xl border-[2.5px] border-slate-900 shadow-[4px_4px_0px_#1e293b]">
              
              {/* Badge with doodle underline */}
              <div className="shrink-0">
                <HighlightBadge label="about" color="yellow" />
                <div className="flex items-center gap-1 font-display font-black text-slate-900 text-lg mt-0.5 ml-1">
                  <span>═</span>
                  <span>me</span>
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {STUDENT_INFO.aboutBio}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-600 font-bold">
                  <span className="text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 size={13} /> 2026 Academic Year
                  </span>
                  <span>•</span>
                  <span className="text-blue-800 flex items-center gap-1">
                    <School size={13} /> St. Bede's Anglo-Indian Hr. Sec. School
                  </span>
                  <span>•</span>
                  <span className="text-rose-700 flex items-center gap-1">
                    <Trophy size={13} /> House Rua
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: EXPERIENCE / CERTIFICATES (WHITE BASE) ================= */}
        <div className="relative bg-white border-t-[3.5px] border-slate-900 p-5 sm:p-8 lg:p-10">
          
          {/* Swirl Doodle on Right Side (Matching Template) */}
          <div className="absolute top-4 right-4 pointer-events-none">
            <SwirlDoodle color="#38BDF8" size={80} />
          </div>

          {/* Yellow Blob on Bottom Left (Matching Template) */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FEF08A] rounded-full border-[2.5px] border-slate-900 -z-0 pointer-events-none" />

          {/* Section Header: Experience / Achievements */}
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div>
              <HighlightBadge label="experience & achievements" color="green" />
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Academic timeline, verified merit certificates & school milestones.
              </p>
            </div>

            <div className="hidden sm:block">
              <DotCluster />
            </div>
          </div>

          {/* 4 Cards in 2x2 Grid Matching Template 10100747.jpg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
            
            {/* Card 1: 2026 - Current Fifth Standard */}
            <div className="flex gap-3 items-start p-3.5 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border-[2px] border-slate-900 shadow-[3px_3px_0px_#1e293b] transition-all">
              <span className="font-display font-black text-xs px-2.5 py-1 bg-[#86EFAC] text-emerald-950 rounded-md border border-slate-900 shadow-xs shrink-0">
                2026
              </span>
              <div>
                <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight">
                  Fifth Standard (Std. V - Sec B)
                </h4>
                <p className="text-xs font-semibold text-slate-600">
                  St. Bede's Anglo-Indian Hr. Sec. School
                </p>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Continuing high academic performance, mathematics excellence, and active Rua House leadership.
                </p>
              </div>
            </div>

            {/* Card 2: 2025 - BEDEX 2025 Science Fair Certificate */}
            <div
              onClick={() => onSelectCertificate && onSelectCertificate(CERTIFICATES[0])}
              className="flex gap-3 items-start p-3.5 bg-slate-50 hover:bg-amber-50 rounded-xl border-[2px] border-slate-900 shadow-[3px_3px_0px_#1e293b] transition-all cursor-pointer group"
            >
              <span className="font-display font-black text-xs px-2.5 py-1 bg-[#FDA4AF] text-rose-950 rounded-md border border-slate-900 shadow-xs shrink-0">
                2025
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                    BEDEX 2025 Science Fair Merit
                  </h4>
                  <Award size={14} className="text-amber-500" />
                </div>
                <p className="text-xs font-semibold text-slate-600">
                  Certificate of Merit • 31-10-2025
                </p>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Awarded for scientific curiosity and creative innovation in Std. IV - Sec B. <span className="text-blue-600 underline font-bold">Inspect Certificate →</span>
                </p>
              </div>
            </div>

            {/* Card 3: 2025 - First Terminal Examination 78.3% */}
            <div
              onClick={() => onSelectCertificate && onSelectCertificate(CERTIFICATES[1])}
              className="flex gap-3 items-start p-3.5 bg-slate-50 hover:bg-amber-50 rounded-xl border-[2px] border-slate-900 shadow-[3px_3px_0px_#1e293b] transition-all cursor-pointer group"
            >
              <span className="font-display font-black text-xs px-2.5 py-1 bg-[#FDE047] text-amber-950 rounded-md border border-slate-900 shadow-xs shrink-0">
                2025
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                    First Terminal Merit Honors (78.3%)
                  </h4>
                  <Trophy size={14} className="text-amber-500" />
                </div>
                <p className="text-xs font-semibold text-slate-600">
                  Std. IV - Sec B • House Rua • 11-10-2025
                </p>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Secured top academic distinction of 78.3% in terminal examinations. <span className="text-blue-600 underline font-bold">Inspect Certificate →</span>
                </p>
              </div>
            </div>

            {/* Card 4: 2022 - UKG Graduation */}
            <div
              onClick={() => onSelectCertificate && onSelectCertificate(CERTIFICATES[2])}
              className="flex gap-3 items-start p-3.5 bg-slate-50 hover:bg-blue-50 rounded-xl border-[2px] border-slate-900 shadow-[3px_3px_0px_#1e293b] transition-all cursor-pointer group"
            >
              <span className="font-display font-black text-xs px-2.5 py-1 bg-[#93C5FD] text-blue-950 rounded-md border border-slate-900 shadow-xs shrink-0">
                2022
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-display font-extrabold text-sm text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                    UKG Graduation Certificate of Merit
                  </h4>
                  <GraduationCap size={14} className="text-blue-500" />
                </div>
                <p className="text-xs font-semibold text-slate-600">
                  St. Bede's Kindergarten • 25-04-2022
                </p>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Completed foundational kindergarten with merit honors. <span className="text-blue-600 underline font-bold">Inspect Certificate →</span>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Dot Cluster and Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 relative z-10">
            <div className="flex items-center gap-2">
              <DotCluster />
              <span className="font-handwriting text-slate-600 text-xs sm:text-sm font-bold">
                "Teach us the Right Way" — St. Bede's Anglo-Indian Hr. Sec. School
              </span>
            </div>

            <button
              onClick={onViewCertificates}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] flex items-center gap-1.5 transition-all cursor-pointer hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <Award size={14} className="text-amber-400" />
              <span>Open Detailed Certificate Gallery</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
