import React, { useEffect, useState } from "react";
import MapView , { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Image } from 'react-native';

export default function Map({style, coords}) {
  const initialRegion = {
    latitude: coords.U || 49.24966 ,
    longitude: coords.k || -123.11934 ,
    latitudeDelta: 0.00522,
    longitudeDelta: 0.00521,
  };
  const [region, setRegion] = useState(initialRegion);

  useEffect(()=>{
    if(!coords) alert("user doesn't have a valid location in record.")
  },[])

    return (
      <MapView 
        style={styles.mapStyle}
        region={region}>
        {
          // coords.lat && coords.lon && 
          <Marker 
            coordinate={{ latitude: region.latitude , longitude: region.longitude }}
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