import styled, { css } from 'styled-components';
import { darkTheme } from '../theme';

export const NormalText = css`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.color};
`;

export const GradientText = css`
  background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  &:hover {
    -webkit-text-fill-color: unset;
  }
`;

export const NormalTextBlock = styled.span`
  ${NormalText};

  margin: 0;
`;

export const StaticTextBlock = styled.span`
  ${NormalText};
  font-weight: 400;

  margin: 0;
  color: ${darkTheme.color};

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const StaticTextBlock2 = styled.div`
  ${NormalText};
  font-weight: 400;

  margin: 8px 0;
  color: ${({ theme }) => theme.color};

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  color: ${({ theme }) => theme.color};

  margin: 12px 0;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: ${({ theme }) => theme.color};

  margin: 8px 0;
  margin: ${(props) => (props.contactsH2 ? '0px' : '8px 0')};
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: ${({ theme }) => theme.color};

  margin: 8px 0;
`;

export const H4 = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: ${({ theme }) => theme.color};

  margin: 8px 0;
`;

export const H5 = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: ${({ theme }) => theme.color};

  margin: 8px 0;
`;

export const BoldText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.color};
`;

export const LiText = styled.li`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SmText = styled.h3`
  ${NormalText};

  color: ${({ theme }) => theme.textTag};
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  margin: 0px;
`;

export const BolderText = styled.h3`
  ${NormalText};

  color: ${({ theme }) => theme.textTag};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0px;
  margin-bottom: 0;
`;

export const TitleH2 = styled(H2)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  color: ${({ theme }) => theme.textTag};
`;

export const StaticH2 = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  margin: 8px 0;
  color: #ffff;
`;

export const StaticH1 = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  margin: 12px 0;
  color: #32344b;
`;

export const StaticNormalTextBlock = styled.span`
  ${NormalText};

  margin: 0;
  color: #32344b;
`;

export const UL = styled.ul`
  list-style: square url('/img/square.svg');
`;
