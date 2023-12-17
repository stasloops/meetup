import { server } from './config';

function getEvents(par, options) {
  // const params = par ? `?${new URLSearchParams(Object.entries(par).filter(([, value]) => !!value)).toString()}` : '';
  const params = `skip=${par.skip}&take=${par.take}${par.theme ? `&theme=${par.theme}` : ''}`
  return fetch(`${server}/api/search/advanced?${params}`, options)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}

function getEvent(id, options) {
  return fetch(`${server}/api/event/${id}`, options)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}

function getFilterParams(par, options) {
  const params = par ? `?${new URLSearchParams(Object.entries(par).filter(([, value]) => !!value)).toString()}` : '';
  return fetch(`${server}/api/statistic/full${params}`, options)
    .then((res) => res)
    .catch(() => []);
}

function getPromoData(par, options) {
  const params = par ? `?${new URLSearchParams(Object.entries(par).filter(([, value]) => !!value)).toString()}` : '';
  const result = { total: 0, data: [] };
  return fetch(`${server}/api/promo${params}`, options)
    .then((res) => res.json())
    .then((res) => {
      result.total = (res?.events?.total || 0) + (res?.news?.total || 0);
      result.data = [...(res?.events?.data || []), ...(res?.news?.data || [])];

      return JSON.parse(JSON.stringify(result));
    })
    .then((res) => res.data.sort((a, b) => a.priority - b.priority))
    .catch(() => []);
}

export const eventsService = {
  getEvent,
  getEvents,
  getFilterParams,
  getPromoData,
};
