/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Input} from 'react-native-elements';

const FieldInput = ({label, value, onChangeText, secure}) => {
  return (
    <Input
      label={label}
      value={value}
      secureTextEntry={secure}
      onChangeText={onChangeText}
      autoCapitalize="none"
      autoCorrect={false}
      containerStyle={{
        // borderWidth: 1,
        marginBottom: 24,
        paddingHorizontal: 0,
        height: 40,
      }}
      inputContainerStyle={{
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#BAC7D5',
        height: 24,
      }}
      labelStyle={{
        // borderWidth: 1,
        fontSize: 12,
        fontWeight: '400',
        color: '#5F738C',
      }}
    />
  );
};

export default FieldInput;
