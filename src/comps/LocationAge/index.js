import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet} from "react-native";


const styles = StyleSheet.create({ 
  container:{
    flexDirection:"row",
  },
  titlecont: {
    justifyContent:"center",
    height:70,
    width:100,
  },
  description: {
    justifyContent:"center",
  },
});


const LocationAge = ({profile}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titlecont} >
        <Text style={{fontWeight:"bold", fontSize:18}}>Location</Text>
        <Text style={{fontWeight:"bold", fontSize:18}}>Age</Text>
      </View>

      <View  style={styles.description} >
        <Text style={{fontSize:16}}>{profile.city} {profile.province}</Text>
        <Text style={{fontSize:16}}>{profile.age}</Text>
      </View>
    </View>
  );
};

export default LocationAge;
