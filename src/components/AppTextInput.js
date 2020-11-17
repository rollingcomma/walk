import React from 'react';
import colors from '../styles/colors';
import { 
  StyleSheet, 
  View, 
  TextInput } from 'react-native';
import AppText from './AppText';


export default AppTextInput = ({
  inputStyle,
  containerStyle,
  touched,
  error,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <TextInput style={inputStyle} {...props} />
      <AppText textStyle={styles.errorInput}>{touched && error}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  errorInput: { color: colors.red, fontSize: 12 },
});
