import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth, firestore, googleProvider, facebookProvider } from '../firebase';

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
      <View onClick={signInWithGoogle}>Sign in with Google</View>
      <View onClick={signInWithFacebook}>Sign in with Facebook</View>
    </View>
  )
}