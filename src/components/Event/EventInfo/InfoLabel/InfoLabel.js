import styled from 'styled-components';
import { NormalTextBlock } from '../../../../styles/blocks/Text';
import { darkTheme } from '../../../../styles/theme';
import { Link } from '../../../kit/Link/Link';

const TitleLabel = styled.span`
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;

  color: ${darkTheme.bg};
`;

const ContentLabel = styled(NormalTextBlock)`
  /* font-family: 'Inter'; */
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
`;

const LabelLink = styled(Link)`
  /* font-family: 'Inter'; */
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

export function InfoLabel({ title, text }) {
  return (
    <LabelWrapper>
      <TitleLabel>{title}</TitleLabel>
      <ContentLabel>{text}</ContentLabel>
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

export function InfoLabelDate({ title, text }) {
  return (
    <LabelWrapper>
      <TitleLabel>{title}</TitleLabel>
      <ContentLabelDate>{text}</ContentLabelDate>
    </LabelWrapper>
  );
}
