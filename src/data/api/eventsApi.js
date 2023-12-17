import { fetchWrapper } from '../../helpers/fetchWrapper';

export function getEvents(params) {
  return fetchWrapper
    .get('/api/theme', params)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}

export function getEvent(id) {
  return fetchWrapper
    .get(`/api/event/${id}`)
    .then((res) => res)
    .catch(() => ({}));
}
