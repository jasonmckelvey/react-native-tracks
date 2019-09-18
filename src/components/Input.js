/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Input} from 'react-native-elements';

const FieldInput = ({label, value, onChangeText}) => {
  return (
    <Input
      label={label}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      autoCorrect={false}
      containerStyle={{
        marginBottom: 24,
        paddingHorizontal: 0,
        height: 48,
      }}
      inputContainerStyle={{
        borderBottomWidth: 0.5,
        borderColor: '#BAC7D5',
        height: 24,
        flex: 1,
      }}
      labelStyle={{
        fontSize: 12,
        fontWeight: '500',
      }}
    />
  );
};

export default FieldInput;
