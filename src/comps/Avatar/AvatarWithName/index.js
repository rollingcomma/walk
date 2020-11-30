import { Row } from "native-base";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import BasicAvatar from "../BasicAvatar";

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
  },
  profileEdit: {
    display:"flex",
    alignItems:"baseline",
    flexDirection:"row",
  },
  text: {
    color: "black",
    fontSize:18,
    paddingTop:10,
    paddingRight:10,
    fontWeight:"bold"
  },
});

const AvatarWithName = ({name, avatarUrl, isVisitor}) => {
  return (
      <View style={styles.container}
      >
       <View style={styles.profileEdit}>
          <BasicAvatar
          image1={avatarUrl}
          width={134}
          height={134}
        />
        { !isVisitor && 
          <TouchableOpacity opPress={() => {
            navigation.navigate("EditProfile");
          }}>
            <Image style={styles.icon}
              source={require('../edit.png')}
            />
          </TouchableOpacity> 
       }
       </View>
        
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