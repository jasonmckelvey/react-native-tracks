import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.fakeHeader}>SigninScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default SigninScreen;
