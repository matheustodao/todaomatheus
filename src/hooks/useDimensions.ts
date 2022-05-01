import { useCallback, useEffect, useState } from 'react';

export default function useDimensions() {
  const hasWindow = typeof window !== 'undefined';
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const doSizeIsBiggerThan = useCallback((value: number) => {
    const isWidthBigger = hasWindow && window.innerWidth >= value;
    const isHeightBigger = hasWindow && window.innerHeight >= value;

    return { isWidthBigger, isHeightBigger };
  }, [hasWindow]);

  function handleResizeWindowDimensions() {
    setDimensions((state) => ({
      ...state,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  }

  useEffect(() => {
    if (hasWindow) {
      setDimensions((state) => ({
        ...state,
        width: window.innerWidth,
        height: window.innerHeight,
      }));

      window.addEventListener('resize', handleResizeWindowDimensions);
    }
    return () => window.removeEventListener('resize', handleResizeWindowDimensions);
  }, [hasWindow]);

  return {
    dimensions,
    doSizeIsBiggerThan,
  };
}
