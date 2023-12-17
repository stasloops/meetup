import styled from 'styled-components';

export const OuterPanelWrapper = styled.div`
  position: fixed;

  z-index: 4000;
  display: none;

  &.openSearch {
    display: flex;
  }

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(37, 38, 45, 0.9);
  justify-content: flex-start;
`;

export const OuterPanelContent = styled.div`
  width: 467px;
  height: 100%;
  background-image: url('/img/search-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.bgPromo};

  ${({ place }) => place === 'top' && `width: 100%; height: 64px;`}

  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;
