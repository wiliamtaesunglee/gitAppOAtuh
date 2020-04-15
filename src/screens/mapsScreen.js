import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView /*, {PROVIDER_GOOGLE}*/ from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de mapa</Text>
      <MapView
        //provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default mapsScreen;
