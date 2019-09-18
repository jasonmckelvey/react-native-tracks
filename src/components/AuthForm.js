import React, {useState} from 'react';
import Button from '../components/Button';
import FieldInput from '../components/Input';
import styled from 'styled-components';

const Header = styled.Text`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin: 48px 0px 48px 0px;
  color: #252a31;
`;
const Alert = styled.Text`
  font-size: 16px;
  color: red;
`;

const AuthForm = ({headerText, errorMessage, onSubmit, buttonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header>{headerText}</Header>
      <FieldInput label="Email" value={email} onChangeText={setEmail} />
      <FieldInput
        label="Password"
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? <Alert>{errorMessage}</Alert> : null}
      <Button title={buttonText} onPress={() => onSubmit({email, password})} />
    </>
  );
};

export default AuthForm;
