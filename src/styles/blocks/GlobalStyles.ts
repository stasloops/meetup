'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    justify-content: center;
    overflow: overlay;

    scroll-behavior: ${(isAbout) => (isAbout ? 'smooth' : '')};
  }

  body {
    position: relative;
    background: ${({ theme }) => theme?.bg};
      font-family: var(--noto-sans);
    font-weight: 500;
    margin: 0;

    height: 100%;
    /* display: flex;
    justify-content: center; */

    width: 100vw;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    width: 100%;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .infinite-scroll-component__outerdiv {
    width: 100%;
    max-width: 902px;
  }
`;
