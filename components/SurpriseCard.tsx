
import React from 'react';
import { SurpriseDetails } from '../types';

interface SurpriseCardProps {
  details: SurpriseDetails;
}

const SurpriseCard: React.FC<SurpriseCardProps> = ({ details }) => {
  return (
    <div className="animate-slide-up-reveal w-full max-w-sm">
      <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg border border-gray-100 text-center relative overflow-hidden group">
        
        {/* Subtle Decorative Corner */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-50 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-50 rounded-full"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold">Regalo Especial</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mt-4 leading-tight">
              {details.title}
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Cuándo</span>
              <p className="font-medium text-lg text-gray-700">{details.date}</p>
              <p className="text-gray-500">{details.time}</p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Dónde</span>
              <p className="font-medium text-lg text-gray-700">{details.location}</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-50 italic">
            <p className="font-script text-2xl text-gray-700">Con mucho cariño,</p>
            <p className="font-script text-3xl text-blue-500 mt-2">{details.from}</p>
          </div>
        </div>

        {/* Extra "Magic" elements */}
        <div className="absolute top-4 right-4 text-2xl opacity-20">✨</div>
        <div className="absolute bottom-4 left-4 text-2xl opacity-20 rotate-12">🎵</div>
      </div>

      {/* FIX: Remove non-standard jsx prop and use dangerouslySetInnerHTML to apply styles in standard React environments */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up-reveal {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-up-reveal {
          animation: slide-up-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      ` }} />
    </div>
  );
};

export default SurpriseCard;
