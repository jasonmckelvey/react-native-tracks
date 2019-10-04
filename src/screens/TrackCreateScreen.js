import React, {useEffect, useState} from 'react';
import Map from '../components/Map';
import {requestPermissionsAsync} from 'expo-location';
import styled from 'styled-components';

const Header = styled.Text`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin: 48px 0px 48px 0px;
  color: #252a31;
`;
const Error = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.25px;
  color: #d21c1c;
`;

const Wrapper = styled.View`
  padding: 16px;
  flex: 1;
`;
const Safe = styled.SafeAreaView`
  flex: 1;
`;

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWacthing = async () => {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWacthing();
  }, []);

  return (
    <Wrapper>
      <Safe>
        <Header>Create a Track</Header>
        <Map />
        {err ? <Error>Please enable location services</Error> : null}
      </Safe>
    </Wrapper>
  );
};

export default TrackCreateScreen;
