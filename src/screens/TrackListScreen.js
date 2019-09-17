import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TrackListScreen = () => {
  return (
    <View>
      <Text style={styles.fakeHeader}>TrackListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default TrackListScreen;
