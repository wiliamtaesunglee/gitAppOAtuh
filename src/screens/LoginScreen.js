import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('LogedUserScreen')}
        />
      </View>
    );
  }

export default LoginScreen;