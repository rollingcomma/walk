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

const AvatarWithName = ({name, avatarUrl}) => {
  return (
      <View style={styles.container}
      >
        <BasicAvatar
          image1={avatarUrl}
          width={134}
          height={134}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
  );
};

AvatarWithName.defaultProps = {
  text: null,
  image1: null,
    // image2: null,
};

export default AvatarWithName;