import {  auth, firestore } from '../db/firebase';
import { createUser, findUser } from '../db/DBUtils';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export const signInWithGoogle = async () => {
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
          // await loginUser(currentUser);
        }
      } else {
        console.log("login failed");
      }
    } catch ({ message }) {
      console.log(`Google Login Error: ${message}`);
    }
  }

  export const signInWithFacebook = async () => {
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
  };

  export const directUser = async () => {
    console.log("direct user")
    const user =  await findUser(auth().currentUser.uid);
    if(user) {
      navigation.navigate("/Home", {user: user});
    } else {
      const newUser = {
        ...currentUser,
        createdAt: new Date()
      }
      const user = await createUser(newUser);
      navigation.navigate("/Types");
    }
  };

  export const getGeocode = (addr) => {
    const apiUrl = "https://us1.locationiq.com/v1/search.php?key=pk.f33bfa71b3e78e593c9393e89be850bd&format=json&q="
    const urlEncodedAddr = encodeURIComponent(addr);
    return fetch(`${apiUrl}${urlEncodedAddr}`)
          .then(res => res.json())
          .then(result =>{
            const data = JSON.parse(result);
            console.log("coords", data);
            return {"lat":data[0].lat, "lon":data[0].lon}; 
          })
          .catch(err => {
            console.log("Error convert address to coordinate", err);
          })
  };

