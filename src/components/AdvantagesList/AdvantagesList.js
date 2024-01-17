import Image from 'next/image';
import React from 'react';
import {
  AdvantagesContentWrapper,
  AdvantagesListWrapper,
  AdvantagesListWrapperSvg,
  AdvantagesListInfo,
  AdvantagesListInfoTitle,
  ListInfoCardsBlock,
  ListInfoCardItem,
  CardItemNumber,
  CardItemBodyText,
} from './AdvantagesListStyles';

export default function AdvantagesList() {
  const advantagesCardInfo = [
    {
      id: '01',
      text:
        'На сайте собраны митапы, конференции, мастер-классы и другие мероприятия.' +
        ' Они будут интересны как фрилансерам, так и большим компаниям.',
    },
    {
      id: '02',
      text:
        'Ключевое отличие Gomeetup от других подобных сервисов — акцент исключительно на IT-тематике.' +
        ' Такой подход позволяет собрать в одном месте самые актуальные ивенты для специалистов ' +
        'различных профессий из сферы информационных технологий. ',
    },
    {
      id: '03',
      text:
        'Проект будет интересен как участникам, так и организаторам мероприятий.' +
        ' С помощью Gomeetup можно не только создать и продвинуть событие, но и привлечь рекламодателей.',
    },
  ];

  return (
    <AdvantagesListWrapper>
      <AdvantagesContentWrapper>
        <AdvantagesListInfo>
          <AdvantagesListInfoTitle>Агрегатор IT-ивентов GoMeetUp</AdvantagesListInfoTitle>
          <ListInfoCardsBlock>
            {advantagesCardInfo.map((item) => {
              return (
                <ListInfoCardItem view={item.id} key={item.id}>
                  <CardItemNumber>{item.id}</CardItemNumber>
                  <CardItemBodyText>{item.text}</CardItemBodyText>
                </ListInfoCardItem>
              );
            })}
          </ListInfoCardsBlock>
        </AdvantagesListInfo>
      </AdvantagesContentWrapper>
      <AdvantagesListWrapperSvg>
        <Image src="/assets/svg/about-footer-circle.svg" layout="fill" alt="about footer" />
      </AdvantagesListWrapperSvg>
    </AdvantagesListWrapper>
  );
}
