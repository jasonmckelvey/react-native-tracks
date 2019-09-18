/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {Input} from 'react-native-elements';
import Button from '../components/Button';
import FieldInput from '../components/Input';
import styled from 'styled-components';
import {Context as AuthContext} from '../context/AuthContext';

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
const Alert = styled.Text`
  font-size: 16px;
  color: red;
`;

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <Safe>
        <Header>Sign Up for Track App</Header>
        <FieldInput label="Email" value={email} onChangeText={setEmail} />
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={{
            marginBottom: 24,
            paddingHorizontal: 0,
            height: 48,
          }}
          inputContainerStyle={{
            borderBottomWidth: 0.5,
            borderColor: '#BAC7D5',
            height: 24,
            flex: 1,
          }}
          labelStyle={{
            fontSize: 12,
            fontWeight: '500',
          }}
        />
        {state.errorMessage ? <Alert>{state.errorMessage}</Alert> : null}
        <Button title="Sign Up" onPress={() => signup({email, password})} />
      </Safe>
    </Wrapper>
  );
};

SignupScreen.navigationOptions = {
  header: null,
};

export default SignupScreen;
