'use client';

// @ts-nocheck
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { H2, H1, H2 as H_2, H3, H4, H5, LiText, NormalTextBlock, UL } from '../../../styles/blocks/Text';
import { EventCard } from '../../../components/Event/EventCard/EventCard';
import { EventPageGrid } from '../../../styles/blocks/EventGrid';
import { DetailEventBlock } from '../../../styles/blocks/DetailEventBlock';
import { EventInfo } from '../../../components/Event/EventInfo/EventInfo';
import { Tag2 } from '../../../components/Kit/Tag/Tag';
import { TagList } from '../../../components/Kit/Tag/TagList';
import { EventContent } from '../../../components/Event/EventContent/EventContent';
import { ColFlexEvent } from '../../../styles/blocks/Flex';
import { EventContainer, GradientLine, EventInfoContainer, ChainsWraper, BackgroundImage } from '../../../styles/blocks/idStyled';
import { themeMatrix } from '../../../helpers/themeMatrix';
import { title } from '../../../components/Title/title';
import { eventsService } from '../../../services/events.service';
import { NotFoundBanner } from '../../../components/NotFoundBanner/NotFoundBanner';

const { parseDocument } = require('htmlparser2');

const elementMatrix = {
  h1: H1,
  h2: H_2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: NormalTextBlock,
  ul: UL,
  li: LiText,
  br: styled.br``,
  a: styled.a``,
};

const getChildren = (node) => {
  return node.children.map((subNode, index) => {
    if (!subNode.name && subNode.type === 'text') return subNode.data;
    // eslint-disable-next-line react/no-array-index-key
    if (subNode.name === 'br') return <elementMatrix.br key={index} />;
    const Component = elementMatrix[subNode.name] || elementMatrix.p;
    const ComponentStyle = styled.div`
      color: black;
    `;
    const { style, ...attrs } = subNode.attribs || {};
    return (
      // eslint-disable-next-line react/no-array-index-key
      <ComponentStyle key={index} as={subNode.name} {...attrs}>
        {!!node?.children?.length && getChildren(subNode)}
      </ComponentStyle>
    );
  });
};

export default function Event() {
  const params = useParams();
  const [interestingEvents, setInterestingEvents] = useState([]);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const getEventData = async () => {
      const id = params.eventId;

      const event = await eventsService.getEvent(id, {
        method: 'GET',
      });

      if (event.status === 404 || event.status === 400 || event.status === 500) {
        setEventData('Not Found');
        return {
          notFound: true,
        };
      }

      const eventData = (await event.json()) || {};
      setEventData(eventData);

      const events = await eventsService.getEvents(
        {
          skip: 0,
          take: 15,
          theme: eventData?.eventThemeTags?.length ? eventData.eventThemeTags[0]?.eventTheme?.name : 'other',
        },
        {
          method: 'GET',
        },
      );

      const { data: eventsList } = (await events.json()) || { data: [] };
      setInterestingEvents(eventsList?.filter((item) => item.id !== eventData.id));
    };
    getEventData();
  }, [params.eventId]);

  const content = useMemo(() => {
    if (!eventData?.eventDescription?.full) return '';
    const dom = parseDocument(eventData?.eventDescription?.full);
    return getChildren(dom);
  }, [eventData?.eventDescription?.full]);

  if (eventData === 'Not Found') {
    return <NotFoundBanner />;
  }

  if (!eventData) {
    return <Loader />;
  }

  return (
    <>
      <BackgroundImage />
      <Head>
        <title>{title.titleText}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DetailEventBlock>
        <ColFlexEvent eventPage>
          <GradientLine active />
          <EventContainer>
            <TagList row>
              {!eventData?.eventThemeTags?.length && <Tag2>{themeMatrix.other}</Tag2>}
              {eventData?.eventThemeTags?.map(({ eventTheme: { id, description, name } }) => {
                const isActive = name.toLowerCase() === 'selected';

                return (
                  <Tag2 key={id} active={isActive}>
                    {isActive ? 'Интересное' : description}
                  </Tag2>
                );
              })}
            </TagList>
            <EventContent eventStyle event={eventData} content={content} />
          </EventContainer>
        </ColFlexEvent>
        <EventInfoContainer>
          <EventInfo eventStyle event={eventData} />
          <ChainsWraper>
            {/* {[1, 2, 3].map((item) => (
        <ChainBlock key={item}>
          <GradientChainBlock>
            <ChainIcon />
          </GradientChainBlock>
          <NormalTextBlock style={{ color: '#32344B' }} eventStyle>
            Название материала
          </NormalTextBlock>
        </ChainBlock>
      ))} */}
          </ChainsWraper>
        </EventInfoContainer>
      </DetailEventBlock>
      <H2>Интересные события</H2>
      <EventPageGrid>
        {interestingEvents?.map((e) => (
          <EventCard event={e} key={e.id} />
        ))}
      </EventPageGrid>
    </>
  );
}

const LoaderWrapper = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Loader() {
  return (
    <LoaderWrapper>
      <div>Loading...</div>
    </LoaderWrapper>
  );
}
