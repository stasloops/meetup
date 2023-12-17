import { makeAutoObservable } from 'mobx';

class PageStore {
  showOuterPanel = '';

  searchedEventName = '';

  panelTypes = { SEARCH: 'search', MENU: 'menu' };

  constructor() {
    makeAutoObservable(this);
  }

  get showOuterPanel() {
    return this.showOuterPanel;
  }

  get searchedEventName() {
    return this.searchedEventName;
  }

  setSearchedEventName(eventName) {
    this.searchedEventName = eventName;
  }

  setShowOuterPanel(panelType) {
    if (Object.values(this.panelTypes).includes(panelType)) {
      this.showOuterPanel = panelType;
    }
  }

  resetOuterPanel() {
    this.showOuterPanel = '';
  }

  get panelTypes() {
    return this.panelTypes;
  }
}

export const pageStore = new PageStore();
