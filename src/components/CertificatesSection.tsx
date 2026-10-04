import React, { useState } from 'react';
import { CERTIFICATES, Certificate } from '../data/portfolioData';
import { HighlightBadge, DotCluster, DaisyDoodle } from './DoodleAssets';
import {
  Award,
  Calendar,
  ChevronRight,
  ExternalLink,
  Eye,
  FileCheck2,
  Filter,
  Flame,
  Lightbulb,
  Sparkles,
  Trophy,
} from 'lucide-react';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  onSelectCertificate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState<boolean>(false);

  const filteredCertificates =
    activeCategory === 'all'
      ? CERTIFICATES
      : CERTIFICATES.filter((cert) => cert.category === activeCategory);

  const quizQuestion = {
    question: "Heswanth's BEDEX Science Fair Question: Which form of clean energy comes from the heat inside the Earth?",
    options: ['Solar Energy', 'Geothermal Energy', 'Wind Energy', 'Hydro Energy'],
    correct: 1,
    explanation: 'Correct! Geothermal energy is renewable heat energy generated and stored within the Earth!',
  };

  const handleQuizSelect = (index: number) => {
    setSelectedQuizAnswer(index);
    setIsQuizAnswered(true);
  };

  return (
    <section
      id="certificates"
      className="relative bg-white text-slate-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b-[4px] border-slate-900"
    >
      {/* Hand-drawn Wavy Divider (Echoing the divider in Template 10100747.jpg) */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[98%] overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-white fill-current"
        >
          <path
            d="M0,0 C150,50 350,-20 500,30 C650,80 900,10 1200,40 L1200,60 L0,60 Z"
            fill="#FFFFFF"
            stroke="#1e293b"
            strokeWidth="3.5"
          />
        </svg>
      </div>

      {/* Decorative Doodles on White Base */}
      <div className="absolute top-10 right-8 pointer-events-none hidden sm:block">
        <DotCluster />
      </div>
      <div className="absolute bottom-10 left-8 pointer-events-none hidden sm:block">
        <DaisyDoodle size={56} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 border-b-2 border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HighlightBadge label="certificates & achievements" color="pink" />
              <span className="font-handwriting text-slate-500 text-sm hidden sm:inline">
                (Official St. Bede's Documents)
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Honors, Exhibition Merit & Milestones
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Verified certificates awarded to <strong>Heswanth . H</strong> at St. Bede's Anglo-Indian Higher Secondary School in Santhome, Chennai. Click any card to inspect the full certificate.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-300 self-start md:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All (3)' },
              { id: 'science', label: 'Science (BEDEX)' },
              { id: 'academic', label: 'Academics (78.3%)' },
              { id: 'milestone', label: 'Milestones' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Certificates Grid (Styled in high-impact doodle card format) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCertificate(cert)}
              className="group bg-[#FFFDF9] rounded-2xl border-[2.5px] border-slate-900 shadow-[5px_5px_0px_#1e293b] hover:shadow-[7px_7px_0px_#1e293b] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top Accent Strip */}
              <div
                className="h-2.5 w-full"
                style={{ backgroundColor: cert.accentColor }}
              />

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                
                {/* Year Stamp & Category */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-black text-xs px-2.5 py-1 bg-slate-100 border border-slate-900 rounded-md text-slate-800 shadow-[1.5px_1.5px_0px_#1e293b]">
                      {cert.date.slice(-4)}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 font-display">
                      <span>{cert.badgeEmoji}</span>
                      <span>{cert.categoryLabel}</span>
                    </span>
                  </div>

                  {/* Title & School */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-[11px] font-bold text-rose-600 uppercase tracking-wider mt-1">
                    {cert.schoolSub.split('•')[0]}
                  </p>

                  {/* Score Highlight if available */}
                  {cert.score && (
                    <div className="mt-3 inline-block px-2.5 py-1 bg-emerald-100 border border-emerald-400 rounded-lg text-xs font-display font-black text-emerald-800">
                      🏆 Distinction: {cert.score}
                    </div>
                  )}

                  {/* BEDEX Event Highlight */}
                  {cert.id === 'bedex-2025' && (
                    <div className="mt-3 inline-block px-2.5 py-1 bg-lime-100 border border-lime-400 rounded-lg text-xs font-display font-black text-lime-900">
                      🔬 BEDEX 2025 Science Fair
                    </div>
                  )}

                  {/* Brief description */}
                  <p className="text-xs text-slate-600 line-clamp-3 mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar size={13} />
                    <span>{cert.date}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-display font-bold text-slate-900 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <Eye size={14} className="text-blue-600" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Feature Box: BEDEX 2025 Science Project Highlight */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 via-lime-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border-[2.5px] border-slate-900 shadow-[5px_5px_0px_#1e293b]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-200 border border-slate-900 rounded-full text-xs font-display font-bold text-emerald-950">
                <Sparkles size={14} />
                <span>Featured School Exhibition Project</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900">
                BEDEX 2025: "Inspiring Minds to Inspire the Future Minds"
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                St. Bede's Annual Science Exhibition (<strong>BEDEX</strong>) is Chennai's hallmark platform where young students transform classroom science into exciting working models. Heswanth represented Class 4-B with exemplary enthusiasm, creativity, and scientific reasoning, earning him the prestigious Certificate of Merit.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Standard</span>
                  <span className="font-display font-bold text-slate-800">Class IV - Sec B</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Exhibition Date</span>
                  <span className="font-display font-bold text-slate-800">31st October 2025</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Recognition</span>
                  <span className="font-display font-bold text-emerald-700">Certificate of Merit</span>
                </div>
              </div>
            </div>

            {/* Quick interactive science trivia card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-5 border-[2px] border-slate-900 shadow-[3px_3px_0px_#1e293b]">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="text-amber-500" size={18} />
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-700">
                  Quick BEDEX Science Quiz
                </h4>
              </div>

              <p className="text-xs text-slate-800 font-semibold mb-3 leading-snug">
                {quizQuestion.question}
              </p>

              <div className="space-y-1.5">
                {quizQuestion.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuizSelect(i)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      selectedQuizAnswer === i
                        ? i === quizQuestion.correct
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold'
                          : 'bg-rose-100 border-rose-400 text-rose-900'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}. {opt}
                  </button>
                ))}
              </div>

              {isQuizAnswered && (
                <p className="mt-3 text-[11px] font-display font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  {quizQuestion.explanation}
                </p>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
