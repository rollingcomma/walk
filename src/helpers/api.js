import {  auth, firestoreApi } from '../db/firebase';
import firebase from "firebase/app"
import { createUser, findUser } from '../db/DBUtils';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';


  export const getGeocode = (addr) => {
    const apiUrl = "https://us1.locationiq.com/v1/search.php?key=pk.f33bfa71b3e78e593c9393e89be850bd&format=json&"
    let query
    if(addr.zip.length === 6 || addr.zip.length === 7)
      query=`postalcode=${encodeURIComponent(addr.zip)}&countrycodes=ca`
    else
      query=`street=${encodeURIComponent(addr.address)}&city=${encodeURIComponent(addr.city)}&state=${encodeURIComponent(addr.province)}&country=canada`
    //const urlEncodedAddr = encodeURIComponent(addr);
    console.log(query)
    return fetch(`${apiUrl}${query}`)
          .then(res => res.json())
          .then(result =>{
            return new firebase.firestore.GeoPoint(parseFloat(result[0].lat), parseFloat(result[0].lon)); 
          })
          .catch(err => {
            console.log("Error convert address to coordinate", err);
          })
  };

