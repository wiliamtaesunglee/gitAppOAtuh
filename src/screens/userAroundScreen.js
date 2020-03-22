import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const userAroundScreen = ({ navigation }) => {
  const developersAround = useSelector(state => state.developersAround);

return (
    <View>
      {
        developersAround.length > 0 ?
          <Text>{developersAround}</Text>
          :
          <Text>erro</Text>
      }
    </View>
    );
}

export default userAroundScreen;
