'use client';

import Image from 'next/image';
import React from 'react';
import {
  BodyFooterContentWrapper,
  BodyContentWrapper,
  AboutBodyWrapper,
  AboutBodyHeader,
  BodyHeaderTitle,
  BodyHeaderText,
  // AboutBodySvg,
  AboutBodyInfo,
  BodyInfoTitle,
  BodyInfoCardBlock,
  InfoCardItem,
  InfoCardItemText,
  CardItemTextTitle,
  CardItemTextBody,
  CardItemImage,
  CardItemNumber,
  CardItemBlockSvg,
  AboutBodyFooter,
  BodyFooterInfoTitle,
  BodyFooterInfo,
  BodyFooterInfoText,
  TitleGradient,
} from './AboutBodyStyles';

export default function AboutBody() {
  const dataForCards = [
    {
      title: 'Специалистам в различных сферах IT',
      text:
        'На Gomeetup вы найдёте мероприятия по самым актуальным темам рынка информационных технологий. ' +
        'Выбирайте подходящее событие и получайте новые знания.',
      svg: '/assets/svg/about-card-01.svg',
      id: 1,
    },
    {
      title: 'Руководителям компаний и подразделений',
      text:
        'Подбирайте события под цели бизнеса или для повышения квалификации своих сотрудников. ' +
        'И для самих топ-менеджеров всегда найдётся что-то полезное.',
      svg: '/assets/svg/about-card-02.svg',
      id: 2,
    },
    {
      title: 'Новичкам в области IT',
      text:
        'В наших подборках обязательно присутствует множество событий, предназначенных для начинающих. ' +
        'Помимо обучения, вы сможете познакомиться со специалистами из своей сферы, ' +
        'что обязательно поможет в дальнейшей деятельности.',
      svg: '/assets/svg/about-card-03.svg',
      id: 3,
    },
    {
      title: 'Рекламодателям',
      text:
        'Находите ивенты, подходящие к тематике вашего продукта, ' +
        'и продвигайте его со стопроцентным попаданием в целевую аудиторию. ' +
        'Также в мероприятие можно встроить информацию о вакансиях вашей компании.',
      svg: '/assets/svg/about-card-04.svg',
      id: 4,
    },
    {
      title: 'Организаторам',
      text:
        'Вы можете создать событие сразу на Gomeetup, для этого реализован удобный функционал. ' +
        'Это позволит сразу попасть в подборку мероприятий и быстрее привлечь участников.',
      svg: '/assets/svg/about-card-05.svg',
      id: 5,
    },
    {
      title: 'Всем, кто связан с организацией мероприятий',
      text:
        'Здесь вы можете предложить услуги аренды конференц-залов и оборудования, ' + 'кейтеринга, производства атрибутики для конференций и т.д.',
      svg: '/assets/svg/about-card-06.svg',
      id: 6,
    },
  ];
  return (
    <>
      <AboutBodyWrapper id="about-id">
        <BodyContentWrapper>
          <AboutBodyHeader>
            <BodyHeaderTitle>GoMeetUp - агрегатор событий из мира IT</BodyHeaderTitle>
            <BodyHeaderText>
              Мероприятия распределены по направлениям — от аналитики и тестирования до дизайна и геймдева. С помощью фильтров можно получить подборку
              событий по формату — онлайн и офлайн, платные и бесплатные, большие и небольшие.
            </BodyHeaderText>
            {/* <AboutBodySvg>
              <Image src="/assets/svg/about-circle-body.svg" layout="fill" alt="about" />
            </AboutBodySvg> */}
          </AboutBodyHeader>
          <AboutBodyInfo>
            <BodyInfoTitle>ДЛЯ КОГО</BodyInfoTitle>
            <BodyInfoCardBlock>
              {dataForCards.map((item) => {
                return (
                  <InfoCardItem smallText={item.id % 2 === 0} key={item.id}>
                    <InfoCardItemText smallText={item.id % 2 === 0}>
                      <CardItemTextTitle>{item.title}</CardItemTextTitle>
                      <CardItemTextBody>{item.text}</CardItemTextBody>
                    </InfoCardItemText>
                    <CardItemImage>
                      <CardItemNumber>{`0${item.id}`}</CardItemNumber>
                      <CardItemBlockSvg>
                        <Image src={item.svg} layout="fill" alt={item.title} />
                      </CardItemBlockSvg>
                    </CardItemImage>
                  </InfoCardItem>
                );
              })}
            </BodyInfoCardBlock>
          </AboutBodyInfo>
        </BodyContentWrapper>
      </AboutBodyWrapper>
      <BodyFooterContentWrapper>
        <AboutBodyFooter>
          <BodyFooterInfo>
            <BodyFooterInfoTitle>
              Мы собираем события только из
              <TitleGradient> IT-сферы</TitleGradient>, ничего лишнего
            </BodyFooterInfoTitle>
            <BodyFooterInfoText>
              Единовременно на GoMeetUp размещается больше событий, чем на аналогичных сайтах — вы точно не пропустите самое интересное и полезное.
            </BodyFooterInfoText>
          </BodyFooterInfo>
        </AboutBodyFooter>
      </BodyFooterContentWrapper>
    </>
  );
}
