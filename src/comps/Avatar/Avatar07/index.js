import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import BasicAvatar from "../BasicAvatar";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red"
  },
  // avatar: {
  //   // position:"absolute",
  //   height:85,
  //   width:85,
  //   borderRadius:50,
  //   // position:"relative"
  // },
  text1: {
    color: "black",
    fontSize:16,
    fontWeight:"bold"
  },
  text2: {
    color: "black",
    fontSize:11
  },
});

const Avatar07 = ({name, image1}) => {
  return (
      <View style={styles.container}
      >
        <BasicAvatar
        image1={image1}
         width={85}
         height={85}
         />
        <Text style={styles.text1}>{name}</Text>
        <Text style={styles.text2}>Certified Walker</Text>
      </View>
  );
};

Avatar07.defaultProps = {
  image1: null,
};

export default Avatar07;