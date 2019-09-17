/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Input} from 'react-native-elements';
import Button from '../components/Button';
import styled from 'styled-components';

const Wrapper = styled.View`
  padding: 16px;
  flex: 1;
`;
const Safe = styled.SafeAreaView`
  flex: 1;
`;
const Header = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin: 48px 0px 48px 0px;
`;

const SignupScreen = ({navigation}) => {
  return (
    <Wrapper>
      <Safe>
        <Header>Sign Up for Track App</Header>
        <Input
          label="Email"
          containerStyle={{
            marginBottom: 24,
            paddingHorizontal: 0,
            height: 50,
          }}
          inputContainerStyle={{
            height: 30,
            flex: 1,
          }}
        />
        <Input
          label="Password"
          containerStyle={{
            marginBottom: 24,
            paddingHorizontal: 0,
            height: 50,
          }}
          inputContainerStyle={{
            height: 30,
            flex: 1,
          }}
        />
        <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
      </Safe>
    </Wrapper>
  );
};

SignupScreen.navigationOptions = {
  header: null,
};

export default SignupScreen;
