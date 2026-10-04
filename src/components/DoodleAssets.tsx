import React from 'react';

export const DaisyDoodle: React.FC<{ className?: string; size?: number; petalColor?: string }> = ({
  className = '',
  size = 48,
  petalColor = '#ffffff',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`select-none pointer-events-none drop-shadow-sm ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 8 rounded petals */}
      <g stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" fill={petalColor}>
        <ellipse cx="50" cy="20" rx="9" ry="17" />
        <ellipse cx="50" cy="80" rx="9" ry="17" />
        <ellipse cx="20" cy="50" rx="17" ry="9" />
        <ellipse cx="80" cy="50" rx="17" ry="9" />
        <ellipse cx="28" cy="28" rx="10" ry="18" transform="rotate(-45 28 28)" />
        <ellipse cx="72" cy="28" rx="10" ry="18" transform="rotate(45 72 28)" />
        <ellipse cx="28" cy="72" rx="10" ry="18" transform="rotate(45 28 72)" />
        <ellipse cx="72" cy="72" rx="10" ry="18" transform="rotate(-45 72 72)" />
      </g>
      {/* Center circle */}
      <circle cx="50" cy="50" r="14" fill="#FACC15" stroke="#1e293b" strokeWidth="3" />
      {/* Cute little center face/dots */}
      <circle cx="46" cy="48" r="1.5" fill="#1e293b" />
      <circle cx="54" cy="48" r="1.5" fill="#1e293b" />
      <path d="M47 53 Q50 56 53 53" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export const SwirlDoodle: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#38bdf8',
  size = 60,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 75 C 20 40, 45 15, 75 25 C 95 32, 95 65, 75 75 C 60 82, 45 70, 48 55 C 50 42, 65 42, 65 52"
        fill="none"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M20 75 C 20 40, 45 15, 75 25 C 95 32, 95 65, 75 75 C 60 82, 45 70, 48 55 C 50 42, 65 42, 65 52"
        fill="none"
        stroke="#1e293b"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SquiggleArrow: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="60"
      height="45"
      viewBox="0 0 70 50"
      className={`select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 25 Q 20 5, 35 25 T 60 20"
        stroke="#1e293b"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 12 L63 20 L52 28"
        stroke="#1e293b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export const DotCluster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 50 50"
      className={`select-none pointer-events-none opacity-80 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="14" r="3.5" stroke="#1e293b" strokeWidth="2" fill="#ffffff" />
      <circle cx="28" cy="10" r="2.5" stroke="#1e293b" strokeWidth="2" fill="#ffffff" />
      <circle cx="38" cy="22" r="3" stroke="#1e293b" strokeWidth="2" fill="#ffffff" />
      <circle cx="16" cy="30" r="2.5" stroke="#1e293b" strokeWidth="2" fill="#ffffff" />
      <circle cx="32" cy="36" r="3.5" stroke="#1e293b" strokeWidth="2" fill="#ffffff" />
      <circle cx="44" cy="38" r="2" stroke="#1e293b" strokeWidth="1.5" fill="#ffffff" />
    </svg>
  );
};

export const CoilDoodle: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="45"
      height="25"
      viewBox="0 0 60 30"
      className={`select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 5 15 C 8 2, 18 2, 18 15 C 18 28, 28 28, 28 15 C 28 2, 38 2, 38 15 C 38 28, 48 28, 48 15 C 48 2, 58 2, 58 15"
        stroke="#1e293b"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const WavyLineDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#38bdf8',
}) => {
  return (
    <svg
      width="18"
      height="45"
      viewBox="0 0 25 60"
      className={`select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 12 5 Q 22 18 12 30 T 12 55"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 12 5 Q 22 18 12 30 T 12 55"
        stroke="#1e293b"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const CurvedNameBanner: React.FC<{ name: string; className?: string }> = ({
  name,
  className = '',
}) => {
  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <svg
        viewBox="0 0 320 85"
        className="w-full max-w-[280px] sm:max-w-[320px] overflow-visible"
      >
        <defs>
          <path id="curve" d="M 20,70 Q 160,5 300,70" />
        </defs>
        {/* Shadow text */}
        <text
          className="font-display font-black text-2xl sm:text-3xl tracking-wide select-none"
          fill="#1e293b"
          dy="4"
          dx="2"
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {name.toLowerCase()}
          </textPath>
        </text>
        {/* Main white text with black stroke like the template */}
        <text
          className="font-display font-black text-2xl sm:text-3xl tracking-wide select-none"
          fill="#ffffff"
          stroke="#1e293b"
          strokeWidth="3.5"
          paintOrder="stroke fill"
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {name.toLowerCase()}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export const HighlightBadge: React.FC<{
  label: string;
  color?: 'blue' | 'pink' | 'yellow' | 'green';
  className?: string;
}> = ({ label, color = 'blue', className = '' }) => {
  const bgColors = {
    blue: 'bg-[#60A5FA]',
    pink: 'bg-[#F472B6]',
    yellow: 'bg-[#FDE047]',
    green: 'bg-[#86EFAC]',
  };

  return (
    <div className={`inline-block relative ${className}`}>
      <div
        className={`absolute inset-0 -skew-x-3 rounded-full ${bgColors[color]} -z-0 opacity-90`}
      />
      <h3 className="relative z-10 font-display font-bold text-lg sm:text-xl text-slate-900 px-3.5 py-0.5 tracking-tight">
        {label}
      </h3>
    </div>
  );
};
