
import React, { useState, useEffect, useCallback } from 'react';
import { AppState } from './types';
import { GHIBLI_IMAGES, SURPRISE_DATA } from './constants';
import Envelope from './components/Envelope';
import SurpriseCard from './components/SurpriseCard';
import GhibliTimelapse from './components/GhibliTimelapse';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.IDLE);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const startAnimation = () => {
    setState(AppState.ANIMATING);
  };

  const finishAnimation = () => {
    setState(AppState.REVEALED);
  };

  // Handle image cycling during animation state
  useEffect(() => {
    let interval: number;
    if (state === AppState.ANIMATING) {
      interval = window.setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % GHIBLI_IMAGES.length);
      }, 200); // Faster, sharper timelapse

      // Finish after the sequence
      setTimeout(() => {
        finishAnimation();
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [state]);

  return (
    <div className={`relative w-full h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 ${state === AppState.ANIMATING ? 'bg-black' : 'bg-sky-50'}`}>
      
      {/* Background Timelapse Layer - Only active during animation */}
      {state === AppState.ANIMATING && (
        <GhibliTimelapse imageUrl={GHIBLI_IMAGES[currentImageIndex]} />
      )}

      {/* Background Decor for Idle/Revealed states */}
      {state !== AppState.ANIMATING && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-md px-4">
        {state === AppState.IDLE && (
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-serif text-3xl text-gray-700 mb-2 italic">Un mensaje especial...</h1>
            <p className="text-sm text-gray-500 tracking-widest uppercase">Toca el sobre para descubrirlo</p>
          </div>
        )}

        <div className="relative flex justify-center items-center">
          {state !== AppState.REVEALED ? (
            <Envelope 
              onClick={startAnimation} 
              isAnimating={state === AppState.ANIMATING} 
            />
          ) : (
            <SurpriseCard details={SURPRISE_DATA} />
          )}
        </div>
      </div>

      {/* Small Credits */}
      {state !== AppState.ANIMATING && (
        <div className="absolute bottom-8 text-gray-400 text-xs tracking-widest font-light">
          HECHO CON AMOR
        </div>
      )}
    </div>
  );
};

export default App;
