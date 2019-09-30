import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const Map = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    />
  );
};

export default Map;
