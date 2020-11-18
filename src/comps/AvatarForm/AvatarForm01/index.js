import React from "react";
import { View, Text, StyleSheet} from "react-native";
import BasicAvatar from '../../Avatar/BasicAvatar';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"space-between",
    // width:"100%",
    position:"relative"
  },
  avatar: {
    marginLeft:20
  },
  textcont: {
    alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
    
  },
  text1: {
    color: "black",
    fontSize:22,
    fontWeight:"bold"
  },
  text2: {
    fontSize: 9,
    color: "#53B7BE"
  },

  text3cont: {
    position:"absolute",
    right:30
  },
  text3: {
    fontSize: 10,
    color: "#959494",
    justifyContent:"flex-end",
  },
});

const AvatarForm01 = ({}) => {
  
//   const fontSize = [{ fontSize: size ? size : 16}] ;
//   const widthstyles = [{ width: width ? width : null} , { height: height ? height : 50}] ;
//   const sizestyles = [styles.container, widthstyles];
//   const fontstyle = [styles.text, fontSize];
  
  return (
      <View style={styles.container}>
        <View style={styles.avatar}>
        <BasicAvatar 
        image1={require('../../Avatar/dog1.jpg')}
        width={40}
        height={40}
        />
        </View>
        <View style={styles.textcont}>
        <Text style={styles.text1}>Lucky</Text>
        <Text style={styles.text2}>View Profile</Text>
        </View>
        <View style={styles.text3cont}>
        <Text style={styles.text3}>2hr ago</Text>
        </View>
      </View>
  );
};

AvatarForm01.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarForm01;