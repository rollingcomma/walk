import React, {useState} from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BasicAvatar from "../BasicAvatar";
import CusModal from "../../../components/CusModal";
import ImageUpload from "../../../components/ImageUpload"
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
  text: {
    color: "#53B7BE",
    fontSize:10,
    fontWeight:"bold",
    marginTop:7
  },
});

const Avatar06 = ({avatarUrl, handleImageUpload}) => {
  const [uploadShow, setUploadShow] = useState(false);
  const defaultUrl = require("../../../../assets/defaultProfile.png");
  
  const handleUrlChange = (avatarUrl) =>{
    handleImageUpload(avatarUrl);
    setUploadShow(false);
  }

  const handleModalClose = () => {
    setUploadShow(false);
  }
  return (
      <View style={styles.container}
      >
        <BasicAvatar
          image1={avatarUrl?{uri:avatarUrl}: defaultUrl}
          width={85}
          height={85}
         />
        
          <TouchableOpacity onPress={() => {
            setUploadShow(true);
          }}>
           <Text style={styles.text}>Change Profile Photo</Text>
          </TouchableOpacity> 
       
        <CusModal 
          title="Upload your profile picture" 
          handleModalClose={handleModalClose} 
          modalVisible={uploadShow}>
          <ImageUpload uploadImageOnly handleUrlChange={handleUrlChange} folder="profileImages" />
        </CusModal>
      </View>
  );
};

Avatar06.defaultProps = {
  text: null,
  image1: null,
    // image2: null,
};

export default Avatar06;