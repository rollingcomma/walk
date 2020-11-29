import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert} from "react-native";
import Loading from "../../components/Loading";
import DogPhotos from '../../comps/DogPhotos';
import BasicButton from "../../comps/WButton/BasicButton";
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import DogLikes from "../../comps/DogLikes";
import DogDislikes from "../../comps/DogDislikes";
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
  const [isLoading, setIsLoading] = useState(true);
  const { profileId } = route.params;
  //const [requestBtnVisible, setRequestBtnVisible] = useState(true);
  const [profile, setProfile] = useState(null)
  const [userState] = useUserState();
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState( "Cute pup, I want to walk him")

  const handleRequestPress = () => {
    setModalVisible(true);
  }

  const handleSubmit = () => {
    if( !message ) {
      alert("message can't be empty");
      return
    }
    const request = {
      owner: profile.owner,
      ownerName: profile.name,
      ownerAvatarUrl: profile.avatarUrl,
      walker: userState.user.uid,
      walkerName: userState.user.username,
      walkerAvatarUrl: userState.user.avatarUrl,
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
  
   useEffect(() => {
    async function fetchData() {
      const initialProfile = await getDogProfile(profileId);
      if(initialProfile) setProfile(initialProfile);
      //if(initialProfile.owner === UserState.user.uid) setRequestBtnVisible(false);
      setIsLoading(false);
    }
    fetchData();
    
  },[])

  return isLoading? 
    (
      <Loading />
    ) 
    : 
   (
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
              {userState && userState.user.type == "walker" && <BasicButton 
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