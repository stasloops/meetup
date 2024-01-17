'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { RowFlex } from '../../styles/blocks/Flex';
import { ButtonErrorPage } from '../Kit/Button/Button';

const LeftColumn = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const BannerContent = styled(RowFlex)`
  align-items: center;
  column-gap: 5%;
`;

const BgWrapper = styled.div`
  width: 100%;

  margin-top: 24px;
  height: 40vw;

  display: flex;
  align-items: center;

  font-size: 20em;

  background-color: ${({ theme }) => theme.bg};

  @media (max-width: 1250px) {
    & {
      height: auto;
      font-size: 30vw;
      padding: 32px;
    }

    & ${LeftColumn} {
      padding: 0;
      align-items: center;
    }

    & ${BannerContent} {
      flex-direction: column-reverse;
    }
  }
`;

const Text404 = styled.span`
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.095em;

  background: var(--Linear, linear-gradient(63deg, #ef6129 12.75%, #f06032 16.6%, #f85d6a 43.57%, #fd5b8c 63.6%, #ff5a99 75.16%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ColumnText = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  color: ${({ theme }) => theme.color};
`;

const TextBlock = styled.p`
  font-family: var(--noto-sans);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.color};
  margin: 0;
`;
export function NotFoundBanner() {
  return (
    <BgWrapper>
      <BannerContent>
        <LeftColumn>
          <ColumnText>
            <TextBlock>Oops! Эта страница не может быть найдена</TextBlock>
            <TextBlock>Извините, но страница, которую вы ищете, не существует, была удалена или временно недоступна.</TextBlock>
          </ColumnText>
          <Link href="/">
            <ButtonErrorPage>Вернуться на главную</ButtonErrorPage>
          </Link>
        </LeftColumn>
        <Text404>404</Text404>
      </BannerContent>
    </BgWrapper>
  );
}
