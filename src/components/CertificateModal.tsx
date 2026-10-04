import React, { useRef } from 'react';
import { Certificate } from '../data/portfolioData';
import { X, Printer, CheckCircle2, Award, Calendar, School, User } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border-[3px] border-slate-900 shadow-[8px_8px_0px_#1e293b] p-4 sm:p-8 my-auto overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-100 border border-slate-900 text-amber-800">
              <Award size={20} />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                Official School Certificate
              </span>
              <h3 className="text-sm sm:text-base font-display font-extrabold text-slate-900">
                {certificate.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-display font-bold rounded-lg border border-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print Certificate"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-slate-100 hover:bg-rose-100 hover:text-rose-600 rounded-full border border-slate-300 transition-colors cursor-pointer"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Ornate Printable Certificate Canvas */}
        <div
          ref={printRef}
          className="relative bg-[#FFFDF9] border-[4px] border-slate-800 rounded-2xl p-6 sm:p-10 shadow-inner overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(#e2e8f0 1px, transparent 1px), radial-gradient(#e2e8f0 1px, #FFFDF9 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px',
          }}
        >
          {/* Inner Ornate Gold/Navy Border */}
          <div className="absolute inset-2 border-[1.5px] border-amber-600/40 rounded-xl pointer-events-none" />
          <div className="absolute inset-3.5 border border-dashed border-amber-600/30 rounded-lg pointer-events-none" />

          {/* Watermark Crest */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
            <School size={300} />
          </div>

          {/* Certificate Content */}
          <div className="relative z-10 text-center space-y-4">
            
            {/* School Header */}
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-500 mb-2 shadow-xs">
                <span className="text-xl">🏛️</span>
              </div>
              <h2 className="font-display font-black text-lg sm:text-2xl text-slate-900 uppercase tracking-tight">
                {certificate.school}
              </h2>
              <p className="font-display text-xs sm:text-sm font-semibold text-rose-700 tracking-wider">
                {certificate.schoolSub}
              </p>
              <p className="font-handwriting text-slate-500 text-xs sm:text-sm italic mt-0.5">
                "Teach us the Right Way"
              </p>
            </div>

            {/* Certificate Big Title Banner */}
            <div className="py-2">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-amber-100 rounded-lg -rotate-1 border border-amber-300" />
                <h3 className="relative font-display font-black text-xl sm:text-3xl text-slate-900 px-6 py-1 tracking-wide uppercase">
                  {certificate.id === 'bedex-2025' ? 'CERTIFICATE OF MERIT' : 'MERIT CERTIFICATE'}
                </h3>
              </div>
              {certificate.id === 'bedex-2025' && (
                <p className="font-display font-bold text-emerald-700 text-xs sm:text-sm mt-1 uppercase tracking-widest">
                  BEDEX 2025 • INSPIRING MINDS TO INSPIRE THE FUTURE MINDS
                </p>
              )}
            </div>

            {/* Recipient Details */}
            <div className="max-w-xl mx-auto space-y-2 py-1">
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                This is proudly awarded to:
              </p>
              <div className="py-1">
                <span className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 border-b-2 border-slate-900 px-6 pb-1 inline-block">
                  {certificate.studentName}
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 pt-1">
                <span className="bg-amber-100/80 px-3 py-1 rounded-md border border-amber-200">
                  Standard: <strong>{certificate.std}</strong>
                </span>
                <span className="bg-amber-100/80 px-3 py-1 rounded-md border border-amber-200">
                  Section: <strong>{certificate.section}</strong>
                </span>
                {certificate.house && (
                  <span className="bg-blue-100/80 text-blue-900 px-3 py-1 rounded-md border border-blue-200">
                    House: <strong>{certificate.house}</strong>
                  </span>
                )}
                {certificate.score && (
                  <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-md border border-emerald-300 font-bold">
                    Secured: <strong>{certificate.score}</strong>
                  </span>
                )}
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="max-w-xl mx-auto py-2">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                "{certificate.description}"
              </p>
            </div>

            {/* Golden Seal & Date */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 max-w-xl mx-auto">
              
              {/* Date */}
              <div className="text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Date of Issue
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-slate-800">
                  {certificate.date}
                </span>
              </div>

              {/* Gold Ribbon Seal Stamp */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 border-2 border-amber-700 flex items-center justify-center shadow-md relative">
                  <div className="w-11 h-11 rounded-full border border-dashed border-amber-900 flex items-center justify-center text-center">
                    <span className="text-[9px] font-display font-black text-amber-950 uppercase leading-none">
                      VERIFIED<br />MERIT
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Verification */}
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  Status
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <CheckCircle2 size={12} /> Verified
                </span>
              </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto pt-6">
              {certificate.signatures.map((sig, i) => (
                <div key={i} className="text-center">
                  <div className="h-9 flex items-end justify-center pb-1">
                    <span className="font-handwriting text-lg text-slate-700 font-bold italic rotate-[-4deg]">
                      {sig.name}
                    </span>
                  </div>
                  <div className="w-full border-t border-slate-400 pt-1">
                    <p className="text-[11px] font-display font-bold text-slate-800 uppercase tracking-wider">
                      {sig.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <p className="flex items-center gap-1">
            <span>Official Academic Record</span>
            <span>•</span>
            <span>St. Bede's Anglo-Indian Hr. Sec. School, Chennai</span>
          </p>
          <button
            onClick={onClose}
            className="font-display font-bold text-slate-800 hover:text-slate-900 underline cursor-pointer"
          >
            Back to Portfolio
          </button>
        </div>

      </div>
    </div>
  );
};
