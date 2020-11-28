import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
//import TopBar from '../../comps/TopBar';
import DogPhotos from '../../comps/DogPhotos';
// import FooterBar from '../../comps/FooterBar';
//import AvatarDogProfile from "../../comps/AvatarForm/AvatarDogProfile";
import BasicButton from "../../comps/WButton/BasicButton";
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import DogLikes from "../../comps/DogLikes";
import DogDislikes from "../../comps/DogDislikes";
//import AddImage from "../../comps/AddImage";
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
  const { profileId } = route.params;
  const [profile, setProfile] = useState(null)
  const [UserState] = useUserState();
   useEffect(() => {
    async function fetchData() {
      profile = await getDogProfile(profileId);
      console.log(profile);
      if(profile) setProfile(profile);
    }
    fetchData();
  },[])

  const handleRequestPress = (message) => {
    const request = {
      owner:profile.owner,
      walker: UserState.user.uid,
      message: message,
      status: "active",
      createdAt: Date.now()
    }
    createRequest(request);
  }
  return (
    <View style={styles.app}>
      <ScrollView>
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
              <BasicButton 
                text="Send Walk Request"  
                backgroundColor= "#38BC64" 
                height={31}
                width={153}
                size={14}
                onPress={handleRequestPress}
              />
            </View>
          </View>
          <View style={styles.textCont}>
            <DogLikes likes={profile.likes}/>
            <DogDislikes dislikes={profile.dislikes}/>
          </View>
          <DogPhotos/>
        </View>
      </ScrollView>
    </View>
  );
};

DogProfileResultPage.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default DogProfileResultPage;