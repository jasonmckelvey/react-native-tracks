import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  margin: 16px;
`;

const Spacer = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Spacer;
