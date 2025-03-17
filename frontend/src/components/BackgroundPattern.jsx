import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Network-like pattern */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 1000" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.5 }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* First set of diagonal lines (top-right to bottom-left) */}
        <g fill="none" stroke="url(#grad1)" strokeWidth="0.8" filter="url(#glow)">
          {Array.from({ length: 25 }).map((_, i) => (
            <path
              key={i}
              d={`M${1000 - i * 40},0 Q${700 - i * 20},${400 + i * 15} ${400 - i * 30},${1000}`}
            />
          ))}
        </g>
        
        {/* Second set of diagonal lines (perpendicular) */}
        <g fill="none" stroke="url(#grad1)" strokeWidth="0.5" filter="url(#glow)" opacity="0.5">
          {Array.from({ length: 15 }).map((_, i) => (
            <path
              key={i + 100}
              d={`M${0 + i * 65},0 Q${300 + i * 25},${500 - i * 10} ${1000},${800 - i * 50}`}
            />
          ))}
        </g>
      </svg>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          opacity: 0.5
        }}
      />
      
      {/* Subtle glow spots */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-teal-500/5 filter blur-3xl"></div>
      <div className="absolute bottom-40 left-40 w-80 h-80 rounded-full bg-blue-500/5 filter blur-3xl"></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
    </div>
  );
};

export default BackgroundPattern; 
