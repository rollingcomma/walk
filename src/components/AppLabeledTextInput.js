import React from 'react';
import colors from '../styles/colors';
import { 
  StyleSheet, 
  View, 
  TextInput } from 'react-native';
import AppText  from './AppText';

export default AppLabeledTextInput = ({
  label,
  inputStyle,
  containerStyle,
  touched,
  error,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <View style={styles.inputContainer}>
        <AppText textStyle={styles.label}>{label}</AppText>
        <TextInput style={inputStyle} {...props} />
      </View>
      <AppText textStyle={styles.errorInput}>{touched && error}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
  },
  label: {
    width: "20%"
  },
  errorInput: { color: colors.red, fontSize: 12 },
});
