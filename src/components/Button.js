import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.TouchableOpacity`
  padding: 16px;
  background-color: #e8edf1;
  margin-top: 8px;
  border-radius: 4px;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 15;
  font-weight: 700;
`;

const Button = ({title, onPress}) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  title: 'Button',
};

Button.proptypes = {
  title: PropTypes.string,
};

export default Button;
