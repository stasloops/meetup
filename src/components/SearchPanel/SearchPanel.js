'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { store } from '../../data/store';
import { useClose } from '../../lib/useClose';
import { SearchEventsInput } from '../SearchEventsInput/SearchEventsInput';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.bg};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

function SearchPanel() {
  const [searchString, setSearchString] = useState(store.eventsStore._fetchConfig.name);

  const onKeyUp = (e) => {
    if (e.code === 'Enter') {
      searchThemes();
      store.pageStore.resetOuterPanel();
    }
  };

  const handleClosePanel = () => {
    store.pageStore.resetOuterPanel();
  };
  const { ref } = useClose(handleClosePanel);

  return (
    <Wrapper onKeyUp={onKeyUp}>
      <Container>
        <span ref={ref}>
          <SearchEventsInput onChange={setSearchString} value={searchString} />
        </span>
      </Container>
    </Wrapper>
  );
}

export default SearchPanel;
