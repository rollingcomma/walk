import React, { useState } from "react";
import MapView , { Marker } from 'react-native-maps';
import { StyleSheet, Text, Dimensions, Image } from 'react-native';

export default function Map() {
  const initialRegion = {
    latitude: 49.24966 ,
    longitude: -123.11934,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [region, setRegion] = useState(initialRegion);

    return (
      // <Text>Map test</Text>
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

// image={require("../../assets/paw.png")}
// onRegionChangeComplete={region => setRegion(region) }
const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});