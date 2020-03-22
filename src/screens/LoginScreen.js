import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { authorize } from 'react-native-app-auth';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../config';
import { FETCH_USER_DATA } from '../actions/types';

const LoginScreen = ({ navigation }) => {
    const [userData, setUserData] = useState({});
    const [token, setToken] = useState({});

    const dispatch = useDispatch();

    const githubLoginRequest = async () => {
        try {
            await authorize(config)
              .then(r => {
                setToken(r.accessToken)
                fetch('https://api.github.com/user', {
                  method: 'GET',
                  headers: {
                      "Authorization": `token ${r.accessToken}`
                  }
                })
                .then(r => {
                  setUserData(r._bodyText)
                  console.log(r)
                })
              })
        }
        catch (error) {
            console.log('retorno do erro: ', error);
        }
    }

    const storeUserData = (userData) => {
      dispatch({
        type: FETCH_USER_DATA,
        userData: userData
      })
    };

    storeUserData(userData);

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
