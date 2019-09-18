import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Wrapper = styled.View`
  padding: 16px;
  flex: 1;
`;
const LinkWrapper = styled.TouchableOpacity`
  margin-top: 24px;
  align-items: center;
`;
const Safe = styled.SafeAreaView`
  flex: 1;
`;
const Link = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #0172cb;
`;

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);

  return (
    <Wrapper>
      <Safe>
        <AuthForm
          headerText="Sign Up for Track App"
          errorMessage={state.errorMessage}
          buttonText="Sign Up"
          onSubmit={signup}
        />
        <LinkWrapper onPress={() => navigation.navigate('Signin')}>
          <Link>Have an account? Sign In instead.</Link>
        </LinkWrapper>
      </Safe>
    </Wrapper>
  );
};

SignupScreen.navigationOptions = {
  header: null,
};

export default SignupScreen;
