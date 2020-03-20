import { useState } from 'react';
import { authorize } from 'react-native-app-auth';

import config from '../../config';

import {
  GITHUB_LOGIN_SUCCESS,
  GTIHUB_LOGIN_FAIL
} from './types';

export const githubLogin = () => async dispatch => {
    const [token, setToken] = useState({})
    if (token.length > 0) {
      console.logl('token alredy exist');
      dispatch({ type: GITHUB_LOGIN_SUCCESS, payload: token });
    } else {
      console.log('token did not find, executing login')
      doGitgubLogin(dispatch);
    }
}

const doGitgubLogin = async dispatch => {
    try {
        await authorize(config);
          setToken(response.accessToken);
          dispatch({ type: GITHUB_LOGIN_SUCCESS, payload: token })
          console.log('login success');
    } catch (error) {
        console.log('login error: ', error);
        dispatch({ type: GITHUB_LOGIN_FAIL })
    }
}
