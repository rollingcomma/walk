import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Loading from "../../components/Loading";
import DogPhotos from '../../comps/DogPhotos';
import AvatarDogProfile from "../../comps/AvatarForm/AvatarDogProfile";
import { getDogProfile } from "../../db/DBUtils";
import { useUserState } from "../../hook/useUserState";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  AvatarDogProfile: {
    marginBottom:0,
    marginTop:50,
  },
});

const DogProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userState, dispatchUser] = useUserState();
  const [profile, setProfile] = useState(null);

   useEffect(() => {
    
    async function fetchData() {
      const newProfile = await getDogProfile(userState.user.profileId);
      if(newProfile) {
        setProfile(newProfile);
        const newUserState = {...userState};
        newUserState.user.profile = newProfile;
        dispatchUser(newUserState);
      };
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
          <View style={styles.AvatarDogProfile}>
           <AvatarDogProfile profile={profile}/>
          </View>
          
          <DogPhotos/>

        </ScrollView>
        {/* <FooterBar /> */}
      </View>
    );
};

DogProfilePage.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default DogProfilePage;