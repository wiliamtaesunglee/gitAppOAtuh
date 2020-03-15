import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import LogedUserScreen from './src/screens/LogedUserScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="LogedUserScreen"
          component={LogedUserScreen}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
