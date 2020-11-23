import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default Login = ({navigation}) => {

  
  
  return (
    <View >
      <Button 
        title="Sign in with Google"
        onPress={signInWithGoogle} />
      <Button
        title="Sign in with Facebook" 
        onPress={signInWithFacebook} />
    </View>
  )
}