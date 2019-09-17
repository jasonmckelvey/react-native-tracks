import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.fakeHeader}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default TrackListScreen;
