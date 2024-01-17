import { styled } from 'styled-components';

export const Cookies = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

export const Container = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px;
    padding-bottom: 20px;
  }
`;

export const MobileBlock = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Icon = styled.div`
  @media (max-width: 768px) {
    display: inline-block;
    stroke: currentColor;
    fill: currentColor;
    font-size: 12px;
    transform: scale(0.9);
  }
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color};
  font-family: var(--inter);
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 164%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color};
  font-family: var(--inter);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 164%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonBox = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
    padding-left: 15px;
  }
`;
export const Button = styled.button`
  background: var(
    --linear,
    linear-gradient(
      63.14deg,
      rgba(239, 97, 41, 1) 15.000000596046448%,
      rgba(240, 96, 50, 1) 20.000000298023224%,
      rgba(248, 93, 106, 1) 55.000001192092896%,
      rgba(253, 91, 140, 1) 81.00000023841858%,
      rgba(255, 90, 153, 1) 95.99999785423279%
    )
  );
  font-size: 14px;
  font-family: var(--noto-sans);
  border: none;
  color: #fff;
  width: 105px;
  height: 42px;
  cursor: pointer;
`;
