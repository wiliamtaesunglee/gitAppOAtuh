import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
//import { connect } from 'react-redux'
import { authorize } from 'react-native-app-auth';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../config';
import { GITHUB_LOGIN } from '../actions/types';

const LoginScreen = ({ navigation }) => {
    const [token, setToken] = useState({});
    const [userData, setUserData] = useState({});

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.token)

    const githubLoginRequest = async () => {
        try {
            await authorize(config)
              .then(r => setToken(r.accessToken))
        }
        catch (error) {
            console.log('retorno do erro: ', error);
        }
    }

    const storeToken = (token) => {
      dispatch({
        type: GITHUB_LOGIN,
        token: token
      })
    };


    storeToken(token);



    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => githubLoginRequest()}
        />
        {
          token.length > 0 ?
            navigation.navigate('LogedUserScreen')
            : <Text>Favor efetuar Login</Text>
        }
      </View>
    );
  }

export default LoginScreen;
