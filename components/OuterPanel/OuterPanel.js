import { observer } from 'mobx-react-lite';
import { OuterPanelWrapper, OuterPanelContent } from './OuterPanelStyles';
import { store } from '../../data/store';

export const OuterPanel = observer(({ children, place }) => {
  const closeSearch = (e) => {
    if (e.target.classList.contains('openSearch') && store.pageStore.showOuterPanel) store.pageStore.resetOuterPanel();
  };

  return (
    <OuterPanelWrapper
      className={store.pageStore.showOuterPanel ? 'openSearch' : ''}
      onClick={closeSearch}
      place={place}
    >
      <OuterPanelContent place={place}>{children}</OuterPanelContent>
    </OuterPanelWrapper>
  );
});
