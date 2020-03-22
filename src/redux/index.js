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

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GITHUB_LOGIN:
      return {
        ...state,
        token: action.token
      };
    case FETCH_USER_DATA:
      return {
        ...state,
        userData: action.userData
      };
    case FETCH_DEVS_AROUND:
      return {
      ...state,
      developersAround: action.developersAround
      };
    default:
      return state;
    }
  };
