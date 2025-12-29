import React from 'react';

// Using SVG to simulate the leaf and banner design from the provided image
export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/img/logo.png" 
        alt="Toos Food Logo" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
