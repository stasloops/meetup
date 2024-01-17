'use client';

import { observer } from 'mobx-react-lite';
import { OuterPanelWrapper, OuterPanelContent } from './OuterPanelStyles';
import { store } from '../../data/store';

export const OuterPanel = observer(({ children, place }) => {
  const closeSearch = (e) => {
    if (e.target.classList.contains('openSearch') && store.pageStore._showOuterPanel) store.pageStore.resetOuterPanel();
  };

  return (
    <OuterPanelWrapper className={store.pageStore._showOuterPanel ? 'openSearch' : ''} onClick={closeSearch} place={place}>
      <OuterPanelContent place={place}>{children}</OuterPanelContent>
    </OuterPanelWrapper>
  );
});
