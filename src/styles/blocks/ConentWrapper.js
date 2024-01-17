import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 68px;
  /* margin-top: 42px; */

  @media (min-width: 1367px) {
    max-width: 1372px;
  }

  @media (max-width: 1366px) {
    padding: 20px 56px 0;
  }

  @media (max-width: 1000px) {
    max-width: 732px;
    padding: 24px 0 0;
  }

  @media (max-width: 740px) {
    max-width: 100vw;
    padding: 50px 26px 0;
  }

  @media (max-width: 450px) {
    max-width: 100vw;
    padding: 50px 13px 0;
  }
`;
