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
  //   height:134,
  //   width:134,
  //   borderRadius:70,
  //   // position:"relative"
  // },
  text: {
    color: "black",
    fontSize:18,
    fontWeight:"bold"
    
  },
});

const AvatarWithName = ({text, image1}) => {
  return (
      <View style={styles.container}
      >
        <BasicAvatar
        image1={require('../face2.jpg')}
         width={134}
         height={134}
         />
        <Text style={styles.text}>{text}</Text>
      </View>
  );
};

AvatarWithName.defaultProps = {
  text: null,
  image1: null,
    // image2: null,
};

export default AvatarWithName;