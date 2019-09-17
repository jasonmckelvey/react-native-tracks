import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.fakeHeader}>SignupScreen</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default SignupScreen;
