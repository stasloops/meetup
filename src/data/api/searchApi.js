import { fetchWrapper } from '../../helpers/fetchWrapper';

export function advancedSearch(params) {
  let queryString = ""
  for (var key in params) {
    if (params[key] !== undefined && params[key] !== null) {
      queryString += `&${key}=${params[key]}`
    }
  }
  
  return fetchWrapper
    .multiGet(`/api/search/advanced?${queryString.replace("&", '')}`)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}
