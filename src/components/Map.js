import React, { useEffect, useState } from "react";
import MapView , { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { useUserState } from "../hook/useUserState";
export default function Map({style, coords}) {
  const initialRegion = {
    latitude: coords.U || 49.24966 ,
    longitude: coords.k || -123.11934 ,
    latitudeDelta: 0.00522,
    longitudeDelta: 0.00521,
  };
  const [region, setRegion] = useState(initialRegion);
  const [userState] = useUserState();
  const image = userState.user.type=="dog owner"? (require("../../assets/walker-map-marker.png")):(require("../../assets/owner-map-marker.png"))
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
            <Image source={image} style={{height:25, width:25}} />
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