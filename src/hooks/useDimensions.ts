import { useCallback, useEffect, useState } from 'react';

export default function useDimensions() {
  const hasWindow = typeof window !== 'undefined';
  const [dimensions, setDimensions] = useState({ height: null, width: null });

  const dimensionsOverlimit = useCallback((maxWidth?: Number, maxHeight?: Number) => {
    const widthOverlimit = dimensions.width > maxWidth;
    const heightOverlimit = dimensions.height > maxHeight;

    return { widthOverlimit, heightOverlimit };
  }, [dimensions]);

  const handleResizeWindowDimensions = useCallback(() => {
    setTimeout(() => {
      if (hasWindow) {
        setDimensions((state) => ({
          ...state,
          width: window.innerWidth,
          height: window.innerHeight,
        }));
      }
    }, 300);
  }, [hasWindow]);

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindowDimensions);
    handleResizeWindowDimensions();
    return () => window.removeEventListener('resize', handleResizeWindowDimensions);
  }, [handleResizeWindowDimensions]);

  return {
    dimensions,
    dimensionsOverlimit: (maxWidth?: Number, maxHeight?: Number) => (
      dimensionsOverlimit(maxWidth, maxHeight)),
  };
}
