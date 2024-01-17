import { useEffect, useRef } from 'react';

export const useClose = (toggle: () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      const path: EventTarget[] = e.composedPath();
      if (ref.current && !path?.includes(ref.current)) {
        toggle();
      }
    };

    document.addEventListener('click', closeHandler);
    return () => {
      document.removeEventListener('click', closeHandler);
    };
  }, []);

  return {
    ref,
  };
};
