import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TrackDetailScreen = () => {
  return (
    <View>
      <Text style={styles.fakeHeader}>TrackDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default TrackDetailScreen;
