import { AsyncStorage } from 'react-native';

import {
  GITHUB_LOGIN_SUCCESS
} from './types';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('gh_token');

    if (token) {

    } else {

    }
  }
