import React from 'react';
import { View, Text, Button } from 'react-native';

const LogedUserScreen = ({ navigation }) => {
return (
    <View>
        <Text>Details Screen</Text>
        <Button
            title="Go to Details... again"
            onPress={() => navigation.navigate('LoginScreen')}
        />
    </View>
    );
}

export default LogedUserScreen;
