import React, { useEffect, useState } from 'react';

interface Props {
  imageUrl: string;
}

export default function GhibliTimelapse({ imageUrl }: Props) {
  const [current, setCurrent] = useState(imageUrl);
  const [previous, setPrevious] = useState<string | null>(null);
  const [showCurrent, setShowCurrent] = useState(true);

  useEffect(() => {
    if (imageUrl === current) return;

    setPrevious(current);
    setCurrent(imageUrl);
    setShowCurrent(false);

    const t = setTimeout(() => {
      setShowCurrent(true);
    }, 20); // allow DOM paint

    return () => clearTimeout(t);
  }, [imageUrl]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      
      {/* Previous image */}
      {previous && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${previous})`,
            opacity: showCurrent ? 0 : 1,
          }}
        />
      )}

      {/* Current image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${current})`,
          opacity: showCurrent ? 1 : 0,
        }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}
