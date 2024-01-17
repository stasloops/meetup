interface Params {
  skip: number;
  take: number;
  theme?: string | string[];
  location?: string;
}

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: {};
}

async function getEvents(params: Params, options: FetchOptions): Promise<any> {
  const formedParams = `skip=${params.skip}&take=${params.take}${params.theme ? `&theme=${params.theme}` : ''}`;
  return fetch(`/api/search/advanced?${formedParams}`, options)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}

async function getEvent(id: string, options: FetchOptions): Promise<any> {
  return fetch(`/api/event/${id}`, options)
    .then((res) => res)
    .catch(() => ({ data: [] }));
}

async function getFilterParams(params: Params, options: FetchOptions): Promise<any> {
  const formedParams = params ? `?${new URLSearchParams(Object.entries(params).filter(([, value]) => !!value)).toString()}` : '';
  return fetch(`/api/statistic/full${formedParams}`, options)
    .then((res) => res)
    .catch(() => []);
}

async function getPromoData(params: Params, options: FetchOptions): Promise<any> {
  const formedParams = params ? `?${new URLSearchParams(Object.entries(params).filter(([, value]) => !!value)).toString()}` : '';
  const result: any = { total: 0, data: [] };

  return fetch(`/api/promo${formedParams}`, options)
    .then((res) => res.json())
    .then((res) => {
      result.total = (res?.events?.total || 0) + (res?.news?.total || 0);
      result.data = [...(res?.events?.data || []), ...(res?.news?.data || [])];

      return JSON.parse(JSON.stringify(result));
    })
    .then((res) => res.data.sort((a: any, b: any) => a.priority - b.priority))
    .catch(() => []);
}

async function getSearchVariants(prompt: string) {
  return fetch(`/api/search/base?name=${prompt}`)
    .then((res) => res.json())
    .then((res) => {
      return JSON.parse(JSON.stringify(res));
    });
}

export const eventsService = {
  getSearchVariants,
  getEvent,
  getEvents,
  getFilterParams,
  getPromoData,
};
