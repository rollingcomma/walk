
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {  auth, firestore } from '../db/firebase';
import { createUser, findUser } from '../db/DBUtils';
import * as Facebook from 'expo-facebook';
//import * as GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth';

export default Login = ({ navigation }) => {

  const signInWithGoogle = async () => {
    const config = {
      iosClientId: "855049434388-lg44s04igmic2jh4bl3ud1iq4ne3np4m.apps.googleusercontent.com",
      androidClientId: "855049434388-ab84sv7shltutn0vdm7gdd55qrsf5ml5.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    }
    try {
      const {
        type,
        idToken,
        accessToken
      } = await Google.logInAsync(config);
      
      if(type === 'success') {
        const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);
        await auth().signInWithCredential(credential);
        if (auth().currentUser) {
          const currentUser = {
            uid: auth().currentUser.uid,
            username: auth().currentUser.displayName,
            email: auth().currentUser.email,
            photoURL:auth().currentUser.photoURL
          }
          await loginUser(currentUser);
        }
      } else {
        console.log("login failed");
      }
    } catch ({ message }) {
      console.log(`Google Login Error: ${message}`);
    }
  }

  const signInWithFacebook = async () => {
    
    try{
      await Facebook.initializeAsync();
      const {
        type,
        token
      } = await Facebook.logInWithReadPermissionsAsync( {appId: "2719816824957835",
          permissions: ['public_profile'],
        });
      
      if(type === 'success') {
        const credential = auth.FacebookAuthProvider.credential(token);
        //console.log(credential)
        await auth().signInWithCredential(credential);
        if (auth().currentUser) {
          const currentUser = {
            uid: auth().currentUser.uid,
            username: auth().currentUser.displayName,
            email: auth().currentUser.email,
            photoURL:auth().currentUser.photoURL
          }
          await loginUser(currentUser);
        }
      } else {
        console.log("login failed");
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
  }

      
  const loginUser = async (currentUser) => {
    console.log("login user")
    
    const user =  await findUser(currentUser.uid);
    if(user) {
      navigation.navigate("/Home");
    } else {
      const newUser = {
        ...currentUser,
        createdAt: new Date()
      }
      const user = await createUser(newUser);
      navigation.navigate("/Types");
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