// eslint-disable-next-line import/no-cycle
import { userService } from '../services/user.service';

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = userService.userValue;
  const isLoggedIn = user && user.accessToken;
  const isApiUrl = url.startsWith('/api/');
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.accessToken}` };
  }
  return {};
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      // eslint-disable-next-line promise/no-return-wrap
      return Promise.reject(error);
    }

    return data;
  });
}

function get(url, par, cookies = {}) {
  const params = par ? `?${new URLSearchParams(Object.entries(par).filter(([, value]) => !!value)).toString()}` : '';
  const requestOptions = {
    method: 'GET',
    headers: authHeader(url),
    Cookie: Object.entries(cookies)
      .map(([key, val]) => `${key}=${val}`)
      .join('; '),
  };
  return fetch(`${url}${params}`, requestOptions).then(handleResponse);
}

function multiGet(url, par) {
  const urlParams = new URLSearchParams();
  let params = '';
  if (par) {
    params = '?';
    const filteredParams = Object.entries(par).filter(([, value]) => value !== null);

    filteredParams.forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => urlParams.append(key, item));
      } else {
        urlParams.append(key, value);
      }
    });
  }
  params += urlParams.toString();
  const requestOptions = {
    method: 'GET',
    headers: authHeader(url),
  };
  return fetch(`${url}${params}`, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
// eslint-disable-next-line no-underscore-dangle
function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

export const fetchWrapper = {
  get,
  multiGet,
  post,
  put,
  delete: _delete,
};
