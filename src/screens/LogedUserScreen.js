import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_DEVS_AROUND } from '../actions/types';

const LogedUserScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);

  const getDevelopersAround = async () => {
    await fetch(`https://api.github.com/search/users?q=location:${userData.location}`)
          .then(r => {
            storeDevsAround(r._bodyText);
            navigation.navigate('userAroundScreen');
          })
  };

  const storeDevsAround = (developersAround) => {
    dispatch({
      type: FETCH_DEVS_AROUND,
      developersAround: developersAround
    });
  }

return (
    <View>
        <Button
            title="Go to Developers List"
            onPress={() => getDevelopersAround()}
          />
        <Button
            title="Go back to login screen"
            onPress={() => navigation.navigate('LoginScreen')}
          />
          {
            userData.length > 0 ? <Text>{userData}</Text> : <Text>erro</Text>
          }
    </View>
    );
}

export default LogedUserScreen;
