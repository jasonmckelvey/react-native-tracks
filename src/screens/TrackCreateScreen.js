import '../_mockLocation';
import React, {useEffect, useState, useContext} from 'react';
import Map from '../components/Map';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import styled from 'styled-components';
import {Context as LocationContext} from '../context/LocationContext';

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
  const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWacthing = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          addLocation(location);
        },
      );
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
