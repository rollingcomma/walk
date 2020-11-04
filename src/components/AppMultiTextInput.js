import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default AppMultiTextInput = ({
  label,
  inputStyle,
  containerStyle,
  touched,
  error,
  ...props
}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.label}>
        <Text>{label}</Text>
        <Text>Choose up to 3</Text>
      </View>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput} {...props} />
        <TextInput style={styles.textInput} {...props} />
        <TextInput style={styles.textInput} {...props} />
      </View>
      <Text style={styles.errorInput}>{touched && error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  label: {
    width: "20%"
  },
  inputContainer: {
    width: "70%",
    margin: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor:"lightgray",
    marginVertical:5,
    minHeight: 40,
    padding: 10,
    backgroundColor:"white"
  },
  errorInput: { color: "red", fontSize: 12 },
  errorInput: { color: "red", fontSize: 12 },
});