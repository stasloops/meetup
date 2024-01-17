'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FooterAboutBox,
  FooterContainer,
  FooterContentBox,
  FooterDescriptionText,
  FooterDivider,
  FooterDocsList,
  FooterLeftCol,
  FooterLink,
  FooterMenuCol,
  FooterRightCol,
  FooterSocialContainer,
  FooterWrapper,
  LogoImage,
  LogoStyled,
} from './FooterStyles';
import { RowFlex } from '../../styles/blocks/Flex';
import { H3, NormalTextBlock } from '../../styles/blocks/Text';
import { menuConfig } from '../../helpers/menuConfig';
import { IconButton } from '../Kit/IconButton/IconButton';
import VKIcon from '../../data/assets/svg/footer/vk.svg';
import TelegramIcon from '../../data/assets/svg/footer/telegram.svg';
import { ContentWrapper } from '../../styles/blocks/ConentWrapper';

export function Footer() {
  const menu = menuConfig.map((item) => (
    <Link key={item.title} href={item.href} passHref>
      <FooterLink>{item.title}</FooterLink>
    </Link>
  ));

  const path = usePathname();

  return (
    <FooterWrapper filterPanel={path === '/events'}>
      <ContentWrapper>
        <FooterContainer>
          <FooterContentBox>
            <FooterLeftCol>
              <RowFlex>
                <Link href="/events" passHref>
                  <LogoStyled>
                    <LogoImage />
                  </LogoStyled>
                </Link>
                <FooterSocialContainer>
                  <IconButton>
                    <a href="https://vk.com/public207973995" target="_blank" rel="noreferrer">
                      <VKIcon />
                    </a>
                  </IconButton>
                  <IconButton>
                    <a href="https://t.me/+Be13u-DgNKU2NjFi" target="_blank" rel="noreferrer">
                      <TelegramIcon />
                    </a>
                  </IconButton>
                </FooterSocialContainer>
              </RowFlex>
              <FooterDescriptionText>Gomeetup — всегда идем на встречу</FooterDescriptionText>
            </FooterLeftCol>
            <FooterRightCol>
              <FooterMenuCol>
                <H3>Разделы</H3>
                {menu}
              </FooterMenuCol>
              <FooterMenuCol>
                <H3>О нас</H3>
                <Link href="/about" passHref>
                  <FooterLink>Проект</FooterLink>
                </Link>
                <Link href="/contacts" passHref>
                  <FooterLink>Контакты</FooterLink>
                </Link>
              </FooterMenuCol>
              {/* <FooterMenuCol>
              <H3>Услуги и сервисы</H3>
              <Link href="/adv" passHref>
                <FooterLink>Реклама на Gomeetup</FooterLink>
              </Link>
              <Link href="/advanced" passHref>
                <FooterLink>Дополнительные услуги</FooterLink>
              </Link>
            </FooterMenuCol> */}
              {/* <FooterMenuCol>
              <H3>Поддержка</H3>
              <FooterLink as="a" href="mailto:gomeetup@support.ru">
                gomeetup@support.ru
              </FooterLink>
            </FooterMenuCol> */}
            </FooterRightCol>
          </FooterContentBox>
          <FooterDivider />
          <FooterAboutBox>
            <NormalTextBlock>© {new Date().getFullYear()} Gomeetup</NormalTextBlock>
            <FooterDocsList>
              <Link href="/rules" passHref>
                <FooterLink>Правила пользования сайтом</FooterLink>
              </Link>
              {/* <Link href="/privacy-policy" passHref>
              <FooterLink>Политика конфиденциальности</FooterLink>
            </Link>
            <Link href="/rules" passHref>
              <FooterLink>Правила пользования сайтом</FooterLink>
            </Link>
             <Link href="/agreement" passHref>
              <FooterLink>Пользовательское соглашение</FooterLink>
            </Link> */}
            </FooterDocsList>
          </FooterAboutBox>
        </FooterContainer>
      </ContentWrapper>
    </FooterWrapper>
  );
}
