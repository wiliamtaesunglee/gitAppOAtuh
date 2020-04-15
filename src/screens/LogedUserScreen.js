import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {FETCH_DEVS_AROUND} from '../actions/types';
import ButtonComponent from '../components/Button';

const LogedUserScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);

  const getDevelopersAround = async () => {
    await fetch(
      `https://api.github.com/search/users?q=location:${userData.location}`,
    ).then(r => {
      storeDevsAround(JSON.parse(r._bodyText));
      navigation.navigate('userAroundScreen');
    });
  };

  const mapsScreenNavigate = () => navigation.navigate('mapsScreen');

  const storeDevsAround = developersAround =>
    dispatch({type: FETCH_DEVS_AROUND, developersAround: developersAround});

  const image = {
    uri: userData.avatar_url,
    width: 200,
    height: 200,
    borderRadius: 100,
  };

  return (
    <View>
      <View>
        <Image source={image} />
      </View>
      <Text>{userData.name}</Text>
      <Text>{userData.location}</Text>
      <Text>{userData.bio}</Text>

      <View>
        <ButtonComponent
          title="Developers Around Me"
          func={() => getDevelopersAround()}
        />
      </View>

      <View>
        <ButtonComponent
          title="My Location Map"
          func={() => mapsScreenNavigate()}
        />
      </View>
    </View>
  );
};

export default LogedUserScreen;
