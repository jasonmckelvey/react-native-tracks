import React from 'react';
import styled from 'styled-components';
import {withNavigation} from 'react-navigation';

const LinkWrapper = styled.TouchableOpacity`
  margin-top: 24px;
  align-items: center;
`;
const Link = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #0172cb;
`;

const NavLink = ({navigation, linkText, routeName}) => {
  return (
    <LinkWrapper onPress={() => navigation.navigate(routeName)}>
      <Link>{linkText}</Link>
    </LinkWrapper>
  );
};

NavLink.navigationOptions = {
  header: null,
};

export default withNavigation(NavLink);
