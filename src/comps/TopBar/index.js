import React from "react";
import { View, Image, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"center",
    height:44,
    borderBottomColor:"#999",
    borderBottomWidth: 1,
    justifyContent:"space-between",
    position:"relative"
  },
  innerCont: {
    
  },
  title: {
    color: "black",
    fontSize:22,
    fontWeight:"bold"
  },
  textLeft: {
    // position:"absolute",
    marginLeft:20,
    color: "black",
    fontSize:16,
    fontWeight:"bold",
  },
  textRight: {
    // position:"absolute",
    marginRight:20,
    color: "#53B7BE",
    fontSize:16,
    fontWeight:"bold"
  },
  leftArrow: {
    position:"absolute",
    marginLeft:20
  },
  leftMessage: {
    position:"absolute",
    marginLeft:55
  },
  rightPlus: {
    position:"absolute",
    // marginRight:30
    marginLeft:-20
  }
});

const TopBar = ({title, text1, text2, imageLeft1, imageLeft2, imageRight1}) => {
  return (
      <View style={styles.container}>
        <View style={styles.innerCont}>
        <Text style={styles.textLeft}>{text1}</Text>
        <Image style={styles.leftArrow}
        source={imageLeft1}/>
        <Image style={styles.leftMessage}
        source={imageLeft2}/>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View>
        <Text style={styles.textRight}>{text2}</Text>
        <Image style={styles.rightPlus}
        source={imageRight1}/>
        </View>
      </View>
  );
};

TopBar.defaultProps = {
    title: null,
    text1: null,
    text2: null,
    // image: require('./leftArrow.png'),
    imageLeft1: null,
    imageLeft2: null,
    imageRight1: null,
};

export default TopBar;