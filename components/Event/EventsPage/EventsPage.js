import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import InfiniteLoader from 'react-infinite-scroll-component';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  AboutNotFound,
  DropDown,
  FilterBlock,
  FilterBox,
  FilterFeedback,
  NotFoundFilter,
  NotFoundLink,
  NotFoundText,
  SearchButton,
} from '../../../styles/blocks/FilterBlock';
import { MenuList } from '../../TopPanel/TopPanelStyles';
import { MenuLink } from '../../kit/MenuLink/MenuLink';
import SearchIconSmall from '../../../data/assets/svg/searchSmall.svg';
import { EventGrid } from '../../../styles/blocks/EventGrid';
import { EventCard } from '../EventCard/EventCard';
import { CategoriesWrapperBlock } from '../../../styles/blocks/CategoriesWrapperBlock';
import { FilterEvents } from '../../FilterEvents/FilterEvents';
import { PageContent } from '../../../styles/blocks/PageContent';
import { ScrollUp } from '../../kit/ScrollUp/ScrollUp';
import { store } from '../../../data/store';
import { FetchButton } from '../../../styles/blocks/FetchButton';
import { EventFeedback } from '../EventFeedback/EventFeedback';
import { eventsStore } from '../../../data/store/events/eventsStore';
import useMediaQuery from '../../../lib/useMediaQuery';

export const EventsPage = observer(() => {
  const router = useRouter();
  const { asPath } = router;
  const queryParams = useMemo(() => {
    const r = asPath.split('?');
    return r.length > 0 ? r.at(1) : undefined;
  }, [asPath]);

  const fetchNextPage = () => {
    if (store.eventsStore.fetchCount >= store.eventsStore.MAX_AUTO_FETCH) return;
    store.eventsStore.fetchEventsNextPage();
  };

  const initialSearchParams = {
    theme: router?.query?.name || null,
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

  useEffect(() => {
    if (size.clientWidth <= 768) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  }, [size]);

  const mobileS = useMediaQuery('(max-width: 768px)');

  function FeedbackForm() {
    return (
      <>
        <FilterEvents
          openFilter={filter}
          openFilterSet={() => setFilter()}
          openSearch={() => store.pageStore.setShowOuterPanel(store.pageStore.panelTypes.SEARCH)}
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
            <MenuLink href={`/events${queryParams !== undefined ? `?${queryParams}` : ''}`} eq>
              Все
            </MenuLink>
            {store.eventsStore.themes.map(
              (item) =>
                item.name && (
                  <MenuLink
                    href={`/events/theme/${item.name}${queryParams !== undefined ? `?${queryParams}` : ''}`}
                    key={item.name}
                    eq
                  >
                    {item.description}
                  </MenuLink>
                ),
            )}
          </MenuList>
        </CategoriesWrapperBlock>
      </FilterBlock>
      <FilterBox>
        <SearchButton black onClick={() => store.pageStore.setShowOuterPanel(store.pageStore.panelTypes.SEARCH)}>
          <SearchIconSmall />
          <div>Поиск события</div>
        </SearchButton>
        <DropDown onClick={() => setFilter(!filter)}>{filter ? 'Закрыть' : 'Фильтр'}</DropDown>
      </FilterBox>
      {/* {filter && (
        <FilterFeedback feedbackMobile>
          <FeedbackForm />
        </FilterFeedback>
      )} */}
      <PageContent>
        {store.eventsStore.events.length !== 0 ? (
          <InfiniteLoader
            o={{ width: '100%' }}
            style={{ marginLeft: '-5px' }}
            dataLength={store.eventsStore.events.length}
            next={() => fetchNextPage()}
            hasMore={store.eventsStore.hasMore}
            loader={<br />}
          >
            <EventGrid>
              {store.eventsStore?.events?.map((event) => (
                <EventCard event={event} key={event.id} />
              ))}
              {!mobileS && <EventFeedback feedbackMobile />}
              <FetchButton
                style={{
                  visibility:
                    store.eventsStore.fetchConfig.skip + store.eventsStore.fetchConfig.take <= store.eventsStore.count
                      ? ''
                      : 'hidden',
                }}
                backgroundColor
                onClick={() => store.eventsStore.fetchEventsNextPage()}
              >
                Загрузить еще
              </FetchButton>
            </EventGrid>
          </InfiniteLoader>
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
