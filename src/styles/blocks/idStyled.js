import styled from 'styled-components';

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  width: 100%;
  height: 100%;
  max-height: 472px;
  z-index: -10;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.contentBg};
  padding: 26px 147px 35px 146px;
  @media (max-width: ${({ theme }) => theme.minDesktop}) {
    padding: 30px 42px 23px 25px;
  }
  @media (max-width: ${({ theme }) => theme.maxMobileWidth}) {
    padding: 30px 21px 22px 20px;
  }
`;

export const GradientLine = styled.div`
  background: ${({ active, theme }) => (active ? theme.orangeGradient : theme.lightBg)};
  height: 32px;
  width: 100%;
`;

export const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media (max-width: 1000px) {
    max-width: 220px;
  }

  @media (max-width: 790px) {
    max-width: 349px;
  }
`;

export const ChainsWraper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  width: 100%;
  height: fit-content;
  @media (max-width: ${({ theme }) => theme.minMobileWidth}) {
    min-width: 288px;
    max-width: 288px;
  }
`;

export const ChainBlock = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  padding: 12px 0 12px 12px;
  background-color: ${({ theme }) => theme.white};
  max-width: 100%;
  height: fit-content;
`;

export const GradientChainBlock = styled.div`
  padding: 4.5px 8px 4.5px 8px;
  background: ${({ theme }) => theme.orangeGradient};
  width: fit-content;
`;
