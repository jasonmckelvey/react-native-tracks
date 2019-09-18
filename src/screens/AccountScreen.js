import React, {useContext} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import {Context as AuthContext} from '../context/AuthContext';
import {StyleSheet, View, Text} from 'react-native';

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
        <Text style={styles.fakeHeader}>AccountScreen</Text>
        <Button title="Sign Out" onPress={signout} />
      </Safe>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  fakeHeader: {
    fontSize: 48,
  },
});

export default AccountScreen;
