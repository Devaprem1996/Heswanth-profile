import React, { useState, useRef, useEffect } from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { CurvedNameBanner, DaisyDoodle } from './DoodleAssets';
import { Camera, Upload, Sparkles, RefreshCw, CheckCircle2, Image as ImageIcon } from 'lucide-react';

interface StudentPortraitProps {
  customImageSrc?: string | null;
  onImageChange?: (url: string | null) => void;
}

export const StudentPortrait: React.FC<StudentPortraitProps> = ({
  customImageSrc,
  onImageChange,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    return customImageSrc || localStorage.getItem('heswanth_photo') || null;
  });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if image file exists in public directory on load
  useEffect(() => {
    if (!photoUrl) {
      const candidatePaths = [
        '/image/Heshwanth.png',
        '/Heshwanth.png',
        '/Smiling Schoolboy in Yellow Uniform.png',
        '/smiling-schoolboy.png',
        '/heswanth.png',
        '/boy.png',
      ];

      candidatePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          setPhotoUrl(path);
          localStorage.setItem('heswanth_photo', path);
          if (onImageChange) onImageChange(path);
        };
      });
    }
  }, [photoUrl, onImageChange]);

  // Support pasting image from clipboard (Ctrl+V)
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            if (blob) {
              const reader = new FileReader();
              reader.onload = (event) => {
                const result = event.target?.result as string;
                setPhotoUrl(result);
                localStorage.setItem('heswanth_photo', result);
                if (onImageChange) onImageChange(result);
              };
              reader.readAsDataURL(blob);
            }
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [onImageChange]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('heswanth_photo', result);
        if (onImageChange) onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        localStorage.setItem('heswanth_photo', result);
        if (onImageChange) onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(null);
    localStorage.removeItem('heswanth_photo');
    if (onImageChange) onImageChange(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-2 sm:py-4 select-none">
      {/* Curved Name Banner above portrait matching Template 10100747.jpg */}
      <CurvedNameBanner
        name={STUDENT_INFO.shortName}
        className="mb-[-14px] z-30 transform hover:scale-105 transition-transform"
      />

      {/* Main Organic Cutout Container */}
      <div
        className="relative group"
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {/* Offset background shadow blob (light blue/cyan like template) */}
        <div
          className={`absolute -inset-2 bg-[#67e8f9] rounded-[48%_52%_45%_55%/52%_46%_54%_48%] -rotate-3 transition-transform ${
            isDragging ? 'scale-105 rotate-0' : 'group-hover:rotate-0'
          }`}
          style={{ border: '2.5px solid #1e293b' }}
        />

        {/* Inner Frame */}
        <div
          onClick={() => !photoUrl && fileInputRef.current?.click()}
          className={`relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-[50%_50%_48%_52%/48%_52%_48%_52%] border-[3.5px] border-slate-900 shadow-2xl flex items-center justify-center transition-all duration-300 ${
            photoUrl
              ? 'bg-gradient-to-b from-sky-100 via-white to-amber-50'
              : 'bg-gradient-to-b from-amber-50 to-white cursor-pointer hover:border-blue-600'
          } ${isDragging ? 'ring-4 ring-blue-500 scale-102' : ''}`}
        >
          {photoUrl ? (
            /* REAL PHOTOGRAPH OF THE STUDENT (Smiling Schoolboy in Yellow Uniform) */
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
              <img
                src={photoUrl}
                alt="Heswanth . H - Smiling Schoolboy in Yellow Uniform"
                className="w-full h-full object-contain object-top drop-shadow-md transition-transform duration-300 hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 bg-emerald-700/90 text-white text-[10px] font-display font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm backdrop-blur-xs">
                <CheckCircle2 size={11} />
                <span>Heswanth Photo Active</span>
              </div>

              {/* Action buttons */}
              <div className="absolute top-3 right-3 flex gap-1.5 z-30">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  title="Change photo"
                  className="p-1.5 rounded-full bg-white/95 text-slate-800 hover:bg-amber-100 hover:text-amber-800 shadow-md border border-slate-300 transition-all hover:scale-110 cursor-pointer"
                >
                  <Camera size={14} />
                </button>
                <button
                  onClick={resetPhoto}
                  title="Remove photo"
                  className="p-1.5 rounded-full bg-white/95 text-slate-800 hover:bg-rose-100 hover:text-rose-700 shadow-md border border-slate-300 transition-all hover:scale-110 cursor-pointer"
                >
                  <RefreshCw size={14} />
                </button>
              </div>
            </div>
          ) : (
            /* CLEAN PHOTOGRAPHIC PHOTO UPLOADER (NO ANIME / NO CARTOON) */
            <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-amber-100 border-[2.5px] border-slate-900 flex items-center justify-center text-amber-800 mb-3 shadow-[2px_2px_0px_#1e293b] group-hover:scale-105 transition-transform">
                <Camera size={36} />
              </div>

              <h4 className="font-display font-extrabold text-base text-slate-900 leading-snug">
                Click to Add Heswanth's Photo
              </h4>

              <p className="text-xs text-slate-600 mt-1 max-w-[200px] leading-relaxed">
                Please select <strong>Smiling Schoolboy in Yellow Uniform.png</strong> to display the real photo here.
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-display font-bold rounded-xl border-[2px] border-slate-900 shadow-[3px_3px_0px_#1e293b] flex items-center gap-1.5 transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#1e293b] cursor-pointer"
              >
                <Upload size={14} />
                <span>Select Boy Image</span>
              </button>

              <p className="text-[10px] text-slate-400 mt-2 font-medium">
                Or drag & drop / paste (Ctrl+V) anywhere
              </p>
            </div>
          )}

          {/* Drag Overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-blue-600/90 backdrop-blur-xs flex flex-col items-center justify-center text-white p-4 text-center z-40">
              <Upload size={36} className="animate-bounce mb-2" />
              <p className="font-display font-bold text-sm uppercase tracking-wider">
                Drop Smiling Schoolboy in Yellow Uniform.png here!
              </p>
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Decorative Daisy Flowers flanking portrait matching template */}
        <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 z-20 hover:rotate-12 transition-transform">
          <DaisyDoodle size={52} />
        </div>
        <div className="absolute -right-6 sm:-right-8 top-12 z-20 hover:-rotate-12 transition-transform">
          <DaisyDoodle size={48} />
        </div>

        {/* Pink/Salmon Wavy Ribbon underneath for 2026 & Fifth Standard */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 w-max max-w-[95%]">
          <div className="relative">
            <div className="relative bg-[#FDA4AF] border-[2.5px] border-slate-900 px-4 sm:px-6 py-1.5 rounded-sm shadow-[3px_3px_0px_#1e293b]">
              <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-1 bg-white/60 pointer-events-none" />
              <p className="relative font-display font-extrabold text-xs sm:text-sm text-slate-900 tracking-wider uppercase text-center flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles size={14} className="text-amber-800 animate-pulse" />
                <span>STD. V • 2026 YOUNG SCIENTIST</span>
                <Sparkles size={14} className="text-amber-800 animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Info below ribbon */}
      <div className="mt-6 text-center">
        <p className="font-handwriting text-slate-800 text-sm sm:text-base flex items-center justify-center gap-1.5 font-bold">
          <span>St. Bede's Anglo-Indian Hr. Sec. School</span>
          <span className="text-slate-400">✦</span>
          <span>House Rua</span>
        </p>

        {/* Floating Quick Upload Action Button if no photo is loaded */}
        {!photoUrl && (
          <div className="mt-2.5">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-50 text-blue-700 text-xs font-display font-bold rounded-full border border-blue-400 shadow-sm transition-all cursor-pointer hover:shadow-md"
            >
              <Upload size={13} />
              <span>Click to display <strong>Smiling Schoolboy in Yellow Uniform.png</strong></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
