'use client';

import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { SearchButton } from '../../styles/blocks/FilterForm';
import ClearIcon from '../../data/assets/svg/clear_2.svg';
import SearchIcon from '../../data/assets/svg/searchGrey.svg';
import { eventsService } from '../../services/events.service';
import { store } from '../../data/store';
import { useClose } from '../../lib/useClose';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #ff5a99;
`;

const InputButton = styled.button`
  background: var(--Linear, linear-gradient(63deg, #ef6129 12.75%, #f06032 16.6%, #f85d6a 43.57%, #fd5b8c 63.6%, #ff5a99 75.16%));
  color: #fff;
  border: none;
  height: 34px;
  padding: 0 21px;
  font-family: var(--inter);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const Input = styled.input`
  background-color: unset;
  color: ${({ theme }: any) => theme.color};
  border: none;
  outline: 0;
  height: 100%;
  width: 100%;
  font-family: var(--inter);
  font-size: 14px;
  font-weight: 500;
`;

const SearchVariantsWrapper = styled.div`
  position: absolute;
  z-index: 101;
  top: 35px;
  width: calc(100% + 2px);
  margin-left: -1px;
  box-sizing: border-box;
`;

const SearchVariantsItem = styled.div`
  padding: 8px 10px;
  background-color: #3e3e4f;
  cursor: pointer;

  &:hover {
    background-color: #ff5a99;
  }
`;

const SearchButtonSP = styled(SearchButton)`
  position: static;
  padding: 0 10px;
  margin-top: 3px;

  & path {
    fill: ${({ theme }: any) => theme.color};
  }
`;

const CrossButtonSP = styled.span`
  display: inline-block;
  margin-right: 10px;
  margin-top: 3px;
  padding-left: 8px;
  transform: scale(1.4);
  fill: currentColor;
  stroke: currentColor;
  color: ${({ theme }: any) => theme.color};
  cursor: pointer;
`;

interface SearchEventsInputProps {
  onChange: (value: string) => void;
  value: string;
}
export const SearchEventsInput: FC<SearchEventsInputProps> = observer(({ onChange, value }) => {
  const [searchVariants, setSearchVariants] = useState<{ id: string; name: string }[]>([]);
  const router = useRouter();

  const resetSearchVariants = () => {
    setSearchVariants([]);
  };
  const { ref } = useClose(resetSearchVariants);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const clearThemes = () => {
    store.eventsStore.setFetchConfig({ name: '' });
  };

  const handleClosePanel = () => {
    store.pageStore.resetOuterPanel();
  };

  const routeToEvent = (eventId: string) => {
    router.push(`/events/${eventId}`);
    handleClosePanel();
  };

  const searchThemes = () => {
    if (!value) {
      return;
    }
    store.eventsStore.setFetchConfig({ name: value });
    store.pageStore.resetOuterPanel();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key && e.key === 'Enter') {
      searchThemes();
      store.pageStore.resetOuterPanel();
    }
  };

  useEffect(() => {
    const fetchSearchVariants = async () => {
      if (!value || value.length < 3) {
        return setSearchVariants([]);
      }
      const res = await eventsService.getSearchVariants(value);
      setSearchVariants(res.data);
    };
    void fetchSearchVariants();
  }, [value]);

  return (
    <InputWrapper ref={ref}>
      <SearchButtonSP onClick={searchThemes}>
        <SearchIcon />
      </SearchButtonSP>
      <Input value={value} onKeyDown={handleKeyDown} onChange={handleOnChange} placeholder="Поиск события" />

      <CrossButtonSP
        style={{ opacity: value ? '1' : '0' }}
        onClick={() => {
          onChange('');
          clearThemes();
        }}
      >
        <ClearIcon />
      </CrossButtonSP>

      <InputButton onClick={searchThemes}>Поиск</InputButton>
      <SearchVariantsWrapper>
        {searchVariants?.map((item) => (
          <SearchVariantsItem onClick={() => routeToEvent(item.id)} key={item.id}>
            {item.name}
          </SearchVariantsItem>
        ))}
      </SearchVariantsWrapper>
    </InputWrapper>
  );
});
