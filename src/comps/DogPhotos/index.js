import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      // flexDirection: "row",
      backgroundColor:"#DADADA",
      height:310,
      alignItems:"center",
      justifyContent:"center",
      display:"flex"
    },
    view: {
        flex:10,
        justifyContent:"center"
    },
    dotcont: {
        flex:1,
        justifyContent:"flex-end",
        marginBottom:10,
        flexDirection:"row",
    },
    dots: {
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:"#50555C",
        justifyContent:"flex-end",
        marginRight:10
    },
  
  });

const DogPhotos = () => {
  return (
    <View  style={styles.container}>
      <View style={styles.view}>
        <Text>No posts yet</Text>
        </View>
        <View style={styles.dotcont}>
        <View style={styles.dots}></View>
        <View style={styles.dots}></View>
        <View style={styles.dots}></View>
        
        </View>
      
    </View>
  );
};

export default DogPhotos;
