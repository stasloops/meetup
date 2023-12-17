import { makeAutoObservable } from 'mobx';

class PageStore {
  _showOuterPanel = '';

  _searchedEventName = '';

  _panelTypes = { SEARCH: 'search', MENU: 'menu' };

  constructor() {
    makeAutoObservable(this);
  }

  get showOuterPanel() {
    return this._showOuterPanel;
  }

  get searchedEventName() {
    return this._searchedEventName;
  }

  setSearchedEventName(eventName) {
    this._searchedEventName = eventName;
  }

  setShowOuterPanel(panelType) {
    if (Object.values(this._panelTypes).includes(panelType)) {
      this._showOuterPanel = panelType;
    }
  }

  resetOuterPanel() {
    this._showOuterPanel = '';
  }

  get panelTypes() {
    return this._panelTypes;
  }
}

export const pageStore = new PageStore();
