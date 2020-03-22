import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_DEVS_AROUND } from '../actions/types';
import ButtonComponent from '../components/Button';

const LogedUserScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);

  const getDevelopersAround = async () => {
    await fetch(`https://api.github.com/search/users?q=location:${userData.location}`)
          .then(r => {
            storeDevsAround(JSON.parse(r._bodyText));
            navigation.navigate('userAroundScreen');
          })
  };

  const storeDevsAround = (developersAround) => {
    dispatch({
      type: FETCH_DEVS_AROUND,
      developersAround: developersAround
    });
  }

const image = {
  uri: userData.avatar_url,
  width: 200,
  height: 200,
  borderRadius: 100
}

return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={image}
        />
      </View>
      <Text style={styles.text}>{userData.name}</Text>
      <Text style={styles.text}>{userData.location}</Text>
      <Text style={styles.text}>{userData.bio}</Text>

      <View style={styles.buttonContainer}>
        <ButtonComponent
          title="Developers Around Me"
          func={() => getDevelopersAround()}
        />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    borderRadius: 50,
    width: 200,
    height: 200
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 5
  },
  buttonContainer: {
    marginTop: 20
  }
});

export default LogedUserScreen;
