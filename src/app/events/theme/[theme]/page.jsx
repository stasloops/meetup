'use client';

import React, { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { EventsPage } from '../../../../components/Event/EventsPage/EventsPage';
import { Slider } from '../../../../components/Slider/Slider';
import { eventsService } from '../../../../services/events.service';
import { store } from '../../../../data/store';

const Contacts = observer(() => {
  const params = useParams();
  const asPath = usePathname();

  useEffect(() => {
    store.eventsStore.setFilterFetchConfig({ theme: params.theme });
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

      store.eventsStore.setEvents(events, params.theme);
      store.eventsStore.setFilterParams(filterParams, params.theme);
      store.eventsStore.setFetchConfig({
        theme: params.theme,
        name: null,
        format: null,
        type: null,
        payment: null,
        place: null,
      });

      const promo = await eventsService.getPromoData(
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
      store.pageStore.setPromoData(promo);
    };

    getEvents();
  }, [params.theme]);

  useEffect(() => {
    const r = asPath.split('?');
    if (r.length > 0) {
      const params = new URLSearchParams(r[1]);
      if (params.has('q')) {
        store.eventsStore.setFetchConfig({ name: params.get('q') });
      }
    }
  }, [asPath]);

  return (
    <>
      <Slider />
      <EventsPage />
    </>
  );
});

export default Contacts;
