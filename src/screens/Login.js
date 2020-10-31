
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { auth, firestore, googleProvider, facebookProvider } from '../db/firebase';


export default SignIn = () => {

  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    if (auth.currentUser) {
      history.push("/profile");
    }
  }

  const signInWithFacebook = async () => {
    await auth.signInWithPopup(facebookProvider);
    if (auth.currentUser) {
      history.push("/profile");
    }
  }

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