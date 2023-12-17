import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { SearchEventsButton, SearchEventsWrapper, SearchEventsControls } from './SearchEventsStyles';
import { Input } from '../kit/Input/Input';
import { store } from '../../data/store';
import { withClickOutside } from '../../helpers/hocs/withClickOutside';

export const SearchEvents = observer(({ setShowIcons }) => {
  const searchThemes = () => {
    store.eventsStore.setFetchConfig({ name: store.pageStore.searchedEventName });
  };

  const SearchEventsWrapperHOC = withClickOutside(SearchEventsWrapper);

  const rootEl = useRef();

  const onKeyUp = (e) => {
    if (e.code === 'Enter') {
      searchThemes();
    }
  };

  return (
    <SearchEventsWrapperHOC exclude={[rootEl.current]} onClickOutside={() => setShowIcons((e) => !e)} s>
      <SearchEventsControls onKeyUp={onKeyUp}>
        <Input
          type="text"
          placeholder="Введите данные"
          onChange={(e) => {
            store.pageStore.setSearchedEventName(e.target.value);
          }}
          value={store.pageStore.searchedEventName}
        />
        <SearchEventsButton onClick={searchThemes}>Поиск</SearchEventsButton>
      </SearchEventsControls>
    </SearchEventsWrapperHOC>
  );
});
