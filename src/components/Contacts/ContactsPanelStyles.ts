import styled from 'styled-components';
import { NormalText } from '../../styles/blocks/Text';

export const ContactsPage = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  row-gap: 19px;
  column-gap: 32px;
  min-height: 70vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 0;
  }

  @media (max-width: 410px) {
    padding: 0;
  }
`;

export const AboutContacts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  height: 295px;
`;

export const ContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 376px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Communication = styled(ContactBlock)`
  display: flex;
  flex-direction: column;

  column-gap: 40px;

  @media (max-width: ${({ theme }) => theme.tabletWidth}) {
    column-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    flex-direction: column;
  }
`;

export const Location = styled.div`
  display: inline-block;
  width: 828px;
  height: 431px;
  margin-bottom: 40px;

  @media (max-width: 1290px) {
    width: 700px;
  }

  @media (max-width: 1170px) {
    width: 520px;
  }

  @media (max-width: 1000px) {
    width: 732px;
    margin-top: 137px;
  }

  @media (max-width: 940px) {
    width: 732px;
    height: 381px;
  }

  @media (max-width: 768px) {
    width: 349px;
    height: 343px;
  }

  @media (max-width: 375px) {
    width: 349px;
    height: 299px;
  }
`;

export const UnderText = styled.a`
  ${NormalText};

  color: ${({ theme }) => theme.textTag};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-decoration: underline;
  margin-top: 0px;
  margin-bottom: 0;
  cursor: pointer;
`;

export const AddressText = styled.p`
  ${NormalText};

  color: ${({ theme }) => theme.textTag};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0px;
  margin-bottom: 0;
  cursor: pointer;
`;
