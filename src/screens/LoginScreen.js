import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { authorize } from 'react-native-app-auth';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../config';
import { FETCH_USER_DATA } from '../actions/types';
import ButtonComponent from '../components/Button';


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
                      "Authorization": `token ${r.accessToken}`,
                      'Content-Type': 'application/json'
                  }
                })
                .then(r => {
                  setUserData(JSON.parse(r._bodyText))
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
      <View style={styles.container}>

        <ButtonComponent
          title="Login"
          func={() => githubLoginRequest()}
       />
        {
          userData !== undefined ?
            navigation.navigate('LogedUserScreen')
            : <Text>Favor efetuar Login</Text>
        }
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "100%",
    alignItems: "center",
    justifyContent: 'center'
  },

})

export default LoginScreen;
