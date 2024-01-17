'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams, usePathname } from 'next/navigation';
import ContentLoader from 'react-content-loader';
import {
  AboutNotFound,
  DropDown,
  EventsListWrapper,
  FilterBlock,
  FilterBox,
  FilterFeedback,
  FilterIcon,
  NotFoundFilter,
  NotFoundLink,
  NotFoundText,
  SearchButton,
} from '../../../styles/blocks/FilterBlock';
import { MenuList } from '../../TopPanel/TopPanelStyles';
import { MenuLink } from '../../Kit/MenuLink/MenuLink';
import SearchIconSmall from '../../../data/assets/svg/searchSmall.svg';
import { CategoriesWrapperBlock } from '../../../styles/blocks/CategoriesWrapperBlock';
import { FilterEvents } from '../../FilterEvents/FilterEvents';
import { PageContent } from '../../../styles/blocks/PageContent';
import { ScrollUp } from '../../Kit/ScrollUp/ScrollUp';
import { store } from '../../../data/store';
import { EventFeedback } from '../EventFeedback/EventFeedback';
import { eventsStore } from '../../../data/store/events/eventsStore';
import useMediaQuery from '../../../lib/useMediaQuery';
import EventsList from '../EventsList/EventsList';
import { FilterForm } from '../../FilterEvents/FilterForm';
import FilterIconSvg from '../../../data/assets/svg/filter.svg';
import CloseIcon from '../../../data/assets/svg/close_2.svg';
import EventsListSkeleton from '../../Skeletons/EventsListSkeleton';
import ThemesSkeleton from '../../Skeletons/ThemesSkeleton';
import { backgroundColor, foregroundColor } from '../../Skeletons/config';
import FilterBoxSkeleton from '../../Skeletons/FilterBoxSkeleton';

export const EventsPage = observer(() => {
  const params = useParams();
  const asPath = usePathname();
  const [eventsByDate, setEventsByDate] = useState({ today: [], tomorrow: [], after: [] });

  useEffect(() => {
    function categorizeEvents(events) {
      const today = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString().slice(0, 10);
      const tomorrow = new Date(Date.now() + 3 * 60 * 60 * 1000 + 86400000).toISOString().slice(0, 10);

      const dateValue = (event) => event.date || event.eventDate.showStart;

      return {
        today: events?.filter((event) => dateValue(event).slice(0, 10) === today),
        tomorrow: events?.filter((event) => dateValue(event).slice(0, 10) === tomorrow),
        after: events?.filter((event) => dateValue(event).slice(0, 10) !== today && dateValue(event).slice(0, 10) !== tomorrow),
      };
    }

    setEventsByDate(categorizeEvents(store.eventsStore?._events));
  }, [JSON.stringify(store.eventsStore?._events)]);

  const fetchNextPage = () => {
    if (store.eventsStore.fetchCount >= store.eventsStore.MAX_AUTO_FETCH) return;
    store.eventsStore.fetchEventsNextPage();
  };

  const initialSearchParams = {
    theme: params.theme || null,
    format: null,
    type: null,
    payment: null,
    place: null,
    organizer: null,
  };
  const methods = useForm({ defaultValues: { ...initialSearchParams } });

  const [countParams, setCountParams] = useState(0);

  const changeFilterParams = useCallback((params) => {
    store.eventsStore.setFetchConfig(params);
  }, []);

  const resetFilter = (dropEventName) => {
    const SearchParams = dropEventName ? { ...initialSearchParams, name: null } : initialSearchParams;
    methods.reset();
    setCountParams(0);
    store.eventsStore.setFilterFetchConfig({ place: null });
    store.eventsStore.setFetchConfig({ name: '' });
    store.eventsStore.fetchFilterParams();
    changeFilterParams(SearchParams);
  };

  const resetSearch = () => {
    setCountParams(0);
    store.eventsStore.setFetchConfig({ ...initialSearchParams, name: '' });
    eventsStore.fetchFilterParams();
    router.replace(asPath.split('?')[0], undefined, { shallow: true });
  };

  const [filter, setFilter] = useState(true);

  const [size, setSize] = useState({});

  const ref = useRef();

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  

  const mobileS = useMediaQuery('(max-width: 768px)');

  function FeedbackForm() {
    return (
      <>
        <FilterEvents
          openFilter={filter}
          openFilterSet={() => {}}
          openSearch={() => store.pageStore.setShowOuterPanel(store.pageStore._panelTypes.SEARCH)}
          methods={methods}
          countParams={countParams}
          initialSearchParams={initialSearchParams}
          changeFilterParams={changeFilterParams}
          setCountParams={setCountParams}
          resetFilter={resetFilter}
        />
        <EventFeedback />
      </>
    );
  }

  return (
    <>
      <FilterBlock ref={ref}>
        <CategoriesWrapperBlock>
          <MenuList>
            {!store.eventsStore.themes.length ? (
              <ThemesSkeleton />
            ) : (
              <>
                <MenuLink href="/events" eq>
                  Все
                </MenuLink>

                {store.eventsStore.themes.map(
                  (item) =>
                    item.name && (
                      <MenuLink href={`/events/theme/${item.name}`} key={item.name} eq>
                        {item.description}
                      </MenuLink>
                    ),
                )}
              </>
            )}
          </MenuList>
        </CategoriesWrapperBlock>
      </FilterBlock>
      <FilterBox>
        {/* {store.eventsStore?._events ? ( */}
          <>
            <SearchButton black onClick={() => store.pageStore.setShowOuterPanel(store.pageStore._panelTypes.SEARCH)}>
              <SearchIconSmall />
              <div>Поиск события</div>
            </SearchButton>
            <DropDown onClick={() => setFilter(!filter)}>
              {filter ? (
                <CloseIcon />
              ) : (
                <FilterIcon>
                  <FilterIconSvg />
                </FilterIcon>
              )}
              {filter ? 'Закрыть' : 'Фильтры'}
            </DropDown>
          </>
        {/* ) : (
          <FilterBoxSkeleton />
        )} */}
      </FilterBox>
      {filter  ? (
        <FormProvider {...methods} style={{ order: 3 }}>
          <FilterForm
            onChange={changeFilterParams}
            initialState={initialSearchParams}
            mobileState={filter}
            countParams={countParams}
            setCountParams={setCountParams}
          />
        </FormProvider>
      ) : null}

   

      <PageContent>
        {!store.eventsStore._events ? (
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
            <ContentLoader speed={2} width={100} height={28} viewBox="0 0 100 28" backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
              <rect x="0" y="0" rx="0" ry="0" width="28" height="28" />
              <rect x="38" y="8" rx="0" ry="0" width="60" height="18" />
            </ContentLoader>

            <EventsListSkeleton />
          </div>
        ) : store.eventsStore._events?.length ? (
          <EventsListWrapper>
            {eventsByDate?.today?.length ? (
              <EventsList categoryTitle="Сегодня" events={eventsByDate.today} fetchNextPage={fetchNextPage} moreButton={false} />
            ) : null}
            {eventsByDate?.tomorrow?.length ? (
              <EventsList categoryTitle="Завтра" events={eventsByDate.tomorrow} fetchNextPage={fetchNextPage} moreButton={false} />
            ) : null}
            <EventsList categoryTitle="Неделя" events={eventsByDate.after} fetchNextPage={fetchNextPage} moreButton />
          </EventsListWrapper>
        ) : (
          <NotFoundFilter notFound={filter}>
            <NotFoundText>Ничего не найдено</NotFoundText>
            <AboutNotFound>Попробуйте изменить данные поиска или фильтры</AboutNotFound>
            <NotFoundLink onClick={resetSearch}>Сбросить фильтр</NotFoundLink>
          </NotFoundFilter>
        )}
        {filter && (
          <FilterFeedback>
            <FeedbackForm />
          </FilterFeedback>
        )}
      </PageContent>
      <ScrollUp />
    </>
  );
});
