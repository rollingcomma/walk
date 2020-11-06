import React from 'react';
import {  Text, StyleSheet, Platform } from 'react-native';

export default AppText = ({ textStyle, children }) => {
  return(
    <Text style={[styles.text, textStyle]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: Platform.OS === "android"? "serif":"Helvetica Neue"
  }
})