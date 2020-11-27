import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Constants from 'expo-constants'; 

export default Screen = ({children}) => {
  return(
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex:1,
    width: Dimensions.get("window").width,
    marginTop: Constants.statusBarHeight,
  }})