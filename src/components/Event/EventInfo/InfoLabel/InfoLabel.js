import styled from 'styled-components';
import { NormalTextBlock } from '../../../../styles/blocks/Text';
import { darkTheme } from '../../../../styles/theme';
import { Link } from '../../../Kit/Link/Link';

const TitleLabel = styled.span`
  font-family: var(--inter);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;

  color: ${darkTheme.bg};
`;

const ContentLabel = styled(NormalTextBlock)`
  font-family: var(--inter);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #828282;
  word-wrap: break-word;
`;

const ContentLabelDate = styled(ContentLabel)`
  flex-wrap: wrap;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);
  padding-bottom: 16px;

  &:last-child {
    padding-bottom: 0;
    border-bottom: unset;
  }
`;

const LabelLink = styled(Link)`
  font-family: var(--inter);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #f85d67;
  word-wrap: break-word;
  text-decoration: none;

  :hover {
    color: #828282;
  }

  :after {
    display: none;
  }
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
`;

const LeftDate = styled.div`
  color: #ff5a99;
  font-family: var(--inter);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const LinkToMap = styled.div`
  color: #5d5fef;
  cursor: pointer;
  font-family: var(--inter);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export function InfoLabel({ title, text, event }) {
  const scrollToElement = () => {
    const element = document.getElementById('yn_map');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <LabelWrapper>
      <TitleLabel>{title}</TitleLabel>
      <ContentLabel>{text}</ContentLabel>
      {event?.eventLocation ? <LinkToMap onClick={scrollToElement}>На карту</LinkToMap> : null}
    </LabelWrapper>
  );
}

export function InfoLabelLink({ title, url, text }) {
  const titleCase = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
  return (
    <LabelWrapper>
      <TitleLabel>{title}</TitleLabel>
      <LabelLink href={url} target="_blank">
        {titleCase(text)}
      </LabelLink>
    </LabelWrapper>
  );
}

const formatDays = (num) => {
  if (num === 1) {
    return 'день';
  }
  if (num < 5) {
    return 'дня';
  }
  return 'дней';
};

export function InfoLabelDate({ title, text, start, end, daysBeforeStarting }) {
  return (
    <LabelWrapper>
      <DateBox>
        <TitleLabel>{title}</TitleLabel>
        <LeftDate>{!daysBeforeStarting ? 'Сегодня' : `${daysBeforeStarting} ${formatDays(daysBeforeStarting)} до начала`} </LeftDate>
      </DateBox>
      {text ? (
        <ContentLabelDate>{text}</ContentLabelDate>
      ) : (
        <>
          <ContentLabelDate>Начало: {start}</ContentLabelDate>
          <ContentLabelDate>Конец: {end}</ContentLabelDate>
        </>
      )}
    </LabelWrapper>
  );
}
