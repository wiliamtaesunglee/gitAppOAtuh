import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import LogedUserScreen from './src/screens/LogedUserScreen';
import userAroundMapScreen from './src/screens/userAroundMapScreen.js';
import userAroundScreen from './src/screens/userAroundScreen.js';
import userSearchDataScreen from './src/screens/userSearchedDataScreen.js';

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
        <Stack.Screen
          name="userAroundScreen"
          component={LogedUserScreen}
          options={{ title: "Users Around Your Location" }}
        />
        <Stack.Screen
          name="userAroundMapScreen"
          component={LogedUserScreen}
          options={{ title: "Users Around Your location Map" }}
        />
        <Stack.Screen
          name="userSearchDataScreen"
          component={LogedUserScreen}
          options={{ title: "User Selected Data" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
