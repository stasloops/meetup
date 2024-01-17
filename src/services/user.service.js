import { BehaviorSubject } from 'rxjs';
import Router from 'next/navigation';
import { fetchWrapper } from '../helpers/fetchWrapper';

const publicRuntimeConfig = '';
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(process.browser && {});

function login(email, password) {
  return fetch('/api/auth/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    if (!data.ok) throw new Error('Auth error');
    const user = {};
    userSubject.next(user);
    return user;
  });
}

function logout() {
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push('/login');
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  getAll,
};
