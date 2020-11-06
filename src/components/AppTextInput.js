import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AppText from '../components/AppText';
import colors from './colors';

export default AppTextInput = ({
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
