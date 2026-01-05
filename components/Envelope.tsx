
import React from 'react';

interface EnvelopeProps {
  onClick: () => void;
  isAnimating: boolean;
}

const Envelope: React.FC<EnvelopeProps> = ({ onClick, isAnimating }) => {
  return (
    <div 
      onClick={!isAnimating ? onClick : undefined}
      className={`
        relative w-72 h-48 cursor-pointer transition-all duration-700 ease-in-out
        ${isAnimating ? 'scale-150 rotate-3 opacity-0' : 'hover:scale-105 active:scale-95'}
        float
      `}
    >
      {/* Envelope Body */}
      <div className="absolute inset-0 bg-[#fdfaf1] border-2 border-[#e6d5b8] shadow-2xl rounded-sm overflow-hidden">
        {/* Seal Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-800 rounded-full flex items-center justify-center border-4 border-red-900 shadow-inner z-20">
          <span className="text-white font-serif text-lg">❤</span>
        </div>

        {/* Diagonal Flaps */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#fdfaf1] z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)', borderBottom: '1px solid #e6d5b8' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#faf5e6] z-0" style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[#faf5e6] z-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#f8f0d8] z-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}></div>
      </div>
      
      {/* Stamp / Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-12 h-14 bg-blue-100 border border-blue-200 p-1 rounded-sm shadow-md rotate-12 z-0">
        <div className="w-full h-full border border-dashed border-blue-300 flex items-center justify-center">
          <span className="text-[8px] text-blue-400 font-bold uppercase">studio...</span>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
