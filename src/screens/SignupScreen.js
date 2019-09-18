import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const Wrapper = styled.View`
  padding: 16px;
  flex: 1;
`;
const Safe = styled.SafeAreaView`
  flex: 1;
`;

const SignupScreen = () => {
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
        <NavLink
          routeName="Signin"
          linkText="Have an account? Sign In instead"
        />
      </Safe>
    </Wrapper>
  );
};

SignupScreen.navigationOptions = {
  header: null,
};

export default SignupScreen;
