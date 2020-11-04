import React from 'react';
import {  Text, StyleSheet } from 'react-native';

export default AppText = ({ children }) => {
  return(
    <Text style={styles.text}>
      {children}
    </Text>
  )
}

export const AppLabel = ({children}) => {
  return(
    <Text tyle={styles.label}>
      {children}
    </Text>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold"
  } 
})