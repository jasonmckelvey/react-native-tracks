import React, {useContext} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import {Context as AuthContext} from '../context/AuthContext';

const Header = styled.Text`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin: 48px 0px 48px 0px;
  color: #252a31;
`;
const Wrapper = styled.View`
  padding: 16px;
  flex: 1;
`;
const Safe = styled.SafeAreaView`
  flex: 1;
`;

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);

  return (
    <Wrapper>
      <Safe>
        <Header>AccountScreen</Header>
        <Button title="Sign Out" onPress={signout} />
      </Safe>
    </Wrapper>
  );
};

export default AccountScreen;
