import React, { useState } from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { Award, BookOpen, Menu, Printer, School, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCertificates: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCertificates }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-[2.5px] border-slate-900 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo / Student Name */}
        <div
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#FACC15] border-2 border-slate-900 flex items-center justify-center font-display font-black text-slate-900 shadow-[2px_2px_0px_#1e293b] group-hover:rotate-6 transition-transform">
            H
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-base sm:text-lg text-slate-900 tracking-tight">
                {STUDENT_INFO.fullName}
              </span>
              <span className="text-[10px] font-display font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-900 rounded border border-emerald-300">
                Std. V (2026)
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-semibold truncate max-w-[200px] sm:max-w-none">
              St. Bede's Anglo-Indian Hr. Sec. School
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollTo('home')}
            className="text-xs font-display font-bold text-slate-700 hover:text-slate-900 cursor-pointer transition-colors"
          >
            Profile Home
          </button>
          <button
            onClick={() => scrollTo('certificates')}
            className="text-xs font-display font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Certificates</span>
            <span className="w-5 h-5 rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center font-bold">
              3
            </span>
          </button>
          <button
            onClick={() => scrollTo('school')}
            className="text-xs font-display font-bold text-slate-700 hover:text-slate-900 cursor-pointer transition-colors"
          >
            About St. Bede's
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={handlePrint}
            title="Print Portfolio / Save as PDF"
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-display font-bold rounded-lg border border-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer size={14} />
            <span>Print</span>
          </button>

          <button
            onClick={onOpenCertificates}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-display font-bold rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#1e293b] flex items-center gap-1.5 transition-all cursor-pointer hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <Award size={14} className="text-amber-400" />
            <span>View Certificates</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handlePrint}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-300 cursor-pointer"
            title="Print"
          >
            <Printer size={16} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2">
          <button
            onClick={() => scrollTo('home')}
            className="w-full text-left py-2 px-3 text-sm font-display font-bold text-slate-800 rounded-lg hover:bg-slate-100"
          >
            Profile Home
          </button>
          <button
            onClick={() => scrollTo('certificates')}
            className="w-full text-left py-2 px-3 text-sm font-display font-bold text-slate-800 rounded-lg hover:bg-slate-100 flex items-center justify-between"
          >
            <span>Certificates & Honors</span>
            <span className="px-2 py-0.5 bg-pink-100 text-pink-700 text-xs rounded-full font-bold">
              3 Certificates
            </span>
          </button>
          <button
            onClick={() => scrollTo('school')}
            className="w-full text-left py-2 px-3 text-sm font-display font-bold text-slate-800 rounded-lg hover:bg-slate-100"
          >
            About St. Bede's (Chennai)
          </button>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertificates();
              }}
              className="w-full py-2 bg-slate-900 text-white rounded-lg font-display font-bold text-xs flex items-center justify-center gap-2"
            >
              <Award size={15} className="text-amber-400" />
              <span>Inspect Official Certificates</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
