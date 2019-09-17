import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.fakeHeader}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default AccountScreen;
