import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert} from "react-native";
//import TopBar from '../../comps/TopBar';
import DogPhotos from '../../comps/DogPhotos';
// import FooterBar from '../../comps/FooterBar';
//import AvatarDogProfile from "../../comps/AvatarForm/AvatarDogProfile";
import BasicButton from "../../comps/WButton/BasicButton";
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import DogLikes from "../../comps/DogLikes";
import DogDislikes from "../../comps/DogDislikes";

//import AddImage from "../../comps/AddImage";
import Popup from "../../comps/Popup";
import { getDogProfile, createRequest } from "../../db/DBUtils";
import { useUserState } from "../../hook/useUserState";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  container:{
    marginTop:20,
    height:"100%"
  },
  AvatarCont: {
    // marginBottom:0,
    // marginTop:10,
    marginLeft:30,
    flexDirection:"row"
  },
  detailcont: {
    justifyContent:"center",
    alignItems:"center",
    marginLeft:20
  },
  name: {
    fontSize:17,
  },
  age: {
    fontSize:16,
    marginBottom:10
  },
  textCont: {
    flexDirection:"row",
    height:140,
    alignItems:"center",
    justifyContent:"center"
  }
});

const DogProfileResultPage = ({route}) => {
  console.log(route.params);
  
  const { profileId } = route.params;
  const [requestBtnVisible, setRequestBtnVisible] = useState(true);
  const [profile, setProfile] = useState(null)
  const [UserState] = useUserState();
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState( "Cute pup, I want to walk him")

   useEffect(() => {
    async function fetchData() {
      const initialProfile = await getDogProfile(profileId);
      if(initialProfile) setProfile(initialProfile);
      if(initialProfile.owner === UserState.user.uid) setRequestBtnVisible(false);
    }
    fetchData();
  },[])

  const handleRequestPress = () => {
    setModalVisible(true);
  }

  const handleSubmit = () => {
    const request = {
      owner:profile.owner,
      walker: UserState.user.uid,
      message: message,
      status: "active",
      createdAt: Date.now()
    }
    if(createRequest(request)) Alert.alert("Thank You", "Your request is sent!");
  }

  const handleModalClose = () => {
    setModalVisible(false);
  }
  const handleMessageChange = (msg) => {
    setMessage(msg)
  }
  return (
    <View style={styles.app}>
      <ScrollView>
        {profile && 
        <View style={styles.container}>
          <View style={styles.AvatarCont}>
            <BasicAvatar
              image1={{uri: profile.avatarUrl}}
              width={137}
              height={137}
            />
            <View style={styles.detailcont}>
              <Text style={styles.name}>{profile.breed}</Text>
              <Text style={styles.age}>age {profile.age}</Text>
              {requestBtnVisible && <BasicButton 
                text="Send Walk Request"  
                backgroundColor= "#38BC64" 
                height={31}
                width={153}
                size={14}
                onPress={handleRequestPress}
              />}
            </View>
          </View>
          <View style={styles.textCont}>
            <DogLikes likes={profile.likes}/>
            <DogDislikes dislikes={profile.dislikes}/>
          </View>
          <DogPhotos/>
        </View>
        }
      </ScrollView>
      <Popup modalVisible={ modalVisible } handleMessageChange={handleMessageChange} handleSubmit={handleSubmit} handleModalClose={handleModalClose} />
    </View>
  );
};

DogProfileResultPage.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default DogProfileResultPage;