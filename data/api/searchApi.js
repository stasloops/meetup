import { fetchWrapper } from '../../helpers/fetchWrapper';

export function advancedSearch(params) {
  return fetchWrapper
    .multiGet('/api/search/advanced', params)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}
