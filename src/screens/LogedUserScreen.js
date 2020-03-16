import React from 'react';
import { View, Text, Button } from 'react-native';

const LogedUserScreen = ({ navigation }) => {
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
    </View>
    );
}

export default LogedUserScreen;
