import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import Map from "../../components/Map";

const Placeholder = styled.View`
  /* display: flex; */
  width: 358px;
  height: 300px;
  border-radius: 19px;
  background-color: #ffffff;
`;

const styles = StyleSheet.create({ 
  text: {
    justifyContent:"center",
    alignItems:"center",
    fontSize:16,
    marginBottom:10,
    marginLeft:10,
    fontWeight:"bold"
  },
  shadow: {
    shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
  },
  map: {
    width:"100%",
    height:"100%",
    backgroundColor:"#dad"
  }
});


const MapPlaceholder = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <Placeholder style={styles.shadow}>
        <Map />
      </Placeholder>
    </View>
  );
};

MapPlaceholder.defaultProps = {
  text: "Walker Location"
};

export default MapPlaceholder;
