import React from 'react';

interface GhibliTimelapseProps {
  imageUrl: string;
}

const GhibliTimelapse: React.FC<GhibliTimelapseProps> = ({ imageUrl }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      
      {/* Background image with real fade */}
      <div
        key={imageUrl}
        className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-in"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />

      {/* Very soft flash (optional, remove if you want it calmer) */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />
    </div>
  );
};

export default GhibliTimelapse;
