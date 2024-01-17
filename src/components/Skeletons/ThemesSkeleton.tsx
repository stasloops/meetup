import React, { useMemo } from 'react';
import ContentLoader from 'react-content-loader';
import { backgroundColor, foregroundColor } from './config';

function ThemeSkeleton() {
  const randomAdditionalThemeSize = () => {
    return Math.floor(Math.random() * 90);
  };

  const additionSize = useMemo(() => randomAdditionalThemeSize(), []);

  return (
    <ContentLoader speed={2} width={70 + additionSize} height={28} backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
      <rect x="0" y="0" rx="0" ry="0" width={70 + additionSize} height="28" />
    </ContentLoader>
  );
}

const ThemesSkeleton = () => {
  return Array.from({ length: 12 }).map(() => <ThemeSkeleton />);
};

export default ThemesSkeleton;
