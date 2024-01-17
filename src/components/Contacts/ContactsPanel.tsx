// @ts-nocheck

'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { IconButton } from '../Kit/IconButton/IconButton';
import { TitleH2, SmText } from '../../styles/blocks/Text';
import { ContactsPage, AboutContacts, Communication, ContactBlock, Location, ContactsInfo, UnderText, AddressText } from './ContactsPanelStyles';
import VKIcon from '../../data/assets/svg/footer/vk.svg';
import TelegramIcon from '../../data/assets/svg/footer/telegram.svg';
import { FooterSocialContainer } from '../Footer/FooterStyles';

export function ContactsPanel() {
  const mapData = {
    center: [55.761155, 37.519674],
    zoom: 16,
  };

  const links = [
    {
      id: 1,
      title: 'По вопросам сотрудничества:',
      subTitle: 'partnership@gomeetup.ru',
    },
    {
      id: 2,
      title: 'Обратная связь:',
      subTitle: 'feedback@gomeetup.ru',
    },
    {
      id: 3,
      title: 'Служба поддержки:',
      subTitle: 'support@gomeetup.ru',
    },
  ];

  return (
    <ContactsPage>
      <Communication>
        <AboutContacts>
          <ContactsInfo>
            <div style={{ height: '33px', alignItems: 'center', display: 'flex' }}>
              <TitleH2 contactsH2>Контакты</TitleH2>
            </div>
            {links.map((link) => (
              <ContactBlock key={link.id}>
                <SmText>{link.title}</SmText>
                <UnderText href={`mailto:${link.subTitle}`}>{link.subTitle}</UnderText>
              </ContactBlock>
            ))}
            <ContactBlock>
              <SmText>Адрес:</SmText>
              <AddressText>123290, Москва, Причальный пр-д, д.2, бизнес-центр «ЯКОРЬ»</AddressText>
            </ContactBlock>
          </ContactsInfo>
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
        </AboutContacts>
      </Communication>
      <Location>
        <YMaps>
          <Map defaultState={mapData} height="100%" width="100%">
            <Placemark
              geometry={[55.761155, 37.519236]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/img/logo.svg',
                iconImageSize: [50, 50],
                iconImageOffset: [6, -34],
              }}
            />
          </Map>
        </YMaps>
      </Location>
    </ContactsPage>
  );
}
