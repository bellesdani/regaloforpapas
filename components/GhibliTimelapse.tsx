
import React from 'react';

interface GhibliTimelapseProps {
  imageUrl: string;
}

const GhibliTimelapse: React.FC<GhibliTimelapseProps> = ({ imageUrl }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* The Image - Clearer and sharper */}
      <div 
        className="w-full h-full bg-cover bg-center transition-all duration-100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Minimal Vignette instead of heavy white blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      
      {/* Subtle Flash effect on transition */}
      <div className="absolute inset-0 bg-white/5 animate-pulse pointer-events-none"></div>
    </div>
  );
};

export default GhibliTimelapse;
