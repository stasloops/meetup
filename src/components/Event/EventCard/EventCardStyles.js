import styled from 'styled-components';
import { Tag } from '../../Kit/Tag/Tag';
import { TagList } from '../../Kit/Tag/TagList';

export const EventCardWrapper = styled.article`
  height: 400px;
  width: 100%;
  max-width: 290px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  background: ${({ theme }) => theme.bgCard};

  box-shadow: ${({ theme }) => theme.shadowCard};

  color: ${({ theme }) => theme.color};

  transition: all;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowCardHovered};
  }

  @media (max-width: 1000px) {
    & {
      height: 394px;
      max-width: 358px;
    }
  }

  @media (max-width: 450px) {
    & {
      max-width: 100%;
    }
  }
`;

export const EventCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;
  height: 100%;

  overflow: hidden;
`;

export const EventCardFooter = styled.div`
  width: 100%;
  min-height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 12px;
  background: ${({ theme }) => theme.cardFooter};
`;

export const EventCardFormatText = styled.p`
  font-family: var(--noto-sans);
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  padding: 0 16px;

  background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  display: flex;
  justify-content: space-between;

  margin: 0;
`;

export const EventCardDateText = styled.span`
  padding: 0 16px;
  font-family: var(--noto-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-transform: uppercase;

  background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  margin-bottom: 8px;
`;

export const EventCardPriceText = styled.i`
  font-family: var(--noto-sans);
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;

  background: ${({ theme, free }) => (free ? theme.greenText : theme.orangeText)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const EventBodyWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-decoration: none;
  color: inherit;
`;

export const EventCardTitle = styled.div`
  display: -webkit-box;
  padding: 0 16px;
  font-family: var(--noto-sans);
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  text-decoration: none;
  color: inherit;

  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const EventCardImageWrapper = styled.div`
  max-height: 177px;
  min-height: 177px;
  width: 100%;

  overflow: hidden;

  display: flex;
  justify-content: center;

  filter: ${(props) => (props.imgLoading ? 'blur(12px)' : '')};

  img {
    object-fit: cover;
  }

  svg {
    height: 100%;

    transition: transform 0.25s linear;

    ${EventCardWrapper}:hover & {
      transform: scale(1.5);
    }

    fill: rgba(62, 62, 79, 0.5);
  }
`;
export const EventCardImage = styled.img`
  height: 100%;

  transition: transform 0.25s linear;

  ${EventCardWrapper}:hover & {
    transform: scale(1.5);
  }
`;

export const EventCardTagList = styled(TagList)`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 1;

  row-gap: 8px;
  height: 155px;
`;

export const EventCardTag = styled(Tag)`
  border-radius: 20px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme, active }) => (active ? theme.orangeGradient : theme.purple)};
  padding: 4px 12px;
`;

export const EventCardOrganization = styled.button`
  height: 38px;
  padding: 0 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: var(--noto-sans);
  font-weight: 300;
  font-size: 12px;
  color: ${({ theme }) => theme.smText};
  background-color: inherit;
  cursor: pointer;
  border: none;
  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;

export const EventCardOrganizationLogo = styled.button`
  height: 38px;
  padding: 0 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: var(--noto-sans);
  font-weight: 300;
  font-size: 12px;
  color: ${({ theme }) => theme.smText};
  background-color: inherit;
  border: none;
`;

export const EventCardOrganizationIcon = styled.div`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.url}) no-repeat center/100%;
  margin-right: 8px;
`;
