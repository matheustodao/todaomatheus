import { useEffect, useState } from 'react';

export default function useDimensions() {
  const hasWindow = typeof window !== 'undefined';
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  function doSizeIsBiggerThan(value: number) {
    const isWidthBigger = dimensions.width >= value;
    const isHeightBigger = dimensions.height >= value;

    return { isWidthBigger, isHeightBigger };
  }

  function handleResizeWindowDimensions() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (hasWindow) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener('resize', handleResizeWindowDimensions);
    }
    return () => window.removeEventListener('resize', handleResizeWindowDimensions);
  }, [hasWindow]);

  return {
    dimensions,
    doSizeIsBiggerThan,
  };
}
