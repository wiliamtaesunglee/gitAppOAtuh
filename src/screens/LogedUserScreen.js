import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const LogedUserScreen = ({ navigation }) => {

const token = useSelector(state => state.token);
console.log('token existe?', token)

return (
    <View>
        <Button
            title="Go to List"
            onPress={() => navigation.navigate('userAroundScreen')}
          />
        <Button
            title="Go back to login screen"
            onPress={() => navigation.navigate('LoginScreen')}
          />
          <Text>teste de token: {token}</Text>
    </View>
    );
}

export default LogedUserScreen;
