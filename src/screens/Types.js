
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { auth, firestore, googleProvider, facebookProvider } from '../db/firebase';
import { findUser } from '../db/DBUtils'

export default Types = ({ navigation }) => {
  return (
    <View >
      <Button 
        title="Dog Owner"
        onPress={() => navigation.navigate("NewOwner")} />
      <Button
        title="Walker " 
        onPress={() => navigation.navigate("NewWalker")}/>
    </View>
  )
}