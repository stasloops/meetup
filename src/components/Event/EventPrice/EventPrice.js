import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import { H3, StaticH2, NormalTextBlock } from '../../../styles/blocks/Text';
import { EventInfoButtonsBlock } from '../EventInfo/EventInfoStyles';
import { EventButtonsBlock } from '../EventButtonsBlock/EventButtonsBlock';
import { darkTheme } from '../../../styles/theme';

const EventPriceWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 32px;
  padding-right: 16px;

  background-color: ${darkTheme.cardBg};

  margin-top: 24px;

  & ${EventInfoButtonsBlock} {
    gap: 20px;
  }
`;

const SubWraper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-end;
  }
  justify-content: space-between;
`;

const EventPriceSubWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const EventActionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-tems: flex-end;
`;

const EventPriceText = styled(H3)`
  background: ${({ freeEvent, theme }) => (freeEvent ? theme.greenGradient : theme.orangeGradient)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RulesLink = styled(NormalTextBlock)`
  cursor: pointer;
  color: #fff;
  opacity: 0.6;
  font-size: 12px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const RulesText = styled(NormalTextBlock)`
  padding-top: 16px;
  font-size: 10px;
  color: #fff;
  opacity: 0.6;
`;

export function EventPrice({ eventStyle, event, price = [], highPrice, lowPrice }) {
  return (
    <EventPriceWrapper>
      <SubWraper>
        <EventPriceSubWrap>
          <StaticH2 eventStyle={eventStyle}>Стоимость события</StaticH2>
          <EventPriceBlock price={price} highPrice={highPrice} lowPrice={lowPrice} />
        </EventPriceSubWrap>
        <EventActionWrap>
          <EventButtonsBlock hideSocial horizontal event={event} />
        </EventActionWrap>
      </SubWraper>
      <RulesText>
        При нажатии на кнопку “Принять участие“ вы соглашаетесь с{' '}
        <Link href="/rules" passHref>
          <RulesLink>Правилами пользования сайтом.</RulesLink>
        </Link>
      </RulesText>

      {/* <RulesText>
        Данный Сайт содержит ссылки на сторонние сайты. Администрация не несет ответственности за условия, правила сбора
        и использования личной информации о посетителе на сторонних сайтах. Администрация Сайта не несет ответственности
        за информационное содержание, правила пользования и различные требования и ограничения, указанные на сторонних
        сайтах. Администрация не несет ответственности за качество услуг и\или товаров, предлагаемых сторонними сайтами.
        Администрация не может контролировать достоверность информации и качество услуг, предоставляемых сторонними
        компаниями. Ответственность за использование сторонних сайтов лежит полностью на Посетителе.
      </RulesText> */}
    </EventPriceWrapper>
  );
}

function EventPriceBlock({ price, lowPrice, highPrice }) {
  const priceA = price[0];
  const basePrice = Array.isArray(priceA) ? priceA[1] : 0;

  if (lowPrice && highPrice) {
    return (
      <React.Fragment key={lowPrice}>
        <EventPriceText>
          {new Intl.NumberFormat('ru').format(lowPrice)} ₽ — {new Intl.NumberFormat('ru').format(highPrice)} ₽
        </EventPriceText>
      </React.Fragment>
    );
  }

  if (basePrice !== 0) {
    return (
      <React.Fragment key={basePrice}>
        <EventPriceText>{new Intl.NumberFormat('ru').format(basePrice)} ₽</EventPriceText>
      </React.Fragment>
    );
  }

  return <EventPriceText freeEvent>Бесплатно</EventPriceText>;
}
