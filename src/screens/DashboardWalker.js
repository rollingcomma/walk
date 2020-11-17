import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { getGeocode } from '../helpers/api';
// import Map from "../components/Map";

export default DashboardWalker = () => {
  // const {addr} = route.params;
  // const coords = await getGeocode(addr);
  const coords = {lat:49.24966, lon: -123.11934}
  return(
    <View>
      {/* <Map coords={coords}/>  */}
      <Text>dashboard owner</Text>
    </View>
  )
}