import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SignupScreen = () => {
  return (
    <View>
      <Text style={styles.fakeHeader}>SignupScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default SignupScreen;
