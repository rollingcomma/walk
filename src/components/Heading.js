import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { useFont } from 'expo-font';

export default Heading = ({headingStyle, children}) => {
  return(
    <Text style={[styles.heading, headingStyle]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontFamily: Platform.OS === "android"? "Roboto":"Gill Sans"
  } 
})