import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";


const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    // position:"relative"
  },
  avatar: {
    // position:"absolute",
    // height:"auto",
    // width:28,
    borderRadius:70,
    
  },
  // text: {
  //   color: "#999",
  //   fontSize:16
  // },
});

const BasicAvatar = ({text, image1, width, height}) => {
  const widthstyles = [{ width: width ? width : 50} , { height: height ? height : 50}] ;
  const sizestyles = [styles.avatar, widthstyles];
  
  return (
      <View style={styles.container}>
        <Image style={sizestyles}
        source={image1} 
        />
      </View>
  );
};

BasicAvatar.defaultProps = {
    // text: null,
    image1: null,
    width: null,
    height: null
};

export default BasicAvatar;