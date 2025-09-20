import React, { useState, useEffect } from 'react';

const BackgroundSafe = ({ src, backups = [], className, overlay }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setErrorCount(0);
    setHasLoaded(false);
    setHasError(false);
  }, [src]);

  useEffect(() => {
    if (currentSrc) {
      const img = new Image();
      img.src = currentSrc;
      img.onload = () => {
        setHasLoaded(true);
        setHasError(false);
      };
      img.onerror = () => {
        setHasError(true);
        if (errorCount < backups.length) {
          setErrorCount(prev => prev + 1);
          setCurrentSrc(backups[errorCount]);
        } else {
          // All image sources failed, fall back to gradient
          setHasLoaded(true); // Indicate that we're done trying images
        }
      };
    } else {
      setHasLoaded(true); // No src provided, directly use fallback
    }
  }, [currentSrc, errorCount, backups]);

  const style = hasLoaded && !hasError
    ? { backgroundImage: `${overlay ? overlay + ', ' : ''}url(${currentSrc})` }
    : { backgroundImage: `${overlay ? overlay + ', ' : ''}linear-gradient(to right, #000000, #333333)` }; // Fallback gradient

  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-hidden="true"
    ></div>
  );
};

export default BackgroundSafe;