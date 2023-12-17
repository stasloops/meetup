import styled from 'styled-components';
import { memo } from 'react';

export const ThemedSvg = memo(({ ElementSvg }) => {
  const ThemedElement = styled(ElementSvg)`
    path {
      fill: ${({ theme }) => theme.color};
    }
  `;

  return <ThemedElement />;
});

ThemedSvg.displayName = 'ThemedSvg';
