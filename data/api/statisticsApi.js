import { fetchWrapper } from '../../helpers/fetchWrapper';

export function getThemes() {
  return fetchWrapper
    .get('/api/statistic/theme')
    .then((res) => res)
    .catch(() => []);
}

export function getFilterParams(params) {
  return fetchWrapper
    .get('/api/statistic/full', params)
    .then((res) => res)
    .catch(() => []);
}

export const getOrganizers = (organizer) => {
  return fetchWrapper
    .get('/api/organizer', { take: 5, organizer })
    .then((res) => res)
    .catch(() => []);
};
