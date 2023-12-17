import { useState } from 'react';
import styled from 'styled-components';
import { store } from '../../data/store';
import { CrossButton, SearchButton } from '../../styles/blocks/FilterForm';
// import { FFInputT } from './FFInputT';
// import { CrossButton, FFInput, InputWrapper } from '../../../styles/blocks/FilterForm';
import ClearIcon from '../../data/assets/svg/clear.svg';

import SearchIcon from '../../data/assets/svg/searchGrey.svg';
import { SearchPanelWrapper } from './SearchPanelWrapper';
// import {  } from '../../styles/blocks/FilterForm';//

const SearchInputWrapper = styled.div`
  background: ${({ theme }) => theme.searchBg};
  display: flex;
  flex-direction: row;
  width: 300px;
  font: 14px Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  align-items: center;
  gap: 0.6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${({ theme }) => theme.red};
  & span {
    margin-top: 7px;
  }

  @media (max-width: 675px) {
    & {
      width: 270px;
    }
  }
  @media (max-width: 375px) {
    & {
      width: 265px;
    }
  }
`;

const SearchInput = styled.input`
  font: 14px Inter;
  height: 36px;
  /* width: 300px; */
  font-weight: 300;
  line-height: 20px;
  border: none;
  flex: 1;
  width: 0;
  color: ${({ theme }) => theme.textTag};

  background: transparent;
  /* background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; */

  /* padding: ${(props) => (props.inputFilter ? '8px 0px 9px 42px' : '10px 0px 9px 52px')}; */

  &::placeholder {
    /* color: ${({ theme }) => theme.textTag}; */
    /* background: transparent; */
    font-weight: 500;
    opacity: 0.6;
  }

  :not(:placeholder-shown) {
    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* border-image-source: ${({ theme }) => theme.greenGradient}; */
  /* background: transparent;
  border-image-slice: 1;
  border-width: 1px; */
  outline: none;

  /* &:hover,
  &:focus {
    border-image-source: ${({ theme }) => theme.orangeGradient};
    background: transparent;
    border-image-slice: 1;
    border-width: 1px;
    outline: none;
  } */

  /* &:hover,
  &:focus {
    border-image-source: ${({ theme }) => theme.orangeGradient};
    background: transparent;
    border-image-slice: 1;
    border-width: 1px;
    outline: none;
  } */
`;
/*

*/
/* ${({ theme }) => theme.greenGradient} */

const SearchButtonSP = styled(SearchButton)`
  position: static;
  /* top: 4px;
  left: 28px; */
  & path {
    fill: ${(props) => (props.event ? 'url(#greenGradient)' : props.theme.textTag)};
  }
`;

const CrossButtonSP = styled(CrossButton)`
  position: static;
  /* top: 4px;
  right: 32px; */
`;

export function SearchPanel() {
  const [searchString, setSearchString] = useState(store.eventsStore.fetchConfig.name);
  const searchThemes = () => {
    store.eventsStore.setFetchConfig({ name: searchString });
    store.pageStore.resetOuterPanel();
  };
  const clearThemes = () => {
    store.eventsStore.setFetchConfig({ name: '' });
    // store.pageStore.resetOuterPanel();
  };
  const onKeyUp = (e) => {
    if (e.code === 'Enter') {
      searchThemes();
      store.pageStore.resetOuterPanel();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key && e.key === 'Enter') {
      searchThemes();
      store.pageStore.resetOuterPanel();
    }
  };

  const handleClosePannel = () => {
    store.pageStore.resetOuterPanel();
  };

  return (
    <SearchPanelWrapper onKeyUp={onKeyUp} onClick={handleClosePannel}>
      <SearchInputWrapper>
        <SearchButtonSP event={searchString} onClick={searchThemes}>
          <SearchIcon />
        </SearchButtonSP>
        <SearchInput
          autoFocus
          placeholder="Поиск"
          value={searchString}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        {searchString && (
          <CrossButtonSP
            onClick={() => {
              setSearchString('');
              clearThemes();
            }}
          >
            <ClearIcon />
          </CrossButtonSP>
        )}
      </SearchInputWrapper>
      {/* <FFInputT
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        value={searchString}
        inputFilter
        type="text"
        placeholder="Поиск события === "
      />
      {searchString && (
        <CrossButtonSP
          onClick={() => {
            setSearchString('');
            clearThemes();
          }}
        >
          <ClearIcon />
        </CrossButtonSP>
      )} */}
    </SearchPanelWrapper>
  );
}
