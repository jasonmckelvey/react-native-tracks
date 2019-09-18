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

const SigninScreen = () => {
  const {state, signin} = useContext(AuthContext);

  return (
    <Wrapper>
      <Safe>
        <AuthForm
          headerText="Sign in to Track App"
          errorMessage={state.errorMessage}
          buttonText="Sign In"
          onSubmit={signin}
        />
        <NavLink
          routeName="Signup"
          linkText="Don't have an account? Sign Up instead"
        />
      </Safe>
    </Wrapper>
  );
};

SigninScreen.navigationOptions = {
  header: null,
};

export default SigninScreen;
