import styled from 'styled-components';
import { NormalTextBlock } from '../../styles/blocks/Text';
import Logo from '../../data/assets/svg/footerLogo.svg';
import { ColFlex } from '../../styles/blocks/Flex';

export const FooterWrapper = styled.footer`
  margin-top: auto;
  // width: 100vw;
  background-color: ${({ theme }) => theme.footerBg};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: ${(props) => (props.filterPanel ? '48px' : '')};
  }
`;

export const FooterContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  min-height: 190px;
  padding-bottom: 24px;
  padding-top: 40px;
`;

export const FooterDescriptionText = styled(NormalTextBlock)`
  max-width: 500px;
  word-wrap: normal;
`;

export const LogoStyled = styled.a`
  display: inline-block;
  margin-right: 34px;
`;

export const LogoImage = styled(Logo)`
  margin-right: 34px;
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

export const FooterLeftCol = styled(ColFlex)`
  gap: 16px;
  width: fit-content;
`;

export const FooterRightCol = styled.nav`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const FooterMenuCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterLink = styled(NormalTextBlock)`
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    background-color: none;
    background: none;
  }
`;

export const FooterDivider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.cardBottomLine};
`;

export const FooterAboutBox = styled.div`
  justify-content: space-between;
  width: 100%;
  padding-top: 24px;
  display: flex;
  overflow: hidden;
`;

export const FooterDocsList = styled.div`
  display: flex;
  gap: 10px;

  ${FooterLink} {
    opacity: 0.6;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
