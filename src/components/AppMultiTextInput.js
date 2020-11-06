import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Heading from '../components/Heading';
import AppText from '../components/AppText';

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
        <Heading>{label}</Heading>
        <AppText>Choose up to 3</AppText>
      </View>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput} {...props} />
        <TextInput style={styles.textInput} {...props} />
        <TextInput style={styles.textInput} {...props} />
      </View>
      <AppText textStyle={styles.errorInput}>{touched && error}</AppText>
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