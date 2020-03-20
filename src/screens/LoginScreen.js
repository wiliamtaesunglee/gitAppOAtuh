import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
//import { connect } from 'react-redux'
import { authorize } from 'react-native-app-auth';

import config from '../../config';

const LoginScreen = ({ navigation }) => {
    const [token, setToken] = useState({});
    const githubLoginRequest = async () => {
        try {
            const response = await authorize(config);

            await setToken(response.accessToken);

            console.log('User Login Success')

        } catch (error) {
            console.log('retorno do erro: ', error);
        }
    }
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => githubLoginRequest()}
        />
        {
          token.length > 0 ? navigation.navigate('LogedUserScreen') : <Text>Favor efetuar Login</Text>
        }
      </View>
    );
  }

export default LoginScreen;
