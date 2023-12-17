import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import ClearIcon from '../../data/assets/svg/clear.svg';
import {
  CrossButton,
  FFCheckResultTxt2,
  FFContainer,
  FFControls,
  FFInput,
  FFOpenMobileFilter,
  FFOpenMobileFilterParams,
  FFOpenMobileFilterTittle,
  FFResultsMobile,
  FFSectionTxtButton,
  InputWrapper,
  SearchButton,
} from '../../styles/blocks/FilterForm';
import { FilterForm } from './FilterForm';
import { store } from '../../data/store';
import { FilterWrapper } from '../../styles/blocks/FilterWrapper';
import SearchIcon from '../../data/assets/svg/searchGrey.svg';
import useMediaQuery from '../../lib/useMediaQuery';
import { MenuList } from '../TopPanel/TopPanelStyles';
import { MenuLink } from '../kit/MenuLink/MenuLink';

const MenuListWrap = styled.div`
  order: 2;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.bg};
`;

export function FilterEvents({
  openFilter,
  openFilterSet,
  methods,
  countParams,
  initialSearchParams,
  changeFilterParams,
  setCountParams,
  resetFilter,
}) {
  const resetForm = (e) => {
    e.stopPropagation();
    resetFilter();
  };

  const router = useRouter();
  const { query, asPath } = router;

  const queryParams = useMemo(() => {
    const r = asPath.split('?');
    return r.length > 0 ? r.at(1) : undefined;
  }, [asPath]);

  const [searchString, setSearchString] = useState(store.eventsStore.fetchConfig.name);

  const searchThemes = () => {
    const rawParams = asPath.split('?');
    const params = new URLSearchParams(rawParams.length > 0 ? rawParams[1] : '');
    if (searchString) {
      params.set('q', searchString);
    } else {
      params.delete('q');
    }

    console.dir(params);
    const pQuery = { ...query, q: searchString };
    console.dir(pQuery);

    router.replace(`${rawParams[0]}?${params.toString()}`, undefined, { shallow: true });
    store.eventsStore.setFetchConfig({ name: searchString });
  };

  const clearThemes = () => {
    store.eventsStore.setFetchConfig({ name: '' });
  };

  const onKeyUp = (e) => {
    if (e.code === 'Enter') {
      searchThemes();
    }
  };

  const mobileS = useMediaQuery('(max-width: 768px)');

  return (
    <FilterWrapper className={openFilter ? 'open' : ''}>
      <InputWrapper onKeyUp={onKeyUp}>
        <SearchButton event={searchString} onClick={searchThemes}>
          <SearchIcon />
        </SearchButton>
        <FFInput
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          value={searchString}
          inputFilter
          type="text"
          placeholder="Поиск"
        />
        {searchString && (
          <CrossButton
            onClick={() => {
              setSearchString('');
              clearThemes();
            }}
          >
            <ClearIcon />
          </CrossButton>
        )}
      </InputWrapper>
      <FFControls>
        <FFOpenMobileFilter
          type="button"
          onClick={() => {
            openFilterSet(!openFilter);
          }}
        >
          <FFOpenMobileFilterTittle>Фильтр мероприятий</FFOpenMobileFilterTittle>
          {!!countParams && (
            <>
              <FFOpenMobileFilterParams>
                {countParams}
                <span> параметров поиска</span>
              </FFOpenMobileFilterParams>
              <FFSectionTxtButton onClick={resetForm}>Сбросить фильтр ++2</FFSectionTxtButton>
            </>
          )}
        </FFOpenMobileFilter>
      </FFControls>
      {mobileS ? (
        createPortal(
          <div
            style={{
              position: 'fixed',
              backgroundColor: '#000000',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 50000,
            }}
          >
            <FFContainer className={openFilter ? 'open' : ''}>
              <FormProvider {...methods} style={{ order: 3 }}>
                <FilterForm
                  onChange={changeFilterParams}
                  initialState={initialSearchParams}
                  mobileState={openFilter}
                  countParams={countParams}
                  setCountParams={setCountParams}
                />
              </FormProvider>
              <MenuListWrap>
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
              </MenuListWrap>

              <FFResultsMobile
                onClick={() => {
                  openFilterSet(!openFilter);
                }}
              >
                {/* <div>{`Найдено ${store.eventsStore.count} ${pluralize(store.eventsStore.count, [
                  'событие',
                  'события',
                  'событий',
                ])}`}</div> */}
                <FFCheckResultTxt2 style={{ fontSize: '16px' }}>Посмотреть</FFCheckResultTxt2>
              </FFResultsMobile>
            </FFContainer>
          </div>,
          document.body,
        )
      ) : (
        <FFContainer className={openFilter ? 'open' : ''}>
          <FormProvider {...methods}>
            <FilterForm
              onChange={changeFilterParams}
              initialState={initialSearchParams}
              mobileState={openFilter}
              countParams={countParams}
              setCountParams={setCountParams}
            />
          </FormProvider>
          <FFResultsMobile
            onClick={() => {
              openFilterSet(!openFilter);
            }}
          >
            {/* <div>{`Найдено ${store.eventsStore.count} ${pluralize(store.eventsStore.count, [
              'событие',
              'события',
              'событий',
            ])}`}</div> */}
            <FFCheckResultTxt2 style={{ fontSize: '16px' }}>Посмотреть</FFCheckResultTxt2>
          </FFResultsMobile>
        </FFContainer>
      )}
    </FilterWrapper>
  );
}
