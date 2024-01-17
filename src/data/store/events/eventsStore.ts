// @ts-nocheck
import { makeAutoObservable, reaction } from 'mobx';
import { advancedSearch } from '../../api/searchApi';
import { getFilterParams, getThemes } from '../../api/statisticsApi';
import { typeGroups } from '../../../helpers/filterMatrix';

class EventsStore {
  DEFAULT_EVENTS_SKIP = 0;

  DEFAULT_EVENTS_TAKE = 15;

  MAX_AUTO_FETCH = 2;

  // eslint-disable-next-line no-underscore-dangle
  _events = null;

  // eslint-disable-next-line no-underscore-dangle
  _count = 0;

  // eslint-disable-next-line no-underscore-dangle
  _fetchConfig = {
    name: null,
    format: null,
    type: null,
    payment: null,
    place: null,
    organizer: null,
    skip: this.DEFAULT_EVENTS_SKIP,
    take: this.DEFAULT_EVENTS_TAKE,
    theme: null,
  };

  fetchCount = 0;

  filterParams = [];

  filterState = 'done';

  filterFetchConfig = {
    theme: null,
    place: null,
    organization: null,
  };

  inCardOrganizerSelect = false;

  state = 'done';

  themes = [];

  constructor() {
    makeAutoObservable(this);

    this.fetchThemes();
    reaction(
      () => this._fetchConfig,
      () => this.fetchEventsByFilter(),
    );
  }

  toggleInCardOrganizerSelect(flag) {
    this.inCardOrganizerSelect = flag;
  }

  hydrate = (data) => {
    if (data) {
      this.setFetchConfig(data);
    }
  };

  get events() {
    return Array.isArray(this._events) ? this._events : [];
  }

  setEvents(events, theme) {
    this.state = 'done';
    this._count = events.total;
    this._events = events.data;

    if (theme !== undefined) {
      this._fetchConfig.theme = theme;
    }
    this.resetFetchCount();
    this._fetchConfig.skip = this.DEFAULT_EVENTS_SKIP;
    this._fetchConfig.take = this.DEFAULT_EVENTS_TAKE;
  }

  setFilterParams(params, theme) {
    const groupTypes = {};

    params?.type?.forEach(({ name, _count: count }) => {
      if (!typeGroups[name]) return;
      if (!groupTypes[typeGroups[name]]) groupTypes[typeGroups[name]] = { types: [], count: 0 };

      const group = groupTypes[typeGroups[name]];
      group.types.push(name);
      group.count += +count;
    });

    this.filterParams = params;

    if (Object.keys(groupTypes).length) {
      this.filterParams.groups = groupTypes;
    }

    if (theme !== undefined) {
      this.setFilterFetchConfig({ theme });
    }
  }

  get count() {
    return this._count;
  }

  get hasMore() {
    return this._fetchConfig.skip + this._fetchConfig.take < this._count;
  }

  setFetchConfig(val) {
    this._fetchConfig = { ...this._fetchConfig, skip: 0, take: 15, ...val };
  }

  setFilterFetchConfig(val) {
    this.filterFetchConfig = { ...this.filterFetchConfig, ...val };
  }

  get fetchConfig() {
    return this._fetchConfig;
  }

  fetchFilterParams() {
    if (this.filterState === 'pending') return;
    this.filterState = 'pending';
    getFilterParams(this.filterFetchConfig).then(this.fetchFilterParamsSuccess).catch(this.fetchFilterParamsError);
  }

  fetchFilterParamsSuccess = (result) => {
    this.resetFetchCount();
    this.filterState = 'done';
    this.setFilterParams(result);
  };

  fetchFilterParamsError = (error) => {
    this.filterState = 'error';
    this.filterParams = [];
    // eslint-disable-next-line no-console
    console.error(error);
  };

  fetchEventsByFilter() {
    if (this.state === 'pending') return;
    this.state = 'pending';
    advancedSearch(this._fetchConfig).then(this.fetchEventsSuccess).catch(this.fetchEventsError);
  }

  fetchEventsNextPage() {
    this.fetchCount++;
    this._fetchConfig = {
      ...this._fetchConfig,
      skip: this._fetchConfig.skip + this._fetchConfig.take,
    };
  }

  resetFetchCount() {
    this.fetchCount = 0;
  }

  fetchEventsSuccess = (result) => {
    this.state = 'done';
    this._count = result.total;
    if (this._fetchConfig.skip !== 0) this._events = [...this._events, ...result.data];
    else this._events = result.data;
  };

  fetchEventsError = (error) => {
    this.state = 'error';
    this._events = [];
    // eslint-disable-next-line no-console
    console.error(error);
  };

  fetchThemes() {
    getThemes().then(this.fetchThemesSuccess).catch(this.fetchThemesError);
  }

  fetchThemesSuccess = (themes) => {
    const otherTheme = themes.find((e) => e.name === 'other');
    if (otherTheme) {
      const arr = themes.filter((e) => e.name !== 'other');
      arr.push(otherTheme);
      this.themes = arr;
    } else this.themes = themes;
  };

  fetchThemesError = (error) => {
    this.themes = [];
    // eslint-disable-next-line no-console
    console.error(error);
  };
}

export const eventsStore = new EventsStore();
