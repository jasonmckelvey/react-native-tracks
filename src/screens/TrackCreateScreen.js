import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TrackCreateScreen = () => {
  return (
    <View>
      <Text style={styles.fakeHeader}>TrackCreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default TrackCreateScreen;
