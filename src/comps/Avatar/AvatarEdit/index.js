import React, { useState } from "react";
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

const AvatarEdit = ({avatarUrl, isVisitor, handleImageUpload}) => {
  console.log("avatar", isVisitor);
  const navigation = useNavigation();
  const [uploadShow, setUploadShow] = useState(false);
  const defaultUrl = require("../../../../assets/defaultProfile.png");
  
  const handleUrlChange = (avatarUrl) =>{
    handleImageUpload(avatarUrl);
    setUploadShow(false);
  }
  return (
      <View style={styles.container}
      >
        <BasicAvatar
          image1={avatarUrl?{uri:avatarUrl}:defaultUrl}
          width={134}
          height={134}
        />
        { !isVisitor && 
          <TouchableOpacity opPress={() => {
            setUploadShow(true);
          }}>
            <Image style={styles.icon}
              source={require('../edit.png')}
            />
          </TouchableOpacity> 
       }
        {uploadShow && <ImageUpload text="Upload your profile picture" handleUrlChange={handleUrlChange} folder="profileImages" />}
      </View>
  );
};

AvatarEdit.defaultProps = {
  // text: null,
    image1: null,
    imageedit: null,
};

export default AvatarEdit;