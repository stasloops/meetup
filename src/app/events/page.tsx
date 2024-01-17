'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { EventsPage } from '../../components/Event/EventsPage/EventsPage';
import { Slider } from '../../components/Slider/Slider';
import { eventsService } from '../../services/events.service';
import { store } from '../../data/store';

const Events = observer(() => {
  const params = useParams();

  useEffect(() => {
    store.eventsStore.setFilterFetchConfig({ theme: null });
  }, []);

  useEffect(() => {
    const getEvents = async () => {
      const cookies = {};
      const { take, skip } = store.eventsStore._fetchConfig;

      const eventsReq = await eventsService.getEvents(
        { take, skip: skip || 0, theme: params.theme || '' },
        {
          method: 'GET',
          headers: {
            Cookie: Object.entries(cookies)
              .map(([key, val]) => `${key}=${val}`)
              .join('; '),
          },
        },
      );

      if (eventsReq.status === 404 || eventsReq.status === 400 || eventsReq.status === 500) {
        return {
          notFound: true,
        };
      }

      const events = (await eventsReq.json()) || { total: 0, data: [] };

      const filterParamsReq = await eventsService.getFilterParams(
        // @ts-ignore
        { theme: params.theme },
        {
          method: 'GET',
          headers: {
            Cookie: Object.entries(cookies)
              .map(([key, val]) => `${key}=${val}`)
              .join('; '),
          },
        },
      );
      const filterParams = (await filterParamsReq.json()) || {};

      store.eventsStore.setEvents(events, null);
      store.eventsStore.setFilterParams(filterParams, params.theme);
      store.eventsStore.setFetchConfig({
        theme: null,
        name: null,
        format: null,
        type: null,
        payment: null,
        place: null,
      });

      const promoData = await eventsService.getPromoData(
        { location: 'story', skip: 0, take: 10 },
        {
          method: 'GET',
          headers: {
            Cookie: Object.entries(cookies)
              .map(([key, val]) => `${key}=${val}`)
              .join('; '),
          },
        },
      );
      if (store.pageStore._promoData) {
        return;
      }
      store.pageStore.setPromoData(promoData);
    };

    void getEvents();
  }, []);

  return (
    <>
      <Slider />
      <EventsPage />
    </>
  );
});

export default Events;
