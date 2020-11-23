import React, { useState } from "react";
import MapView , { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Image } from 'react-native';

export default function Map({style}) {
  const initialRegion = {
    latitude: 49.24966 ,
    longitude: -123.11934,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  };
  const [region, setRegion] = useState(initialRegion);

    return (
      <MapView 
        style={styles.mapStyle}
        region={region}>
        {
          // coords.lat && coords.lon && 
          <Marker 
            coordinate={{ latitude: 49.24966 , longitude:-123.11934 }}
            onRegionChangeComplete={region => setRegion(region) }
          >
            <Image source={require("../../assets/paw.png")} style={{height:25, width:25}} />
            </Marker>
        }
      </MapView>
    );
}

const styles = StyleSheet.create({
  mapStyle: {
    flex:1
  },
});