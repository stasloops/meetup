import { makeAutoObservable } from 'mobx';

class PageStore {
  _showOuterPanel = '';

  _searchedEventName = '';

  _panelTypes = { SEARCH: 'search', MENU: 'menu' };

  _promoData = null;

  _sliderPromoProgress = 0;

  _currentSlide = 0;

  _sliderItemsLength = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get sliderItemsLength() {
    return this._sliderItemsLength;
  }

  get currentSlide() {
    return this._currentSlide;
  }

  get sliderPromoProgress() {
    return this._sliderPromoProgress;
  }

  get promoData() {
    return this._promoData;
  }

  get showOuterPanel() {
    return this._showOuterPanel;
  }

  get searchedEventName() {
    return this._searchedEventName;
  }

  setSliderItemsLength(length: number) {
    this._sliderItemsLength = length;
  }

  setCurrentSlide(slideindex: number) {
    this._currentSlide = slideindex;
  }

  incrementCurrentSlide() {
    if (this._currentSlide === this._sliderItemsLength - 1) {
      this._currentSlide = 0;
    } else {
      this._currentSlide += 1;
    }
  }

  decrementCurrentSlide() {
    if (this._currentSlide === 0) {
      this._currentSlide = this._sliderItemsLength - 1;
    } else {
      this._currentSlide -= 1;
    }
  }

  incrementSliderPromoProgress(inc: number) {
    this._sliderPromoProgress += inc;
  }

  resetSliderPromoProgress() {
    this._sliderPromoProgress = 0;
  }

  setPromoData(promoData: any) {
    this._promoData = promoData;
  }

  setSearchedEventName(eventName: string) {
    this._searchedEventName = eventName;
  }

  setShowOuterPanel(panelType: string) {
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
