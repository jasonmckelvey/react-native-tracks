import React from 'react';
import Map from '../components/Map';
import styled from 'styled-components';

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

const TrackCreateScreen = () => {
  return (
    <Wrapper>
      <Safe>
        <Header>Create a Track</Header>
        <Map />
      </Safe>
    </Wrapper>
  );
};

export default TrackCreateScreen;
