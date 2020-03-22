import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const userAroundScreen = ({ navigation }) => {
  const developersAround = useSelector(state => state.developersAround);

return (
    <View>
      {
        developersAround !== undefined ?
        <ScrollView>
          <Text>{developersAround}</Text>
        </ScrollView>
          :
          <Text>erro</Text>
      }
    </View>
    );
}

export default userAroundScreen;
