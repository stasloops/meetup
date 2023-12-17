import { useEffect, useRef } from 'react';

export function withClickOutside(Component) {
  function Comp({ onClickOutside, exclude = [], ...props }) {
    const ref = useRef();
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && !exclude.includes(event.target)) {
          onClickOutside();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClickOutside, ref, exclude]);

    return <Component ref={ref} {...props} />;
  }
  Comp.displayName = `${Component.displayName}HOC`;
  return Comp;
}
