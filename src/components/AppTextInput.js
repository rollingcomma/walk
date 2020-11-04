import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.textInput} {...props} />
      </View>
      <Text style={styles.errorInput}>{touched && error}</Text>
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
  textInput: {
    borderWidth: 1,
    borderColor:"lightgray",
    margin: 15,
    minHeight: 40,
    width: "70%",
    padding: 10,
    backgroundColor:"white"
  },
  errorInput: { color: "red", fontSize: 12 },
});
