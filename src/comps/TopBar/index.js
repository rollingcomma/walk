import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, onPress} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"center",
    height:54,
    // backgroundColor:"#dad",
    borderBottomColor:"#E8E8E8",
    borderBottomWidth: 2,
    justifyContent:"space-between",
    position:"relative"
  },
  innerCont: {
    
  },
  title: {
    // position:"absolute",
    // marginLeft:170,
    color: "black",
    fontSize:22,
    fontWeight:"bold",
    alignItems:"center"
  },
  textLeft: {
    // position:"absolute",
    marginLeft:20,
    color: "black",
    fontSize:16,
    // fontWeight:"bold",
    color:"red"
  },
  textRight: {
    marginRight:20,
    color: "#53B7BE",
    fontSize:16,
    fontWeight:"bold"
  },
  leftArrow: {
    position:"absolute",
    marginLeft:20,
    bottom:1
  },
  leftMessage: {
    position:"absolute",
    marginLeft:55,
    bottom:1
  },
  rightPlus: {
    position:"absolute",
    // marginRight:30
    marginLeft:-20,
    top:4
  }
});

const TopBar = ({title, text1, text2, imageLeft1, imageLeft2, imageRight1}) => {
  return (
      <View style={styles.container}>
        <View style={styles.innerCont}>
        
        <TouchableOpacity 
        style={styles.textLeft}
        onPress={onPress}>
        <Text>{text1}</Text>
        </TouchableOpacity>

        
        <TouchableOpacity  
        style={styles.leftArrow} 
        onPress={onPress}>
        <Image
        source={imageLeft1}/>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.leftMessage}
        onPress={onPress}>
        <Image
        source={imageLeft2}/>
        </TouchableOpacity>

        </View>


        <Text style={styles.title}>{title}</Text>
        <View>
          
        <TouchableOpacity >
        <Text 
        style={styles.textRight}
        onPress={() => {
          alert("Send picture in the chat");
          }}>
          {text2}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.rightPlus}
        onPress={onPress}>
        <Image
        source={imageRight1}/>
        </TouchableOpacity>
        </View>

      </View>
  );
};

TopBar.defaultProps = {
    title: null,
    text1: null,
    text2: null,
    imageLeft1: null,
    imageLeft2: null,
    imageRight1: null,
};

export default TopBar;