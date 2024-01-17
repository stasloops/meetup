// import React, { type ComponentType, useEffect, useRef, type ReactNode } from 'react';
//
// interface WithClickOutsideProps {
//   onClickOutside: () => void;
//   exclude?: ReactNode[];
// }
//
// export function withClickOutside<P extends object>(
//   Component: ComponentType<P>,
// ): ComponentType<P & WithClickOutsideProps> {
//   return ({ onClickOutside, exclude = [], ...props }: WithClickOutsideProps & P) => {
//   const ref = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         ref.current &&
//         !ref.current.contains(event.target as Node) &&
//       !exclude.includes(event.target as ReactNode)
//     ) {
//         onClickOutside();
//       }
//     }
//
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [onClickOutside, ref, exclude]);
//
//   return <Component ref={ref} {...(props as P)} />;
// };
// }

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
