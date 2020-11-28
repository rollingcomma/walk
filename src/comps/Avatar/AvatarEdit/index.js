import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BasicAvatar from "../BasicAvatar";
import { useNavigation } from "@react-navigation/native"

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    
  },
  icon: {
    marginLeft:100
  },
});

const AvatarEdit = ({avatarUrl}) => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}
      >
        <BasicAvatar
        image1={{uri:avatarUrl}}
         width={134}
         height={134}
         />
        <TouchableOpacity opPress={() => {
          navigation.navigate("OwnerEditProfile");
        }}>
          <Image style={styles.icon}
            source={require('../edit.png')}
          />
        </TouchableOpacity> 
         
      </View>
  );
};

AvatarEdit.defaultProps = {
  // text: null,
    image1: null,
    imageedit: null,
};

export default AvatarEdit;