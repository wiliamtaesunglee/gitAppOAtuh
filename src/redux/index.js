import {
  GITHUB_LOGIN,
  FETCH_USER_DATA,
  FETCH_DEVS_AROUND
} from '../actions/types';

const initialState = {
  token: '',
  userData: {},
  developersAround: {}
};

export const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case GITHUB_LOGIN:
      return {
        ...state,
        token: payload
      };
    case FETCH_USER_DATA:
      return {
        ...state,
        userData: payload
      };
    case FETCH_DEVS_AROUND:
      return {
      ...state,
      developersAround: payload
      };
    default:
      return state;
    }
  };
