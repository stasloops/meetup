import { makeAutoObservable, reaction } from 'mobx';
import { advancedSearch } from '../../api/searchApi';
import { getFilterParams, getThemes } from '../../api/statisticsApi';
import { typeGroups } from '../../../helpers/filterMatrix';

class EventsStore {
  events = [];

  MAX_AUTO_FETCH = 2;

  DEFAULT_EVENTS_SKIP = 0;

  DEFAULT_EVENTS_TAKE = 15;

  fetchCount = 0;

  themes = [];

  filterParams = [];

  filterFetchConfig = {
    theme: null,
    place: null,
    organization: null,
  };

  fetchConfig = {
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

  inCardOrganizerSelect = false;

  count = 0;

  state = 'done';

  filterState = 'done';

  constructor() {
    makeAutoObservable(this);

    this.fetchThemes();
    reaction(
      () => this.fetchConfig,
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
    return Array.isArray(this.events) ? this.events : [];
  }

  setEvents(events, theme) {
    this.state = 'done';
    this.count = events.total;
    this.events = events.data;

    if (theme !== undefined) {
      this.fetchConfig.theme = theme;
    }
    this.resetFetchCount();
    this.fetchConfig.skip = this.DEFAULT_EVENTS_SKIP;
    this.fetchConfig.take = this.DEFAULT_EVENTS_TAKE;
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
    return this.count;
  }

  get hasMore() {
    return this.fetchConfig.skip + this.fetchConfig.take < this.count;
  }

  setFetchConfig(val) {
    this.fetchConfig = { ...this.fetchConfig, skip: 0, take: 15, ...val };
  }

  setFilterFetchConfig(val) {
    this.filterFetchConfig = { ...this.filterFetchConfig, ...val };
  }

  get fetchConfig() {
    return this.fetchConfig;
  }

  // TODO: for search task
  // fetchEventsBySearch() {}

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
    advancedSearch(this.fetchConfig).then(this.fetchEventsSuccess).catch(this.fetchEventsError);
  }

  fetchEventsNextPage() {
    this.fetchCount++;
    this.fetchConfig = {
      ...this.fetchConfig,
      skip: this.fetchConfig.skip + this.fetchConfig.take,
    };
  }

  resetFetchCount() {
    this.fetchCount = 0;
  }

  fetchEventsSuccess = (result) => {
    this.state = 'done';
    this.count = result.total;
    if (this.fetchConfig.skip !== 0) this.events = [...this.events, ...result.data];
    else this.events = result.data;
  };

  fetchEventsError = (error) => {
    this.state = 'error';
    this.events = [];
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
