import React, { useState, useEffect } from 'react';

const ImageSafe = ({ src, alt, className, fallbackSrc, backups = [], width, height }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setErrorCount(0);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (hasError) return; // Prevent infinite loops if fallback also errors
    setHasError(true);

    if (errorCount < backups.length) {
      setCurrentSrc(backups[errorCount]);
      setErrorCount(prev => prev + 1);
      setHasError(false); // Reset hasError for the next attempt
    } else if (fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      // Default placeholder if all else fails
      const placeholderWidth = width || 400;
      const placeholderHeight = height || 300;
      setCurrentSrc(`https://placehold.co/${placeholderWidth}x${placeholderHeight}?text=${encodeURIComponent(alt || 'Image Unavailable')}`);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default ImageSafe;