import {
  GITHUB_LOGIN,
  FETCH_USER_DATA,
  FETCH_DEVS_AROUND
  } from './types';

export const githubLogin = (token) => ({
    type: GITHUB_LOGIN,
    payload: token
});

export const fetchUserData = (userData) => ({
    type: FETCH_USER_DATA,
    payload: userData
});

export const fetchDevsAround = (devsAround) => ({
    type: FETCH_DEVS_AROUND,
    payload: devsAround
});

