import { fetchWrapper } from '../../helpers/fetchWrapper';

export function sendFeedBackData(body) {
  return fetchWrapper
    .post('/api/feedback/send', body)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}
