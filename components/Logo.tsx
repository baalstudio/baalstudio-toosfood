import React from 'react';

// Using SVG to simulate the leaf and banner design from the provided image
export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
        <div className="relative flex items-center justify-center">
            {/* Leaves */}
            <svg viewBox="0 0 100 80" className="h-full w-auto absolute -top-4 left-1/2 transform -translate-x-1/2 z-0" style={{ height: '140%' }}>
                <path d="M50 80 C 50 80 20 60 20 20 C 20 0 50 0 50 40 C 50 0 80 0 80 20 C 80 60 50 80 50 80" fill="#4ade80" stroke="#008542" strokeWidth="2" />
                <path d="M50 80 C 50 80 35 65 35 35 C 35 10 50 20 50 50" fill="#22c55e" />
                <path d="M50 80 C 50 80 65 65 65 35 C 65 10 50 20 50 50" fill="#22c55e" />
            </svg>
            
            {/* Banner Background */}
            <div className="relative z-10 bg-gradient-to-b from-toos-green to-toos-dark px-6 py-2 rounded-lg border-y-4 border-toos-gold shadow-lg transform skew-x-[-10deg]">
                <span className="block text-white font-black text-2xl tracking-tighter transform skew-x-[10deg] drop-shadow-md">
                    توس فـود
                </span>
            </div>
        </div>
    </div>
  );
};