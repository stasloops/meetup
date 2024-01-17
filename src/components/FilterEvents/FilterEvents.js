'use client';

import React, { useMemo, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { useParams, usePathname } from 'next/navigation';
import ContentLoader from 'react-content-loader';
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
import { backgroundColor, foregroundColor } from '../Skeletons/config';
import { SearchEventsInput } from '../SearchEventsInput/SearchEventsInput';

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

  const query = useParams();
  const path = usePathname();

  useMemo(() => {
    const r = path.split('?');
    return r.length > 0 ? r.at(1) : undefined;
  }, [path]);

  const [searchString, setSearchString] = useState(store.eventsStore._fetchConfig.name);

  const searchThemes = () => {
    store.eventsStore.setFetchConfig({ name: searchString, theme: query.theme });
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
        {store.eventsStore.filterParams?.format ? (
          <SearchEventsInput onChange={setSearchString} value={searchString} />
        ) : (
          <ContentLoader speed={2} width="100%" height={34} backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="34" />
          </ContentLoader>
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
      {mobileS ? null : (
        <FFContainer>
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
            <FFCheckResultTxt2 style={{ fontSize: '16px' }}>Посмотреть</FFCheckResultTxt2>
          </FFResultsMobile>
        </FFContainer>
      )}
    </FilterWrapper>
  );
}
